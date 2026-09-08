import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  body,
  invert,
  align = 'left',
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}) {
  const Heading = as;

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
      <Heading
        className={cn(
          'text-[clamp(1.55rem,3.8vw,2.5rem)] font-bold leading-[1.15]',
          invert && 'text-white',
        )}
      >
        {title}
      </Heading>
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
