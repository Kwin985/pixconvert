import { motion } from 'framer-motion';
import { Download, Zap, WifiOff, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';

const DOWNLOAD_URL = '/downloads/PixConvert_0.1.0_x64-setup.exe';

const defaultFeatures = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Native performance, no browser overhead' },
  { icon: WifiOff, title: 'Work Offline', desc: 'No internet connection required' },
  { icon: Layers, title: 'System Integration', desc: 'Right-click convert from File Explorer' },
];

export default function DesktopDownloadSection() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  const features = (t('desktop.features', { returnObjects: true, defaultValue: defaultFeatures }) as { title: string; desc: string }[]) || defaultFeatures;
  const badge = t('desktop.badge', { defaultValue: 'Desktop App' });
  const title = t('desktop.title', { defaultValue: 'Get PixConvert Desktop' });
  const subtitle = t('desktop.subtitle', { defaultValue: 'Faster, more stable, work offline' });
  const description = t('desktop.description', { defaultValue: 'Download the Windows desktop version for better performance, system integration, and offline usage. Same privacy-first approach — all processing stays on your machine.' });
  const downloadBtn = t('desktop.downloadBtn', { defaultValue: 'Download for Windows' });
  const version = t('desktop.version', { defaultValue: 'v0.1.0' });
  const size = t('desktop.size', { defaultValue: '4 MB' });
  const platform = t('desktop.platform', { defaultValue: 'Windows x64' });

  const iconMap: Record<string, typeof Zap> = {
    'Lightning Fast': Zap,
    'Work Offline': WifiOff,
    'System Integration': Layers,
  };

  const sectionClass = isDark ? 'border-surface-3 bg-surface-1/50' : 'border-light-border bg-gray-50/50';
  const badgeClass = isDark ? 'bg-neon/10 text-neon border border-neon/20' : 'bg-neon/10 text-neon-dark border border-neon/20';
  const titleClass = isDark ? 'text-white' : 'text-gray-900';
  const subtitleClass = isDark ? 'text-neon' : 'text-neon-dark';
  const descClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardClass = isDark ? 'bg-surface-2 border-surface-3' : 'bg-white border-light-border';
  const iconBgClass = isDark ? 'bg-neon/10 text-neon' : 'bg-neon/10 text-neon-dark';
  const cardTitleClass = isDark ? 'text-gray-200' : 'text-gray-700';
  const cardDescClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const metaClass = isDark ? 'text-gray-500' : 'text-gray-400';

  return (
    <section className={`py-16 border-t ${sectionClass}`}>
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeClass}`}>
            {badge}
          </span>
          <h2 className={`text-2xl sm:text-3xl font-bold font-display ${titleClass}`}>
            {title}
          </h2>
          <p className={`mt-2 text-lg font-medium ${subtitleClass}`}>
            {subtitle}
          </p>
          <p className={`mt-3 text-sm max-w-2xl mx-auto ${descClass}`}>
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feat, i) => {
            const Icon = iconMap[feat.title] || Zap;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-5 border text-center ${cardClass}`}
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${iconBgClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-semibold mb-1 ${cardTitleClass}`}>{feat.title}</h3>
                <p className={`text-sm ${cardDescClass}`}>{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={DOWNLOAD_URL}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon text-surface-0 font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-neon/25"
          >
            <Download className="w-5 h-5" />
            {downloadBtn}
          </a>
          <div className={`flex items-center gap-4 text-xs ${metaClass}`}>
            <span>{version}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>{size}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>{platform}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
