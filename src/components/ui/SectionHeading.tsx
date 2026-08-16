import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  body,
  invert,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-3xl text-center')}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.18em]',
            invert ? 'text-sun-bright' : 'text-sun-deep',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-[clamp(1.55rem,3.8vw,2.5rem)] font-bold leading-[1.15]',
          invert && 'text-white',
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            'mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base lg:text-lg',
            invert ? 'text-white/75' : 'text-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
