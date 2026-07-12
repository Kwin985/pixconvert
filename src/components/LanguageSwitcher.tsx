import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import { trackLanguageChange } from '@/lib/gtag';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isDark = useConverterStore((s) => s.isDark);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('pixconvert-lang', code);
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    trackLanguageChange(code);
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.code === i18n.language?.split('-')[0]) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
          isDark ? 'text-gray-400 hover:text-gray-200 hover:bg-surface-3' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`}
        title={currentLang.name}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline font-medium">{currentLang.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-full mt-1 w-44 rounded-xl border py-1 shadow-xl z-50 max-h-72 overflow-y-auto ${
              isDark ? 'bg-surface-2 border-surface-3' : 'bg-white border-light-border'
            }`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors text-left ${
                  i18n.language?.startsWith(lang.code)
                    ? 'text-neon bg-neon/5'
                    : isDark
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-surface-3'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang.name}
                {i18n.language?.startsWith(lang.code) && (
                  <Check className="w-4 h-4 text-neon" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}