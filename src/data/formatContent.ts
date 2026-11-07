import type { OutputFormat } from '@/types';

export interface FormatContentItem {
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

export interface FormatContent {
  en: FormatContentItem;
  zh: FormatContentItem;
}

export const FORMAT_CONTENT: Record<string, FormatContent> = {
  webp: {
    en: {
      h1: 'WebP Converter - Convert Any Image to WebP Free',
      badge: 'Free · No Uploads',
      intro: [
        'WebP is Google’s modern image format that delivers the same visual quality as JPG or PNG at 25-34% smaller file sizes. Converting your images to WebP is the single easiest win for faster websites, smaller apps, and better Core Web Vitals - and every current browser supports it.',
        'PixConvert lets you convert images to WebP entirely in your browser. Nothing is uploaded to a server, so your photos stay private and the process starts instantly. Drag in a single image or a whole folder, tune the quality slider, preview the result side by side with the original, and download everything as a ZIP.',
      ],
      benefitsTitle: 'Why convert to WebP?',
      benefits: [
        { title: '25-34% smaller files', text: 'At equal quality, WebP typically shrinks JPG and PNG files by a quarter to a third. On image-heavy pages that can save hundreds of kilobytes per visitor.' },
        { title: 'Better Core Web Vitals', text: 'Google uses LCP as a ranking signal. Serving WebP instead of JPG directly lowers LCP on image-led pages - one of the cheapest performance wins available.' },
        { title: 'Transparency and animation', text: 'Unlike JPG, WebP supports an alpha channel for transparency and can store animation, so one format covers photos, icons, and GIFs.' },
        { title: 'Universal browser support', text: 'Chrome, Firefox, Safari 14+, and Edge all decode WebP. For web delivery there are no practical compatibility gaps left.' },
      ],
      stepsTitle: 'How to convert images to WebP',
      steps: [
        { name: 'Upload your images', text: 'Drag and drop or click to add JPG, PNG, GIF, SVG, BMP, or AVIF files. Batch conversion of entire folders is supported.' },
        { name: 'Choose WebP output', text: 'WebP is preselected on this page. Adjust the quality slider or pick a preset such as Balanced or Max Quality.' },
        { name: 'Preview the result', text: 'Use the slider comparison to inspect the WebP next to the original before committing. Resize options are available if needed.' },
        { name: 'Download', text: 'Download files one by one, or click Download All (ZIP) to grab every converted WebP in a single archive. Nothing was ever uploaded.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is WebP smaller than JPG and PNG?', a: 'Yes. At the same perceived quality, WebP is typically 25-34% smaller than JPG and up to 26% smaller than PNG in lossless mode. At low bitrates the gap widens further.' },
        { q: 'Will WebP work on my website?', a: 'All modern browsers - Chrome, Firefox, Safari 14+, and Edge - support WebP. If you must support very old browsers, keep JPG/PNG fallbacks.' },
        { q: 'Does converting to WebP reduce quality?', a: 'WebP is lossy by default, but at quality 80+ the difference from the source is imperceptible while the file gets much smaller. Use the lossless preset when pixel-exact output matters.' },
        { q: 'Are my images uploaded to a server?', a: 'No. PixConvert runs entirely in your browser with Canvas and WebCodecs. Your files never leave your device, which makes it safe for private or confidential images.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      h1: 'WebP 转换器 - 免费在线转换任意图片为 WebP',
      badge: '免费 · 文件不上传',
      intro: [
        'WebP 是 Google 推出的现代图片格式，在同等视觉质量下体积比 JPG 或 PNG 小 25-34%。把图片转成 WebP 是让网站更快、应用更轻、核心网页指标更优的最简单一招——而且所有现代浏览器都已支持。',
        'PixConvert 让你完全在浏览器内把图片转成 WebP：文件不会上传到服务器，照片始终私密，过程即时开始。拖入单张或整个文件夹，调节画质滑块，与原图并排预览，最后打包成 ZIP 一次下载。',
      ],
      benefitsTitle: '为什么要转成 WebP？',
      benefits: [
        { title: '体积缩小 25-34%', text: '同等画质下，WebP 通常比 JPG 和 PNG 小四分之一到三分之一。对图片密集的页面，每位访客可省下数百 KB。' },
        { title: '核心网页指标更优', text: 'Google 把 LCP 作为排名信号。用 WebP 替代 JPG 可直接降低图片型页面的 LCP，是最容易见效的性能优化之一。' },
        { title: '支持透明与动画', text: '与 JPG 不同，WebP 支持透明 alpha 通道，还能存储动画，一种格式即可覆盖照片、图标与 GIF。' },
        { title: '所有主流浏览器都支持', text: 'Chrome、Firefox、Safari 14+、Edge 均可解码 WebP，网页交付已无实际兼容性缺口。' },
      ],
      stepsTitle: '如何把图片转成 WebP',
      steps: [
        { name: '上传图片', text: '拖拽或点击添加 JPG、PNG、GIF、SVG、BMP 或 AVIF 文件，支持整个文件夹批量转换。' },
        { name: '选择 WebP 输出', text: '本页已默认 WebP。可调节画质滑块，或选择「均衡」「最高画质」等预设。' },
        { name: '预览结果', text: '用滑块对比查看 WebP 与原图后再确认。如需调整尺寸也可在此设置。' },
        { name: '下载', text: '可逐个下载，或点击「下载全部 (ZIP)」打包下载所有 WebP。全程没有任何文件被上传。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'WebP 比 JPG 和 PNG 小吗？', a: '是的。同等感知画质下，WebP 通常比 JPG 小 25-34%，无损模式比 PNG 小最多 26%；低码率时差距更大。' },
        { q: 'WebP 能用在我网站上吗？', a: '所有现代浏览器——Chrome、Firefox、Safari 14+、Edge——都支持 WebP。若必须兼容非常老的浏览器，请保留 JPG/PNG 兜底。' },
        { q: '转成 WebP 会降低画质吗？', a: 'WebP 默认有损，但画质 80 以上时与源文件差异肉眼不可见，而体积明显更小。需要像素级精确时选用无损预设。' },
        { q: '我的图片会被上传到服务器吗？', a: '不会。PixConvert 完全在浏览器内通过 Canvas 与 WebCodecs 完成，文件始终留在你的设备上，处理私密图片也很安全。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  avif: {
    en: {
      h1: 'AVIF Converter - Convert Any Image to AVIF Free',
      badge: 'Free · No Uploads',
      intro: [
        'AVIF (AV1 Image File Format) is the most efficient image format in mainstream use today. It cuts file sizes by around 50% versus JPG at the same quality - roughly double WebP’s savings - while also supporting HDR, 10-bit color, and wide gamut that JPG simply cannot represent.',
        'PixConvert encodes AVIF right in your browser using WebCodecs, with no uploads and no waiting in a queue. Batch-convert a whole library, fine-tune quality with the slider, and compare results with the before/after preview. Chrome, Firefox, Safari 16+, and Edge all decode AVIF, making it a safe default for web delivery in 2026.',
      ],
      benefitsTitle: 'Why convert to AVIF?',
      benefits: [
        { title: 'About 50% smaller than JPG', text: 'AV1’s codec far surpasses JPEG’s 30-year-old algorithm. At equal quality, AVIF files are routinely half the size.' },
        { title: 'More efficient than WebP', text: 'AVIF beats WebP by 20-30% at equivalent quality and adds HDR, 10/12-bit color, and wide gamut support.' },
        { title: 'Strong Core Web Vitals boost', text: 'Smaller hero images mean faster LCP. AVIF is the single most effective format change you can make for page speed today.' },
        { title: 'Private and instant', text: 'Encoding runs on your device with no server round-trip. Private images stay private, and there is no upload limit.' },
      ],
      stepsTitle: 'How to convert images to AVIF',
      steps: [
        { name: 'Upload your images', text: 'Drag and drop or browse for JPG, PNG, WebP, or other images. Batch processing handles many files at once.' },
        { name: 'Choose AVIF output', text: 'AVIF is preselected. Set quality via the slider - around 50-60 already matches or beats a quality-80 JPG visually.' },
        { name: 'Compare with the preview', text: 'The slider view shows original and converted side by side. AVIF’s efficiency lets you push quality lower than with WebP.' },
        { name: 'Download', text: 'Save files individually or as a ZIP archive. The whole conversion happened in your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is AVIF really smaller than WebP?', a: 'Yes, generally 20-30% smaller at equivalent quality, and the gap widens at lower bitrates. For maximum compression, AVIF is the current best choice.' },
        { q: 'Which browsers support AVIF?', a: 'Chrome 85+, Firefox 93+, Edge, Opera, and Safari 16+ all decode AVIF. As of 2026 that covers well over 95% of global browser usage.' },
        { q: 'Why is AVIF encoding slower than WebP?', a: 'AV1 compression is computationally heavier. In-browser encoding uses hardware acceleration where available; on older devices expect a few seconds per image.' },
        { q: 'Are my images uploaded anywhere?', a: 'No. AVIF encoding runs entirely on your device. Files never leave your computer.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      h1: 'AVIF 转换器 - 免费在线转换任意图片为 AVIF',
      badge: '免费 · 文件不上传',
      intro: [
        'AVIF（AV1 图像文件格式）是当前主流格式中压缩效率最高的。它在同等画质下比 JPG 小约 50%——大约是 WebP 节省幅度的两倍——同时还支持 JPG 完全无法表达的 HDR、10-bit 色深和广色域。',
        'PixConvert 使用 WebCodecs 在浏览器内直接编码 AVIF：无需上传、无需排队等待。可批量转换整个图库，用滑块微调画质，并通过前后对比预览确认效果。Chrome、Firefox、Safari 16+、Edge 均已支持 AVIF，2026 年用作网页图片已是安全默认项。',
      ],
      benefitsTitle: '为什么要转成 AVIF？',
      benefits: [
        { title: '比 JPG 小约 50%', text: 'AV1 编码效率远超 JPEG 三十年前的算法。同等画质下，AVIF 文件通常只有 JPG 的一半大小。' },
        { title: '压缩率胜过 WebP', text: '同等画质下比 WebP 再小 20-30%，并额外支持 HDR、10/12-bit 色深与广色域。' },
        { title: '显著提升核心网页指标', text: '首图更小意味着 LCP 更快。AVIF 是当下对页面速度见效最明显的格式升级。' },
        { title: '私密且即时', text: '编码在你的设备上完成，无服务器往返。私密图片不外泄，也没有上传限制。' },
      ],
      stepsTitle: '如何把图片转成 AVIF',
      steps: [
        { name: '上传图片', text: '拖拽或浏览选择 JPG、PNG、WebP 等图片，批量处理可一次处理多张。' },
        { name: '选择 AVIF 输出', text: '本页已默认 AVIF。用滑块调节画质——50-60 已基本能达到或超过画质 80 的 JPG 的视觉质量。' },
        { name: '用预览对比', text: '对比视图并排显示原图与转换结果。AVIF 效率高，画质参数通常可比 WebP 压得更低。' },
        { name: '下载', text: '逐个保存或打包成 ZIP。整个转换都在浏览器内完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: 'AVIF 真的比 WebP 小吗？', a: '是的，同等画质下一般再小 20-30%，低码率时差距更大。追求极致压缩选 AVIF。' },
        { q: '哪些浏览器支持 AVIF？', a: 'Chrome 85+、Firefox 93+、Edge、Opera、Safari 16+ 均可解码 AVIF，截至 2026 年已覆盖全球 95% 以上的浏览器使用量。' },
        { q: 'AVIF 编码为什么比 WebP 慢？', a: 'AV1 压缩计算量更大。浏览器内编码在支持硬件加速的设备上会自动启用；老旧设备每张图可能需要几秒。' },
        { q: '我的图片会被上传吗？', a: '不会。AVIF 编码完全在你的设备上完成，文件从未离开电脑。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  jpg: {
    en: {
      h1: 'JPG Converter - Convert Any Image to JPG Free',
      badge: 'Free · No Uploads',
      intro: [
        'JPG (or JPEG) is the most universally compatible image format on the planet. Every operating system, browser, editor, CMS, social platform, and printer handles it. When you need a file that opens literally everywhere, converting to JPG is the safe choice.',
        'PixConvert converts images to JPG entirely in your browser - no uploads, no queues, no account. Drop in PNG, WebP, AVIF, HEIC, or other formats, control quality with a simple slider, and download the results individually or as a ZIP. Transparent areas are flattened to a background color, since JPG has no alpha channel.',
      ],
      benefitsTitle: 'Why convert to JPG?',
      benefits: [
        { title: 'Opens literally everywhere', text: 'JPG is supported by every device and application made in the last 25 years. It is the universal interchange format for photographs.' },
        { title: 'Fix upload rejections', text: 'Many forms, CMS media libraries, and services still whitelist only JPG/PNG. Convert here and upload anywhere without errors.' },
        { title: 'Adjustable quality', text: 'The quality slider maps directly to JPEG compression. Choose 90+ for visually lossless copies or lower values for smaller shares.' },
        { title: 'Batch conversion', text: 'Convert entire folders in one pass and download everything as a single ZIP archive.' },
      ],
      stepsTitle: 'How to convert images to JPG',
      steps: [
        { name: 'Upload your images', text: 'Drag and drop or click to add PNG, WebP, AVIF, HEIC, or other images. Batch upload is supported.' },
        { name: 'JPG output is preselected', text: 'Adjust the quality slider - 85-90 is a great default for photos; use 95+ when fidelity is critical.' },
        { name: 'Preview before saving', text: 'Compare the converted JPG against the source with the slider view, and resize if a platform has dimension limits.' },
        { name: 'Download', text: 'Download each JPG individually or grab the whole batch as a ZIP. Your originals never left your device.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does converting to JPG reduce quality?', a: 'JPG is lossy, so some re-compression occurs. At quality 85-90 the change is invisible for photographs; use 95+ to minimize it. PNG screenshots and graphics may show artifacts, so keep them as PNG.' },
        { q: 'What happens to transparency?', a: 'JPG has no alpha channel, so transparent areas are flattened onto a solid background (white by default). If transparency matters, convert to PNG or WebP instead.' },
        { q: 'Which formats can I convert to JPG?', a: 'You can convert PNG, WebP, AVIF, HEIC, BMP, GIF (first frame), and TIFF to JPG. The source format is detected automatically.' },
        { q: 'Are my images uploaded to a server?', a: 'Never. Conversion runs entirely in your browser via Canvas. Files stay on your device from start to finish.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      h1: 'JPG 转换器 - 免费在线转换任意图片为 JPG',
      badge: '免费 · 文件不上传',
      intro: [
        'JPG（或 JPEG）是全球兼容性最强的图片格式：所有操作系统、浏览器、编辑器、CMS、社交平台和打印设备都支持它。当你需要一个「处处能打开」的文件时，转成 JPG 是最稳妥的选择。',
        'PixConvert 完全在浏览器内把图片转成 JPG——无上传、无排队、无注册。拖入 PNG、WebP、AVIF、HEIC 等格式，用滑块控制画质，逐个或打包成 ZIP 下载。由于 JPG 没有 alpha 通道，透明区域会被平铺为背景色。',
      ],
      benefitsTitle: '为什么要转成 JPG？',
      benefits: [
        { title: '处处能打开', text: '过去 25 年生产的每台设备和应用都支持 JPG，是照片类图片的通用交换格式。' },
        { title: '解决上传被拒', text: '很多表单、CMS 媒体库和服务仍只允许 JPG/PNG。在这里转成 JPG，即可无报错上传到任何平台。' },
        { title: '画质可调', text: '画质滑块直接对应 JPEG 压缩强度。90 以上几乎无损，调低则得到更小的分享版本。' },
        { title: '批量转换', text: '一次转换整个文件夹，全部打包成 ZIP 下载。' },
      ],
      stepsTitle: '如何把图片转成 JPG',
      steps: [
        { name: '上传图片', text: '拖拽或点击添加 PNG、WebP、AVIF、HEIC 等图片，支持批量上传。' },
        { name: 'JPG 已默认选中', text: '调节画质滑块——照片建议 85-90；对保真要求高用 95 以上。' },
        { name: '保存前预览', text: '用滑块对比转换后的 JPG 与源文件，如平台有尺寸限制可顺便调整。' },
        { name: '下载', text: '逐个下载 JPG 或整批打包。原图从未离开你的设备。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: '转成 JPG 会降低画质吗？', a: 'JPG 是有损压缩，会重新压缩。画质 85-90 时照片看不出变化；想尽量减少可用 95 以上。PNG 截图和图形可能出现瑕疵，建议保留 PNG。' },
        { q: '透明区域怎么办？', a: 'JPG 没有 alpha 通道，透明区域会被平铺为纯色背景（默认白色）。透明重要时请改用 PNG 或 WebP。' },
        { q: '可以转哪些格式到 JPG？', a: '可将 PNG、WebP、AVIF、HEIC、BMP、GIF（首帧）、TIFF 转为 JPG，源格式自动识别。' },
        { q: '我的图片会被上传吗？', a: '绝不会。转换完全在浏览器内通过 Canvas 完成，文件从始至终留在你的设备上。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  png: {
    en: {
      h1: 'PNG Converter - Convert Any Image to PNG Free',
      badge: 'Free · No Uploads',
      intro: [
        'PNG is the lossless workhorse of image editing. It preserves every pixel exactly, supports full transparency, and opens in every editor without plugins. Convert to PNG whenever you need a re-editable, pixel-accurate master of an image.',
        'PixConvert converts images to PNG entirely in your browser. There is no upload step and no account - drag in JPG, WebP, AVIF, or BMP files and receive lossless PNGs in seconds. Transparency is preserved automatically, so logos, icons, and cut-outs keep their clean edges.',
      ],
      benefitsTitle: 'Why convert to PNG?',
      benefits: [
        { title: 'Truly lossless', text: 'PNG stores every pixel exactly. Converting to PNG adds no artifacts, and future re-saves will not degrade the image.' },
        { title: 'Transparency support', text: 'PNG’s alpha channel keeps transparent backgrounds for logos, icons, and overlays - something JPG cannot do.' },
        { title: 'Exact colors and text', text: 'PNG is ideal for screenshots, documents, diagrams, and UI where fidelity and sharp edges matter.' },
        { title: 'Edits anywhere', text: 'Every image editor, office suite, and design tool opens PNG. It is the safest hand-off format for any workflow.' },
      ],
      stepsTitle: 'How to convert images to PNG',
      steps: [
        { name: 'Upload your images', text: 'Drag and drop or browse for JPG, WebP, AVIF, BMP, or other images. Batch conversion is supported.' },
        { name: 'PNG output is preselected', text: 'No quality decisions needed - PNG is lossless. Optionally resize images for smaller dimensions.' },
        { name: 'Preview the result', text: 'The comparison slider shows the converted PNG. It should look identical to the source.' },
        { name: 'Download', text: 'Save files individually or as a ZIP archive. All processing happened locally in your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is converting to PNG lossless?', a: 'Yes. PNG encodes the decoded pixels exactly, so there is no additional quality loss. Note that if the source was already lossy (e.g., JPG), its existing artifacts are preserved, not removed.' },
        { q: 'Will the PNG be larger than my original?', a: 'Often yes. PNG prioritizes fidelity over compression, so a photographic source may grow 2-5x. That is the trade-off for a universally editable, lossless file.' },
        { q: 'Does transparency survive conversion?', a: 'Yes. PNG’s alpha channel is preserved, so transparent and semi-transparent regions stay exactly as they were.' },
        { q: 'Are my images uploaded anywhere?', a: 'No. Conversion runs entirely in your browser with Canvas. Your files never leave your device.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      h1: 'PNG 转换器 - 免费在线转换任意图片为 PNG',
      badge: '免费 · 文件不上传',
      intro: [
        'PNG 是图像编辑领域的主力无损格式：逐像素精确存储、支持完整透明、无需插件即可被所有编辑器打开。当你需要一张可反复编辑、像素级精确的图片母版时，就转成 PNG。',
        'PixConvert 完全在浏览器内把图片转成 PNG：没有上传步骤、无需注册——拖入 JPG、WebP、AVIF 或 BMP，几秒即可得到无损 PNG。透明背景自动保留，logo、图标和抠图的边缘干净无损。',
      ],
      benefitsTitle: '为什么要转成 PNG？',
      benefits: [
        { title: '真正的无损', text: 'PNG 逐像素精确存储，转换不引入任何瑕疵，以后的反复重存也不会劣化图像。' },
        { title: '支持透明', text: 'PNG 的 alpha 通道为 logo、图标和叠加素材保留透明背景——这是 JPG 做不到的。' },
        { title: '色彩与文字精确', text: 'PNG 适用于截图、文档、图表和 UI 等对保真与边缘锐利度有要求的场景。' },
        { title: '处处可编辑', text: '所有图像编辑器、办公软件和设计工具都打开 PNG，是任何工作流最稳妥的交接格式。' },
      ],
      stepsTitle: '如何把图片转成 PNG',
      steps: [
        { name: '上传图片', text: '拖拽或浏览选择 JPG、WebP、AVIF、BMP 等图片，支持批量转换。' },
        { name: 'PNG 已默认选中', text: '无需纠结画质——PNG 是无损的。如需更小尺寸可顺便调整。' },
        { name: '预览结果', text: '对比滑块显示转换后的 PNG，画面应与源文件完全一致。' },
        { name: '下载', text: '逐个保存或打包成 ZIP。所有处理都在你的浏览器本地完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: '转成 PNG 是无损的吗？', a: '是的。PNG 会精确编码解码后的像素，不引入额外画质损失。注意：如果源文件本身已有损（如 JPG），其原有瑕疵会被保留，无法消除。' },
        { q: 'PNG 会比原图大吗？', a: '常常如此。PNG 优先保真而非压缩，照片类源文件可能增大 2-5 倍。这是换取普遍可编辑无损文件的代价。' },
        { q: '转换后透明还在吗？', a: '在，PNG 的 alpha 通道被保留，透明与半透明区域原样不变。' },
        { q: '我的图片会被上传吗？', a: '不会。转换完全在浏览器内通过 Canvas 完成，文件从未离开你的设备。' },
      ],
      relatedTitle: '相关转换',
    },
  },
  svg: {
    en: {
      h1: 'SVG Converter - Convert Images to SVG Free',
      badge: 'Free · No Uploads',
      intro: [
        'SVG (Scalable Vector Graphics) is a vector format that stays razor sharp at any size - perfect for logos, icons, illustrations, and any artwork that must scale without pixelation. Unlike raster formats, an SVG describes shapes mathematically, so it never blurs when enlarged.',
        'PixConvert converts suitable images to SVG entirely in your browser. There are no uploads and no account - trace logos, icons, and simple graphics into clean vector paths, then download the result as a standard .svg file that drops straight into HTML, design tools, or print workflows. Complex photographs are better kept as WebP or AVIF.',
      ],
      benefitsTitle: 'Why convert to SVG?',
      benefits: [
        { title: 'Infinite scalability', text: 'SVG is vector-based, so it renders perfectly at any resolution - from a favicon to a billboard - with zero quality loss.' },
        { title: 'Tiny file sizes for graphics', text: 'A logo or icon as SVG is often a few kilobytes and stays sharp on every screen, including high-DPI displays.' },
        { title: 'Editable in design tools', text: 'SVG opens in Figma, Illustrator, Inkscape, and code editors. Tweak colors and shapes directly without re-exporting from a raster source.' },
        { title: 'Embeddable in HTML', text: 'SVG can be inlined directly into web pages, styled with CSS, and animated - ideal for crisp UI elements and icons.' },
      ],
      stepsTitle: 'How to convert images to SVG',
      steps: [
        { name: 'Upload a suitable image', text: 'Add a logo, icon, or simple illustration (PNG, JPG, or WebP). SVG tracing works best on flat, high-contrast graphics rather than photos.' },
        { name: 'Convert to vector', text: 'PixConvert traces the image into vector paths. Simple, solid-color artwork produces the cleanest result.' },
        { name: 'Preview the vector', text: 'Check the SVG against the original. Reduce detail if the path count is too high for your use case.' },
        { name: 'Download the SVG', text: 'Save the .svg file and drop it into your HTML, design tool, or print pipeline. Conversion ran entirely in your browser.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'When should I use SVG instead of PNG?', a: 'Use SVG for logos, icons, illustrations, and any graphic that must scale cleanly. Use PNG (or WebP/AVIF) for photographs and detailed raster images where vector tracing would bloat the file.' },
        { q: 'Can SVG convert photographs?', a: 'SVG tracing is designed for simple, flat artwork. Photographs produce huge, messy vector files, so keep photos as WebP or AVIF for the smallest, sharpest result.' },
        { q: 'Is SVG supported everywhere?', a: 'All modern browsers, design tools, and most printers support SVG. It is the standard vector format for the web.' },
        { q: 'Are my images uploaded to a server?', a: 'No. Conversion runs entirely in your browser. Your files never leave your device.' },
      ],
      relatedTitle: 'Related conversions',
    },
    zh: {
      h1: 'SVG 转换器 - 免费在线转换图片为 SVG',
      badge: '免费 · 文件不上传',
      intro: [
        'SVG（可缩放矢量图形）是一种矢量格式，在任何尺寸下都锐利清晰——非常适合 logo、图标、插画，以及任何必须无损放大的作品。与位图不同，SVG 用数学描述形状，放大永远不会模糊。',
        'PixConvert 完全在浏览器内把合适的图片转成 SVG：无上传、无注册——将 logo、图标和简单图形描摹为干净的矢量路径，然后下载为标准 .svg 文件，可直接嵌入 HTML、设计工具或印刷流程。复杂照片建议仍用 WebP 或 AVIF。',
      ],
      benefitsTitle: '为什么要转成 SVG？',
      benefits: [
        { title: '无限缩放', text: 'SVG 基于矢量，在任何分辨率下都完美渲染——从 favicon 到广告牌，零质量损失。' },
        { title: '图形体积极小', text: 'logo 或图标存为 SVG 往往只有几 KB，且在包括高分屏在内的每块屏幕上都很清晰。' },
        { title: '设计工具可直接编辑', text: 'SVG 能被 Figma、Illustrator、Inkscape 和代码编辑器打开，直接调整颜色和形状，无需从位图源重新导出。' },
        { title: '可嵌入 HTML', text: 'SVG 能直接内联进网页、用 CSS 样式化并动画化，是清晰 UI 元素与图标的理想选择。' },
      ],
      stepsTitle: '如何把图片转成 SVG',
      steps: [
        { name: '上传合适的图片', text: '添加 logo、图标或简单插画（PNG、JPG 或 WebP）。SVG 描摹在纯色、高对比的图形上效果最好，而非照片。' },
        { name: '转换为矢量', text: 'PixConvert 将图像描摹为矢量路径。简单、纯色的作品得到最干净的结果。' },
        { name: '预览矢量', text: '将 SVG 与原图对比。若路径数过多影响使用，可酌情降低细节。' },
        { name: '下载 SVG', text: '保存 .svg 文件并放入你的 HTML、设计工具或印刷流程。转换全程在浏览器内完成。' },
      ],
      faqTitle: '常见问题',
      faq: [
        { q: '什么时候用 SVG 而不是 PNG？', a: 'logo、图标、插画以及任何需要干净缩放的图形用 SVG；照片和细节丰富的位图请用 PNG（或 WebP/AVIF），矢量描摹会让文件臃肿。' },
        { q: 'SVG 能转换照片吗？', a: 'SVG 描摹专为简单、纯色作品设计。照片会产生巨大而杂乱的矢量文件，所以照片仍建议用 WebP 或 AVIF 以获得最小最清晰的结果。' },
        { q: 'SVG 处处都支持吗？', a: '所有现代浏览器、设计工具和大多数打印机都支持 SVG，是网页的标准矢量格式。' },
        { q: '我的图片会被上传吗？', a: '不会。转换完全在浏览器内完成，文件从未离开你的设备。' },
      ],
      relatedTitle: '相关转换',
    },
  },
};

/** Pick the content variant for the current language (zh → Chinese, others → English). */
export function getFormatContent(format: OutputFormat | string, language: string | undefined): FormatContentItem {
  const entry = FORMAT_CONTENT[format] || FORMAT_CONTENT.webp;
  return language?.toLowerCase().startsWith('zh') ? entry.zh : entry.en;
}
