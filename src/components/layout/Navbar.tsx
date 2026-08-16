import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { ROUTES, telUrl, PHONE_DISPLAY, whatsappUrl } from '@/config/site';
import { cn } from '@/lib/cn';
import { track } from '@/services/analytics';

export function Navbar() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md transition-[box-shadow] duration-300',
        scrolled && 'shadow-subtle',
      )}
    >
      <TopBar />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-xl focus:bg-sun focus:px-3 focus:py-2 focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <div className="wrap-wide flex h-[3.65rem] items-center justify-between gap-2 sm:h-16 xl:h-[4.15rem]">
        <Link to={ROUTES.home} aria-label={t.brand.short} className="min-w-0 shrink">
          <Logo />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {t.nav.map((item) =>
            item.children ? (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[0.82rem] font-medium text-navy/75 hover:bg-sun-soft hover:text-navy 2xl:px-3 2xl:text-sm"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((v) => !v)}
                  onBlur={(e) => {
                    if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                      setSolutionsOpen(false);
                    }
                  }}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('size-3.5 shrink-0 transition', solutionsOpen && 'rotate-180')}
                  />
                </button>
                {solutionsOpen ? (
                  <div className="absolute left-0 top-full z-20 mt-1 min-w-52 rounded-xl border border-line bg-paper p-1.5 shadow-card">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-sun-soft"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={item.id}
                to={item.to}
                end={item.to === ROUTES.home}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-2.5 py-2 text-[0.82rem] font-medium text-navy/75 hover:bg-sun-soft hover:text-navy 2xl:px-3 2xl:text-sm',
                    isActive && 'bg-sun-soft text-navy',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <LanguageSwitcher />
          <a
            href={telUrl()}
            onClick={() => track('call_click', { source: 'navbar' })}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold text-navy"
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden 2xl:inline">{PHONE_DISPLAY}</span>
            <span className="2xl:hidden">{t.cta.callNow}</span>
          </a>
          <Button
            onClick={() => {
              track('nav_cta_click');
              openModal('navbar');
            }}
          >
            {t.cta.freeQuote}
          </Button>
        </div>

        <div className="flex items-center gap-1.5 xl:hidden">
          <a
            href={telUrl()}
            className="inline-flex size-10 items-center justify-center rounded-lg text-navy"
            aria-label={`${t.cta.callNow} ${PHONE_DISPLAY}`}
            onClick={() => track('call_click', { source: 'navbar_icon' })}
          >
            <Phone className="size-5" />
          </a>
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line"
            aria-expanded={open}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[min(100dvh-3.65rem,36rem)] overflow-y-auto border-t border-line bg-paper pb-[calc(var(--bottom-bar)+0.5rem)] xl:hidden">
          <nav className="wrap-wide flex flex-col gap-1 py-4" aria-label="Mobile">
            {t.nav.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="rounded-lg px-3 py-3 text-base font-medium text-navy"
                    >
                      {child.label}
                    </NavLink>
                  ))
                : [
                    <NavLink
                      key={item.id}
                      to={item.to}
                      end={item.to === ROUTES.home}
                      className="rounded-lg px-3 py-3 text-base font-medium text-navy"
                    >
                      {item.label}
                    </NavLink>,
                  ],
            )}
            <NavLink
              to={ROUTES.calculator}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy"
            >
              {t.cta.checkSavings}
            </NavLink>
            <NavLink
              to={ROUTES.contact}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy"
            >
              {t.footer.contact}
            </NavLink>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a
                href={telUrl()}
                className="btn btn-ghost w-full"
                onClick={() => track('call_click', { source: 'mobile_menu' })}
              >
                <Phone className="size-4" /> {t.cta.callNow}
              </a>
              <a
                href={whatsappUrl()}
                className="btn btn-navy w-full"
                onClick={() => track('whatsapp_click', { source: 'mobile_menu' })}
              >
                <MessageCircle className="size-4" /> {t.cta.whatsapp}
              </a>
              <Button className="w-full sm:col-span-2" onClick={() => openModal('mobile_menu')}>
                {t.cta.freeQuote}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
