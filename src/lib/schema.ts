import { BUSINESS, formattedAddress, PHONE_E164, siteUrl } from '@/config/site';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EnergyCompany'],
    name: BUSINESS.name,
    url: siteUrl(),
    telephone: PHONE_E164,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.line3}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: 'IN',
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    description:
      'Rooftop solar solutions for homes and businesses. Free site survey and consultation for residential and commercial properties. Office in Satara, Maharashtra.',
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

export function canonicalFor(path: string): string {
  return `${siteUrl()}${path === '/' ? '' : path}`;
}

export { formattedAddress };
