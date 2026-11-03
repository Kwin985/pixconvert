/**
 * Build-time prerendering for PixConvert (CRA->Vite SPA).
 * Serves dist/ locally, renders each route in headless Chrome (local install,
 * via puppeteer-core - no Chromium download needed), and writes the fully
 * rendered HTML (head meta + body content) to dist/<route>/index.html so that
 * crawlers (esp. Baidu, which does not execute JS) receive real content.
 */
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));

const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const ROUTES = [
  '/',
  '/compare',
  '/faq',
  '/to-webp',
  '/to-avif',
  '/to-jpg',
  '/to-png',
  '/to-svg',
  '/jpg-to-webp',
  '/png-to-webp',
  '/webp-to-jpg',
  '/webp-to-png',
  '/jpg-to-avif',
  '/png-to-avif',
  '/avif-to-jpg',
  '/avif-to-png',
  '/jpg-to-png',
  '/png-to-jpg',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.exe': 'application/octet-stream',
};

function findBrowser() {
  for (const p of CHROME_CANDIDATES) {
    if (existsSync(p)) return p;
  }
  throw new Error('No local Chrome/Edge found for prerendering');
}

function startStaticServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let filePath = normalize(join(DIST, urlPath));
    if (!filePath.startsWith(normalize(DIST))) {
      res.writeHead(403);
      return res.end('Forbidden');
    }
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, 'index.html');
    }
    if (!existsSync(filePath)) {
      // SPA fallback: unknown paths get index.html; the router renders the page
      filePath = join(DIST, 'index.html');
    }
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(readFileSync(filePath));
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function renderRoute(page, url) {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 }).catch(() => {});
  // Wait for the app to mount
  await page.waitForSelector('#root > *', { timeout: 20000 }).catch(() => {});
  // Auto-scroll through the page to trigger whileInView animations so that
  // prerendered HTML does not contain opacity:0 hidden content
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 600));
  return page.content();
}

function outputPathFor(route) {
  const rel = route === '/' ? 'index.html' : join(route.replace(/^\//, ''), 'index.html');
  return join(DIST, rel);
}

/** Post-process the serialized DOM before saving. */
function cleanHtml(html) {
  // Strip babel-plugin-react-dev-locator debug attributes (paranoia: plugin
  // is disabled for production builds, but strip anyway in case it regresses)
  html = html.replace(/\s+trae-inspector-[\w-]+="[^"]*"/g, '');
  // index.html ships a static fallback <meta name="description">; react-helmet
  // appends its own per-route description instead of replacing the static one.
  // Keep only helmet's version (it ends with data-rh="true").
  html = html.replace(/<meta name="description" content="[^"]*">/g, '');
  return html;
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('dist/index.html not found - run "vite build" first');
    process.exit(1);
  }
  const browserPath = findBrowser();
  const { server, port } = await startStaticServer();
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--lang=en-US'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 2000 });
  // Block analytics/pollution and speed up loading
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const u = req.url();
    if (u.includes('googletagmanager.com') || u.includes('google-analytics.com')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  let ok = 0;
  for (const route of ROUTES) {
    try {
      const html = cleanHtml(await renderRoute(page, `${base}${route}`));
      const out = outputPathFor(route);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, html, 'utf8');
      const textLen = (html.match(/<div id="root">/) ? html.length : 0);
      console.log(`  prerendered ${route} -> ${out} (${html.length} bytes)`);
      ok++;
    } catch (err) {
      console.error(`  FAILED ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`Prerender complete: ${ok}/${ROUTES.length} routes`);
  if (ok < ROUTES.length) process.exit(1);
}

main();
