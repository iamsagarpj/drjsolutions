/**
 * All site photos live here.
 * To swap an image, change `unsplash` or `pexels` — the CDN serves the right size.
 * Unsplash: copy the photo-… id from the image URL.
 * Pexels: copy the numeric id from the photo page.
 */
export const PHOTO_WIDTHS = [640, 960, 1280, 1920] as const;

export type PhotoId = 'hero' | 'residential' | 'commercial' | 'install' | 'array' | 'sky';

type UnsplashPhoto = { kind: 'unsplash'; unsplash: string; alt: string };
type PexelsPhoto = { kind: 'pexels'; pexels: string; alt: string };
export type PhotoAsset = UnsplashPhoto | PexelsPhoto;

export const PHOTOS: Record<PhotoId, PhotoAsset> = {
  hero: {
    kind: 'unsplash',
    unsplash: 'photo-1730807908064-c087959dd52c',
    alt: 'Independent house with rooftop solar panels in daylight',
  },
  residential: {
    kind: 'pexels',
    pexels: '31859250',
    alt: 'House with rooftop solar in a green landscape',
  },
  commercial: {
    kind: 'pexels',
    pexels: '7211069',
    alt: 'Daylight rooftop solar array on a commercial building',
  },
  install: {
    kind: 'pexels',
    pexels: '9875441',
    alt: 'Installer placing a solar panel on a tiled roof',
  },
  array: {
    kind: 'unsplash',
    unsplash: 'photo-1497440001374-f26997328c1b',
    alt: 'Solar panels on a green field in daylight',
  },
  sky: {
    kind: 'pexels',
    pexels: '19784139',
    alt: 'Commercial rooftop covered with solar panels',
  },
};

export function photoUrl(id: PhotoId, width: number): string {
  const photo = PHOTOS[id];
  if (photo.kind === 'unsplash') {
    return `https://images.unsplash.com/${photo.unsplash}?auto=format&fit=crop&w=${width}&q=80`;
  }
  return `https://images.pexels.com/photos/${photo.pexels}/pexels-photo-${photo.pexels}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export function photoSrcSet(id: PhotoId): string {
  return PHOTO_WIDTHS.map((width) => `${photoUrl(id, width)} ${width}w`).join(', ');
}

export function isPhotoId(value: string): value is PhotoId {
  return value in PHOTOS;
}
