export type AnalyticsEvent =
  | 'hero_cta_click'
  | 'call_click'
  | 'whatsapp_click'
  | 'quote_form_open'
  | 'quote_form_submit'
  | 'quote_form_error'
  | 'calculator_used'
  | 'calculator_submit'
  | 'subsidy_cta_click'
  | 'language_switch'
  | 'project_view'
  | 'nav_cta_click';

export function track(event: AnalyticsEvent, props?: Record<string, unknown>): void {
  const payload = { event, ...props, ts: Date.now() };

  if (import.meta.env.DEV) {
    console.debug('[analytics]', payload);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (gaId && typeof window.gtag === 'function') {
    window.gtag('event', event, props ?? {});
  }
}

export function initAnalytics(): void {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!gaId || document.getElementById('ga-gtag')) return;

  const script = document.createElement('script');
  script.id = 'ga-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };
  window.gtag('js', new Date());
  window.gtag('config', gaId);
}
