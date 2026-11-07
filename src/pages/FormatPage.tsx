import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { useImageConverter } from '@/hooks/useImageConverter';
import { useHistory } from '@/hooks/useHistory';
import { trackConversion } from '@/lib/gtag';
import type { OutputFormat } from '@/types';
import { FORMAT_LABEL } from '@/types';
import SEO, { howToSchema, softwareAppSchema, breadcrumbSchema } from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import FileUploadZone from '@/components/FileUploadZone';
import FileList from '@/components/FileList';
import SettingsPanel from '@/components/SettingsPanel';
import PreviewComparison from '@/components/PreviewComparison';
import BatchActions from '@/components/BatchActions';
import { getFormatContent } from '@/data/formatContent';
import { CONVERSION_PAIRS } from '@/data/conversionPairs';

interface FormatPageProps {
  format: OutputFormat;
  pageDescription?: string;
}

export default function FormatPage({ format }: FormatPageProps) {
  const { tasks, settings, updateTaskResult, setTaskError, setOutputFormat, clearTasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t, i18n } = useTranslation();
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

  const c = getFormatContent(format, i18n.language);

  const contentBg = isDark ? 'border-surface-3 bg-surface-1' : 'border-light-border bg-white';
  const cardBg = isDark ? 'bg-surface-2 border-surface-3' : 'bg-gray-50 border-light-border';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const bodyColor = isDark ? 'text-gray-400' : 'text-gray-600';

  const related = CONVERSION_PAIRS.filter((p) => p.outputFormat === format).slice(0, 4);

  const seoDescriptions: Record<string, string> = {
    webp: `Convert any image to WebP format online for free. 25-34% smaller than JPG/PNG with better quality. 100% browser-side, no uploads. Batch processing.`,
    avif: `Convert any image to AVIF format online for free. The most efficient modern format, 45-50% smaller than JPG. 100% browser-side, no uploads. Powered by rav1e.`,
    jpg: `Convert any image to JPG format online for free. 100% browser-side, no uploads. Batch processing, adjustable quality, resize support. Fast and secure.`,
    png: `Convert any image to PNG format online for free. Lossless compression, transparency support. 100% browser-side, no uploads. Batch processing, instant download.`,
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
        badge={c.badge}
        title={c.h1}
        description={c.intro[0]}
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

      {/* SEO content */}
      <section className={`py-12 border-t ${contentBg}`}>
        <div className="container max-w-3xl mx-auto px-4">
          <p className={`text-base leading-relaxed mb-10 ${bodyColor}`}>{c.intro[1]}</p>

          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>{c.benefitsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {c.benefits.map((b) => (
              <div key={b.title} className={`rounded-xl p-5 border ${cardBg}`}>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0 mt-0.5" />
                  <h3 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{b.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${bodyColor}`}>{b.text}</p>
              </div>
            ))}
          </div>

          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>{c.stepsTitle}</h2>
          <ol className="space-y-4 mb-12">
            {c.steps.map((s, idx) => (
              <li key={s.name} className={`flex gap-4 rounded-xl p-4 border ${cardBg}`}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neon text-surface-0 font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{s.name}</h3>
                  <p className={`text-sm leading-relaxed ${bodyColor}`}>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>{c.faqTitle}</h2>
          <div className="space-y-3 mb-12">
            {c.faq.map((f) => (
              <details key={f.q} className={`rounded-xl border ${cardBg} group`}>
                <summary className={`flex items-center gap-2 px-5 py-4 cursor-pointer font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  <HelpCircle className="w-4 h-4 text-neon flex-shrink-0" />
                  {f.q}
                </summary>
                <p className={`px-5 pb-4 pl-11 text-sm leading-relaxed ${bodyColor}`}>{f.a}</p>
              </details>
            ))}
          </div>

          {related.length > 0 && (
            <>
              <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>{c.relatedTitle}</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${cardBg} hover:border-neon hover:text-neon`}
                  >
                    {t('home.pairLink', { from: p.from, to: p.to })} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
