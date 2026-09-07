import { describe, expect, it } from 'vitest';
import { BUSINESS, formattedAddress, MAPS_QUERY, mapsEmbedUrl, mapsSearchUrl } from '@/config/site';

describe('office location', () => {
  it('stores the Satara Google Maps address', () => {
    expect(BUSINESS.address.line1).toBe('7 Hills Apartment');
    expect(BUSINESS.address.line2).toContain('Shri Chhatrapati Shahu Maharaj Rd');
    expect(BUSINESS.address.postalCode).toBe('415002');
    expect(formattedAddress()).toContain('415002');
  });

  it('opens Google Maps on the confirmed office query', () => {
    expect(MAPS_QUERY).toContain('7 hills apartment');
    expect(mapsSearchUrl()).toContain(encodeURIComponent(MAPS_QUERY));
    expect(mapsEmbedUrl()).toContain('output=embed');
    expect(mapsEmbedUrl()).toContain(encodeURIComponent(MAPS_QUERY));
  });
});
