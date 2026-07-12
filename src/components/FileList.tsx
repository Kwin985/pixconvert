import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { formatFileSize } from '@/types';
import { trackClearAll } from '@/lib/gtag';

export default function FileList() {
  const { tasks, removeTask, selectTask, selectedTaskId, clearTasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  if (tasks.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {t('converter.fileList.filesAdded', { count: tasks.length })}
        </h3>
        {tasks.length > 1 && (
          <button
            onClick={() => {
              clearTasks();
              trackClearAll(tasks.length);
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              isDark
                ? 'border-surface-4 text-gray-400 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/10'
                : 'border-light-border text-gray-400 hover:text-red-500 hover:border-red-300 hover:bg-red-50'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            {t('converter.fileList.clearAll')}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => selectTask(task.id)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                task.id === selectedTaskId
                  ? 'border-neon shadow-[0_0_15px_rgba(0,245,160,0.15)]'
                  : isDark
                    ? 'border-surface-3 hover:border-surface-4'
                    : 'border-light-border hover:border-gray-300'
              } ${isDark ? 'bg-surface-2' : 'bg-white'}`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={task.thumbnailUrl}
                  alt={task.originalName}
                  className="w-full h-full object-cover"
                />
                {task.status === 'done' && (
                  <div className="absolute inset-0 bg-neon/10 flex items-center justify-center">
                    <span className="text-neon text-sm font-bold bg-surface-0/80 px-3 py-1 rounded-full">
                      {task.result?.sizeReduction !== undefined && task.result.sizeReduction >= 0
                        ? `-${task.result.sizeReduction}%`
                        : task.result?.sizeReduction !== undefined
                          ? `+${Math.abs(task.result.sizeReduction)}%`
                          : ''}
                    </span>
                  </div>
                )}
                {task.status === 'converting' && (
                  <div className="absolute inset-0 bg-surface-0/60 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-neon border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {task.status === 'error' && (
                  <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 text-xs px-2 py-1 rounded bg-surface-0/80">{t('converter.fileList.convertFailed')}</span>
                  </div>
                )}
              </div>

              <div className="p-2">
                <p className={`text-xs truncate font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {task.originalName}
                </p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {formatFileSize(task.originalSize)}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(task.id);
                }}
                className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${
                  isDark ? 'bg-surface-0/80 text-gray-400 hover:text-red-400' : 'bg-white/80 text-gray-500 hover:text-red-500'
                }`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}