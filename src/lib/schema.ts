import {
  BUSINESS,
  formattedAddress,
  mapsSearchUrl,
  PHONE_E164,
  siteUrl,
  ROUTES,
} from '@/config/site';
import { LOGO_PATH, OG_IMAGE_PATH, SITE_NAME } from '@/config/seoMeta';

export function canonicalFor(path: string): string {
  const origin = siteUrl();
  if (path === '/') return `${origin}/`;
  return `${origin}${path}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${siteUrl()}${path.startsWith('/') ? path : `/${path}`}`;
}

function geoCoordinates() {
  const lat = import.meta.env.VITE_BUSINESS_LATITUDE;
  const lng = import.meta.env.VITE_BUSINESS_LONGITUDE;
  if (!lat || !lng) return undefined;
  const latitude = Number(lat);
  const longitude = Number(lng);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return undefined;
  return {
    '@type': 'GeoCoordinates',
    latitude,
    longitude,
  };
}

export function localBusinessJsonLd() {
  const geo = geoCoordinates();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl()}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: `${siteUrl()}/`,
    telephone: PHONE_E164,
    email: BUSINESS.email,
    image: absoluteUrl(OG_IMAGE_PATH),
    logo: absoluteUrl(LOGO_PATH),
    description:
      'DRJ Solutions is a rooftop solar company based in Satara, Maharashtra. We survey, plan and install solar systems for homes and businesses.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.line3}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: 'IN',
    },
    ...(geo ? { geo } : {}),
    hasMap: mapsSearchUrl(),
    areaServed: BUSINESS.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    knowsAbout: [
      'Rooftop solar installation',
      'Residential solar',
      'Commercial solar',
      'On-grid solar',
      'Solar subsidy guidance',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential rooftop solar installation',
          areaServed: BUSINESS.address.city,
          url: canonicalFor(ROUTES.residential),
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial rooftop solar installation',
          areaServed: BUSINESS.address.city,
          url: canonicalFor(ROUTES.commercial),
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial rooftop solar installation',
          areaServed: BUSINESS.address.state,
          url: canonicalFor(ROUTES.industrial),
        },
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl()}/#website`,
    name: SITE_NAME,
    url: `${siteUrl()}/`,
    inLanguage: ['en', 'mr'],
    publisher: { '@id': `${siteUrl()}/#business` },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: canonicalFor(path),
    provider: { '@id': `${siteUrl()}/#business` },
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceType: name,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalFor(item.path),
    })),
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export { formattedAddress };
