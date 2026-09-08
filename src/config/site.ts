import { CANONICAL_ORIGIN } from '@/config/seoMeta';

export const PHONE_LOCAL = '9579792080';
export const PHONE_E164 = '+919579792080';
export const PHONE_DISPLAY = '95797 92080';
export const WHATSAPP_NUMBER = '919579792080';

export const BUSINESS = {
  name: 'DRJ Solutions',
  legalName: 'DRJ Solutions',
  category: 'Solar Energy / Rooftop Solar Solutions',
  phone: PHONE_LOCAL,
  phoneE164: PHONE_E164,
  phoneDisplay: PHONE_DISPLAY,
  email: 'drjsolutions5@gmail.com',
  address: {
    line1: 'Flat No. ST 03, 7 Hills Apartment',
    line2: 'Samartha Mandir Road, near Adalatwada',
    line3: 'Yadogopal Peth, S.No. 121/C/1/C',
    city: 'Satara',
    state: 'Maharashtra',
    postalCode: '415002',
    country: 'India',
  },
  areaServed: ['Satara', 'Satara District', 'Maharashtra', 'India'],
} as const;

/** Exact query Google Maps should open for the office. */
export const MAPS_QUERY =
  'Flat No ST 03, 7 Hills Apartment, Samartha Mandir Road, near Adalatwada, Yadogopal Peth, Satara, Maharashtra 415002';

export function formattedAddress(): string {
  const { line1, line2, line3, city, state, postalCode, country } = BUSINESS.address;
  return [line1, line2, line3, `${city}, ${state} ${postalCode}`.trim(), country]
    .filter(Boolean)
    .join(', ');
}

export function mapsSearchUrl(): string {
  const configured = import.meta.env.VITE_GOOGLE_MAPS_URL;
  if (configured) return configured;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
}

export function mapsEmbedUrl(): string {
  const configured = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL;
  if (configured) return configured;
  return `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=17&output=embed`;
}

export function siteUrl(): string {
  return (import.meta.env.VITE_SITE_URL || CANONICAL_ORIGIN).replace(/\/$/, '');
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello DRJ Solutions, I am interested in rooftop solar. I would like to know more about a free site survey.';

export function whatsappUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${PHONE_E164}`;
}

export function emailUrl(): string {
  return `mailto:${BUSINESS.email}`;
}

export const ROUTES = {
  home: '/',
  about: '/about',
  residential: '/residential-solar',
  commercial: '/commercial-solar',
  industrial: '/industrial-solar',
  onGrid: '/on-grid-solar',
  offGrid: '/off-grid-solar',
  hybrid: '/hybrid-solar',
  maintenance: '/solar-maintenance',
  cost: '/solar-system-cost',
  subsidy: '/solar-subsidy',
  howItWorks: '/how-it-works',
  calculator: '/solar-savings-calculator',
  projects: '/projects',
  faq: '/faq',
  contact: '/contact',
  guides: '/guides',
  guideSatara: '/guides/rooftop-solar-satara',
  guideSystemTypes: '/guides/on-grid-vs-off-grid-vs-hybrid',
  guideSizing: '/guides/solar-system-size',
  privacy: '/privacy-policy',
  terms: '/terms',
} as const;
