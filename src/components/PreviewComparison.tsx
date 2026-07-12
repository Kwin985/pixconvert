import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, GripHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { formatFileSize } from '@/types';

export default function PreviewComparison() {
  const { tasks, selectedTaskId } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const [sliderPos, setSliderPos] = useState(50);

  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  if (!selectedTask || selectedTask.status !== 'done' || !selectedTask.result) {
    return null;
  }

  const result = selectedTask.result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-surface-1 border-surface-3' : 'bg-white border-light-border shadow-sm'}`}
    >
      <div className="p-4 border-b border-surface-3 flex items-center gap-2">
        <ArrowLeftRight className="w-4 h-4 text-neon" />
        <h3 className={`font-semibold text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{t('converter.preview.title')}</h3>
      </div>

      <div className="relative aspect-video overflow-hidden bg-surface-0">
        <div className="absolute inset-0">
          <img
            src={URL.createObjectURL(result.blob)}
            alt={t('converter.preview.converted')}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={selectedTask.thumbnailUrl}
            alt={t('converter.preview.original')}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ width: `${100 / (sliderPos / 100)}%` }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-neon cursor-ew-resize z-10"
          style={{ left: `${sliderPos}%` }}
        >
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
        <div className="absolute top-2 left-2 px-2 py-1 rounded bg-surface-0/80 text-xs text-neon font-mono">
          {t('converter.preview.original')}
        </div>
        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-surface-0/80 text-xs text-warm font-mono">
          {result.format.toUpperCase()}
        </div>
      </div>

      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.preview.originalSize')}</p>
          <p className="text-sm font-mono font-semibold text-neon">{formatFileSize(selectedTask.originalSize)}</p>
        </div>
        <div className="text-center">
          <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.preview.convertedSize')}</p>
          <p className="text-sm font-mono font-semibold text-warm">{formatFileSize(result.convertedSize)}</p>
        </div>
        <div className="text-center">
          <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.preview.compression')}</p>
          <p className={`text-sm font-mono font-semibold ${result.sizeReduction >= 0 ? 'text-neon' : 'text-red-400'}`}>
            {result.sizeReduction >= 0 ? `-${result.sizeReduction}%` : `+${Math.abs(result.sizeReduction)}%`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}