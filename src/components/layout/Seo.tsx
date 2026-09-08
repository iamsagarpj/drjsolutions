import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalFor } from '@/lib/schema';
import { siteUrl } from '@/config/site';
import { OG_IMAGE_PATH, SITE_NAME } from '@/config/seoMeta';
import type { SeoCopy } from '@/content/types';

export function Seo({
  copy,
  path,
  jsonLd,
  ogType = 'website',
}: {
  copy: SeoCopy;
  path: string;
  jsonLd?: object | object[];
  ogType?: 'website' | 'article';
}) {
  const location = useLocation();
  const canonical = copy.robots?.includes('noindex')
    ? undefined
    : canonicalFor(path || location.pathname);
  const image = `${siteUrl()}${OG_IMAGE_PATH}`;
  const robots = copy.robots ?? 'index, follow';

  useLayoutEffect(() => {
    document.title = copy.title;
  }, [copy.title]);

  useEffect(() => {
    upsertMeta('name', 'description', copy.description);
    upsertMeta('name', 'robots', robots);
    upsertMeta('property', 'og:title', copy.title);
    upsertMeta('property', 'og:description', copy.description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', copy.title);
    upsertMeta('name', 'twitter:description', copy.description);
    upsertMeta('name', 'twitter:image', image);
    if (canonical) {
      upsertMeta('property', 'og:url', canonical);
      upsertLink('canonical', canonical);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [copy.title, copy.description, canonical, image, robots, ogType]);

  const payload = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          data-seo-jsonld="true"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
