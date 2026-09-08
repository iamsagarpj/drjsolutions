import { describe, expect, it } from 'vitest';
import { BUSINESS, formattedAddress, MAPS_QUERY, mapsEmbedUrl, mapsSearchUrl } from '@/config/site';

describe('office location', () => {
  it('stores the Satara Google Maps address', () => {
    expect(BUSINESS.address.line1).toContain('ST 03');
    expect(BUSINESS.address.line2).toContain('Samartha Mandir Road');
    expect(BUSINESS.address.line3).toContain('Yadogopal Peth');
    expect(BUSINESS.address.postalCode).toBe('415002');
    expect(formattedAddress()).toContain('415002');
  });

  it('opens Google Maps on the confirmed office query', () => {
    expect(MAPS_QUERY).toContain('Yadogopal Peth');
    expect(mapsSearchUrl()).toContain(encodeURIComponent(MAPS_QUERY));
    expect(mapsEmbedUrl()).toContain('output=embed');
    expect(mapsEmbedUrl()).toContain(encodeURIComponent(MAPS_QUERY));
  });
});
