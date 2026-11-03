import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { CONVERSION_PAIRS } from '@/data/conversionPairs';

const HUBS: { to: string; path: string }[] = [
  { to: 'WebP', path: '/to-webp' },
  { to: 'AVIF', path: '/to-avif' },
  { to: 'JPG', path: '/to-jpg' },
  { to: 'PNG', path: '/to-png' },
  { to: 'SVG', path: '/to-svg' },
];

export default function PopularConversions() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  return (
    <section className={`py-12 border-t ${isDark ? 'border-surface-3 bg-surface-0' : 'border-light-border bg-light-bg'}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className={`text-xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t('home.popularTitle')}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
          {CONVERSION_PAIRS.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className={`group flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl border text-sm font-medium transition-colors ${
                isDark ? 'bg-surface-2 border-surface-3 hover:border-neon' : 'bg-white border-light-border hover:border-neon'
              } hover:text-neon`}
            >
              <span>{p.from}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-neon" />
              <span>{p.to}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {HUBS.map((h) => (
            <Link
              key={h.path}
              to={h.path}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                isDark ? 'border-surface-4 text-gray-400 hover:border-neon hover:text-neon' : 'border-light-border text-gray-500 hover:border-neon hover:text-neon'
              }`}
            >
              Convert anything to {h.to}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
