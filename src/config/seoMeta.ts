import pages from '@/config/seo-pages.json';

/** English crawl defaults for titles, descriptions, and prerendered HTML. */
export const CANONICAL_ORIGIN = 'https://drjsolutions.in';
export const SITE_NAME = 'DRJ Solutions';
export const OG_IMAGE_PATH = '/og-image.svg';
export const LOGO_PATH = '/logo.svg';

export type SeoPageId = keyof typeof pages;

export type SeoPageMeta = {
  path: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
};

export const SEO_PAGES = pages as Record<SeoPageId, SeoPageMeta>;

export const INDEXABLE_PATHS = Object.values(SEO_PAGES).map((page) => page.path);
