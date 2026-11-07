// 百度搜索资源平台 - 主动推送脚本
// 用法：
//   BAIDU_TOKEN=你的token node scripts/baidu-push.mjs
//   或： node scripts/baidu-push.mjs --token=你的token
//
// 作用：读取 sitemap.xml 里的全部 <loc> URL，主动 POST 给百度，
// 弥补境外/无备案站点被百度抓取慢的短板，加速收录。
//
// 获取 token：百度搜索资源平台(ziyuan.baidu.com) → 站点 → 链接提交 → 右侧"接口调用地址"里的 token。

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://pixconvert.cn';

// 1) 取 token：优先 --token=，其次环境变量 BAIDU_TOKEN
const argToken = process.argv.find((a) => a.startsWith('--token='))?.split('=')[1];
const token = argToken || process.env.BAIDU_TOKEN;
if (!token) {
  console.error('✗ 未提供百度 token。用法：BAIDU_TOKEN=xxx node scripts/baidu-push.mjs');
  process.exit(1);
}

// 2) 读取 sitemap（优先已提交的源码 public/，回退到构建产物 dist/）
const candidates = [
  resolve(__dirname, '../public/sitemap.xml'),
  resolve(__dirname, '../dist/sitemap.xml'),
];
const sitemapPath = candidates.find((p) => {
  try { readFileSync(p); return true; } catch { return false; }
});
if (!sitemapPath) {
  console.error('✗ 找不到 sitemap.xml（public/ 或 dist/ 下都没有）。请先 build。');
  process.exit(1);
}

const xml = readFileSync(sitemapPath, 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);
if (urls.length === 0) {
  console.error('✗ sitemap 里没有解析到任何 <loc> URL。');
  process.exit(1);
}
console.log(`✓ 从 ${sitemapPath} 解析到 ${urls.length} 个 URL，准备推送...\n`);

// 3) 推送给百度
const endpoint = `http://data.zz.baidu.com/urls?site=${encodeURIComponent(SITE)}&token=${encodeURIComponent(token)}`;
try {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: urls.join('\n'),
  });
  const text = await res.text();
  console.log(`百度接口返回 HTTP ${res.status}：`);
  console.log(text);
  // 百度成功时返回 {"remain":4999999,"success":18}；失败返回 {"error":code,"message":"..."}
} catch (err) {
  console.error('✗ 推送请求失败：', err.message);
  process.exit(1);
}
