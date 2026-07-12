import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------ */
/*  Shared structured‑data builders (GEO‑optimized)                    */
/* ------------------------------------------------------------------ */

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  lang?: string;
}

const BASE_URL = 'https://pixconvert.cn';

/** Single entry point for all pages – one `<Helmet>` call per route. */
export default function SEO({ title, description, path = '/', structuredData, noIndex, lang }: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = lang || i18n.language?.split('-')[0] || 'en';
  const url = `${BASE_URL}${path}`;
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  const jsonLd = structuredData
    ? (Array.isArray(structuredData) ? structuredData : [structuredData])
    : [];

  return (
    <Helmet>
      {/* Basic */}
      <html lang={currentLang} dir={dir} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="PixConvert" />
      <meta property="og:locale" content={currentLang === 'zh' ? 'zh_CN' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Alternate hreflang (SEO critical for multi‑lang) */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="zh" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="ja" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="fr" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="es" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="pt" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="ru" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="vi" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />

      {/* Structured data (JSON‑LD) */}
      {jsonLd.map((data, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

/* ------------------------------------------------------------------ */
/*  Schema builders – reusable across pages                            */
/* ------------------------------------------------------------------ */

/** Organization – used once on the homepage */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PixConvert',
    url: BASE_URL,
    description: 'Free online image format converter supporting WebP, AVIF, JPG, PNG, HEIC. All processing done locally in your browser.',
    slogan: 'Image Conversion, Never Been Easier',
    knowsAbout: ['WebP', 'AVIF', 'JPG', 'PNG', 'HEIC', 'Image Compression', 'Image Format Conversion'],
  };
}

/** WebApplication – signals Google that this is a functional tool */
export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PixConvert',
    url: BASE_URL,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      'WebP and AVIF dual-format conversion',
      'Batch image processing',
      'Browser‑side local processing',
      'Slider comparison preview',
      'ZIP download',
    ],
  };
}

/** BreadcrumbList – pass in items for current page */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** SoftwareApplication – for the converter tool pages */
export function softwareAppSchema(name: string, description: string, operatingSystem = 'All') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'MultimediaApplication',
    operatingSystem,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: BASE_URL,
  };
}

/** FAQPage schema – inject on FAQ page */
export function faqPageSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/** HowTo schema – for format conversion pages (GEO: helps AI answer "how to convert X to Y") */
export function howToSchema(formatTo: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Convert Images to ${formatTo}`,
    description: `Step-by-step guide to convert any image format to ${formatTo} online for free using PixConvert.`,
    tool: { '@type': 'HowToTool', name: 'PixConvert' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload images',
        text: `Drag and drop or click to upload your images to PixConvert. Supports JPG, PNG, GIF, SVG, ICO, BMP, HEIC, TIFF, AVIF, and WebP formats.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: `Choose ${formatTo} as output format`,
        text: `Select ${formatTo} as the target output format from the settings panel.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Adjust quality settings',
        text: 'Use the quality slider (1‑100) and preset options (Extreme Compression, Balanced, Max Quality) to control the output.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Download converted files',
        text: `Click "Download All (ZIP)" to download all converted ${formatTo} files at once, or download them individually.`,
      },
    ],
    totalTime: 'PT1M',
    supply: { '@type': 'HowToSupply', name: 'Images to convert' },
  };
}