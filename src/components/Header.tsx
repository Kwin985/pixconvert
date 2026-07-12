import { Link, useLocation } from 'react-router-dom';
import { Image, GitCompare, HelpCircle, FileImage } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useConverterStore } from '@/store/useConverterStore';

export default function Header() {
  const location = useLocation();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  const allNavItems = [
    { path: '/', label: t('nav.webpAvif'), icon: Image },
    { path: '/to-jpg', label: t('nav.toJpg'), icon: FileImage },
    { path: '/to-png', label: t('nav.toPng'), icon: FileImage },
    { path: '/to-heic', label: t('nav.toHeic'), icon: FileImage },
    { path: '/to-svg', label: t('nav.toSvg'), icon: FileImage },
    { path: '/compare', label: t('nav.compare'), icon: GitCompare },
    { path: '/faq', label: t('nav.faq'), icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isDark
          ? 'bg-surface-0/80 border-surface-3'
          : 'bg-white/80 border-light-border'
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-neon flex items-center justify-center">
            <span className="text-surface-0 font-bold text-sm">P</span>
          </div>
          <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pix<span className="text-neon">Convert</span>
          </span>
        </Link>

        {/* Desktop nav - all items flat */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {allNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  active
                    ? isDark
                      ? 'bg-neon/10 text-neon'
                      : 'bg-neon/10 text-neon-dark'
                    : isDark
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-surface-3'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile nav */}
      <nav className={`lg:hidden flex justify-center gap-1 pb-2 border-t overflow-x-auto ${isDark ? 'border-surface-3' : 'border-light-border'}`}>
        {allNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-md text-xs whitespace-nowrap transition-all ${
                active ? (isDark ? 'text-neon' : 'text-neon-dark') : (isDark ? 'text-gray-500' : 'text-gray-400')
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}