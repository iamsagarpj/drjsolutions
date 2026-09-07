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
    line1: '7 Hills Apartment',
    line2: '18, Shri Chhatrapati Shahu Maharaj Rd',
    line3: 'Anand Nagar, Zunjar Colony',
    city: 'Satara',
    state: 'Maharashtra',
    postalCode: '415002',
    country: 'India',
  },
  areaServed: ['India'],
} as const;

/** Exact query Google Maps should open for the office. */
export const MAPS_QUERY =
  '7 hills apartment, 18, Shri Chhatrapati Shahu Maharaj Rd, Anand Nagar, Zunjar Colony, Satara, Maharashtra 415002';

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

export function emailUrl(): string {
  return `mailto:${BUSINESS.email}`;
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
