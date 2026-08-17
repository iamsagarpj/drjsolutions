import { track } from '@/services/analytics';
import { BUSINESS } from '@/config/site';
import { enquiryEmailFields, enquiryEmailSubject } from '@/lib/enquiryEmail';

export type PropertyType = 'residential' | 'shop' | 'office' | 'commercial' | 'other';

export type LeadPayload = {
  name: string;
  phone: string;
  city: string;
  monthlyBill?: string;
  propertyType: PropertyType;
  message?: string;
  source?: string;
  language?: 'en' | 'mr';
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const STORAGE_KEY = 'drj-leads';
const NETLIFY_FORM_NAME = 'lead';
/** Dedicated static HTML file so SPA rewrites do not swallow the POST. */
const NETLIFY_FORM_ENDPOINT = '/__forms.html';

function persistLocally(payload: LeadPayload): void {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as LeadPayload[];
    existing.push({ ...payload, source: payload.source ?? 'website' });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // storage may be unavailable; ignore
  }
}

function encodeForm(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

async function submitToEmail(payload: LeadPayload): Promise<boolean> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: enquiryEmailSubject(payload),
      _template: 'table',
      _captcha: 'false',
      ...enquiryEmailFields(payload),
    }),
  });

  if (!response.ok) return false;

  const data = (await response.json()) as { success?: string | boolean; message?: string };
  const delivered = data.success === true || data.success === 'true';
  const awaitingActivation = /activat/i.test(data.message ?? '');
  return delivered || awaitingActivation;
}

async function submitToNetlify(payload: LeadPayload): Promise<boolean> {
  const response = await fetch(NETLIFY_FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeForm({
      'form-name': NETLIFY_FORM_NAME,
      'bot-field': '',
      name: payload.name,
      phone: payload.phone,
      city: payload.city,
      monthlyBill: payload.monthlyBill ?? '',
      propertyType: payload.propertyType,
      message: payload.message ?? '',
      source: payload.source ?? 'website',
      language: payload.language ?? 'en',
    }),
  });
  return response.ok;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL;

  try {
    const emailed = await submitToEmail(payload);
    if (!emailed) {
      track('quote_form_error', { mode: 'email' });
      return { ok: false, error: 'network' };
    }

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Email already sent; optional API is best-effort.
      }
    }

    if (import.meta.env.PROD) {
      try {
        await submitToNetlify(payload);
      } catch {
        // Email already sent; Netlify inbox is a backup only.
      }
    } else {
      persistLocally(payload);
    }

    track('quote_form_submit', { source: payload.source, mode: 'email' });
    return { ok: true };
  } catch {
    track('quote_form_error', { mode: 'email' });
    return { ok: false, error: 'network' };
  }
}
