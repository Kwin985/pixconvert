import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { useImageConverter } from '@/hooks/useImageConverter';
import { useHistory } from '@/hooks/useHistory';
import { trackConversion } from '@/lib/gtag';
import { FORMAT_LABEL } from '@/types';
import type { OutputFormat } from '@/types';
import SEO, { softwareAppSchema, faqPageSchema, breadcrumbSchema } from '@/components/SEO';
import FileUploadZone from '@/components/FileUploadZone';
import FileList from '@/components/FileList';
import SettingsPanel from '@/components/SettingsPanel';
import PreviewComparison from '@/components/PreviewComparison';
import BatchActions from '@/components/BatchActions';
import { getPairBySlug, getPairContent, CONVERSION_PAIRS } from '@/data/conversionPairs';

const HUB_PATH: Record<string, string> = {
  webp: '/to-webp',
  avif: '/to-avif',
  jpg: '/to-jpg',
  png: '/to-png',
  jpeg: '/to-jpg',
  svg: '/to-svg',
};

interface PairPageProps {
  slug: string;
}

export default function PairPage({ slug }: PairPageProps) {
  const pair = getPairBySlug(slug);
  const { tasks, settings, updateTaskResult, setTaskError, setOutputFormat, clearTasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t, i18n } = useTranslation();
  const c = pair ? getPairContent(pair, i18n.language) : undefined;
  const { convertAll } = useImageConverter();
  const { addEntry } = useHistory();

  useEffect(() => {
    if (pair) setOutputFormat(pair.outputFormat);
    clearTasks();
    return () => { clearTasks(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const runConversion = useCallback(async () => {
    if (!pair) return;
    const pendingTasks = tasks.filter((task) => task.status === 'pending');
    if (pendingTasks.length === 0) return;

    pendingTasks.forEach((task) => {
      updateTaskResult(task.id, undefined, 'converting');
    });

    const currentSettings = { ...settings, outputFormat: pair.outputFormat };

    await convertAll(
      pendingTasks,
      currentSettings,
      (id, result) => {
        updateTaskResult(id, result, 'done');
        const task = tasks.find((x) => x.id === id);
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

    const doneAfter = tasks.filter((x) => x.status === 'done' || x.status === 'pending');
    const totalOriginal = doneAfter.reduce((s, x) => s + x.originalSize, 0);
    const totalConverted = doneAfter.reduce((s, x) => s + (x.result?.convertedSize || 0), 0);
    trackConversion({
      count: pendingTasks.length,
      format: pair.outputFormat,
      quality: currentSettings.quality,
      scale: currentSettings.scale,
      mode: currentSettings.mode,
      totalOriginalBytes: totalOriginal,
      totalConvertedBytes: totalConverted,
      page: `pair-${slug}`,
    });
  }, [tasks, settings, slug, pair, convertAll, updateTaskResult, setTaskError, addEntry]);

  useEffect(() => {
    const pendingTasks = tasks.filter((x) => x.status === 'pending');
    if (pendingTasks.length > 0) {
      const timer = setTimeout(runConversion, 300);
      return () => clearTimeout(timer);
    }
  }, [tasks.length, settings.quality, settings.scale, settings.mode, runConversion]);

  if (!pair) return null;

  const hasTasks = tasks.length > 0;
  const toLabel = FORMAT_LABEL[pair.outputFormat as OutputFormat] || pair.to;
  const contentBg = isDark ? 'border-surface-3 bg-surface-1' : 'border-light-border bg-white';
  const cardBg = isDark ? 'bg-surface-2 border-surface-3' : 'bg-gray-50 border-light-border';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const bodyColor = isDark ? 'text-gray-400' : 'text-gray-600';

  const related = CONVERSION_PAIRS.filter(
    (p) => p.slug !== pair.slug && (p.outputFormat === pair.outputFormat || p.from === pair.from)
  ).slice(0, 4);

  const baseUrl = 'https://pixconvert.cn';
  const pageUrl = `${baseUrl}/${pair.slug}`;

  const howToData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Convert ${pair.from} to ${pair.to}`,
    description: `Step-by-step guide to convert ${pair.from} images to ${pair.to} online for free using PixConvert. No uploads, 100% browser-side processing.`,
    totalTime: 'PT1M',
    tool: { '@type': 'HowToTool', name: 'PixConvert' },
    step: c.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={c.title}
        description={c.description}
        path={`/${pair.slug}`}
        structuredData={[
          howToData,
          softwareAppSchema(
            `PixConvert ${pair.from} to ${pair.to} Converter`,
            `Free online ${pair.from} to ${pair.to} converter. 100% browser-side processing, no uploads, batch conversion.`
          ),
          faqPageSchema(c.faq),
          breadcrumbSchema([
            { name: 'PixConvert', url: `${baseUrl}/` },
            { name: `${pair.from} to ${pair.to}`, url: pageUrl },
          ]),
        ]}
      />

      {/* Hero + H1 */}
      <section className="pt-12 pb-6 container max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neon/10 text-neon mb-4">
            {pair.from} → {pair.to} · {c.badge}
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>{c.h1}</h1>
          <p className={`text-base md:text-lg ${bodyColor}`}>{c.intro[0]}</p>
        </motion.div>
      </section>

      {/* Converter */}
      <section id="converter-section" className="flex-1 flex flex-col container max-w-6xl mx-auto px-4 pb-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-4">
          <FileUploadZone />
        </motion.div>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-shrink-0">
            <FileList />
          </div>

          {hasTasks && (
            <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-6 min-h-0 overflow-hidden">
              <div className="lg:w-72 flex-shrink-0 overflow-y-auto">
                <SettingsPanel lockedFormat={pair.outputFormat} />
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

          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>{c.relatedTitle}</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              to={HUB_PATH[pair.outputFormat] || '/'}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${cardBg} hover:border-neon hover:text-neon`}
            >
              {t('home.hubLink', { format: toLabel })} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
        </div>
      </section>
    </div>
  );
}
