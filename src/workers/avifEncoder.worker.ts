/**
 * AVIF 编码 Web Worker
 *
 * 通过 pixconvert-core WASM（rav1e）执行真正的 AVIF 编码，
 * 与 PixConvert 桌面端 encode_avif_rgba 完全同一实现。
 * wasm 文件从 public 目录加载，避免 Vite 在 Worker 中打包 wasm 的兼容性问题。
 */
import init, { encode_avif } from '../wasm/pkg/pixconvert_core.js';

const WASM_URL = '/wasm/pixconvert_core_bg.wasm';

let initialized = false;

async function ensureInit() {
  if (!initialized) {
    await init(WASM_URL);
    initialized = true;
  }
}

interface EncodeRequest {
  id: string;
  pixels: Uint8Array;
  width: number;
  height: number;
  quality: number;
}

interface EncodeResponse {
  id: string;
  success: boolean;
  data?: Uint8Array;
  error?: string;
}

// 串行队列：WASM 中 rav1e 为单线程编译，并发编码无加速收益且使多张
// 大图的像素与编码缓冲同时驻留，导致内存暴涨。所有请求按序执行
let encodeQueue: Promise<void> = Promise.resolve();

self.onmessage = (e: MessageEvent<EncodeRequest>) => {
  const { id, pixels, width, height, quality } = e.data;
  encodeQueue = encodeQueue
    .then(async () => {
      await ensureInit();
      const avifBytes = encode_avif(pixels, width, height, quality);
      const response: EncodeResponse = { id, success: true, data: avifBytes };
      self.postMessage(response);
    })
    .catch((error: unknown) => {
      const response: EncodeResponse = {
        id,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
      self.postMessage(response);
    });
};
