import { BUSINESS } from '@/config/site';
import { normalizeIndianPhone } from '@/lib/phone';
import type { LeadPayload, PropertyType } from '@/services/contactService';

const PROPERTY_LABELS: Record<PropertyType, string> = {
  residential: 'Residential home',
  shop: 'Shop',
  office: 'Office',
  commercial: 'Commercial building',
  other: 'Other',
};

const SOURCE_LABELS: Record<string, string> = {
  hero: 'Homepage — free site survey',
  hero_quote: 'Homepage — get quote',
  navbar: 'Website header',
  mobile_menu: 'Mobile menu',
  mobile_bar: 'Mobile action bar',
  footer: 'Website footer',
  contact_page: 'Contact page',
  residential: 'Residential solar page',
  commercial: 'Commercial solar page',
  subsidy: 'Subsidy page',
  subsidy_preview: 'Homepage subsidy section',
  calculator: 'Savings calculator',
  how_it_works: 'How it works page',
  survey_prep: 'Survey preparation section',
  final_cta: 'Page call-to-action',
  '404': 'Page not found',
  form: 'Website form',
  website: 'Website',
};

function formatPhoneDisplay(phone: string): string {
  const digits = normalizeIndianPhone(phone);
  if (digits.length === 10) return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  return phone.trim();
}

function customerWhatsAppUrl(name: string, phone: string): string {
  const digits = normalizeIndianPhone(phone);
  const e164 = digits.length === 10 ? `91${digits}` : digits;
  const text = `Hello ${name}, thank you for your rooftop solar enquiry with ${BUSINESS.name}. We would like to schedule your free site survey.`;
  return `https://wa.me/${e164}?text=${encodeURIComponent(text)}`;
}

function formatBill(value?: string): string {
  const raw = value?.trim();
  if (!raw) return 'Not provided';
  const amount = Number(raw.replace(/[₹,\s]/g, ''));
  if (!Number.isFinite(amount) || amount <= 0) return raw;
  return `₹${amount.toLocaleString('en-IN')}`;
}

function receivedAtIst(): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

/** Two-column rows for FormSubmit's HTML table template. Insertion order is preserved. */
export function enquiryEmailFields(payload: LeadPayload): Record<string, string> {
  const name = payload.name.trim();
  const city = payload.city.trim();
  const source = payload.source ?? 'website';
  const message = payload.message?.trim();

  const rows: Array<[string, string]> = [
    ['Enquiry', 'Free rooftop solar site survey'],
    ['Customer', name],
    ['Mobile', formatPhoneDisplay(payload.phone)],
    ['WhatsApp', customerWhatsAppUrl(name, payload.phone)],
    ['Location', city],
    ['Property', PROPERTY_LABELS[payload.propertyType]],
    ['Monthly bill', formatBill(payload.monthlyBill)],
    ['Message', message || 'No message added'],
    ['Submitted from', SOURCE_LABELS[source] ?? 'Website'],
    ['Language', payload.language === 'mr' ? 'Marathi' : 'English'],
    ['Received', `${receivedAtIst()} IST`],
  ];

  return Object.fromEntries(rows);
}

export function enquiryEmailSubject(payload: LeadPayload): string {
  const name = payload.name.trim();
  const city = payload.city.trim();
  return `New rooftop solar enquiry — ${name}, ${city} | ${BUSINESS.name}`;
}
