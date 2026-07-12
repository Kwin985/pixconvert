import { Link } from 'react-router-dom';
import { Github, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';

export default function Footer() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  return (
    <footer className={`border-t mt-20 ${isDark ? 'border-surface-3 bg-surface-1' : 'border-light-border bg-white'}`}>
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-neon flex items-center justify-center">
              <span className="text-surface-0 font-bold text-xs">P</span>
            </div>
            <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('footer.tagline')}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/faq" className={`text-sm hover:text-neon transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('footer.faq')}
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-sm hover:text-neon transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              <Github className="w-4 h-4" />
              {t('footer.github')}
            </a>
            <span className={`flex items-center gap-1 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {t('footer.madeWith')} <Heart className="w-3 h-3 text-warm" /> PixConvert
            </span>
          </div>
        </div>

        <div className={`text-center mt-4 text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          {t('footer.privacy')}
        </div>
      </div>
    </footer>
  );
}