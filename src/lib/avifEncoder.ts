/**
 * AVIF 编码客户端封装
 *
 * 通过 Web Worker 调用 pixconvert-core WASM（rav1e）执行真正的 AVIF 编码，
 * 避免阻塞主线程。像素数据通过 transferable 零拷贝传输。
 */

let avifWorker: Worker | null = null;

function getAvifWorker(): Worker {
  if (!avifWorker) {
    avifWorker = new Worker(
      new URL('../workers/avifEncoder.worker.ts', import.meta.url),
      { type: 'module' }
    );
  }
  return avifWorker;
}

export function encodeAvifInWorker(
  pixels: Uint8Array,
  width: number,
  height: number,
  quality: number
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const worker = getAvifWorker();
    const id = `${Date.now()}-${Math.random()}`;
    const handler = (e: MessageEvent) => {
      const data = e.data;
      if (data.id !== id) return;
      worker.removeEventListener('message', handler);
      if (data.success) {
        resolve(data.data as Uint8Array);
      } else {
        reject(new Error(data.error || 'AVIF 编码失败'));
      }
    };
    worker.addEventListener('message', handler);
    // 使用 transferable 零拷贝传输像素数据
    worker.postMessage({ id, pixels, width, height, quality }, [pixels.buffer]);
  });
}
