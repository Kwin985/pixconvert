import type { OutputFormat } from '@/types';

export interface ConversionPair {
  slug: string;
  from: string;
  to: string;
  outputFormat: OutputFormat;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  steps: { name: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const CONVERSION_PAIRS: ConversionPair[] = [
  {
    slug: 'jpg-to-webp',
    from: 'JPG',
    to: 'WebP',
    outputFormat: 'webp',
    title: 'Convert JPG to WebP Online Free - Smaller Files, Same Quality | PixConvert',
    description:
      'Convert JPG to WebP free in your browser. WebP files are 25-34% smaller than JPG with the same visual quality. Batch conversion, no uploads, no watermark.',
    h1: 'JPG to WebP Converter',
    intro: [
      'Converting JPG to WebP is the fastest way to make your website load quicker without sacrificing image quality. WebP is Google\'s modern image format that produces files 25-34% smaller than comparable JPG images, which means less bandwidth, faster page loads, and better Core Web Vitals scores. Since 2020 every major browser - Chrome, Firefox, Safari, and Edge - supports WebP, so there is no longer any compatibility reason to stick with JPG for web images.',
      'With PixConvert you can convert as many JPG files to WebP as you want, entirely inside your browser. Your photos are processed locally with HTML5 Canvas and never uploaded to any server, so private images stay private. Drag your files in, let the quality slider guide you (80 is the sweet spot for most photos), and download the results individually or as a ZIP archive.',
    ],
    benefits: [
      { title: '25-34% smaller files', text: 'At the same visual quality, WebP typically cuts JPG file sizes by a quarter to a third. On an image-heavy page that alone can save hundreds of kilobytes per visitor.' },
      { title: 'Better SEO and Core Web Vitals', text: 'Google uses LCP as a ranking signal. Serving WebP instead of JPG directly reduces LCP on image-led pages, which is one of the easiest performance wins available.' },
      { title: 'Transparency and animation support', text: 'Unlike JPG, WebP supports an alpha channel (transparency) and animation, so one format can replace both JPG and GIF across your site.' },
      { title: 'Universal browser support', text: 'Safari 14+, Chrome, Firefox, and Edge all decode WebP. For websites there are no practical compatibility concerns left.' },
    ],
    steps: [
      { name: 'Add your JPG files', text: 'Drag and drop your JPG images into the upload area, or click to browse. Batch upload is supported - select as many files as you need.' },
      { name: 'Choose WebP as the output', text: 'The output format is preset to WebP on this page. Optionally adjust the quality slider or pick a preset such as Balanced or Max Quality.' },
      { name: 'Preview the result', text: 'Use the slider comparison to inspect the converted WebP next to the original JPG before committing. Resize options are available if needed.' },
      { name: 'Download', text: 'Download files one by one, or click "Download All (ZIP)" to grab every converted WebP in a single archive. Nothing was ever uploaded.' },
    ],
    faq: [
      { q: 'Is converting JPG to WebP lossless?', a: 'No - both JPG and WebP use lossy compression by default, so converting from JPG to WebP re-encodes the image. In practice, at quality 80+ the visual difference is imperceptible while the file gets significantly smaller. If you need pixel-perfect output, use the lossless mode in the settings panel.' },
      { q: 'Will my images be uploaded to a server?', a: 'No. PixConvert performs the entire conversion inside your browser using Canvas and WebCodecs. Your files never leave your device, which makes it safe for private or confidential images.' },
      { q: 'What quality setting should I use for WebP?', a: 'For photos and general web images, quality 80 is the sweet spot between size and quality. Use 90+ for hero images or portfolios, and the Extreme Compression preset when file size matters more than fidelity, e.g. thumbnails.' },
      { q: 'Can I convert many JPG files at once?', a: 'Yes. PixConvert is built for batch conversion - drop an entire folder of JPGs and every file is converted automatically. Download everything together as a ZIP.' },
      { q: 'Does WebP work everywhere JPG does?', a: 'All modern browsers support WebP. A few older desktop applications (some legacy photo editors and older versions of Windows Photo Viewer) may not open WebP, in which case keep the original JPG for those workflows.' },
    ],
  },
  {
    slug: 'png-to-webp',
    from: 'PNG',
    to: 'WebP',
    outputFormat: 'webp',
    title: 'Convert PNG to WebP Online Free - Up to 26% Smaller | PixConvert',
    description:
      'Convert PNG to WebP free in your browser. WebP lossless is up to 26% smaller than PNG, and lossy WebP is even smaller. Batch conversion, no uploads.',
    h1: 'PNG to WebP Converter',
    intro: [
      'PNG files are loved for their lossless compression and transparency support, but they are often huge - screenshots and UI graphics can easily reach several megabytes. Converting PNG to WebP shrinks those files dramatically: WebP lossless is up to 26% smaller than PNG for the same pixels, and if you can accept a tiny, invisible quality trade-off, lossy WebP with alpha is smaller still.',
      'PixConvert converts PNG to WebP entirely in your browser. There is no upload step, no queue, and no file size sign-up wall - drag in a single logo or a hundred screenshots and get optimized WebP files in seconds. Transparency is preserved automatically, so rounded corners, shadows, and icon alpha channels survive the conversion intact.',
    ],
    benefits: [
      { title: 'Up to 26% smaller, losslessly', text: 'WebP lossless beats PNG on virtually every image. If you ship lots of screenshots, diagrams, or UI assets, the savings add up fast across a documentation site or app bundle.' },
      { title: 'Transparency preserved', text: 'WebP supports the same alpha channel as PNG. Icons, logos, and cut-outs keep their transparent backgrounds after conversion.' },
      { title: 'Faster sites and apps', text: 'Replacing PNG assets with WebP reduces page weight and app bundle size with zero visual change - one of the cheapest performance optimizations available.' },
      { title: 'Lossy option for maximum savings', text: 'Need even smaller files? Switch to lossy mode with alpha support to shrink PNG-style graphics by 60-90% while keeping edges clean.' },
    ],
    steps: [
      { name: 'Upload your PNG files', text: 'Drag and drop one or more PNG images, or click the upload area to select files. Batch conversion of entire sets is supported.' },
      { name: 'Confirm WebP output and mode', text: 'WebP is preselected. Choose lossless mode to keep the image pixel-identical, or lossy mode with a high quality value for the smallest possible file.' },
      { name: 'Check transparency in the preview', text: 'The comparison slider shows the original next to the converted result, so you can confirm alpha edges and fine details look right.' },
      { name: 'Download your WebP files', text: 'Save individual files or get everything at once as a ZIP archive. All processing happened locally in your browser.' },
    ],
    faq: [
      { q: 'Does PNG to WebP conversion keep transparency?', a: 'Yes. WebP fully supports the alpha channel, so transparent backgrounds in logos, icons, and cut-out graphics are preserved exactly. Lossless mode is bit-exact; lossy mode keeps clean alpha edges with slightly higher compression.' },
      { q: 'Is WebP really smaller than PNG?', a: 'Google\'s benchmarks put WebP lossless at about 26% smaller than PNG on average. For lossy conversion of screenshots and interface graphics the reduction is often far larger - frequently 60-90%.' },
      { q: 'Should I use lossless or lossy mode?', a: 'Use lossless when the PNG contains text, thin lines, or exact colors that must not shift - for example technical diagrams. Use lossy (quality 80-90) for photographs or soft-edged graphics where small compression artifacts are invisible.' },
      { q: 'Will WebP images work in Photoshop and other editors?', a: 'Recent versions of Photoshop, GIMP, Figma, and all major design tools open WebP natively. Very old software may need a plugin, in which case keep the original PNG as your editing master.' },
      { q: 'Is there a file limit or upload wait?', a: 'There is no server and therefore no upload wait at all - conversion speed depends only on your device. Batch-convert hundreds of PNGs without creating an account.' },
    ],
  },
  {
    slug: 'webp-to-jpg',
    from: 'WebP',
    to: 'JPG',
    outputFormat: 'jpg',
    title: 'Convert WebP to JPG Online Free - Full Compatibility | PixConvert',
    description:
      'Convert WebP to JPG free in your browser. Fix compatibility with older apps, CMS platforms, and printers. Batch conversion, quality control, no uploads.',
    h1: 'WebP to JPG Converter',
    intro: [
      'WebP is great for the web, but not every tool speaks it yet. Older photo editors, some content management systems, certain Android gallery apps, online forms, and photo printing services still reject .webp files. Converting WebP to JPG gives you maximum compatibility: JPG opens everywhere, from 20-year-old software to the printer around the corner.',
      'PixConvert converts WebP to JPG right inside your browser - the files are decoded and re-encoded locally, never uploaded. You control the quality with a simple slider (90+ keeps images visually identical), and batch conversion handles entire folders of WebP images in one pass. Transparent areas in WebP files are flattened onto white or a background color of your choice, since JPG does not support transparency.',
    ],
    benefits: [
      { title: 'Opens everywhere', text: 'JPG remains the most universally supported image format on earth - every operating system, browser, editor, CMS, social network, and print shop handles it.' },
      { title: 'Fix upload rejections', text: 'Many websites and forms still whitelist only JPG/PNG. Convert your WebP files here and upload them anywhere without errors.' },
      { title: 'Adjustable quality', text: 'Choose quality 95+ for near-identical output, or lower values when file size matters more. The live preview shows the result before you download.' },
      { title: 'Batch processing', text: 'Convert an entire library of WebP images in one go and download everything as a single ZIP archive.' },
    ],
    steps: [
      { name: 'Drop in your WebP files', text: 'Drag your .webp images into the upload area or click to select them. You can add as many files as you like.' },
      { name: 'JPG output is preselected', text: 'This page locks the output format to JPG. Set the quality slider - 90 or above is recommended to avoid visible compression artifacts.' },
      { name: 'Preview before saving', text: 'Compare the converted JPG against the original WebP with the slider view, and resize if the target platform has dimension limits.' },
      { name: 'Download as files or ZIP', text: 'Download each JPG individually or grab the whole batch as a ZIP. Your originals were never uploaded anywhere.' },
    ],
    faq: [
      { q: 'Will converting WebP to JPG lose quality?', a: 'Some re-compression is unavoidable since JPG is lossy, but at quality 90+ the difference is visually imperceptible. If you want minimal loss, set quality to 95-100; if you want smaller files for sharing, 80-85 works well.' },
      { q: 'What happens to transparency in the WebP file?', a: 'JPG has no alpha channel, so transparent areas are flattened to a solid background (white by default). If you need to keep transparency, convert to PNG instead.' },
      { q: 'Why do some websites refuse WebP uploads?', a: 'Many platforms still validate uploads against a fixed list of formats that predates WebP\'s adoption. Until they update, converting to JPG is the quickest workaround.' },
      { q: 'Can I convert animated WebP files?', a: 'PixConvert converts the first frame of an animated WebP to a static JPG. For the full animation you need GIF or video output, which is a different tool.' },
      { q: 'Are my WebP files uploaded to your server?', a: 'Never. Conversion runs entirely in your browser via Canvas. The files stay on your device from start to finish.' },
    ],
  },
  {
    slug: 'webp-to-png',
    from: 'WebP',
    to: 'PNG',
    outputFormat: 'png',
    title: 'Convert WebP to PNG Online Free - Lossless & Transparent | PixConvert',
    description:
      'Convert WebP to PNG free in your browser. Lossless output, transparency preserved, perfect for editing workflows. Batch conversion, no uploads.',
    h1: 'WebP to PNG Converter',
    intro: [
      'Need to edit a WebP image, keep its transparency, or hand it to a tool that only accepts PNG? Converting WebP to PNG gives you a fully lossless, universally editable file. PNG is the standard interchange format for design tools, screenshots, and pixel-accurate work, and every editor from MS Paint to Photoshop opens it without plugins.',
      'PixConvert\'s WebP to PNG converter runs 100% in your browser. Drop in one file or a hundred, and each is decoded and re-encoded locally in seconds. Transparency is preserved exactly, so icons, logos, and cut-outs keep their alpha channel. Because PNG is lossless, there are no quality settings to worry about - the pixels you get are the pixels that were there.',
    ],
    benefits: [
      { title: 'Truly lossless', text: 'PNG stores every pixel exactly. Converting WebP to PNG introduces zero additional quality loss, making it ideal as an intermediate step before editing.' },
      { title: 'Transparency kept', text: 'Alpha channels are transferred 1:1. Semi-transparent shadows and anti-aliased edges in WebP remain identical in the PNG output.' },
      { title: 'Editable anywhere', text: 'PNG is accepted by every image editor, office suite, and design tool. It is the safest format to hand to collaborators or downstream tools.' },
      { title: 'Batch-friendly', text: 'Queue up entire folders of WebP files and download all converted PNGs together as a ZIP archive.' },
    ],
    steps: [
      { name: 'Add WebP files', text: 'Drag and drop your .webp images or click the upload area to browse. Multiple files are welcome - they will be queued automatically.' },
      { name: 'PNG is preselected', text: 'The output format is locked to PNG on this page. Optionally resize the images if you need smaller dimensions.' },
      { name: 'Verify in the preview', text: 'Use the before/after slider to check the conversion. Since PNG is lossless, the images should look identical to the source.' },
      { name: 'Download', text: 'Save individual PNGs or download the full batch as a ZIP. All processing happened on your device.' },
    ],
    faq: [
      { q: 'Is WebP to PNG conversion lossless?', a: 'The conversion itself is lossless - PNG stores the decoded pixels exactly. The only caveat is if the source WebP was saved with heavy lossy compression, those artifacts are already in the image and will be preserved, not created.' },
      { q: 'Will the PNG file be bigger than the WebP?', a: 'Almost certainly yes - that is the trade-off. PNG\'s lossless compression is less efficient than WebP. Expect 2-10x larger files, which is the price of universal editability and pixel-exact output.' },
      { q: 'Does transparency survive the conversion?', a: 'Yes, fully. The alpha channel is copied unchanged, so transparent and semi-transparent regions are identical in the PNG.' },
      { q: 'Why would I choose PNG over JPG for a WebP conversion?', a: 'Choose PNG when you need transparency, exact colors (screenshots, UI, diagrams), or plan to edit and re-save repeatedly - JPG degrades with every re-save, PNG does not.' },
      { q: 'Do I need to install anything?', a: 'No. PixConvert works entirely in your browser with no installs, accounts, or uploads. Just open the page and drop your files.' },
    ],
  },
  {
    slug: 'jpg-to-avif',
    from: 'JPG',
    to: 'AVIF',
    outputFormat: 'avif',
    title: 'Convert JPG to AVIF Online Free - 50% Smaller Images | PixConvert',
    description:
      'Convert JPG to AVIF free in your browser. AVIF is ~50% smaller than JPG at the same quality - the most efficient image format today. No uploads.',
    h1: 'JPG to AVIF Converter',
    intro: [
      'AVIF (AV1 Image File Format) is the most efficient image format in mainstream use today. Convert a JPG to AVIF and you can typically cut the file size by around 50% at visually identical quality - roughly twice the saving of WebP. For a website serving thousands of images, switching from JPG to AVIF can halve your image bandwidth overnight.',
      'PixConvert encodes AVIF entirely in your browser using WebCodecs, so nothing is uploaded and conversion is instant. Batch-convert your JPG library, fine-tune quality with the slider, and compare results with the before/after preview. All modern browsers - Chrome, Firefox, Safari 16+, Edge - decode AVIF, making it a safe default for web delivery in 2026.',
    ],
    benefits: [
      { title: 'About 50% smaller than JPG', text: 'AV1\'s codec efficiency far exceeds JPEG\'s 30-year-old algorithm. At the same visual quality, AVIF files are routinely half the size.' },
      { title: 'Better than WebP compression', text: 'AVIF beats even WebP by a wide margin at low and medium bitrates, and supports HDR, 10/12-bit color, and wide gamut - features JPG cannot represent at all.' },
      { title: 'Core Web Vitals boost', text: 'Smaller hero images mean faster LCP. AVIF is the single most effective format change you can make for page speed today.' },
      { title: 'Local, private, instant', text: 'Encoding happens on your device with no server round-trip. Private photos stay private, and there is no queue or upload limit.' },
    ],
    steps: [
      { name: 'Upload your JPG images', text: 'Drag and drop JPG files or click to browse. Batch upload as many images as you need - every file is processed automatically.' },
      { name: 'AVIF output is preselected', text: 'Set quality via the slider or presets. Around quality 50-60, AVIF already matches or exceeds the visual quality of a quality-80 JPG.' },
      { name: 'Compare with the preview', text: 'The slider comparison shows original and converted side by side. AVIF\'s efficiency means you can usually lower quality further than with WebP.' },
      { name: 'Download', text: 'Save files individually or as a ZIP archive. Conversion happened entirely in your browser.' },
    ],
    faq: [
      { q: 'Is AVIF really smaller than WebP?', a: 'Yes, generally by 20-30% at equivalent quality, and the gap widens at lower bitrates. If maximum compression is the goal, AVIF is the current best choice; WebP remains a strong fallback.' },
      { q: 'Which browsers support AVIF?', a: 'Chrome 85+, Firefox 93+, Edge, Opera, and Safari 16+ all decode AVIF. As of 2026 that covers well over 95% of global browser usage.' },
      { q: 'Why does AVIF encoding take longer than WebP?', a: 'AV1 compression is computationally heavier. In-browser encoding uses hardware acceleration where available; on older devices expect a few seconds per image. Batch conversion runs each file automatically.' },
      { q: 'Does converting JPG to AVIF lose quality?', a: 'Both formats are lossy, so a re-encode happens, but AVIF\'s modern codec preserves detail much better per byte. At moderate quality settings the output is typically indistinguishable from the source.' },
      { q: 'Is there a size limit per image?', a: 'No server-side limits exist because no server is involved. Practical limits come from your device memory - images of tens of megapixels convert fine on a typical laptop.' },
    ],
  },
  {
    slug: 'png-to-avif',
    from: 'PNG',
    to: 'AVIF',
    outputFormat: 'avif',
    title: 'Convert PNG to AVIF Online Free - Lossless Compression | PixConvert',
    description:
      'Convert PNG to AVIF free in your browser. AVIF lossless beats PNG compression, and lossy AVIF shrinks graphics dramatically. Transparency supported.',
    h1: 'PNG to AVIF Converter',
    intro: [
      'PNG graphics - screenshots, icons, diagrams, logos - are often the heaviest assets on a page. Converting them to AVIF delivers huge savings: AVIF lossless consistently out-compresses PNG, and lossy AVIF can shrink graphic content by 70-90% while keeping text and edges razor sharp. AVIF also supports full alpha transparency, so your cut-outs and overlays keep their clean edges.',
      'PixConvert converts PNG to AVIF locally in your browser. There is no upload, no account, and no watermark - drag in your files, choose lossless or lossy mode, and download the results. The comparison preview lets you verify that fine text and thin lines survive compression before you commit.',
    ],
    benefits: [
      { title: 'Lossless that beats PNG', text: 'In lossless mode AVIF packs the same pixels into a smaller file than PNG, typically 10-30% smaller. Zero visual change, pure savings.' },
      { title: 'Dramatic lossy savings', text: 'For screenshots and UI graphics, lossy AVIF at quality 60-80 often looks identical while cutting file size by an order of magnitude.' },
      { title: 'Transparency included', text: 'Like PNG, AVIF supports 8-bit alpha. Icons and composited graphics keep their transparency after conversion.' },
      { title: 'Sharp text and edges', text: 'AV1\'s intra prediction handles flat colors, text, and hard edges exceptionally well - exactly what PNG-style content is made of.' },
    ],
    steps: [
      { name: 'Add PNG files', text: 'Drag and drop your PNG images or click to select. Batch processing handles entire folders in one run.' },
      { name: 'Pick lossless or lossy', text: 'Use lossless mode for pixel-perfect output at moderate savings, or lossy mode (quality 60-80) for maximum compression of screenshots and graphics.' },
      { name: 'Inspect the result', text: 'Zoom into the comparison preview to confirm text legibility and edge quality, especially at aggressive quality settings.' },
      { name: 'Download your AVIF files', text: 'Save individually or as one ZIP. Nothing left your device during the whole process.' },
    ],
    faq: [
      { q: 'Is AVIF lossless smaller than PNG lossless?', a: 'Yes, on virtually all real-world images AVIF lossless produces smaller files than PNG, typically 10-30% smaller, with identical pixel data.' },
      { q: 'Will small text stay readable?', a: 'In lossless mode, always. In lossy mode, AVIF handles text remarkably well, but check the preview - if you see ringing around tiny text, raise the quality or switch to lossless.' },
      { q: 'Does AVIF keep PNG transparency?', a: 'Yes. AVIF supports a full alpha channel, and PixConvert preserves it during conversion.' },
      { q: 'AVIF or WebP for PNG replacement?', a: 'AVIF compresses better, especially for graphics and screenshots. WebP has marginally broader support in very old browsers, but for modern audiences AVIF is the stronger default.' },
      { q: 'Can I convert back from AVIF to PNG later?', a: 'Yes - use the AVIF to PNG converter on this site. If you used lossless mode, the round-trip is pixel-perfect; lossy conversions cannot recover information that was discarded.' },
    ],
  },
  {
    slug: 'avif-to-jpg',
    from: 'AVIF',
    to: 'JPG',
    outputFormat: 'jpg',
    title: 'Convert AVIF to JPG Online Free - Works Everywhere | PixConvert',
    description:
      'Convert AVIF to JPG free in your browser. Solve compatibility with older apps, CMSs, and services that don\'t accept AVIF. Batch, no uploads.',
    h1: 'AVIF to JPG Converter',
    intro: [
      'AVIF is efficient but still new enough that plenty of software refuses it: older operating systems, some CMS media libraries, online forms, photo printers, and messaging apps. Converting AVIF to JPG produces a file that opens literally everywhere - it is the universal compatibility format, supported by every device and application made in the last 25 years.',
      'With PixConvert, AVIF to JPG conversion happens entirely in your browser. Drop in your .avif files and receive JPGs in seconds - batch conversion included. Use the quality slider to balance fidelity against file size (90+ for archival copies), and flatten any transparency onto a solid background automatically, since JPG has no alpha channel.',
    ],
    benefits: [
      { title: 'Universal compatibility', text: 'Every OS, browser, editor, CMS, social platform, and print service handles JPG. If a tool rejects AVIF, this conversion fixes it.' },
      { title: 'Quality control', text: 'A simple slider maps to the JPEG quality factor. Choose 90-100 for near-identical copies, lower for shareable smaller files.' },
      { title: 'Batch conversion', text: 'Convert whole folders of AVIF images in one pass and download everything as a ZIP archive.' },
      { title: 'Private by design', text: 'Files are decoded and re-encoded on your device. No uploads, no server storage, no retention - nothing to worry about.' },
    ],
    steps: [
      { name: 'Upload AVIF files', text: 'Drag your .avif images into the upload zone or click to browse. Add as many as you need.' },
      { name: 'JPG is preselected', text: 'Adjust the quality slider if needed - 90+ is recommended for visually lossless results.' },
      { name: 'Preview the output', text: 'Check the comparison slider to confirm the converted JPG matches your expectations before downloading.' },
      { name: 'Download files or ZIP', text: 'Grab individual JPGs or the entire batch at once. Your AVIF originals never left your device.' },
    ],
    faq: [
      { q: 'Why won\'t my application open AVIF files?', a: 'AVIF decoding requires recent software. Windows 10 before 2023, older macOS versions, many CMS platforms, and lots of desktop apps lack AVIF support. Converting to JPG sidesteps the problem entirely.' },
      { q: 'Does AVIF to JPG reduce quality?', a: 'A lossy re-encode is involved, but at quality 90+ it is visually undetectable. The AVIF source\'s existing compression artifacts are simply carried over, not amplified noticeably.' },
      { q: 'What happens to transparency?', a: 'JPG cannot store transparency, so transparent pixels are flattened to a background color. If transparency matters, convert to PNG instead.' },
      { q: 'Will the JPG be bigger than the AVIF?', a: 'Yes, typically 2-4x bigger. That is the trade-off for universal compatibility - JPG\'s codec is far less efficient than AV1.' },
      { q: 'Can I convert AVIF without installing anything?', a: 'Yes. PixConvert decodes AVIF natively in your browser - no installs, extensions, or uploads required.' },
    ],
  },
  {
    slug: 'avif-to-png',
    from: 'AVIF',
    to: 'PNG',
    outputFormat: 'png',
    title: 'Convert AVIF to PNG Online Free - Lossless Output | PixConvert',
    description:
      'Convert AVIF to PNG free in your browser. Lossless, transparency-preserving output ready for editing. Batch conversion, no uploads, no sign-up.',
    h1: 'AVIF to PNG Converter',
    intro: [
      'When you need to edit an AVIF image, composite it into a design, or guarantee pixel-exact output, convert it to PNG. PNG is the lossless workhorse of image editing - every tool accepts it, and re-saving it never degrades quality. This converter decodes your AVIF files in the browser and writes PNG output with full alpha transparency preserved.',
      'PixConvert requires no uploads and no accounts: your AVIF files are processed locally with WebCodecs and Canvas. Batch-convert entire sets, optionally resize, and download the results as individual files or a single ZIP. Because PNG is lossless, what you see in the comparison preview is exactly what you get.',
    ],
    benefits: [
      { title: 'Zero further quality loss', text: 'PNG is lossless, so the conversion adds no artifacts. Existing AVIF compression is unchanged, and future re-saves won\'t degrade the file.' },
      { title: 'Transparency preserved', text: 'AVIF alpha channels are transferred intact to PNG, keeping transparent and semi-transparent regions exactly as authored.' },
      { title: 'Editor-ready', text: 'Photoshop, GIMP, Figma, Affinity, Paint.NET - every editor opens PNG. It is the safest hand-off format for any workflow.' },
      { title: 'Fast and private', text: 'Conversion runs on your device in seconds per image, with no server involvement at any step.' },
    ],
    steps: [
      { name: 'Drop in AVIF files', text: 'Drag and drop your .avif images or click the upload area to select files. Multiple files queue automatically.' },
      { name: 'PNG output is locked in', text: 'No quality decisions needed - PNG is lossless. Optionally resize images for smaller dimensions.' },
      { name: 'Verify with the preview', text: 'The slider comparison confirms the decoded output. Transparency and edges should match the source exactly.' },
      { name: 'Download', text: 'Save PNGs individually or as a ZIP archive. Processing stayed 100% local.' },
    ],
    faq: [
      { q: 'Is the AVIF to PNG conversion lossless?', a: 'Yes. PNG encodes the decoded AVIF pixels exactly. Note that if the source AVIF was saved lossily, its artifacts are part of the image and will be carried over - they cannot be removed retroactively.' },
      { q: 'Why is the PNG larger than my AVIF?', a: 'AV1 compression is far more efficient than PNG\'s. Expect 2-10x growth, which is normal and is the cost of a universally editable, lossless file.' },
      { q: 'Does transparency survive?', a: 'Yes - alpha is copied 1:1 from AVIF to PNG.' },
      { q: 'Can I batch convert AVIF files here?', a: 'Absolutely. Add as many files as you like; each is converted automatically and can be downloaded together in one ZIP.' },
      { q: 'Which AVIF features are not supported in PNG?', a: 'Animation and HDR/10-bit color depth are PNG limitations - animated AVIFs convert their first frame, and HDR sources are tone-mapped to 8-bit.' },
    ],
  },
  {
    slug: 'jpg-to-png',
    from: 'JPG',
    to: 'PNG',
    outputFormat: 'png',
    title: 'Convert JPG to PNG Online Free - Lossless & Editable | PixConvert',
    description:
      'Convert JPG to PNG free in your browser. Lossless output for editing, archiving, and transparency overlays. Batch conversion, no uploads.',
    h1: 'JPG to PNG Converter',
    intro: [
      'Converting JPG to PNG makes sense whenever you need a lossless, re-editable master copy of an image. JPG degrades a little every time it is saved; PNG never does. Convert once to PNG and you can crop, annotate, watermark, and re-save as many times as you like without any further generational loss.',
      'PixConvert performs the JPG to PNG conversion entirely in your browser - no uploads, no watermark, no sign-up. Batch conversion handles whole folders at once, and optional resizing lets you create specific dimensions in the same pass. Note that PNG files will be larger than the source JPGs, since PNG prioritizes fidelity over compression ratio.',
    ],
    benefits: [
      { title: 'Stop generation loss', text: 'Every JPG re-save recompresses the image. PNG is lossless, so once converted, future edits and re-saves keep the image pixel-identical.' },
      { title: 'Transparency-ready workflow', text: 'PNG supports alpha, so you can erase backgrounds or add transparent overlays after converting - impossible with JPG.' },
      { title: 'Exact colors', text: 'PNG stores pixels precisely, making it the right choice for screenshots, documents, medical or technical imagery where fidelity matters.' },
      { title: 'Batch and resize', text: 'Convert entire folders and optionally resize in the same operation - useful for preparing assets for design tools.' },
    ],
    steps: [
      { name: 'Upload JPG files', text: 'Drag and drop your JPG images, or click the upload area to browse. Add as many as you need.' },
      { name: 'PNG output is preselected', text: 'No quality slider needed - PNG is lossless. Optionally enable resizing if you need specific dimensions.' },
      { name: 'Preview the result', text: 'The comparison view shows the converted PNG. It should look identical to the JPG source.' },
      { name: 'Download', text: 'Save files individually or download the batch as a ZIP. Everything stayed on your device.' },
    ],
    faq: [
      { q: 'Will converting JPG to PNG improve quality?', a: 'No - conversion cannot recover detail already lost to JPG compression. PNG preserves the current state exactly and prevents further loss on future edits, but it cannot undo existing artifacts.' },
      { q: 'Why is the PNG bigger than my JPG?', a: 'PNG\'s lossless compression stores more information than JPG\'s lossy format, so files typically grow 2-5x. That is the price of pixel-exact storage and editability.' },
      { q: 'Can I add transparency to a JPG this way?', a: 'Converting to PNG gives the file alpha capability, but the JPG source has no transparency data - the background is baked in. You would erase it in an editor after conversion.' },
      { q: 'When should I keep JPG instead?', a: 'For photographs delivered to users, JPG (or WebP/AVIF) is usually better: smaller files with no visible difference. PNG shines for editing masters, screenshots, and graphics with text or sharp edges.' },
      { q: 'Is there any upload or privacy risk?', a: 'None. The conversion happens locally in your browser; the images never leave your computer.' },
    ],
  },
  {
    slug: 'png-to-jpg',
    from: 'PNG',
    to: 'JPG',
    outputFormat: 'jpg',
    title: 'Convert PNG to JPG Online Free - Smaller, Shareable Files | PixConvert',
    description:
      'Convert PNG to JPG free in your browser. Shrink large PNG files for sharing, email, and uploads. Batch conversion, quality slider, no uploads.',
    h1: 'PNG to JPG Converter',
    intro: [
      'PNG files are wonderful for fidelity and terrible for file size. Converting PNG to JPG typically cuts file size by 50-80%, making images far easier to email, upload to size-limited forms, and store in bulk. JPG is accepted by every platform, app, and service in existence, so it is the natural target when compatibility and compactness matter more than pixel-perfect fidelity.',
      'PixConvert converts PNG to JPG entirely inside your browser. Drag in your files, set the quality slider (85-90 is a great default for photos), and download individually or as a ZIP. Transparent areas are flattened onto a white background automatically, since JPG cannot store transparency - the preview shows exactly how the result will look.',
    ],
    benefits: [
      { title: '50-80% smaller files', text: 'JPG\'s lossy compression is far more efficient for photographic content. Big screenshots and exports shrink dramatically.' },
      { title: 'Pass strict upload limits', text: 'Forms, portals, and email attachments with size caps become painless once heavy PNGs become compact JPGs.' },
      { title: 'Controlled quality', text: 'The quality slider gives you direct control over the size/fidelity trade-off, with a live comparison preview before you commit.' },
      { title: 'Fast local batch conversion', text: 'No upload queues: hundreds of PNGs convert on your device, and the whole batch downloads as one ZIP.' },
    ],
    steps: [
      { name: 'Add your PNG files', text: 'Drag and drop PNG images or click to browse. Batch uploads are fully supported.' },
      { name: 'JPG is preselected', text: 'Adjust the quality slider - 85-90 is ideal for photos; use 95+ if fidelity is critical.' },
      { name: 'Check the preview', text: 'Use the comparison slider to confirm quality, and note that transparent backgrounds become white.' },
      { name: 'Download your JPGs', text: 'Save individually or as a ZIP archive. Conversion was 100% local to your browser.' },
    ],
    faq: [
      { q: 'Does PNG to JPG conversion lose quality?', a: 'JPG is lossy, so some information is discarded - at quality 85-90 the difference is invisible for photographs, but artifacts can appear around sharp text and hard edges. Use 95+ or keep PNG for screenshots and graphics.' },
      { q: 'What happens to transparent backgrounds?', a: 'JPG has no alpha channel, so transparency is flattened to white (or the chosen background). If transparency is essential, stay with PNG or convert to WebP instead.' },
      { q: 'How much smaller will the JPG be?', a: 'For photographic content, typically 50-80% smaller. For flat graphics and screenshots the savings are smaller, and PNG lossless formats may actually be the better choice there.' },
      { q: 'Can I choose the output quality?', a: 'Yes - the quality slider maps directly to JPEG compression strength, and the preview shows the trade-off before you download.' },
      { q: 'Are files uploaded anywhere?', a: 'No. All conversion happens in your browser. Files never leave your device.' },
    ],
  },
];

export function getPairBySlug(slug: string): ConversionPair | undefined {
  return CONVERSION_PAIRS.find((p) => p.slug === slug);
}
