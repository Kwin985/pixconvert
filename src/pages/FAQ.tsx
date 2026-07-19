import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import SEO, { faqPageSchema, breadcrumbSchema } from '@/components/SEO';

const EMAIL_USER = 'mdvrinsider';
const EMAIL_DOMAIN = 'gmail.com';
const EMAIL_FULL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
const EMAIL_MAILTO = `mailto:${EMAIL_FULL}`;

export default function FAQPage() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <div className="container max-w-3xl mx-auto px-4 py-12">
      <SEO
        title="Frequently Asked Questions - PixConvert"
        description="Common questions about WebP, AVIF image formats and PixConvert online converter. Learn about compression, browser compatibility, security, and more."
        path="/faq"
        structuredData={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: 'PixConvert', url: 'https://pixconvert.cn/' },
            { name: 'FAQ', url: 'https://pixconvert.cn/faq' },
          ]),
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className={`text-3xl sm:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t('faq.title')}
        </h1>
        <p className={`mt-3 text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t('faq.description')}
        </p>
        <p className={`mt-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {t('faq.contactPrompt')}{' '}
          <a href={EMAIL_MAILTO} className="text-neon hover:underline">
            {t('faq.contactEmail')}
          </a>
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border overflow-hidden ${isDark ? 'bg-surface-1 border-surface-3' : 'bg-white border-light-border'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${isDark ? 'text-gray-500' : 'text-gray-400'} ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className={`px-4 pb-4 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}