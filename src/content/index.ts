import { en } from '@/content/en';
import { mr } from '@/content/mr';
import type { Language, SiteContent } from '@/content/types';

export const contentByLang: Record<Language, SiteContent> = { en, mr };

export function getContent(lang: Language): SiteContent {
  return contentByLang[lang];
}
