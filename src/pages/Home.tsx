import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { useImageConverter } from '@/hooks/useImageConverter';
import { useHistory } from '@/hooks/useHistory';
import { trackConversion } from '@/lib/gtag';
import SEO, { organizationSchema, webApplicationSchema, breadcrumbSchema } from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import FileUploadZone from '@/components/FileUploadZone';
import FileList from '@/components/FileList';
import SettingsPanel from '@/components/SettingsPanel';
import PreviewComparison from '@/components/PreviewComparison';
import BatchActions from '@/components/BatchActions';
import DesktopDownloadSection from '@/components/DesktopDownloadSection';

export default function HomePage() {
  const { tasks, settings, updateTaskResult, setTaskError } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const { convertAll } = useImageConverter();
  const { addEntry } = useHistory();

  const runConversion = useCallback(async () => {
    const pendingTasks = tasks.filter((t) => t.status === 'pending');
    if (pendingTasks.length === 0) return;

    pendingTasks.forEach((t) => {
      updateTaskResult(t.id, undefined, 'converting');
    });

    await convertAll(
      pendingTasks,
      settings,
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
            settings,
          });
        }
      },
      (id, error) => {
        setTaskError(id, error);
      }
    );

    // GA4 追踪转换完成
    const doneAfter = tasks.filter((t) => t.status === 'done' || t.status === 'pending');
    const totalOriginal = doneAfter.reduce((s, t) => s + t.originalSize, 0);
    const totalConverted = doneAfter.reduce((s, t) => s + (t.result?.convertedSize || 0), 0);
    trackConversion({
      count: pendingTasks.length,
      format: settings.outputFormat,
      quality: settings.quality,
      scale: settings.scale,
      mode: settings.mode,
      totalOriginalBytes: totalOriginal,
      totalConvertedBytes: totalConverted,
      page: 'home',
    });
  }, [tasks, settings, convertAll, updateTaskResult, setTaskError, addEntry]);

  useEffect(() => {
    const pendingTasks = tasks.filter((t) => t.status === 'pending');
    if (pendingTasks.length > 0) {
      const timer = setTimeout(runConversion, 300);
      return () => clearTimeout(timer);
    }
  }, [tasks.length, settings.outputFormat, settings.quality, settings.scale, settings.mode, runConversion]);

  const hasTasks = tasks.length > 0;
  const advantages = t('home.advantages', { returnObjects: true }) as { tag: string; title: string; desc: string }[];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="PixConvert - Free Online Image Format Converter | WebP / AVIF / JPG / PNG"
        description="Free online image format converter. Convert images to WebP, AVIF, JPG, PNG, HEIC. Batch processing, 100% browser-side, no uploads. Protect your privacy."
        path="/"
        structuredData={[
          organizationSchema(),
          webApplicationSchema(),
          breadcrumbSchema([{ name: 'PixConvert', url: 'https://pixconvert.cn/' }]),
        ]}
      />
      <HeroSection />

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
                <SettingsPanel />
              </div>
              <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
                <PreviewComparison />
                <BatchActions />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={`py-12 border-t ${isDark ? 'border-surface-3 bg-surface-1' : 'border-light-border bg-white'}`}>
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className={`text-xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('home.advantageTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-xl p-5 border ${isDark ? 'bg-surface-2 border-surface-3' : 'bg-gray-50 border-light-border'}`}
              >
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-neon/10 text-neon mb-2">
                  {feat.tag}
                </span>
                <h3 className={`font-semibold mb-1 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{feat.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DesktopDownloadSection />
    </div>
  );
}
