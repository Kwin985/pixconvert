import { motion } from 'framer-motion';
import { Download, Archive, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { formatFileSize, FORMAT_EXT } from '@/types';
import { trackDownloadAll, trackDownloadSingle, trackClearAll } from '@/lib/gtag';
import JSZip from 'jszip';

export default function BatchActions() {
  const { tasks, settings, clearTasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  const doneTasks = tasks.filter((t) => t.status === 'done' && t.result);
  const totalOriginal = tasks.reduce((sum, t) => sum + t.originalSize, 0);
  const totalConverted = doneTasks.reduce((sum, t) => sum + (t.result?.convertedSize || 0), 0);
  const totalReduction = totalOriginal > 0
    ? Math.round((1 - totalConverted / totalOriginal) * 100)
    : 0;

  if (tasks.length === 0) return null;

  const handleDownloadSingle = (task: typeof tasks[0]) => {
    if (!task.result) return;
    const name = task.originalName.replace(/\.[^.]+$/, '');
    const ext = FORMAT_EXT[task.result.format];
    const url = URL.createObjectURL(task.result.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}${ext}`;
    a.click();
    URL.revokeObjectURL(url);
    trackDownloadSingle(1, task.result.format);
  };

  const handleDownloadAll = async () => {
    if (doneTasks.length === 0) return;
    const zip = new JSZip();
    const ext = FORMAT_EXT[settings.outputFormat];

    doneTasks.forEach((task) => {
      if (!task.result) return;
      const name = task.originalName.replace(/\.[^.]+$/, '');
      zip.file(`${name}${ext}`, task.result.blob);
    });

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pixconvert-${settings.outputFormat}-${Date.now()}.zip`;
    a.click();
    URL.revokeObjectURL(url);
    trackDownloadAll(doneTasks.length, settings.outputFormat);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border p-4 ${isDark ? 'bg-surface-1 border-surface-3' : 'bg-white border-light-border shadow-sm'}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div>
            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.batchActions.totalFiles')}</span>
            <p className="text-sm font-mono font-semibold text-neon">{tasks.length}</p>
          </div>
          <div>
            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.batchActions.converted')}</span>
            <p className="text-sm font-mono font-semibold text-warm">{doneTasks.length}</p>
          </div>
          {doneTasks.length > 0 && (
            <div>
              <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t('converter.batchActions.saved')}</span>
              <p className={`text-sm font-mono font-semibold ${totalReduction >= 0 ? 'text-neon' : 'text-red-400'}`}>
                {totalReduction >= 0 ? `-${totalReduction}%` : `+${Math.abs(totalReduction)}%`}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {doneTasks.length > 0 && (
            <>
              <button
                onClick={handleDownloadAll}
                className="flex items-center gap-2 px-4 py-2 bg-neon text-surface-0 font-medium rounded-lg hover:bg-neon-light transition-all duration-200 text-sm"
              >
                <Archive className="w-4 h-4" />
                {t('converter.batchActions.downloadAll')}
              </button>
              <button
                onClick={() => doneTasks.forEach(handleDownloadSingle)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  isDark
                    ? 'border-surface-4 text-gray-300 hover:bg-surface-3'
                    : 'border-light-border text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Download className="w-4 h-4" />
                {t('converter.batchActions.downloadSingle')}
              </button>
            </>
          )}
          <button
            onClick={() => {
              clearTasks();
              trackClearAll(tasks.length);
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
              isDark
                ? 'text-gray-500 hover:text-red-400 hover:bg-surface-3'
                : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
            }`}
            title={t('converter.batchActions.clear')}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}