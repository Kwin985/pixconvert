// GA4 自定义事件类型定义
export enum GAEvent {
  PAGE_VIEW = 'page_view',
  FILE_UPLOAD = 'file_upload',
  CONVERSION_COMPLETE = 'conversion_complete',
  CONVERSION_ERROR = 'conversion_error',
  DOWNLOAD_ALL = 'download_all',
  DOWNLOAD_SINGLE = 'download_single',
  CLEAR_ALL = 'clear_all',
  FORMAT_SELECT = 'format_select',
  SETTING_CHANGE = 'setting_change',
  THEME_TOGGLE = 'theme_toggle',
  LANGUAGE_CHANGE = 'language_change',
  COMPARE_IMAGE = 'compare_image',
}

// GA4 自定义事件参数
interface GTagParams {
  // 上传事件
  file_count?: number;
  total_size_bytes?: number;
  // 转换事件
  output_format?: string;
  quality?: number;
  scale?: number;
  mode?: string;
  size_reduction?: number;
  page?: string;
  // 下载事件
  download_type?: 'zip' | 'single';
  // 设置变更
  setting_name?: string;
  setting_value?: string | number;
  // 主题/语言
  theme?: string;
  language?: string;
  // 对比
  compare_format?: string;

  // GA4 标准参数
  page_title?: string;
  page_location?: string;
  page_path?: string;
  send_to?: string;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: GTagParams) => void;
    dataLayer?: unknown[];
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID || 'G-QNEE87XZTW';

function gtag(action: GAEvent, params?: GTagParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}

// 页面浏览
export function trackPageView(path: string, title: string) {
  gtag(GAEvent.PAGE_VIEW, {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    send_to: GA4_ID,
  });
}

// 文件上传
export function trackFileUpload(count: number, totalBytes: number) {
  gtag(GAEvent.FILE_UPLOAD, {
    file_count: count,
    total_size_bytes: totalBytes,
    send_to: GA4_ID,
  });
}

// 转换完成
export function trackConversion(params: {
  count: number;
  format: string;
  quality: number;
  scale: number;
  mode: string;
  totalOriginalBytes: number;
  totalConvertedBytes: number;
  page: string;
}) {
  const sizeReduction = params.totalOriginalBytes > 0
    ? Math.round((1 - params.totalConvertedBytes / params.totalOriginalBytes) * 100)
    : 0;
  gtag(GAEvent.CONVERSION_COMPLETE, {
    file_count: params.count,
    output_format: params.format,
    quality: params.quality,
    scale: params.scale,
    mode: params.mode,
    size_reduction: sizeReduction,
    page: params.page,
    send_to: GA4_ID,
  });
}

// 转换失败
export function trackConversionError(format: string, error: string) {
  gtag(GAEvent.CONVERSION_ERROR, {
    output_format: format,
    setting_name: 'error',
    setting_value: error,
    send_to: GA4_ID,
  });
}

// 下载全部
export function trackDownloadAll(count: number, format: string) {
  gtag(GAEvent.DOWNLOAD_ALL, {
    file_count: count,
    output_format: format,
    download_type: 'zip',
    send_to: GA4_ID,
  });
}

// 逐一下载
export function trackDownloadSingle(count: number, format: string) {
  gtag(GAEvent.DOWNLOAD_SINGLE, {
    file_count: count,
    output_format: format,
    download_type: 'single',
    send_to: GA4_ID,
  });
}

// 一键清空
export function trackClearAll(count: number) {
  gtag(GAEvent.CLEAR_ALL, {
    file_count: count,
    send_to: GA4_ID,
  });
}

// 格式选择
export function trackFormatSelect(format: string) {
  gtag(GAEvent.FORMAT_SELECT, {
    output_format: format,
    send_to: GA4_ID,
  });
}

// 设置变更
export function trackSettingChange(name: string, value: string | number) {
  gtag(GAEvent.SETTING_CHANGE, {
    setting_name: name,
    setting_value: value,
    send_to: GA4_ID,
  });
}

// 主题切换
export function trackThemeToggle(theme: string) {
  gtag(GAEvent.THEME_TOGGLE, {
    theme,
    send_to: GA4_ID,
  });
}

// 语言切换
export function trackLanguageChange(language: string) {
  gtag(GAEvent.LANGUAGE_CHANGE, {
    language,
    send_to: GA4_ID,
  });
}

// 图片对比
export function trackCompareImage(format: string) {
  gtag(GAEvent.COMPARE_IMAGE, {
    compare_format: format,
    send_to: GA4_ID,
  });
}