import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { generateId, formatFileSize, SUPPORTED_INPUT_TYPES, getFileExtension } from '@/types';
import { trackFileUpload } from '@/lib/gtag';
import type { ConversionTask } from '@/types';

export default function FileUploadZone() {
  const { addTasks, tasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const processFiles = useCallback(
    (files: FileList | File[]) => {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter((f) => SUPPORTED_INPUT_TYPES.includes(f.type));

      const newTasks: ConversionTask[] = validFiles.map((file) => ({
        id: generateId(),
        file,
        originalName: file.name,
        originalSize: file.size,
        originalFormat: getFileExtension(file.name),
        thumbnailUrl: URL.createObjectURL(file),
        status: 'pending' as const,
      }));

      if (newTasks.length > 0) {
        addTasks(newTasks);
        trackFileUpload(newTasks.length, newTasks.reduce((s, t) => s + t.originalSize, 0));
      }
    },
    [addTasks]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleClick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
      e.target.value = '';
    }
  };

  const hasFiles = tasks.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 ${
          isDragOver
            ? 'border-neon bg-neon/5 scale-[1.01]'
            : hasFiles
              ? isDark
                ? 'border-surface-4 hover:border-neon/50'
                : 'border-light-border hover:border-neon/50'
              : isDark
                ? 'border-surface-4 hover:border-neon/50'
                : 'border-light-border hover:border-neon/50'
        } ${hasFiles ? 'py-4 px-4' : 'py-12 px-8'}`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

        {!hasFiles ? (
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                isDark ? 'bg-surface-2' : 'bg-gray-100'
              }`}
            >
              <Upload className="w-8 h-8 text-neon" />
            </motion.div>
            <div className="text-center">
              <p className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {t('converter.upload.title')}
              </p>
              <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {t('converter.upload.hint')}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Image className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('converter.upload.addMore')}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}