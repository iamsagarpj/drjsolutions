import { describe, expect, it } from 'vitest';
import { breadcrumbJsonLd, canonicalFor, localBusinessJsonLd, serviceJsonLd } from '@/lib/schema';
import { BUSINESS, ROUTES } from '@/config/site';
import { SEO_PAGES } from '@/config/seoMeta';

describe('canonical URLs', () => {
  it('uses a trailing slash only on the homepage', () => {
    expect(canonicalFor('/')).toMatch(/\/$/);
    expect(canonicalFor(ROUTES.residential)).not.toMatch(/\/$/);
    expect(canonicalFor(ROUTES.residential)).toContain('/residential-solar');
  });
});

describe('structured data', () => {
  it('emits LocalBusiness without invalid schema types', () => {
    const data = localBusinessJsonLd();
    expect(data['@type']).toBe('LocalBusiness');
    expect(JSON.stringify(data)).not.toContain('EnergyCompany');
    expect(data.address.addressLocality).toBe('Satara');
    expect(data.telephone).toBe('+919579792080');
    expect(data.email).toBe(BUSINESS.email);
    expect(data.areaServed.map((area: { name: string }) => area.name)).toContain('Satara');
  });

  it('does not invent opening hours or social profiles', () => {
    const data = localBusinessJsonLd();
    expect(data).not.toHaveProperty('openingHours');
    expect(data).not.toHaveProperty('sameAs');
  });

  it('builds service and breadcrumb JSON-LD with indexable URLs', () => {
    const service = serviceJsonLd({
      name: 'Residential rooftop solar',
      description: 'Test',
      path: ROUTES.residential,
    });
    expect(service.url).toContain(SEO_PAGES.residential.path);
    const crumbs = breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Residential', path: ROUTES.residential },
    ]);
    expect(crumbs.itemListElement).toHaveLength(2);
    expect(crumbs.itemListElement[0].position).toBe(1);
  });
});
