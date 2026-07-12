import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useConverterStore } from '@/store/useConverterStore';
import { trackThemeToggle } from '@/lib/gtag';

export default function ThemeToggle() {
  const { isDark, toggleDark } = useConverterStore();

  const handleToggle = () => {
    toggleDark();
    trackThemeToggle(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className="relative p-2 rounded-lg bg-surface-3 dark:bg-surface-3 hover:bg-surface-4 dark:hover:bg-surface-4 transition-colors"
      aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-warm" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </motion.div>
    </motion.button>
  );
}