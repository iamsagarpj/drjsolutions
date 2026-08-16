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
  email: '', // add when provided
  address: {
    line1: 'Flat No ST 03, 7 Hills Apartment',
    line2: 'Near Samartha Mandir Road',
    line3: 'Yadogopal Peth',
    city: 'Satara',
    state: 'Maharashtra',
    postalCode: '',
    country: 'India',
  },
  areaServed: ['Satara', 'Maharashtra'],
} as const;

export function formattedAddress(): string {
  const { line1, line2, line3, city, state, country } = BUSINESS.address;
  return [line1, line2, line3, `${city}, ${state}`, country].filter(Boolean).join(', ');
}

export function mapsSearchUrl(): string {
  const configured = import.meta.env.VITE_GOOGLE_MAPS_URL;
  if (configured) return configured;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress())}`;
}

export function mapsEmbedUrl(): string | null {
  return import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || null;
}

export function siteUrl(): string {
  return (import.meta.env.VITE_SITE_URL || 'https://www.drjsolutions.in').replace(/\/$/, '');
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello DRJ Solutions, I am interested in rooftop solar. I would like to know more about a free site survey.';

export function whatsappUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${PHONE_E164}`;
}

export const ROUTES = {
  home: '/',
  about: '/about',
  residential: '/residential-solar',
  commercial: '/commercial-solar',
  subsidy: '/solar-subsidy',
  howItWorks: '/how-it-works',
  calculator: '/solar-savings-calculator',
  projects: '/projects',
  faq: '/faq',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms',
} as const;
