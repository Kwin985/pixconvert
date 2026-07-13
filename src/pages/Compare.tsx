import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, GripHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import SEO, { breadcrumbSchema, articleSchema } from '@/components/SEO';
import { formatFileSize } from '@/types';
import { trackCompareImage } from '@/lib/gtag';

export default function ComparePage() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const [original, setOriginal] = useState<{ url: string; size: number } | null>(null);
  const [webp, setWebp] = useState<{ url: string; size: number } | null>(null);
  const [avif, setAvif] = useState<{ url: string; size: number } | null>(null);
  const [sliderPos, setSliderPos] = useState(66);
  const [activeCompare, setActiveCompare] = useState<'webp' | 'avif'>('webp');

  const handleFile = useCallback(async (file: File) => {
    const url = URL.createObjectURL(file);
    setOriginal({ url, size: file.size });

    const img = await loadImage(url);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const webpBlob = await new Promise<Blob>((resolve) => {
      canvas.toBlob((b) => resolve(b!), 'image/webp', 0.8);
    });
    setWebp({ url: URL.createObjectURL(webpBlob), size: webpBlob.size });

    const avifBlob = await new Promise<Blob>((resolve) => {
      canvas.toBlob((b) => resolve(b!), 'image/avif', 0.8);
    });
    setAvif({ url: URL.createObjectURL(avifBlob), size: avifBlob.size });

    trackCompareImage('webp_avif');
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const compareTarget = activeCompare === 'webp' ? webp : avif;

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <SEO
        title="WebP vs AVIF vs Original - Image Format Comparison | PixConvert"
        description="Visually compare WebP, AVIF and original image quality and file size differences. Drag and drop an image to see side-by-side compression results."
        path="/compare"
        structuredData={[
          articleSchema(
            'WebP vs AVIF vs Original: Image Format Comparison 2026',
            'Side-by-side comparison of WebP and AVIF image formats. See the difference in file size and visual quality. WebP saves 25-34%, AVIF saves 45-50% compared to JPG.',
            '/compare'
          ),
          breadcrumbSchema([
            { name: 'PixConvert', url: 'https://pixconvert.cn/' },
            { name: 'Format Comparison', url: 'https://pixconvert.cn/compare' },
          ]),
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className={`text-3xl sm:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t('compare.title')}
        </h1>
        <p className={`mt-3 text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t('compare.description')}
        </p>
      </motion.div>

      {!original ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`max-w-lg mx-auto rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-all ${
            isDark ? 'border-surface-4 hover:border-neon/50' : 'border-light-border hover:border-neon/50'
          }`}
        >
          <Upload className="w-12 h-12 text-neon mx-auto mb-4" />
          <p className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            {t('compare.dropHint')}
          </p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t('compare.dropSub')}
          </p>
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-center gap-2">
            {(['webp', 'avif'] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setActiveCompare(fmt)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all border ${
                  activeCompare === fmt
                    ? 'border-neon bg-neon/10 text-neon'
                    : isDark
                      ? 'border-surface-4 text-gray-400'
                      : 'border-light-border text-gray-500'
                }`}
              >
                {fmt === 'webp' ? t('compare.webpCompare') : t('compare.avifCompare')}
              </button>
            ))}
          </div>

          <div className={`relative aspect-video rounded-2xl overflow-hidden border ${isDark ? 'border-surface-3' : 'border-light-border'}`}>
            <div className="absolute inset-0">
              <img src={compareTarget?.url || ''} alt={activeCompare} className="w-full h-full object-contain bg-surface-0" />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src={original.url} alt={t('compare.original')} className="absolute inset-0 w-full h-full object-contain bg-surface-0" style={{ width: `${100 / (sliderPos / 100)}%` }} />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-neon cursor-ew-resize z-10" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neon flex items-center justify-center shadow-lg">
                <GripHorizontal className="w-4 h-4 text-surface-0" />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
            <div className="absolute top-2 left-2 px-2 py-1 rounded bg-surface-0/80 text-xs text-neon font-mono">{t('compare.original')}</div>
            <div className="absolute top-2 right-2 px-2 py-1 rounded bg-surface-0/80 text-xs text-warm font-mono">{activeCompare.toUpperCase()}</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StatCard
              label={t('compare.originalSize')}
              value={formatFileSize(original.size)}
              color="text-neon"
              isDark={isDark}
            />
            <StatCard
              label="WebP"
              value={webp ? formatFileSize(webp.size) : '-'}
              sub={webp ? `-${Math.round((1 - webp.size / original.size) * 100)}%` : undefined}
              color="text-blue-400"
              isDark={isDark}
            />
            <StatCard
              label="AVIF"
              value={avif ? formatFileSize(avif.size) : '-'}
              sub={avif ? `-${Math.round((1 - avif.size / original.size) * 100)}%` : undefined}
              color="text-purple-400"
              isDark={isDark}
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setOriginal(null); setWebp(null); setAvif(null);
              }}
              className={`text-sm hover:text-neon transition-colors ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
            >
              {t('compare.reselect')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, sub, color, isDark }: {
  label: string; value: string; sub?: string; color: string; isDark: boolean;
}) {
  return (
    <div className={`rounded-xl p-4 text-center border ${isDark ? 'bg-surface-1 border-surface-3' : 'bg-white border-light-border'}`}>
      <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
      <p className={`text-lg font-mono font-bold ${color}`}>{value}</p>
      {sub && <p className="text-xs text-neon mt-0.5">{sub}</p>}
    </div>
  );
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Image load failed'));
    img.src = src;
  });
}