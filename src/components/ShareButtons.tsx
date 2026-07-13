import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';

const SHARE_URL = 'https://pixconvert.cn/';
const SHARE_TITLE = 'PixConvert - Free Image Format Converter';

const shareLinks = [
  {
    name: 'facebook',
    icon: Facebook,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TITLE)}`,
    color: '#1877F2',
  },
  {
    name: 'twitter',
    icon: Twitter,
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TITLE)}`,
    color: '#1DA1F2',
  },
  {
    name: 'reddit',
    icon: MessageCircle,
    url: `https://www.reddit.com/submit?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE)}`,
    color: '#FF4500',
  },
];

export default function ShareButtons() {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <span className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {t('share.like')}
      </span>
      <div className="flex items-center gap-1">
        {shareLinks.map((share, index) => {
          const Icon = share.icon;
          return (
            <motion.a
              key={share.name}
              href={share.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
              style={{ backgroundColor: `${share.color}15`, color: share.color }}
              title={t(`share.${share.name}`)}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}