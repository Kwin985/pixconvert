import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import ParticleBackground from '@/components/ParticleBackground';

interface HeroSectionProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
}

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
}: HeroSectionProps) {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-6 sm:py-8">
      <ParticleBackground />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-3 ${
              isDark ? 'bg-neon/10 text-neon border border-neon/20' : 'bg-neon/10 text-neon-dark border border-neon/20'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            {badge || t('hero.badge')}
          </motion.div>

          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title || t('hero.title')}
            <span className="text-neon">{highlight || t('hero.highlight')}</span>
          </h1>

          <p className={`mt-3 text-sm sm:text-base max-w-xl mx-auto ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {description || t('hero.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}