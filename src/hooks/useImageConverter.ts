import { useCallback } from 'react';
import type { ConversionTask, ConversionSettings, ConversionResult } from '@/types';
import { FORMAT_MIME, FORMAT_LABEL } from '@/types';

// SVG 矢量化转换 Worker（单例，懒加载）
let svgWorker: Worker | null = null;

function getSvgWorker(): Worker {
  if (!svgWorker) {
    svgWorker = new Worker(
      new URL('../workers/svgConverter.worker.ts', import.meta.url),
      { type: 'module' }
    );
  }
  return svgWorker;
}

/**
 * 通过 Web Worker 调用 vtracer WASM 执行真正的矢量化描摹
 * 像素数据通过 transferable 零拷贝传输
 */
function convertSvgInWorker(
  pixels: Uint8Array,
  width: number,
  height: number,
  quality: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const worker = getSvgWorker();
    const id = `${Date.now()}-${Math.random()}`;
    const handler = (e: MessageEvent) => {
      const data = e.data;
      if (data.id !== id) return;
      worker.removeEventListener('message', handler);
      if (data.success) {
        resolve(data.svg as string);
      } else {
        reject(new Error(data.error || 'SVG 转换失败'));
      }
    };
    worker.addEventListener('message', handler);
    // 使用 transferable 零拷贝传输像素数据
    worker.postMessage(
      { id, pixels, width, height, quality },
      [pixels.buffer]
    );
  });
}

export function useImageConverter() {
  const convertImage = useCallback(
    async (task: ConversionTask, settings: ConversionSettings): Promise<ConversionResult> => {
      const img = await loadImage(task.thumbnailUrl);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas 2D context not available');

      const targetWidth = Math.round(img.width * settings.scale);
      const targetHeight = Math.round(img.height * settings.scale);

      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // SVG: 使用 vtracer WASM 进行真正的矢量化描摹
      if (settings.outputFormat === 'svg') {
        const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
        const svgString = await convertSvgInWorker(
          new Uint8Array(imageData.data),
          targetWidth,
          targetHeight,
          settings.quality
        );
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const convertedSize = blob.size;
        const sizeReduction = task.originalSize > 0
          ? Math.round((1 - convertedSize / task.originalSize) * 100)
          : 0;
        return { blob, convertedSize, sizeReduction, format: 'svg' };
      }

      const mimeType = FORMAT_MIME[settings.outputFormat];
      const quality = settings.quality / 100;

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => {
            if (b) resolve(b);
            else {
              // HEIC encoding is not supported by most browsers
              if (settings.outputFormat === 'heic') {
                reject(new Error(`${FORMAT_LABEL.heic} 编码不被当前浏览器支持，请使用 Safari 浏览器或选择其他格式`));
              } else {
                reject(new Error('转换失败'));
              }
            }
          },
          mimeType,
          quality
        );
      });

      const convertedSize = blob.size;
      const sizeReduction = task.originalSize > 0
        ? Math.round((1 - convertedSize / task.originalSize) * 100)
        : 0;

      return {
        blob,
        convertedSize,
        sizeReduction,
        format: settings.outputFormat,
      };
    },
    []
  );

  const convertAll = useCallback(
    async (
      tasks: ConversionTask[],
      settings: ConversionSettings,
      onProgress: (id: string, result: ConversionResult) => void,
      onError: (id: string, error: string) => void
    ) => {
      const promises = tasks
        .filter((t) => t.status === 'pending' || t.status === 'converting')
        .map(async (task) => {
          try {
            const result = await convertImage(task, settings);
            onProgress(task.id, result);
          } catch (err) {
            onError(task.id, err instanceof Error ? err.message : '转换失败');
          }
        });

      await Promise.allSettled(promises);
    },
    [convertImage]
  );

  return { convertImage, convertAll };
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('图片加载失败'));
    img.src = src;
  });
}
