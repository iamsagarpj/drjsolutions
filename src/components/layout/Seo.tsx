import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalFor } from '@/lib/schema';
import { siteUrl } from '@/config/site';
import type { SeoCopy } from '@/content/types';

export function Seo({
  copy,
  path,
  jsonLd,
}: {
  copy: SeoCopy;
  path: string;
  jsonLd?: object | object[];
}) {
  const location = useLocation();
  const canonical = canonicalFor(path || location.pathname);
  const image = `${siteUrl()}/og-image.svg`;

  useEffect(() => {
    document.title = copy.title;
    upsertMeta('name', 'description', copy.description);
    upsertMeta('property', 'og:title', copy.title);
    upsertMeta('property', 'og:description', copy.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', copy.title);
    upsertMeta('name', 'twitter:description', copy.description);
    upsertLink('canonical', canonical);
  }, [copy.title, copy.description, canonical, image]);

  const payload = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
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
