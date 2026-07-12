import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { useImageConverter } from '@/hooks/useImageConverter';
import { useHistory } from '@/hooks/useHistory';
import { trackConversion } from '@/lib/gtag';
import type { OutputFormat } from '@/types';
import { FORMAT_LABEL, FORMAT_EXT } from '@/types';
import SEO, { howToSchema, softwareAppSchema, breadcrumbSchema } from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import FileUploadZone from '@/components/FileUploadZone';
import FileList from '@/components/FileList';
import SettingsPanel from '@/components/SettingsPanel';
import PreviewComparison from '@/components/PreviewComparison';
import BatchActions from '@/components/BatchActions';

interface FormatPageProps {
  format: OutputFormat;
  pageDescription: string;
}

export default function FormatPage({ format, pageDescription }: FormatPageProps) {
  const { tasks, settings, updateTaskResult, setTaskError, setOutputFormat, clearTasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const { convertAll } = useImageConverter();
  const { addEntry } = useHistory();

  useEffect(() => {
    setOutputFormat(format);
    clearTasks();
    return () => { clearTasks(); };
  }, [format]);

  const runConversion = useCallback(async () => {
    const pendingTasks = tasks.filter((t) => t.status === 'pending');
    if (pendingTasks.length === 0) return;

    pendingTasks.forEach((t) => {
      updateTaskResult(t.id, undefined, 'converting');
    });

    const currentSettings = { ...settings, outputFormat: format };

    await convertAll(
      pendingTasks,
      currentSettings,
      (id, result) => {
        updateTaskResult(id, result, 'done');
        const task = tasks.find((t) => t.id === id);
        if (task) {
          addEntry({
            timestamp: Date.now(),
            originalName: task.originalName,
            originalFormat: task.originalFormat,
            originalSize: task.originalSize,
            outputFormat: result.format,
            convertedSize: result.convertedSize,
            settings: currentSettings,
          });
        }
      },
      (id, error) => {
        setTaskError(id, error);
      }
    );

    // GA4 追踪
    const doneAfter = tasks.filter((t) => t.status === 'done' || t.status === 'pending');
    const totalOriginal = doneAfter.reduce((s, t) => s + t.originalSize, 0);
    const totalConverted = doneAfter.reduce((s, t) => s + (t.result?.convertedSize || 0), 0);
    trackConversion({
      count: pendingTasks.length,
      format,
      quality: currentSettings.quality,
      scale: currentSettings.scale,
      mode: currentSettings.mode,
      totalOriginalBytes: totalOriginal,
      totalConvertedBytes: totalConverted,
      page: `to-${format}`,
    });
  }, [tasks, settings, format, convertAll, updateTaskResult, setTaskError, addEntry]);

  useEffect(() => {
    const pendingTasks = tasks.filter((t) => t.status === 'pending');
    if (pendingTasks.length > 0) {
      const timer = setTimeout(runConversion, 300);
      return () => clearTimeout(timer);
    }
  }, [tasks.length, settings.quality, settings.scale, settings.mode, runConversion]);

  const hasTasks = tasks.length > 0;
  const formatPath = `/to-${format === 'jpeg' ? 'jpg' : format}`;
  const formatLabel = FORMAT_LABEL[format];
  const ext = FORMAT_EXT[format].toUpperCase();

  const seoDescriptions: Record<string, string> = {
    jpg: `Convert any image to JPG format online for free. 100% browser-side, no uploads. Batch processing, adjustable quality, resize support. Fast and secure.`,
    png: `Convert any image to PNG format online for free. Lossless compression, transparency support. 100% browser-side, no uploads. Batch processing, instant download.`,
    heic: `Convert any image to HEIC format online for free. Apple's high-efficiency format. 100% browser-side, no uploads. Batch processing, best for iPhone users.`,
    svg: `Convert any image to SVG format online for free. Vector format embeddable in HTML. 100% browser-side, no uploads. Batch processing, ideal for web designers.`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`Convert Images to ${formatLabel} Online Free - PixConvert`}
        description={seoDescriptions[format] || `Convert any image to ${formatLabel} format online for free. 100% browser-side, no uploads. Batch processing, adjustable quality.`}
        path={formatPath}
        structuredData={[
          howToSchema(formatLabel),
          softwareAppSchema(`PixConvert ${formatLabel} Converter`, `Free online ${formatLabel} image converter. Convert any image to ${formatLabel} format. 100% browser-side processing, no uploads.`),
          breadcrumbSchema([
            { name: 'PixConvert', url: 'https://pixconvert.cn/' },
            { name: `To ${formatLabel}`, url: `https://pixconvert.cn${formatPath}` },
          ]),
        ]}
      />
      <HeroSection
        badge={t('formatPage.badge', { format: formatLabel })}
        title={t('formatPage.title', { format: formatLabel })}
        highlight={t('formatPage.highlight')}
        description={pageDescription}
      />

      <section id="converter-section" className="flex-1 flex flex-col container max-w-6xl mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <FileUploadZone />
        </motion.div>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-shrink-0">
            <FileList />
          </div>

          {hasTasks && (
            <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-6 min-h-0 overflow-hidden">
              <div className="lg:w-72 flex-shrink-0 overflow-y-auto">
                <SettingsPanel lockedFormat={format} />
              </div>
              <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
                <PreviewComparison />
                <BatchActions />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}