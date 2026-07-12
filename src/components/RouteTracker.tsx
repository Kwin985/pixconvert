import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/gtag';

const PAGE_TITLES: Record<string, string> = {
  '/': 'PixConvert - WebP/AVIF Converter',
  '/to-jpg': 'PixConvert - Convert to JPG',
  '/to-png': 'PixConvert - Convert to PNG',
  '/to-heic': 'PixConvert - Convert to HEIC',
  '/to-svg': 'PixConvert - Convert to SVG',
  '/compare': 'PixConvert - Format Comparison',
  '/faq': 'PixConvert - FAQ',
};

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, PAGE_TITLES[location.pathname] || 'PixConvert');
  }, [location.pathname]);

  return null;
}