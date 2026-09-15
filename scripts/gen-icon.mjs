// PixConvert 品牌 favicon 生成器
// 依据品牌 logo 重绘：深色圆角底 + 白色 P 字 + 橙色环绕转换箭头
// 用法: node scripts/gen-icon.mjs
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const PUB = resolve(ROOT, 'public');

// ------- 可调参数（512 画布）-------
const P = {
  bg: '#1C222F',        // 深色底（取样自品牌图）
  white: '#F7F6F1',     // P 字暖白
  orange: '#F8751F',    // 品牌橙
  rx: 112,              // 圆角半径
  // P 字
  stemX: 128, stemW: 78, stemTop: 106, stemBottom: 392,
  bowlC: [274, 212], bowlR: 70.5, bowlW: 55, // 环描边 → 覆盖 43..98，孔更大更接近参考图
  // 箭头色带（衬在 P 后方，与碗缘留细缝）
  bandR: 128, bandW: 56,                     // 覆盖 100..156
  tailDeg: -52,                              // 尾端角（1 点钟方向，直切）
  endDeg: 90,                                // 色带收尾角（终点藏进箭头三角内部）
  // 箭头三角（竖直底边，tip 指向笔画留缝）
  tip: [218, 340], baseTop: [276, 310], baseBottom: [276, 396],
};
const rad = (d) => (d * Math.PI) / 180;
const pt = (deg, r) => [
  +(P.bowlC[0] + r * Math.cos(rad(deg))).toFixed(2),
  +(P.bowlC[1] + r * Math.sin(rad(deg))).toFixed(2),
];

// 弧线路径（SVG y 向下，角度顺时针）
const a0 = pt(P.tailDeg, P.bandR), a1 = pt(P.endDeg, P.bandR);
const largeArc = P.endDeg - P.tailDeg > 180 ? 1 : 0;
const arcPath = `M ${a0[0]} ${a0[1]} A ${P.bandR} ${P.bandR} 0 ${largeArc} 1 ${a1[0]} ${a1[1]}`;

const headPath = `M ${P.tip[0]} ${P.tip[1]} L ${P.baseTop[0]} ${P.baseTop[1]} L ${P.baseBottom[0]} ${P.baseBottom[1]} Z`;

const svg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="${P.rx}" fill="${P.bg}"/>
  <!-- 转换箭头（衬在 P 后方） -->
  <path d="${arcPath}" stroke="${P.orange}" stroke-width="${P.bandW}" fill="none"/>
  <path d="${headPath}" fill="${P.orange}"/>
  <!-- P 字形 -->
  <rect x="${P.stemX}" y="${P.stemTop}" width="${P.stemW}" height="${P.stemBottom - P.stemTop}" fill="${P.white}"/>
  <circle cx="${P.bowlC[0]}" cy="${P.bowlC[1]}" r="${P.bowlR}" stroke="${P.white}" stroke-width="${P.bowlW}"/>
</svg>
`;

writeFileSync(resolve(PUB, 'favicon.svg'), svg);
console.log('favicon.svg 写入完成');

// ------- 多尺寸光栅化 -------
const base = sharp(Buffer.from(svg), { density: 384 }).resize(512, 512);
const png512 = await base.clone().resize(512, 512).png().toBuffer();
await base.clone().resize(192, 192).png().toFile(resolve(PUB, 'icon-192.png'));
await base.clone().resize(180, 180).png().toFile(resolve(PUB, 'apple-touch-icon.png'));
await base.clone().resize(32, 32).png().toFile(resolve(PUB, 'favicon-32.png'));
writeFileSync(resolve(PUB, 'icon-512.png'), png512);

// favicon.ico（16/32/48）
const ico = await pngToIco([
  await base.clone().resize(16, 16).png().toBuffer(),
  await base.clone().resize(32, 32).png().toBuffer(),
  await base.clone().resize(48, 48).png().toBuffer(),
]);
writeFileSync(resolve(PUB, 'favicon.ico'), ico);
console.log('PNG/ICO 全部生成完成');

// ------- OG 分享图（1200×630，品牌深底 + 图标 + 字标）-------
const mark = svg.replace('width="512" height="512"', 'width="300" height="300"'); // 显式尺寸避免铺满
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${P.bg}"/>
  <g transform="translate(120,180)">${mark}</g>
  <text x="470" y="395" font-family="Arial, 'Segoe UI', 'Helvetica Neue', sans-serif" font-size="135" font-weight="700" fill="${P.white}">PixConvert</text>
  <text x="473" y="470" font-family="Arial, 'Segoe UI', 'Helvetica Neue', sans-serif" font-size="44" font-weight="400" fill="#8B93A3">Free Online Image Converter</text>
</svg>`;
await sharp(Buffer.from(ogSvg), { density: 144 }).resize(1200, 630).png().toFile(resolve(PUB, 'og-image.png'));
console.log('og-image.png 生成完成');
