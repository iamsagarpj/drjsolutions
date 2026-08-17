import { BUSINESS, PHONE_E164 } from '@/config/site';
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
  if (digits.length === 10) return `${digits.slice(0, 5)} ${digits.slice(5)}`;
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

export function enquiryEmailFields(payload: LeadPayload): Record<string, string> {
  const name = payload.name.trim();
  const phone = formatPhoneDisplay(payload.phone);
  const city = payload.city.trim();
  const digits = normalizeIndianPhone(payload.phone);
  const callUrl = digits.length === 10 ? `tel:+91${digits}` : `tel:${PHONE_E164}`;
  const source = payload.source ?? 'website';

  return {
    Summary: `New free site survey request from ${name} in ${city}. Please call or WhatsApp the customer to confirm a visit.`,
    'Customer name': name,
    'Phone number': phone,
    'Call customer': callUrl,
    'WhatsApp customer': customerWhatsAppUrl(name, payload.phone),
    'City / location': city,
    'Property type': PROPERTY_LABELS[payload.propertyType],
    'Monthly electricity bill': formatBill(payload.monthlyBill),
    'Customer message': payload.message?.trim() || 'No message added.',
    'Submitted from': SOURCE_LABELS[source] ?? 'Website',
    Language: payload.language === 'mr' ? 'Marathi' : 'English',
    Received: `${receivedAtIst()} (IST)`,
    Note: `This enquiry was submitted through the ${BUSINESS.name} website. Reply to the customer on the phone number above — do not reply to this notification email.`,
  };
}

export function enquiryEmailSubject(payload: LeadPayload): string {
  const name = payload.name.trim();
  const city = payload.city.trim();
  return `New rooftop solar enquiry — ${name}, ${city} | ${BUSINESS.name}`;
}
