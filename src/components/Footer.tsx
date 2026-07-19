import { Link } from 'react-router-dom';
import { Github, Heart, Mail, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import ShareButtons from '@/components/ShareButtons';

const EMAIL_USER = 'mdvrinsider';
const EMAIL_DOMAIN = 'gmail.com';
const EMAIL_FULL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
const EMAIL_MAILTO = `mailto:$\{EMAIL_FULL\}`;
const DESKTOP_DOWNLOAD_URL = '/downloads/PixConvert_0.1.0_x64-setup.exe';

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
            <ShareButtons />
            <span className="w-px h-4 bg-surface-4" />
            <Link to="/faq" className={`text-sm hover:text-neon transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('footer.faq')}
            </Link>
            <a
              href={EMAIL_MAILTO}
              className={`flex items-center gap-1.5 text-sm hover:text-neon transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              title={EMAIL_FULL}
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs hidden sm:inline">{EMAIL_FULL}</span>
              <span className="sm:hidden">{t('footer.contact')}</span>
            </a>
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

