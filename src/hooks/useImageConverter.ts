import { useCallback } from 'react';
import type { ConversionTask, ConversionSettings, ConversionResult } from '@/types';
import { FORMAT_MIME, FORMAT_LABEL } from '@/types';

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

      // SVG: embed raster as base64 in SVG wrapper
      if (settings.outputFormat === 'svg') {
        const dataUrl = canvas.toDataURL('image/png');
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${targetWidth}" height="${targetHeight}" viewBox="0 0 ${targetWidth} ${targetHeight}">
  <image width="${targetWidth}" height="${targetHeight}" href="${dataUrl}"/>
</svg>`;
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
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