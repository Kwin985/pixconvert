import type { OutputFormat } from '@/types';

export interface PairContent {
  title: string;
  description: string;
  h1: string;
  badge: string;
  intro: string[];
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  stepsTitle: string;
  steps: { name: string; text: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  relatedTitle: string;
}

export interface ConversionPair {
  slug: string;
  from: string;
  to: string;
  outputFormat: OutputFormat;
  en: PairContent;
  zh: PairContent;
}

export const CONVERSION_PAIRS: ConversionPair[] = [
  {
    slug: 'jpg-to-webp',
    from: 'JPG',
    to: 'WebP',
    outputFormat: 'webp',
    en: {
      title: 'Convert JPG to WebP Online Free - Smaller Files, Same Quality | PixConvert',
      description:
        'Convert JPG to WebP free in your browser. WebP files are 25-34% smaller than JPG with the same visual quality. Batch conversion, no uploads, no watermark.',
      h1: 'JPG to WebP Converter',
      badge: 'Free · No Uploads',
      intro: [
        'Converting JPG to WebP is the fastest way to make your website load quicker without sacrificing image quality. WebP is Google\'s modern image format that produces files 25-34% smaller than comparable JPG images, which means less bandwidth, faster page loads, and better Core Web Vitals scores. Since 2020 every major browser - Chrome, Firefox, Safari, and Edge - supports WebP, so there is no longer any compatibility reason to stick with JPG for web images.',
        'With PixConvert you can convert as many JPG files to WebP as you want, entirely inside your browser. Your photos are processed locally with HTML5 Canvas and never uploaded to any server, so private images stay private. Drag your files in, let the quality slider guide you (80 is the sweet spot for most photos), and download the results individually or as a ZIP archive.',
      ],
      benefitsTitle: 'Why convert JPG to WebP?',
      benefits: [
        { title: '25-34% smaller files', text: 'At the same visual quality, WebP typically cuts JPG file sizes by a quarter to a third. On an image-heavy page that alone can save hundreds of kilobytes per visitor.' },
        { title: 'Better SEO and Core Web Vitals', text: 'Google uses LCP as a ranking signal. Serving WebP instead of JPG directly reduces LCP on image-led pages, which is one of the easiest performance wins available.' },
        { title: 'Transparency and animation support', text: 'Unlike JPG, WebP supports an alpha channel (transparency) and animation, so one format can replace both JPG and GIF across your site.' },
        { title: 'Universal browser support', text: 'Safari 14+, Chrome, Firefox, and Edge all decode WebP. For websites there are no practical compatibility concerns left.' },
      ],
      stepsTitle: 'How to convert JPG to WebP',
      steps: [
        { name: 'Add your JPG files', text: 'Drag and drop your JPG images into the upload area, or click to browse. Batch upload is supported - select as many files as you need.' },
        { name: 'Choose WebP as the output', text: 'The output format is preset to WebP on this page. Optionally adjust the quality slider or pick a preset such as Balanced or Max Quality.' },
        { name: 'Preview the result', text: 'Use the slider comparison to inspect the converted WebP next to the original JPG before committing. Resize options are available if needed.' },
        { name: 'Download', text: 'Download files one by one, or click "Download All (ZIP)" to grab every converted WebP in a single archive. Nothing was ever uploaded.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is converting JPG to WebP lossless?', a: 'No - both JPG and WebP use lossy compression by default, so converting from JPG to WebP re-encodes the image. In practice, at quality 80+ the visual difference is imperceptible while the file gets significantly smaller. If you need pixel-perfect output, use the lossless mode in the settings panel.' },
        { q: 'Will my images be uploaded to a server?', a: 'No. PixConvert performs the entire conversion inside your browser using Canvas and WebCodecs. Your files never leave your device, which makes it safe for private or confidential images.' },
        { q: 'What quality setting should I use for WebP?', a: 'For photos and general web images, quality 80 is the sweet spot between size and quality. Use 90+ for hero images or portfolios, and the Extreme Compression preset when file size matters more than fidelity, e.g. thumbnails.' },
        { q: 'Can I convert many JPG files at once?', a: 'Yes. PixConvert is built for batch conversion - drop an entire folder of JPGs and every file is converted automatically. Download everything together as a ZIP.' },
        { q: 'Does WebP work everywhere JPG does?', a: 'All modern browsers support WebP. A few older desktop applications (some legacy photo editors and older versions of Windows Photo Viewer) may not open WebP, in which case keep the original JPG for those workflows.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'JPG 转 WebP - 在线免费转换，体积更小画质不变 | PixConvert',
      description: '在浏览器中免费将 JPG 转换为 WebP。同等画质下 WebP 比 JPG 小 25-34%，支持批量转换，文件不上传服务器，无水印。',
      h1: 'JPG 转 WebP 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        '把 JPG 转成 WebP 是让网站加载更快、又不损失画质的最简单方法。WebP 是 Google 推出的现代图片格式，同等视觉质量下文件体积比 JPG 小 25-34%，直接节省带宽、加快页面加载、提升 Core Web Vitals 得分。自 2020 年起，Chrome、Firefox、Safari、Edge 等主流浏览器已全部支持 WebP，网页图片已没有理由继续停留在 JPG。',
        '使用 PixConvert，你可以在浏览器里批量把 JPG 转成 WebP，全过程在本地完成，图片不会上传到任何服务器，私密照片也安全无忧。拖入文件，参考画质滑块（80 是大多数照片的最佳平衡点），转换完成后可逐个下载或打包成 ZIP 一次下载。',
      ],
      benefitsTitle: '为什么把 JPG 转成 WebP？',
      benefits: [
        { title: '体积缩小 25-34%', text: '同等画质下，WebP 通常能比 JPG 减小四分之一到三分之一的体积。对图片较多的页面来说，仅此一项就能为每位访客节省数百 KB 流量。' },
        { title: 'SEO 与核心网页指标更优', text: 'Google 将 LCP（最大内容绘制）作为排名信号。用 WebP 替代 JPG 可以直接缩短图片型页面的 LCP，是最容易见效的性能优化之一。' },
        { title: '支持透明与动画', text: '与 JPG 不同，WebP 支持 alpha 透明通道和动画，一个格式即可同时替代 JPG 和 GIF。' },
        { title: '所有主流浏览器都支持', text: 'Safari 14+、Chrome、Firefox、Edge 均可解码 WebP，网页场景已不存在兼容性障碍。' },
      ],
      stepsTitle: 'JPG 转 WebP 的步骤',
      steps: [
        { name: '添加 JPG 文件', text: '把 JPG 图片拖拽到上传区域，或点击选择文件。支持批量上传，一次可选任意多张。' },
        { name: '选择 WebP 输出', text: '本页已默认锁定 WebP 输出。可按需调节画质滑块，或选择「均衡」「最高画质」等预设。' },
        { name: '预览转换效果', text: '通过滑块对比查看转换后的 WebP 与原 JPG 的差异，确认无误。如有需要还可调整尺寸。' },
        { name: '下载', text: '可逐个下载，或点击「下载全部 (ZIP)」打包下载所有 WebP 文件。全程没有任何文件被上传。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'JPG 转 WebP 是无损的吗？', a: '不是。JPG 和 WebP 默认都是有损压缩，转换过程会重新编码。但在画质 80 以上，肉眼几乎无法分辨差异，而文件体积会明显变小。如需像素级无损，可在设置面板选择「无损」模式。' },
        { q: '我的图片会被上传到服务器吗？', a: '不会。PixConvert 的全部转换都在你的浏览器内通过 Canvas 和 WebCodecs 完成，文件始终留在你的设备上，处理私密或涉密图片也很安全。' },
        { q: 'WebP 画质参数该设多少？', a: '照片和一般网页图片建议 80，是体积与画质的最佳平衡点；首页大图或作品集建议 90 以上；缩略图等更看重体积的场景可用「极限压缩」预设。' },
        { q: '可以一次转换多张 JPG 吗？', a: '可以。PixConvert 专为批量转换设计——把整个文件夹的 JPG 拖进来即可，所有文件自动转换，最后打包成 ZIP 一次下载。' },
        { q: 'WebP 在哪里都能用吗？', a: '所有现代浏览器都支持 WebP。少数老旧桌面软件（如旧版图片查看器、部分老牌修图软件）可能无法打开 WebP，这类场景建议保留原 JPG。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'png-to-webp',
    from: 'PNG',
    to: 'WebP',
    outputFormat: 'webp',
    en: {
      title: 'Convert PNG to WebP Online Free - Up to 26% Smaller | PixConvert',
      description:
        'Convert PNG to WebP free in your browser. WebP lossless is up to 26% smaller than PNG, and lossy WebP is even smaller. Batch conversion, no uploads.',
      h1: 'PNG to WebP Converter',
      badge: 'Free · No Uploads',
      intro: [
        'PNG files are loved for their lossless compression and transparency support, but they are often huge - screenshots and UI graphics can easily reach several megabytes. Converting PNG to WebP shrinks those files dramatically: WebP lossless is up to 26% smaller than PNG for the same pixels, and if you can accept a tiny, invisible quality trade-off, lossy WebP with alpha is smaller still.',
        'PixConvert converts PNG to WebP entirely in your browser. There is no upload step, no queue, and no file size sign-up wall - drag in a single logo or a hundred screenshots and get optimized WebP files in seconds. Transparency is preserved automatically, so rounded corners, shadows, and icon alpha channels survive the conversion intact.',
      ],
      benefitsTitle: 'Why convert PNG to WebP?',
      benefits: [
        { title: 'Up to 26% smaller, losslessly', text: 'WebP lossless beats PNG on virtually every image. If you ship lots of screenshots, diagrams, or UI assets, the savings add up fast across a documentation site or app bundle.' },
        { title: 'Transparency preserved', text: 'WebP supports the same alpha channel as PNG. Icons, logos, and cut-outs keep their transparent backgrounds after conversion.' },
        { title: 'Faster sites and apps', text: 'Replacing PNG assets with WebP reduces page weight and app bundle size with zero visual change - one of the cheapest performance optimizations available.' },
        { title: 'Lossy option for maximum savings', text: 'Need even smaller files? Switch to lossy mode with alpha support to shrink PNG-style graphics by 60-90% while keeping edges clean.' },
      ],
      stepsTitle: 'How to convert PNG to WebP',
      steps: [
        { name: 'Upload your PNG files', text: 'Drag and drop one or more PNG images, or click the upload area to select files. Batch conversion of entire sets is supported.' },
        { name: 'Confirm WebP output and mode', text: 'WebP is preselected. Choose lossless mode to keep the image pixel-identical, or lossy mode with a high quality value for the smallest possible file.' },
        { name: 'Check transparency in the preview', text: 'The comparison slider shows the original next to the converted result, so you can confirm alpha edges and fine details look right.' },
        { name: 'Download your WebP files', text: 'Save individual files or get everything at once as a ZIP archive. All processing happened locally in your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does PNG to WebP conversion keep transparency?', a: 'Yes. WebP fully supports the alpha channel, so transparent backgrounds in logos, icons, and cut-out graphics are preserved exactly. Lossless mode is bit-exact; lossy mode keeps clean alpha edges with slightly higher compression.' },
        { q: 'Is WebP really smaller than PNG?', a: 'Google\'s benchmarks put WebP lossless at about 26% smaller than PNG on average. For lossy conversion of screenshots and interface graphics the reduction is often far larger - frequently 60-90%.' },
        { q: 'Should I use lossless or lossy mode?', a: 'Use lossless when the PNG contains text, thin lines, or exact colors that must not shift - for example technical diagrams. Use lossy (quality 80-90) for photographs or soft-edged graphics where small compression artifacts are invisible.' },
        { q: 'Will WebP images work in Photoshop and other editors?', a: 'Recent versions of Photoshop, GIMP, Figma, and all major design tools open WebP natively. Very old software may need a plugin, in which case keep the original PNG as your editing master.' },
        { q: 'Is there a file limit or upload wait?', a: 'There is no server and therefore no upload wait at all - conversion speed depends only on your device. Batch-convert hundreds of PNGs without creating an account.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'PNG 转 WebP - 在线免费转换，最多省 26% 体积 | PixConvert',
      description: '在浏览器中免费将 PNG 转换为 WebP。无损模式比 PNG 小最多 26%，有损模式更小，完整保留透明通道，批量转换，文件不上传。',
      h1: 'PNG 转 WebP 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'PNG 以无损压缩和透明支持著称，但体积往往很大——截图和 UI 素材动辄好几 MB。把 PNG 转成 WebP 可以大幅瘦身：同样像素下，WebP 无损比 PNG 小最多 26%；如果能接受肉眼不可见的微小画质取舍，带透明通道的有损 WebP 还能更小。',
        'PixConvert 的 PNG 转 WebP 全程在浏览器内完成：没有上传排队，没有注册门槛，没有体积限制。无论是单个 logo 还是一百张截图，几秒钟即可得到优化后的 WebP。透明背景自动保留，圆角、阴影、图标的 alpha 通道原样无损。',
      ],
      benefitsTitle: '为什么把 PNG 转成 WebP？',
      benefits: [
        { title: '无损也小 26%', text: '几乎所有图片上，WebP 无损都比 PNG 更小。如果你的文档站或应用里大量使用截图、图表、UI 素材，累计节省非常可观。' },
        { title: '透明通道完整保留', text: 'WebP 支持与 PNG 相同的 alpha 通道，图标、logo、抠图转换后依旧保持透明背景。' },
        { title: '网站和应用更快', text: '用 WebP 替换 PNG 素材，在视觉零变化的前提下降低页面体积和安装包大小，是最划算的性能优化之一。' },
        { title: '有损模式极限压缩', text: '需要更小？切换到支持透明的有损模式，PNG 类图形可缩小 60-90%，边缘依然干净。' },
      ],
      stepsTitle: 'PNG 转 WebP 的步骤',
      steps: [
        { name: '上传 PNG 文件', text: '拖拽一张或多张 PNG 到上传区域，或点击选择文件。支持整套素材批量转换。' },
        { name: '确认 WebP 输出与模式', text: '本页已默认 WebP。选择「无损」可保持像素级一致；选择「有损」并调高画质可获得最小体积。' },
        { name: '在预览中检查透明效果', text: '对比滑块并排显示原图与转换结果，确认 alpha 边缘和细节符合预期。' },
        { name: '下载 WebP 文件', text: '逐个保存或打包成 ZIP 一次下载。全部处理都在你的浏览器本地完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'PNG 转 WebP 会保留透明背景吗？', a: '会。WebP 完整支持 alpha 通道，logo、图标、抠图的透明背景原样保留。无损模式逐位精确；有损模式在更高压缩率下仍保持干净的透明边缘。' },
        { q: 'WebP 真的比 PNG 小吗？', a: 'Google 的基准测试显示 WebP 无损平均比 PNG 小约 26%。对截图和界面图形做有损转换时，缩减幅度通常更大，常见 60-90%。' },
        { q: '该选无损还是有损？', a: 'PNG 里有文字、细线或不能偏移的精确色彩（如技术图表）时选无损；照片和软边缘图形选有损（画质 80-90），压缩痕迹不可见且体积更小。' },
        { q: 'Photoshop 等软件能打开 WebP 吗？', a: '新版 Photoshop、GIMP、Figma 及主流设计工具都已原生支持 WebP。很老的软件可能需要插件，这种情况请保留原 PNG 作为编辑母版。' },
        { q: '有文件数量限制或上传等待吗？', a: '没有服务器参与，因此不存在上传等待——速度只取决于你的设备。无需注册即可批量转换数百张 PNG。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'webp-to-jpg',
    from: 'WebP',
    to: 'JPG',
    outputFormat: 'jpg',
    en: {
      title: 'Convert WebP to JPG Online Free - Full Compatibility | PixConvert',
      description:
        'Convert WebP to JPG free in your browser. Fix compatibility with older apps, CMS platforms, and printers. Batch conversion, quality control, no uploads.',
      h1: 'WebP to JPG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'WebP is great for the web, but not every tool speaks it yet. Older photo editors, some content management systems, certain Android gallery apps, online forms, and photo printing services still reject .webp files. Converting WebP to JPG gives you maximum compatibility: JPG opens everywhere, from 20-year-old software to the printer around the corner.',
        'PixConvert converts WebP to JPG right inside your browser - the files are decoded and re-encoded locally, never uploaded. You control the quality with a simple slider (90+ keeps images visually identical), and batch conversion handles entire folders of WebP images in one pass. Transparent areas in WebP files are flattened onto white or a background color of your choice, since JPG does not support transparency.',
      ],
      benefitsTitle: 'Why convert WebP to JPG?',
      benefits: [
        { title: 'Opens everywhere', text: 'JPG remains the most universally supported image format on earth - every operating system, browser, editor, CMS, social network, and print shop handles it.' },
        { title: 'Fix upload rejections', text: 'Many websites and forms still whitelist only JPG/PNG. Convert your WebP files here and upload them anywhere without errors.' },
        { title: 'Adjustable quality', text: 'Choose quality 95+ for near-identical output, or lower values when file size matters more. The live preview shows the result before you download.' },
        { title: 'Batch processing', text: 'Convert an entire library of WebP images in one go and download everything as a single ZIP archive.' },
      ],
      stepsTitle: 'How to convert WebP to JPG',
      steps: [
        { name: 'Drop in your WebP files', text: 'Drag your .webp images into the upload area or click to select them. You can add as many files as you like.' },
        { name: 'JPG output is preselected', text: 'This page locks the output format to JPG. Set the quality slider - 90 or above is recommended to avoid visible compression artifacts.' },
        { name: 'Preview before saving', text: 'Compare the converted JPG against the original WebP with the slider view, and resize if the target platform has dimension limits.' },
        { name: 'Download as files or ZIP', text: 'Download each JPG individually or grab the whole batch as a ZIP. Your originals were never uploaded anywhere.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Will converting WebP to JPG lose quality?', a: 'Some re-compression is unavoidable since JPG is lossy, but at quality 90+ the difference is visually imperceptible. If you want minimal loss, set quality to 95-100; if you want smaller files for sharing, 80-85 works well.' },
        { q: 'What happens to transparency in the WebP file?', a: 'JPG has no alpha channel, so transparent areas are flattened to a solid background (white by default). If you need to keep transparency, convert to PNG instead.' },
        { q: 'Why do some websites refuse WebP uploads?', a: 'Many platforms still validate uploads against a fixed list of formats that predates WebP\'s adoption. Until they update, converting to JPG is the quickest workaround.' },
        { q: 'Can I convert animated WebP files?', a: 'PixConvert converts the first frame of an animated WebP to a static JPG. For the full animation you need GIF or video output, which is a different tool.' },
        { q: 'Are my WebP files uploaded to your server?', a: 'Never. Conversion runs entirely in your browser via Canvas. The files stay on your device from start to finish.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'WebP 转 JPG - 在线免费转换，全平台兼容 | PixConvert',
      description: '在浏览器中免费将 WebP 转换为 JPG。解决老软件、CMS、打印店的兼容问题，支持批量转换和画质调节，文件不上传。',
      h1: 'WebP 转 JPG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'WebP 很适合网页，但并非所有工具都认识它：老旧的修图软件、部分内容管理系统（CMS）、某些安卓相册、在线表单和照片打印店仍会拒绝 .webp 文件。把 WebP 转成 JPG 可以获得最大兼容性——从二十年前的软件到街边打印店，JPG 处处能打开。',
        'PixConvert 的 WebP 转 JPG 直接在浏览器内完成：解码和重新编码都在本地进行，文件绝不上传。画质由滑块控制（90 以上肉眼不可分辨），还支持批量转换整个文件夹。由于 JPG 不支持透明，WebP 中的透明区域会自动平铺为白色或你指定的背景色。',
      ],
      benefitsTitle: '为什么把 WebP 转成 JPG？',
      benefits: [
        { title: '处处能打开', text: 'JPG 仍是全球兼容性最强的图片格式——所有操作系统、浏览器、编辑器、CMS、社交平台和打印店都支持。' },
        { title: '解决上传被拒', text: '很多网站和表单仍只允许 JPG/PNG 上传。在这里转成 JPG，即可无报错上传到任何平台。' },
        { title: '画质可调', text: '画质 95 以上几乎与原图一致；更在意体积可适当调低。下载前可用实时预览确认效果。' },
        { title: '批量处理', text: '一次转换整个 WebP 图库，全部打包成 ZIP 下载。' },
      ],
      stepsTitle: 'WebP 转 JPG 的步骤',
      steps: [
        { name: '拖入 WebP 文件', text: '把 .webp 图片拖到上传区域，或点击选择文件，数量不限。' },
        { name: 'JPG 已默认选中', text: '本页已锁定 JPG 输出。调节画质滑块——建议 90 或以上，避免可见压缩痕迹。' },
        { name: '保存前预览', text: '用滑块对比转换后的 JPG 与原 WebP，如目标平台有尺寸限制可顺便调整尺寸。' },
        { name: '下载文件或 ZIP', text: '逐个下载 JPG，或整批打包为 ZIP。原图从未被上传到任何地方。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'WebP 转 JPG 会损失画质吗？', a: 'JPG 是有损压缩，重新编码不可避免，但画质 90 以上时肉眼几乎无法分辨。想尽量减少损失可设 95-100；想得到更小的分享体积，80-85 即可。' },
        { q: 'WebP 里的透明区域怎么办？', a: 'JPG 没有 alpha 通道，透明区域会被平铺为纯色背景（默认白色）。如需保留透明，请改用 PNG 输出。' },
        { q: '为什么有些网站拒绝 WebP 上传？', a: '许多平台的上传校验仍是 WebP 普及前的固定格式白名单。在他们更新之前，转成 JPG 是最快的解决办法。' },
        { q: '动态 WebP 能转吗？', a: 'PixConvert 会把动态 WebP 的第一帧转为静态 JPG。需要完整动画请使用 GIF 或视频输出工具。' },
        { q: '我的 WebP 文件会被上传吗？', a: '绝不会。转换完全在浏览器内通过 Canvas 完成，文件从始至终留在你的设备上。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'webp-to-png',
    from: 'WebP',
    to: 'PNG',
    outputFormat: 'png',
    en: {
      title: 'Convert WebP to PNG Online Free - Lossless & Transparent | PixConvert',
      description:
        'Convert WebP to PNG free in your browser. Lossless output, transparency preserved, perfect for editing workflows. Batch conversion, no uploads.',
      h1: 'WebP to PNG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'Need to edit a WebP image, keep its transparency, or hand it to a tool that only accepts PNG? Converting WebP to PNG gives you a fully lossless, universally editable file. PNG is the standard interchange format for design tools, screenshots, and pixel-accurate work, and every editor from MS Paint to Photoshop opens it without plugins.',
        'PixConvert\'s WebP to PNG converter runs 100% in your browser. Drop in one file or a hundred, and each is decoded and re-encoded locally in seconds. Transparency is preserved exactly, so icons, logos, and cut-outs keep their alpha channel. Because PNG is lossless, there are no quality settings to worry about - the pixels you get are the pixels that were there.',
      ],
      benefitsTitle: 'Why convert WebP to PNG?',
      benefits: [
        { title: 'Truly lossless', text: 'PNG stores every pixel exactly. Converting WebP to PNG introduces zero additional quality loss, making it ideal as an intermediate step before editing.' },
        { title: 'Transparency kept', text: 'Alpha channels are transferred 1:1. Semi-transparent shadows and anti-aliased edges in WebP remain identical in the PNG output.' },
        { title: 'Editable anywhere', text: 'PNG is accepted by every image editor, office suite, and design tool. It is the safest format to hand to collaborators or downstream tools.' },
        { title: 'Batch-friendly', text: 'Queue up entire folders of WebP files and download all converted PNGs together as a ZIP archive.' },
      ],
      stepsTitle: 'How to convert WebP to PNG',
      steps: [
        { name: 'Add WebP files', text: 'Drag and drop your .webp images or click the upload area to browse. Multiple files are welcome - they will be queued automatically.' },
        { name: 'PNG is preselected', text: 'The output format is locked to PNG on this page. Optionally resize the images if you need smaller dimensions.' },
        { name: 'Verify in the preview', text: 'Use the before/after slider to check the conversion. Since PNG is lossless, the images should look identical to the source.' },
        { name: 'Download', text: 'Save individual PNGs or download the full batch as a ZIP. All processing happened on your device.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is WebP to PNG conversion lossless?', a: 'The conversion itself is lossless - PNG stores the decoded pixels exactly. The only caveat is if the source WebP was saved with heavy lossy compression, those artifacts are already in the image and will be preserved, not created.' },
        { q: 'Will the PNG file be bigger than the WebP?', a: 'Almost certainly yes - that is the trade-off. PNG\'s lossless compression is less efficient than WebP. Expect 2-10x larger files, which is the price of universal editability and pixel-exact output.' },
        { q: 'Does transparency survive the conversion?', a: 'Yes, fully. The alpha channel is copied unchanged, so transparent and semi-transparent regions are identical in the PNG.' },
        { q: 'Why would I choose PNG over JPG for a WebP conversion?', a: 'Choose PNG when you need transparency, exact colors (screenshots, UI, diagrams), or plan to edit and re-save repeatedly - JPG degrades with every re-save, PNG does not.' },
        { q: 'Do I need to install anything?', a: 'No. PixConvert works entirely in your browser with no installs, accounts, or uploads. Just open the page and drop your files.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'WebP 转 PNG - 在线免费转换，无损保留透明 | PixConvert',
      description: '在浏览器中免费将 WebP 转换为 PNG。无损输出、透明通道完整保留，适合进入编辑流程，支持批量转换，文件不上传。',
      h1: 'WebP 转 PNG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        '需要编辑 WebP 图片、保留它的透明背景，或交给只认 PNG 的工具？把 WebP 转成 PNG 即可得到完全无损、处处可编辑的文件。PNG 是设计工具、截图和像素级工作的标准交换格式，从画图到 Photoshop，所有编辑器无需插件即可打开。',
        'PixConvert 的 WebP 转 PNG 100% 在浏览器内运行：拖入一个或一百个文件，每个都在本地几秒内完成解码和编码。透明通道 1:1 保留，图标、logo、抠图的 alpha 通道原样无损。PNG 是无损格式，无需纠结画质参数——你得到的像素就是原来的像素。',
      ],
      benefitsTitle: '为什么把 WebP 转成 PNG？',
      benefits: [
        { title: '真正的无损', text: 'PNG 逐像素精确存储。转成 PNG 不会引入任何额外画质损失，是进入编辑流程前的理想中间格式。' },
        { title: '透明完整保留', text: 'alpha 通道原样迁移。WebP 中的半透明阴影和抗锯齿边缘在 PNG 输出中保持一致。' },
        { title: '随处可编辑', text: '所有图像编辑器、办公软件和设计工具都接受 PNG，是交给协作者或下游工具最稳妥的格式。' },
        { title: '批量友好', text: '整批 WebP 文件排队自动转换，转换后的 PNG 打包成 ZIP 一次下载。' },
      ],
      stepsTitle: 'WebP 转 PNG 的步骤',
      steps: [
        { name: '添加 WebP 文件', text: '拖拽 .webp 图片到上传区域，或点击浏览选择。支持多文件，自动排队处理。' },
        { name: 'PNG 已默认选中', text: '本页已锁定 PNG 输出。如需更小尺寸可顺便调整图片尺寸。' },
        { name: '在预览中确认', text: '用前后对比滑块检查转换结果。PNG 是无损格式，画面应与源文件完全一致。' },
        { name: '下载', text: '逐个保存 PNG，或整批打包为 ZIP。所有处理都在你的设备上完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'WebP 转 PNG 是无损的吗？', a: '转换本身是无损的——PNG 会精确存储解码后的像素。唯一需要注意的是：如果源 WebP 本身经过高压缩，那些瑕疵已经在图像里，会被原样保留而不是新产生。' },
        { q: 'PNG 会比 WebP 大很多吗？', a: '几乎必然会大——这正是权衡所在。PNG 的无损压缩效率不如 WebP，体积通常大 2-10 倍，这是换取普遍可编辑性和像素级精确输出的代价。' },
        { q: '转换后透明还在吗？', a: '在，完整保留。alpha 通道原样复制，PNG 中的透明与半透明区域和源文件完全一致。' },
        { q: 'WebP 转换该选 PNG 还是 JPG？', a: '需要透明、精确色彩（截图、UI、图表），或打算反复编辑重存时选 PNG——JPG 每次重存都会劣化，PNG 不会。' },
        { q: '需要安装什么软件吗？', a: '不需要。PixConvert 完全在浏览器中运行，无安装、无账号、无上传，打开页面拖入文件即可。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'jpg-to-avif',
    from: 'JPG',
    to: 'AVIF',
    outputFormat: 'avif',
    en: {
      title: 'Convert JPG to AVIF Online Free - 50% Smaller Images | PixConvert',
      description:
        'Convert JPG to AVIF free in your browser. AVIF is ~50% smaller than JPG at the same quality - the most efficient image format today. No uploads.',
      h1: 'JPG to AVIF Converter',
      badge: 'Free · No Uploads',
      intro: [
        'AVIF (AV1 Image File Format) is the most efficient image format in mainstream use today. Convert a JPG to AVIF and you can typically cut the file size by around 50% at visually identical quality - roughly twice the saving of WebP. For a website serving thousands of images, switching from JPG to AVIF can halve your image bandwidth overnight.',
        'PixConvert encodes AVIF entirely in your browser using WebCodecs, so nothing is uploaded and conversion is instant. Batch-convert your JPG library, fine-tune quality with the slider, and compare results with the before/after preview. All modern browsers - Chrome, Firefox, Safari 16+, Edge - decode AVIF, making it a safe default for web delivery in 2026.',
      ],
      benefitsTitle: 'Why convert JPG to AVIF?',
      benefits: [
        { title: 'About 50% smaller than JPG', text: 'AV1\'s codec efficiency far exceeds JPEG\'s 30-year-old algorithm. At the same visual quality, AVIF files are routinely half the size.' },
        { title: 'Better than WebP compression', text: 'AVIF beats even WebP by a wide margin at low and medium bitrates, and supports HDR, 10/12-bit color, and wide gamut - features JPG cannot represent at all.' },
        { title: 'Core Web Vitals boost', text: 'Smaller hero images mean faster LCP. AVIF is the single most effective format change you can make for page speed today.' },
        { title: 'Local, private, instant', text: 'Encoding happens on your device with no server round-trip. Private photos stay private, and there is no queue or upload limit.' },
      ],
      stepsTitle: 'How to convert JPG to AVIF',
      steps: [
        { name: 'Upload your JPG images', text: 'Drag and drop JPG files or click to browse. Batch upload as many images as you need - every file is processed automatically.' },
        { name: 'AVIF output is preselected', text: 'Set quality via the slider or presets. Around quality 50-60, AVIF already matches or exceeds the visual quality of a quality-80 JPG.' },
        { name: 'Compare with the preview', text: 'The slider comparison shows original and converted side by side. AVIF\'s efficiency means you can usually lower quality further than with WebP.' },
        { name: 'Download', text: 'Save files individually or as a ZIP archive. Conversion happened entirely in your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is AVIF really smaller than WebP?', a: 'Yes, generally by 20-30% at equivalent quality, and the gap widens at lower bitrates. If maximum compression is the goal, AVIF is the current best choice; WebP remains a strong fallback.' },
        { q: 'Which browsers support AVIF?', a: 'Chrome 85+, Firefox 93+, Edge, Opera, and Safari 16+ all decode AVIF. As of 2026 that covers well over 95% of global browser usage.' },
        { q: 'Why does AVIF encoding take longer than WebP?', a: 'AV1 compression is computationally heavier. In-browser encoding uses hardware acceleration where available; on older devices expect a few seconds per image. Batch conversion runs each file automatically.' },
        { q: 'Does converting JPG to AVIF lose quality?', a: 'Both formats are lossy, so a re-encode happens, but AVIF\'s modern codec preserves detail much better per byte. At moderate quality settings the output is typically indistinguishable from the source.' },
        { q: 'Is there a size limit per image?', a: 'No server-side limits exist because no server is involved. Practical limits come from your device memory - images of tens of megapixels convert fine on a typical laptop.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'JPG 转 AVIF - 在线免费转换，体积再省 50% | PixConvert',
      description: '在浏览器中免费将 JPG 转换为 AVIF。同等画质下 AVIF 比 JPG 小约 50%，是当前最高效的图片格式，批量转换，文件不上传。',
      h1: 'JPG 转 AVIF 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'AVIF（AV1 图像文件格式）是当前主流格式中压缩效率最高的。把 JPG 转成 AVIF，在肉眼无差的前提下通常可再省约 50% 体积——大约是 WebP 节省幅度的两倍。对动辄上千张图片的网站来说，从 JPG 切换到 AVIF，图片带宽一夜之间就能减半。',
        'PixConvert 使用 WebCodecs 在浏览器内直接编码 AVIF：没有任何上传，转换即时完成。批量转换整个 JPG 图库，用滑块微调画质，通过前后对比预览确认效果。Chrome、Firefox、Safari 16+、Edge 等现代浏览器均已支持 AVIF，2026 年用它做网页图片已是安全默认项。',
      ],
      benefitsTitle: '为什么把 JPG 转成 AVIF？',
      benefits: [
        { title: '比 JPG 小约 50%', text: 'AV1 编码效率远超 JPEG 三十年前的算法。同等视觉质量下，AVIF 文件通常只有 JPG 的一半大小。' },
        { title: '压缩率胜过 WebP', text: '在中低码率下 AVIF 大幅领先 WebP，还支持 HDR、10/12-bit 色深和广色域——这些 JPG 完全无法表达。' },
        { title: '提升核心网页指标', text: '首图更小意味着 LCP 更快。AVIF 是当下对页面速度见效最明显的格式升级。' },
        { title: '本地、私密、即时', text: '编码在你的设备上完成，无服务器往返。私密照片不外泄，也没有排队和上传限制。' },
      ],
      stepsTitle: 'JPG 转 AVIF 的步骤',
      steps: [
        { name: '上传 JPG 图片', text: '拖拽 JPG 文件或点击浏览选择。支持批量上传任意数量，全部自动处理。' },
        { name: 'AVIF 已默认选中', text: '用滑块或预设调节画质。画质 50-60 时，AVIF 已能达到甚至超过画质 80 的 JPG 的视觉质量。' },
        { name: '用预览对比', text: '对比滑块并排显示原图与转换结果。AVIF 效率高，画质参数通常可以比 WebP 压得更低。' },
        { name: '下载', text: '逐个保存或打包成 ZIP。转换全程在浏览器内完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'AVIF 真的比 WebP 小吗？', a: '是的，同等画质下一般再小 20-30%，低码率时差距更大。追求极致压缩选 AVIF；WebP 仍是可靠备选。' },
        { q: '哪些浏览器支持 AVIF？', a: 'Chrome 85+、Firefox 93+、Edge、Opera、Safari 16+ 均可解码 AVIF，截至 2026 年已覆盖全球 95% 以上的浏览器使用量。' },
        { q: 'AVIF 编码为什么比 WebP 慢？', a: 'AV1 压缩计算量更大。浏览器内编码在支持硬件加速的设备上会自动启用；老旧设备每张图可能需要几秒钟，批量转换会自动逐个处理。' },
        { q: 'JPG 转 AVIF 会损失画质吗？', a: '两者都是有损格式，重新编码不可避免，但 AVIF 的新编码器每字节保留的细节多得多。中等画质设置下，输出通常与源文件难以分辨。' },
        { q: '单张图片有大小限制吗？', a: '没有服务器参与，因此没有服务端限制。实际限制来自设备内存——普通笔记本处理几十兆像素的图片都没问题。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'png-to-avif',
    from: 'PNG',
    to: 'AVIF',
    outputFormat: 'avif',
    en: {
      title: 'Convert PNG to AVIF Online Free - Lossless Compression | PixConvert',
      description:
        'Convert PNG to AVIF free in your browser. AVIF lossless beats PNG compression, and lossy AVIF shrinks graphics dramatically. Transparency supported.',
      h1: 'PNG to AVIF Converter',
      badge: 'Free · No Uploads',
      intro: [
        'PNG graphics - screenshots, icons, diagrams, logos - are often the heaviest assets on a page. Converting them to AVIF delivers huge savings: AVIF lossless consistently out-compresses PNG, and lossy AVIF can shrink graphic content by 70-90% while keeping text and edges razor sharp. AVIF also supports full alpha transparency, so your cut-outs and overlays keep their clean edges.',
        'PixConvert converts PNG to AVIF locally in your browser. There is no upload, no account, and no watermark - drag in your files, choose lossless or lossy mode, and download the results. The comparison preview lets you verify that fine text and thin lines survive compression before you commit.',
      ],
      benefitsTitle: 'Why convert PNG to AVIF?',
      benefits: [
        { title: 'Lossless that beats PNG', text: 'In lossless mode AVIF packs the same pixels into a smaller file than PNG, typically 10-30% smaller. Zero visual change, pure savings.' },
        { title: 'Dramatic lossy savings', text: 'For screenshots and UI graphics, lossy AVIF at quality 60-80 often looks identical while cutting file size by an order of magnitude.' },
        { title: 'Transparency included', text: 'Like PNG, AVIF supports 8-bit alpha. Icons and composited graphics keep their transparency after conversion.' },
        { title: 'Sharp text and edges', text: 'AV1\'s intra prediction handles flat colors, text, and hard edges exceptionally well - exactly what PNG-style content is made of.' },
      ],
      stepsTitle: 'How to convert PNG to AVIF',
      steps: [
        { name: 'Add PNG files', text: 'Drag and drop your PNG images or click to select. Batch processing handles entire folders in one run.' },
        { name: 'Pick lossless or lossy', text: 'Use lossless mode for pixel-perfect output at moderate savings, or lossy mode (quality 60-80) for maximum compression of screenshots and graphics.' },
        { name: 'Inspect the result', text: 'Zoom into the comparison preview to confirm text legibility and edge quality, especially at aggressive quality settings.' },
        { name: 'Download your AVIF files', text: 'Save individually or as one ZIP. Nothing left your device during the whole process.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is AVIF lossless smaller than PNG lossless?', a: 'Yes, on virtually all real-world images AVIF lossless produces smaller files than PNG, typically 10-30% smaller, with identical pixel data.' },
        { q: 'Will small text stay readable?', a: 'In lossless mode, always. In lossy mode, AVIF handles text remarkably well, but check the preview - if you see ringing around tiny text, raise the quality or switch to lossless.' },
        { q: 'Does AVIF keep PNG transparency?', a: 'Yes. AVIF supports a full alpha channel, and PixConvert preserves it during conversion.' },
        { q: 'AVIF or WebP for PNG replacement?', a: 'AVIF compresses better, especially for graphics and screenshots. WebP has marginally broader support in very old browsers, but for modern audiences AVIF is the stronger default.' },
        { q: 'Can I convert back from AVIF to PNG later?', a: 'Yes - use the AVIF to PNG converter on this site. If you used lossless mode, the round-trip is pixel-perfect; lossy conversions cannot recover information that was discarded.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'PNG 转 AVIF - 在线免费转换，无损更省 | PixConvert',
      description: '在浏览器中免费将 PNG 转换为 AVIF。无损模式压缩率超越 PNG，有损模式可缩减 70-90%，完整支持透明通道，文件不上传。',
      h1: 'PNG 转 AVIF 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'PNG 图形——截图、图标、图表、logo——往往是页面上最重的资源。转成 AVIF 可以大幅瘦身：AVIF 无损模式压缩率稳定优于 PNG；有损模式能把图形内容缩小 70-90%，同时保持文字锐利、边缘干净。AVIF 同样支持完整的 alpha 透明，抠图和叠加素材的边缘不受影响。',
        'PixConvert 的 PNG 转 AVIF 在浏览器本地完成：无上传、无注册、无水印。拖入文件，选择无损或有损模式，即可下载结果。提交前可通过对比预览确认小字和细线在压缩后依然清晰。',
      ],
      benefitsTitle: '为什么把 PNG 转成 AVIF？',
      benefits: [
        { title: '无损也胜过 PNG', text: '无损模式下，AVIF 能把同样的像素装进比 PNG 更小的文件，通常再省 10-30%。视觉零变化，纯省钱。' },
        { title: '有损压缩幅度惊人', text: '对截图和 UI 图形，画质 60-80 的有损 AVIF 往往看起来完全一致，体积却降了一个数量级。' },
        { title: '透明照样支持', text: '与 PNG 一样，AVIF 支持 8 位 alpha 通道，图标和合成图形转换后透明保持不变。' },
        { title: '文字和边缘更锐利', text: 'AV1 的帧内预测对纯色、文字、硬边缘的处理极为出色——这正是 PNG 类内容的主要构成。' },
      ],
      stepsTitle: 'PNG 转 AVIF 的步骤',
      steps: [
        { name: '添加 PNG 文件', text: '拖拽 PNG 图片或点击选择。批量处理一次搞定整个文件夹。' },
        { name: '选择无损或有损', text: '追求像素级精确选无损（节省适中）；截图和图形要极限压缩选有损（画质 60-80）。' },
        { name: '检查结果', text: '放大对比预览，确认文字可读性和边缘质量——尤其是在激进的画质设置下。' },
        { name: '下载 AVIF 文件', text: '逐个保存或打包成一个 ZIP。全程没有任何文件离开你的设备。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'AVIF 无损比 PNG 无损小吗？', a: '是的，几乎所有真实图片上，AVIF 无损都比 PNG 小 10-30%，且像素数据完全一致。' },
        { q: '小字还能看清吗？', a: '无损模式永远清晰。有损模式下 AVIF 对文字的处理也相当好，但建议查看预览——若小字周围出现振铃，调高画质或改用无损。' },
        { q: 'AVIF 保留 PNG 的透明吗？', a: '保留。AVIF 支持完整的 alpha 通道，PixConvert 会在转换中原样保留。' },
        { q: '替代 PNG 选 AVIF 还是 WebP？', a: 'AVIF 压缩更优，尤其是图形和截图。WebP 在极老的浏览器上略占优势，但对现代受众 AVIF 是更强的默认选择。' },
        { q: '以后能把 AVIF 转回 PNG 吗？', a: '可以，用本站的 AVIF 转 PNG 工具。无损模式下往返是像素级精确的；有损转换则无法找回已丢弃的信息。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'avif-to-jpg',
    from: 'AVIF',
    to: 'JPG',
    outputFormat: 'jpg',
    en: {
      title: 'Convert AVIF to JPG Online Free - Works Everywhere | PixConvert',
      description:
        'Convert AVIF to JPG free in your browser. Solve compatibility with older apps, CMSs, and services that don\'t accept AVIF. Batch, no uploads.',
      h1: 'AVIF to JPG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'AVIF is efficient but still new enough that plenty of software refuses it: older operating systems, some CMS media libraries, online forms, photo printers, and messaging apps. Converting AVIF to JPG produces a file that opens literally everywhere - it is the universal compatibility format, supported by every device and application made in the last 25 years.',
        'With PixConvert, AVIF to JPG conversion happens entirely in your browser. Drop in your .avif files and receive JPGs in seconds - batch conversion included. Use the quality slider to balance fidelity against file size (90+ for archival copies), and flatten any transparency onto a solid background automatically, since JPG has no alpha channel.',
      ],
      benefitsTitle: 'Why convert AVIF to JPG?',
      benefits: [
        { title: 'Universal compatibility', text: 'Every OS, browser, editor, CMS, social platform, and print service handles JPG. If a tool rejects AVIF, this conversion fixes it.' },
        { title: 'Quality control', text: 'A simple slider maps to the JPEG quality factor. Choose 90-100 for near-identical copies, lower for shareable smaller files.' },
        { title: 'Batch conversion', text: 'Convert whole folders of AVIF images in one pass and download everything as a ZIP archive.' },
        { title: 'Private by design', text: 'Files are decoded and re-encoded on your device. No uploads, no server storage, no retention - nothing to worry about.' },
      ],
      stepsTitle: 'How to convert AVIF to JPG',
      steps: [
        { name: 'Upload AVIF files', text: 'Drag your .avif images into the upload zone or click to browse. Add as many as you need.' },
        { name: 'JPG is preselected', text: 'Adjust the quality slider if needed - 90+ is recommended for visually lossless results.' },
        { name: 'Preview the output', text: 'Check the comparison slider to confirm the converted JPG matches your expectations before downloading.' },
        { name: 'Download files or ZIP', text: 'Grab individual JPGs or the entire batch at once. Your AVIF originals never left your device.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Why won\'t my application open AVIF files?', a: 'AVIF decoding requires recent software. Windows 10 before 2023, older macOS versions, many CMS platforms, and lots of desktop apps lack AVIF support. Converting to JPG sidesteps the problem entirely.' },
        { q: 'Does AVIF to JPG reduce quality?', a: 'A lossy re-encode is involved, but at quality 90+ it is visually undetectable. The AVIF source\'s existing compression artifacts are simply carried over, not amplified noticeably.' },
        { q: 'What happens to transparency?', a: 'JPG cannot store transparency, so transparent pixels are flattened to a background color. If transparency matters, convert to PNG instead.' },
        { q: 'Will the JPG be bigger than the AVIF?', a: 'Yes, typically 2-4x bigger. That is the trade-off for universal compatibility - JPG\'s codec is far less efficient than AV1.' },
        { q: 'Can I convert AVIF without installing anything?', a: 'Yes. PixConvert decodes AVIF natively in your browser - no installs, extensions, or uploads required.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'AVIF 转 JPG - 在线免费转换，处处兼容 | PixConvert',
      description: '在浏览器中免费将 AVIF 转换为 JPG。解决老系统、CMS 和不支持 AVIF 的服务的兼容问题，批量转换，文件不上传。',
      h1: 'AVIF 转 JPG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'AVIF 效率高，但毕竟太新，很多软件还不认它：旧版操作系统、部分 CMS 媒体库、在线表单、照片打印店、聊天应用都可能拒绝 AVIF。把 AVIF 转成 JPG 就能得到真正「处处能打开」的文件——JPG 是通用兼容格式，过去 25 年生产的每台设备和应用都支持。',
        'PixConvert 的 AVIF 转 JPG 完全在浏览器内完成：拖入 .avif 文件，几秒拿到 JPG，支持批量。用画质滑块权衡保真与体积（存档建议 90 以上）；由于 JPG 没有 alpha 通道，透明区域会自动平铺为纯色背景。',
      ],
      benefitsTitle: '为什么把 AVIF 转成 JPG？',
      benefits: [
        { title: '普遍兼容', text: '所有操作系统、浏览器、编辑器、CMS、社交平台和打印服务都支持 JPG。工具不认 AVIF？这一步就能解决。' },
        { title: '画质可控', text: '一个滑块直接对应 JPEG 压缩质量。90-100 几乎与原图一致，调低则得到更小的分享版本。' },
        { title: '批量转换', text: '一次转换整个文件夹的 AVIF，打包成 ZIP 下载。' },
        { title: '隐私优先', text: '解码与编码都在你的设备上完成。无上传、无服务器存储、无保留——无任何后顾之忧。' },
      ],
      stepsTitle: 'AVIF 转 JPG 的步骤',
      steps: [
        { name: '上传 AVIF 文件', text: '把 .avif 图片拖入上传区或点击浏览，数量不限。' },
        { name: 'JPG 已默认选中', text: '按需调节画质滑块——建议 90 以上，视觉上几乎无损。' },
        { name: '预览输出', text: '通过对比滑块确认转换后的 JPG 符合预期，再下载。' },
        { name: '下载文件或 ZIP', text: '逐个下载 JPG 或整批打包。AVIF 原图从未离开你的设备。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: '为什么我的软件打不开 AVIF？', a: 'AVIF 解码需要较新的软件。2023 年之前的 Windows 10、旧版 macOS、许多 CMS 和桌面应用都不支持 AVIF。转成 JPG 可以彻底绕开这个问题。' },
        { q: 'AVIF 转 JPG 会降画质吗？', a: '会有一次有损重编码，但画质 90 以上时肉眼无法察觉。AVIF 源文件已有的压缩痕迹只是原样保留，不会被明显放大。' },
        { q: '透明区域怎么处理？', a: 'JPG 无法存储透明，透明像素会被平铺为背景色。如果透明重要，请改转 PNG。' },
        { q: 'JPG 会比 AVIF 大吗？', a: '会，通常大 2-4 倍。这是换取普遍兼容的代价——JPG 的编码效率远低于 AV1。' },
        { q: '不装软件也能转 AVIF 吗？', a: '可以。PixConvert 在浏览器内原生解码 AVIF——无需安装、无需扩展、无需上传。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'avif-to-png',
    from: 'AVIF',
    to: 'PNG',
    outputFormat: 'png',
    en: {
      title: 'Convert AVIF to PNG Online Free - Lossless Output | PixConvert',
      description:
        'Convert AVIF to PNG free in your browser. Lossless, transparency-preserving output ready for editing. Batch conversion, no uploads, no sign-up.',
      h1: 'AVIF to PNG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'When you need to edit an AVIF image, composite it into a design, or guarantee pixel-exact output, convert it to PNG. PNG is the lossless workhorse of image editing - every tool accepts it, and re-saving it never degrades quality. This converter decodes your AVIF files in the browser and writes PNG output with full alpha transparency preserved.',
        'PixConvert requires no uploads and no accounts: your AVIF files are processed locally with WebCodecs and Canvas. Batch-convert entire sets, optionally resize, and download the results as individual files or a single ZIP. Because PNG is lossless, what you see in the comparison preview is exactly what you get.',
      ],
      benefitsTitle: 'Why convert AVIF to PNG?',
      benefits: [
        { title: 'Zero further quality loss', text: 'PNG is lossless, so the conversion adds no artifacts. Existing AVIF compression is unchanged, and future re-saves won\'t degrade the file.' },
        { title: 'Transparency preserved', text: 'AVIF alpha channels are transferred intact to PNG, keeping transparent and semi-transparent regions exactly as authored.' },
        { title: 'Editor-ready', text: 'Photoshop, GIMP, Figma, Affinity, Paint.NET - every editor opens PNG. It is the safest hand-off format for any workflow.' },
        { title: 'Fast and private', text: 'Conversion runs on your device in seconds per image, with no server involvement at any step.' },
      ],
      stepsTitle: 'How to convert AVIF to PNG',
      steps: [
        { name: 'Drop in AVIF files', text: 'Drag and drop your .avif images or click the upload area to select files. Multiple files queue automatically.' },
        { name: 'PNG output is locked in', text: 'No quality decisions needed - PNG is lossless. Optionally resize images for smaller dimensions.' },
        { name: 'Verify with the preview', text: 'The slider comparison confirms the decoded output. Transparency and edges should match the source exactly.' },
        { name: 'Download', text: 'Save PNGs individually or as a ZIP archive. Processing stayed 100% local.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is the AVIF to PNG conversion lossless?', a: 'Yes. PNG encodes the decoded AVIF pixels exactly. Note that if the source AVIF was saved lossily, its artifacts are part of the image and will be carried over - they cannot be removed retroactively.' },
        { q: 'Why is the PNG larger than my AVIF?', a: 'AV1 compression is far more efficient than PNG\'s. Expect 2-10x growth, which is normal and is the cost of a universally editable, lossless file.' },
        { q: 'Does transparency survive?', a: 'Yes - alpha is copied 1:1 from AVIF to PNG.' },
        { q: 'Can I batch convert AVIF files here?', a: 'Absolutely. Add as many files as you like; each is converted automatically and can be downloaded together in one ZIP.' },
        { q: 'Which AVIF features are not supported in PNG?', a: 'Animation and HDR/10-bit color depth are PNG limitations - animated AVIFs convert their first frame, and HDR sources are tone-mapped to 8-bit.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'AVIF 转 PNG - 在线免费转换，无损输出 | PixConvert',
      description: '在浏览器中免费将 AVIF 转换为 PNG。无损、保留透明、可直接进入编辑流程，批量转换，无需上传和注册。',
      h1: 'AVIF 转 PNG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        '需要编辑 AVIF 图片、把它合成进设计稿，或保证像素级精确输出？转成 PNG 即可。PNG 是图像编辑领域的主力无损格式——所有工具都接受，反复重存也不降画质。本工具在浏览器内解码 AVIF 并输出 PNG，完整保留 alpha 透明。',
        'PixConvert 无需上传也无需注册：AVIF 文件通过 WebCodecs 和 Canvas 在本地处理。可批量转换整套素材、按需调整尺寸，结果可逐个下载或打包成一个 ZIP。PNG 是无损格式，对比预览里看到的，就是最终得到的。',
      ],
      benefitsTitle: '为什么把 AVIF 转成 PNG？',
      benefits: [
        { title: '零额外画质损失', text: 'PNG 是无损格式，转换不引入任何瑕疵。AVIF 原有的压缩状态保持不变，以后的反复重存也不会劣化。' },
        { title: '透明完整保留', text: 'AVIF 的 alpha 通道原样迁移到 PNG，透明与半透明区域和原稿完全一致。' },
        { title: '编辑器即开即用', text: 'Photoshop、GIMP、Figma、Affinity、Paint.NET——所有编辑器都打开 PNG，是任何工作流最稳妥的交接格式。' },
        { title: '快速且私密', text: '每张图几秒内在你的设备上完成转换，全程无服务器参与。' },
      ],
      stepsTitle: 'AVIF 转 PNG 的步骤',
      steps: [
        { name: '拖入 AVIF 文件', text: '拖拽 .avif 图片或点击上传区选择文件，多文件自动排队。' },
        { name: 'PNG 输出已锁定', text: '无需纠结画质——PNG 是无损的。如需更小尺寸可顺便调整。' },
        { name: '用预览确认', text: '对比滑块确认解码输出，透明和边缘应与源文件完全一致。' },
        { name: '下载', text: '逐个保存 PNG 或打包成 ZIP，处理 100% 本地完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'AVIF 转 PNG 是无损的吗？', a: '是的。PNG 会精确编码解码后的 AVIF 像素。注意：如果源 AVIF 是有损保存的，那些瑕疵是图像的一部分，会被原样带入——无法事后消除。' },
        { q: '为什么 PNG 比 AVIF 大？', a: 'AV1 的压缩效率远高于 PNG，体积大 2-10 倍属正常，这是换取「处处可编辑的无损文件」的成本。' },
        { q: '透明还在吗？', a: '在——alpha 从 AVIF 到 PNG 1:1 复制。' },
        { q: '这里能批量转 AVIF 吗？', a: '当然。文件数量不限，每个都自动转换，最后可打包成一个 ZIP 一次下载。' },
        { q: 'AVIF 的哪些特性 PNG 不支持？', a: '动画和 HDR/10-bit 色深是 PNG 的局限——动态 AVIF 只转换第一帧，HDR 源会被色调映射为 8-bit。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'jpg-to-png',
    from: 'JPG',
    to: 'PNG',
    outputFormat: 'png',
    en: {
      title: 'Convert JPG to PNG Online Free - Lossless & Editable | PixConvert',
      description:
        'Convert JPG to PNG free in your browser. Lossless output for editing, archiving, and transparency overlays. Batch conversion, no uploads.',
      h1: 'JPG to PNG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'Converting JPG to PNG makes sense whenever you need a lossless, re-editable master copy of an image. JPG degrades a little every time it is saved; PNG never does. Convert once to PNG and you can crop, annotate, watermark, and re-save as many times as you like without any further generational loss.',
        'PixConvert performs the JPG to PNG conversion entirely in your browser - no uploads, no watermark, no sign-up. Batch conversion handles whole folders at once, and optional resizing lets you create specific dimensions in the same pass. Note that PNG files will be larger than the source JPGs, since PNG prioritizes fidelity over compression ratio.',
      ],
      benefitsTitle: 'Why convert JPG to PNG?',
      benefits: [
        { title: 'Stop generation loss', text: 'Every JPG re-save recompresses the image. PNG is lossless, so once converted, future edits and re-saves keep the image pixel-identical.' },
        { title: 'Transparency-ready workflow', text: 'PNG supports alpha, so you can erase backgrounds or add transparent overlays after converting - impossible with JPG.' },
        { title: 'Exact colors', text: 'PNG stores pixels precisely, making it the right choice for screenshots, documents, medical or technical imagery where fidelity matters.' },
        { title: 'Batch and resize', text: 'Convert entire folders and optionally resize in the same operation - useful for preparing assets for design tools.' },
      ],
      stepsTitle: 'How to convert JPG to PNG',
      steps: [
        { name: 'Upload JPG files', text: 'Drag and drop your JPG images, or click the upload area to browse. Add as many as you need.' },
        { name: 'PNG output is preselected', text: 'No quality slider needed - PNG is lossless. Optionally enable resizing if you need specific dimensions.' },
        { name: 'Preview the result', text: 'The comparison view shows the converted PNG. It should look identical to the JPG source.' },
        { name: 'Download', text: 'Save files individually or download the batch as a ZIP. Everything stayed on your device.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Will converting JPG to PNG improve quality?', a: 'No - conversion cannot recover detail already lost to JPG compression. PNG preserves the current state exactly and prevents further loss on future edits, but it cannot undo existing artifacts.' },
        { q: 'Why is the PNG bigger than my JPG?', a: 'PNG\'s lossless compression stores more information than JPG\'s lossy format, so files typically grow 2-5x. That is the price of pixel-exact storage and editability.' },
        { q: 'Can I add transparency to a JPG this way?', a: 'Converting to PNG gives the file alpha capability, but the JPG source has no transparency data - the background is baked in. You would erase it in an editor after conversion.' },
        { q: 'When should I keep JPG instead?', a: 'For photographs delivered to users, JPG (or WebP/AVIF) is usually better: smaller files with no visible difference. PNG shines for editing masters, screenshots, and graphics with text or sharp edges.' },
        { q: 'Is there any upload or privacy risk?', a: 'None. The conversion happens locally in your browser; the images never leave your computer.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'JPG 转 PNG - 在线免费转换，无损可编辑 | PixConvert',
      description: '在浏览器中免费将 JPG 转换为 PNG。无损输出，适合编辑、存档和透明叠加，批量转换，文件不上传。',
      h1: 'JPG 转 PNG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        '当你需要一张无损、可反复编辑的图片母版时，把 JPG 转成 PNG 是正确选择。JPG 每保存一次都会劣化一点；PNG 永远不会。转换一次得到 PNG 母版后，你可以随意裁剪、标注、加水印、反复重存，不再有任何世代损失。',
        'PixConvert 的 JPG 转 PNG 完全在浏览器内完成——无上传、无水印、无注册。批量转换整个文件夹，还能在同一步骤里按需调整尺寸。注意：PNG 优先保真而非压缩率，文件会比源 JPG 大。',
      ],
      benefitsTitle: '为什么把 JPG 转成 PNG？',
      benefits: [
        { title: '终结世代损失', text: 'JPG 每次重存都会重新压缩。转成无损的 PNG 后，后续编辑和重存都能保持像素级一致。' },
        { title: '随时进入透明工作流', text: 'PNG 支持 alpha 通道，转换后即可抠背景、加透明叠加——这是 JPG 做不到的。' },
        { title: '色彩精确', text: 'PNG 逐像素精确存储，是截图、文档、医疗与技术图像等高保真场景的正确选择。' },
        { title: '批量 + 改尺寸', text: '整个文件夹一次转换，并可在同一步骤中调整尺寸，方便向设计工具交付素材。' },
      ],
      stepsTitle: 'JPG 转 PNG 的步骤',
      steps: [
        { name: '上传 JPG 文件', text: '拖拽 JPG 图片或点击上传区浏览，数量不限。' },
        { name: 'PNG 已默认选中', text: '无需画质滑块——PNG 是无损的。如需特定尺寸可开启调整大小。' },
        { name: '预览结果', text: '对比视图显示转换后的 PNG，画面应与源 JPG 完全一致。' },
        { name: '下载', text: '逐个保存或整批打包为 ZIP，所有文件都留在你的设备上。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'JPG 转 PNG 能提升画质吗？', a: '不能——转换无法找回 JPG 压缩已经丢掉的细节。PNG 能精确保留当前状态、避免后续编辑进一步劣化，但无法消除已有瑕疵。' },
        { q: '为什么 PNG 比 JPG 大？', a: 'PNG 的无损压缩存储的信息比 JPG 的有损格式多，体积通常大 2-5 倍。这是像素级存储和可编辑性的代价。' },
        { q: '这样能给 JPG 加透明吗？', a: '转成 PNG 后文件具备 alpha 能力，但 JPG 源文件本身没有透明数据——背景已经烧进像素里。转换后需在编辑器中手动抠掉。' },
        { q: '什么情况应该继续用 JPG？', a: '交付给用户的照片通常用 JPG（或 WebP/AVIF）更好：体积更小且看不出差别。PNG 的优势在编辑母版、截图和含文字/硬边缘的图形。' },
        { q: '有上传或隐私风险吗？', a: '没有。转换在浏览器本地完成，图片从未离开你的电脑。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  {
    slug: 'png-to-jpg',
    from: 'PNG',
    to: 'JPG',
    outputFormat: 'jpg',
    en: {
      title: 'Convert PNG to JPG Online Free - Smaller, Shareable Files | PixConvert',
      description:
        'Convert PNG to JPG free in your browser. Shrink large PNG files for sharing, email, and uploads. Batch conversion, quality slider, no uploads.',
      h1: 'PNG to JPG Converter',
      badge: 'Free · No Uploads',
      intro: [
        'PNG files are wonderful for fidelity and terrible for file size. Converting PNG to JPG typically cuts file size by 50-80%, making images far easier to email, upload to size-limited forms, and store in bulk. JPG is accepted by every platform, app, and service in existence, so it is the natural target when compatibility and compactness matter more than pixel-perfect fidelity.',
        'PixConvert converts PNG to JPG entirely inside your browser. Drag in your files, set the quality slider (85-90 is a great default for photos), and download individually or as a ZIP. Transparent areas are flattened onto a white background automatically, since JPG cannot store transparency - the preview shows exactly how the result will look.',
      ],
      benefitsTitle: 'Why convert PNG to JPG?',
      benefits: [
        { title: '50-80% smaller files', text: 'JPG\'s lossy compression is far more efficient for photographic content. Big screenshots and exports shrink dramatically.' },
        { title: 'Pass strict upload limits', text: 'Forms, portals, and email attachments with size caps become painless once heavy PNGs become compact JPGs.' },
        { title: 'Controlled quality', text: 'The quality slider gives you direct control over the size/fidelity trade-off, with a live comparison preview before you commit.' },
        { title: 'Fast local batch conversion', text: 'No upload queues: hundreds of PNGs convert on your device, and the whole batch downloads as one ZIP.' },
      ],
      stepsTitle: 'How to convert PNG to JPG',
      steps: [
        { name: 'Add your PNG files', text: 'Drag and drop PNG images or click to browse. Batch uploads are fully supported.' },
        { name: 'JPG is preselected', text: 'Adjust the quality slider - 85-90 is ideal for photos; use 95+ if fidelity is critical.' },
        { name: 'Check the preview', text: 'Use the comparison slider to confirm quality, and note that transparent backgrounds become white.' },
        { name: 'Download your JPGs', text: 'Save individually or as a ZIP archive. Conversion was 100% local to your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does PNG to JPG conversion lose quality?', a: 'JPG is lossy, so some information is discarded - at quality 85-90 the difference is invisible for photographs, but artifacts can appear around sharp text and hard edges. Use 95+ or keep PNG for screenshots and graphics.' },
        { q: 'What happens to transparent backgrounds?', a: 'JPG has no alpha channel, so transparency is flattened to white (or the chosen background). If transparency is essential, stay with PNG or convert to WebP instead.' },
        { q: 'How much smaller will the JPG be?', a: 'For photographic content, typically 50-80% smaller. For flat graphics and screenshots the savings are smaller, and PNG lossless formats may actually be the better choice there.' },
        { q: 'Can I choose the output quality?', a: 'Yes - the quality slider maps directly to JPEG compression strength, and the preview shows the trade-off before you download.' },
        { q: 'Are files uploaded anywhere?', a: 'No. All conversion happens in your browser. Files never leave your device.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      title: 'PNG 转 JPG - 在线免费转换，体积更小更好分享 | PixConvert',
      description: '在浏览器中免费将 PNG 转换为 JPG。大幅缩减 PNG 体积，方便邮件、表单上传和批量存储，支持画质调节，文件不上传。',
      h1: 'PNG 转 JPG 在线转换器',
      badge: '免费 · 文件不上传',
      intro: [
        'PNG 保真度高但体积庞大，传文件、过表单、发邮件经常被大小限制卡住。把 PNG 转成 JPG 通常能缩小 50-80%，JPG 又是所有平台、应用、服务都接受的格式——当兼容性和紧凑性比像素级保真更重要时，它就是最自然的输出目标。',
        'PixConvert 的 PNG 转 JPG 完全在浏览器内完成：拖入文件，设置画质滑块（照片建议 85-90），逐个下载或打包 ZIP。由于 JPG 无法存储透明，透明区域会自动平铺为白色背景——预览里能提前看到最终效果。',
      ],
      benefitsTitle: '为什么把 PNG 转成 JPG？',
      benefits: [
        { title: '体积缩小 50-80%', text: 'JPG 的有损压缩对照片类内容效率高得多，大截图和大导出图的体积会显著下降。' },
        { title: '轻松通过严格的上传限制', text: '有大小上限的表单、门户和邮件附件，在笨重 PNG 变成紧凑 JPG 后都不再是问题。' },
        { title: '画质可控', text: '画质滑块直接控制体积与保真的取舍，下载前可用实时对比预览确认。' },
        { title: '本地批量转换', text: '没有上传队列：数百张 PNG 在你的设备上转换，整批打包成一个 ZIP 下载。' },
      ],
      stepsTitle: 'PNG 转 JPG 的步骤',
      steps: [
        { name: '添加 PNG 文件', text: '拖拽 PNG 图片或点击浏览，完全支持批量上传。' },
        { name: 'JPG 已默认选中', text: '调节画质滑块——照片建议 85-90；对保真要求高用 95 以上。' },
        { name: '检查预览', text: '用对比滑块确认画质，并注意透明背景会变成白色。' },
        { name: '下载 JPG', text: '逐个保存或打包成 ZIP，转换 100% 在浏览器本地完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'PNG 转 JPG 会损失画质吗？', a: 'JPG 是有损压缩，会丢弃部分信息——画质 85-90 时照片看不出差别，但锐利文字和硬边缘周围可能出现瑕疵。截图和图形建议用 95 以上或保留 PNG。' },
        { q: '透明背景怎么办？', a: 'JPG 没有 alpha 通道，透明会被平铺为白色（或指定背景色）。如果透明很重要，请保留 PNG 或改转 WebP。' },
        { q: 'JPG 能小多少？', a: '照片类内容通常缩小 50-80%。纯色图形和截图的节省较小，这类内容无损的 PNG/WebP 反而更合适。' },
        { q: '可以自选输出画质吗？', a: '可以——画质滑块直接对应 JPEG 压缩强度，下载前预览即可看到体积与画质的取舍。' },
        { q: '文件会被上传吗？', a: '不会。全部转换都在浏览器内完成，文件从未离开你的设备。' },
      ],
      relatedTitle: '相关转换',
    },
  },
];

export function getPairBySlug(slug: string): ConversionPair | undefined {
  return CONVERSION_PAIRS.find((p) => p.slug === slug);
}

/** Pick the content variant for the current language (zh → Chinese, others → English). */
export function getPairContent(pair: ConversionPair, language: string | undefined): PairContent {
  return language?.toLowerCase().startsWith('zh') ? pair.zh : pair.en;
}
