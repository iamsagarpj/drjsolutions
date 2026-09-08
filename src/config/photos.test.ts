import { describe, expect, it } from 'vitest';
import { isPhotoId, photoSrcSet, photoUrl } from '@/config/photos';

describe('photoUrl', () => {
  it('builds an Unsplash CDN URL with requested width', () => {
    expect(photoUrl('hero', 1920)).toBe(
      'https://images.unsplash.com/photo-1730807908064-c087959dd52c?auto=format&fit=crop&w=1920&q=80',
    );
  });

  it('builds a Pexels CDN URL with requested width', () => {
    expect(photoUrl('residential', 960)).toContain('images.pexels.com/photos/31859250/');
    expect(photoUrl('residential', 960)).toContain('w=960');
  });
});

describe('photoSrcSet', () => {
  it('includes multiple widths for responsive delivery', () => {
    const srcSet = photoSrcSet('hero');
    expect(srcSet).toContain('640w');
    expect(srcSet).toContain('1920w');
    expect(srcSet).not.toContain('2560w');
  });
});

describe('isPhotoId', () => {
  it('accepts catalog keys only', () => {
    expect(isPhotoId('hero')).toBe(true);
    expect(isPhotoId('/images/foo.jpg')).toBe(false);
  });
});
