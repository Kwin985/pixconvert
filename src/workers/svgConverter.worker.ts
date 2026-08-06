/**
 * SVG 矢量化转换 Web Worker
 *
 * 在后台线程执行 vtracer WASM 转换，避免阻塞主线程。
 * vtracer 使用与 PixConvert 桌面端相同的算法和参数体系。
 * wasm 文件从 public 目录加载，避免 Vite 在 Worker 中打包 wasm 的兼容性问题。
 */
import init, { convert_to_svg } from '../wasm/pkg/vtracer_wasm.js';

const WASM_URL = '/wasm/vtracer_wasm_bg.wasm';

let initialized = false;

async function ensureInit() {
  if (!initialized) {
    await init(WASM_URL);
    initialized = true;
  }
}

interface ConvertRequest {
  id: string;
  pixels: Uint8Array;
  width: number;
  height: number;
  quality: number;
}

interface ConvertResponse {
  id: string;
  success: boolean;
  svg?: string;
  error?: string;
}

self.onmessage = async (e: MessageEvent<ConvertRequest>) => {
  const { id, pixels, width, height, quality } = e.data;
  try {
    await ensureInit();
    const svgString = convert_to_svg(pixels, width, height, quality);
    const response: ConvertResponse = { id, success: true, svg: svgString };
    self.postMessage(response);
  } catch (error) {
    const response: ConvertResponse = {
      id,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(response);
  }
};
