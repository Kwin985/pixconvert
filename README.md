# PixConvert

> Free, open-source, 100% browser-side image format converter.
> 免费、开源、纯浏览器端的图片格式转换工具。

网站 / Website: <https://pixconvert.cn>

GitHub: <https://github.com/Kwin985/pixconvert>

## ✨ 功能特性 / Features

- **多格式互转 / Multi-format conversion** — WebP、AVIF、JPG、PNG、HEIC、SVG 任意互转
- **批量处理 / Batch processing** — 一次性拖入多张图片批量转换，支持一键下载 ZIP
- **质量调节 / Quality control** — 自定义压缩质量，平衡体积与画质
- **100% 浏览器端 / 100% browser-side** — 图片不会上传到服务器，隐私零泄露
- **多语言 / 10 languages** — 中文、英语、日语、法语、德语、西班牙语、葡萄牙语、俄语、越南语、阿拉伯语
- **格式对比 / Format comparison** — 并排滑块对比 WebP / AVIF / 原图，直观选最佳格式
- **桌面版 / Desktop app** — 提供 Windows 原生安装包，离线可用、系统集成

## 🚀 技术栈 / Tech Stack

- React 18 + TypeScript + Vite 6
- Tailwind CSS 3 + Framer Motion
- Zustand（状态管理）
- Dexie.js（IndexedDB 本地缓存）
- JSZip（批量打包下载）
- i18next + react-i18next（国际化）
- Tauri（桌面版打包）

## 🌐 为什么不同 / Why it's different

与多数需要上传图片到服务器的在线转换工具不同，PixConvert 的全部转换都在用户浏览器内完成：

- 🔒 **隐私优先** — 图片永不离开你的设备
- ⚡ **零等待上传** — 大图也能秒转
- 🆓 **完全免费** — 无注册、无水印、无文件大小限制

## 📦 本地开发 / Local Development

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建产物
```

## 🖥️ 桌面版下载 / Desktop App

Windows 安装包可在 [网站首页](https://pixconvert.cn) 的「Desktop App」区域下载，或前往 [Releases](https://github.com/Kwin985/pixconvert/releases) 页面获取。

## 💖 支持 PixConvert 开发 / Support the Author

本工具完全免费开源。如果 PixConvert 对你有帮助，欢迎赞助作者继续维护与开发：

[![爱发电](https://img.shields.io/badge/爱发电-支持作者-946ce6?style=for-the-badge)](https://afdian.com/a/pixconvert)

- 🇨🇳 国内用户 / Domestic: <https://afdian.com/a/pixconvert>

> 本项目 PixConvert 开源托管于 GitHub，README 中放置本人爱发电主页链接，证明账号归属。

## 📄 License

MIT License © PixConvert
