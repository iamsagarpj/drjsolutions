import { track } from '@/services/analytics';

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

function persistLocally(payload: LeadPayload): void {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as LeadPayload[];
    existing.push({ ...payload, source: payload.source ?? 'website' });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // storage may be unavailable; ignore
  }
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL;

  if (!endpoint) {
    persistLocally(payload);
    track('quote_form_submit', { source: payload.source, mode: 'local' });
    return { ok: true };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      track('quote_form_error', { status: response.status });
      return { ok: false, error: 'network' };
    }

    track('quote_form_submit', { source: payload.source, mode: 'api' });
    return { ok: true };
  } catch {
    track('quote_form_error', { mode: 'network' });
    return { ok: false, error: 'network' };
  }
}
