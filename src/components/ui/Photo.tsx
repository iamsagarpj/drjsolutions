import { PHOTOS, photoSrcSet, photoUrl, type PhotoId } from '@/config/photos';
import { cn } from '@/lib/cn';

export function Photo({
  id,
  alt,
  className,
  eager = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  id: PhotoId;
  alt?: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  const photo = PHOTOS[id];

  return (
    <img
      src={photoUrl(id, eager ? 1920 : 1280)}
      srcSet={photoSrcSet(id)}
      sizes={sizes}
      alt={alt ?? photo.alt}
      width={1920}
      height={1280}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : undefined}
      className={cn('w-full object-cover', className)}
      draggable={false}
    />
  );
}
