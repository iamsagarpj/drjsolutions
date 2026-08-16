import { cn } from '@/lib/cn';

type Props = {
  variant?: 'color' | 'light';
  className?: string;
  markClassName?: string;
};

export function Logo({ variant = 'color', className, markClassName }: Props) {
  const word = variant === 'light' ? '#FFFFFF' : '#0F3D32';
  const sub = variant === 'light' ? 'rgba(255,255,255,0.7)' : '#3D7A68';

  return (
    <span className={cn('inline-flex min-w-0 items-center gap-2.5 sm:gap-3', className)}>
      <LogoMark className={cn('size-8 shrink-0 sm:size-10', markClassName)} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className="font-display text-[1.02rem] font-bold tracking-[-0.03em] sm:text-[1.2rem]"
          style={{ color: word }}
        >
          DRJ Solutions
        </span>
        <span
          className="mt-1 hidden text-[0.58rem] font-semibold uppercase tracking-[0.16em] min-[380px]:block"
          style={{ color: sub }}
        >
          Rooftop Solar
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="14" fill="#0F3D32" />
      <circle cx="24" cy="18" r="7" fill="#22C55E" />
      <path
        d="M24 5.5v3.2M24 27.3v3.2M11.8 18h3.2M33 18h3.2M15.2 9.2l2.3 2.3M30.5 24.5l2.3 2.3M32.8 9.2l-2.3 2.3M17.5 24.5l-2.3 2.3"
        stroke="#86EFAC"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M10 34.5h28L31.5 42H16.5L10 34.5Z" fill="#22C55E" />
      <path
        d="M16 36.2h16M18.2 38.6h11.6M20.6 41h6.8"
        stroke="#0F3D32"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
