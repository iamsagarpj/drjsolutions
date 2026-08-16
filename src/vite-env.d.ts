/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_CONTACT_API_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GOOGLE_MAPS_URL?: string;
  readonly VITE_GOOGLE_MAPS_EMBED_URL?: string;
  readonly VITE_BUSINESS_LATITUDE?: string;
  readonly VITE_BUSINESS_LONGITUDE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
}
