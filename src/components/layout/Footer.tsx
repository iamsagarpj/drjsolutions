import { Link } from 'react-router-dom';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import {
  BUSINESS,
  formattedAddress,
  PHONE_DISPLAY,
  ROUTES,
  telUrl,
  whatsappUrl,
} from '@/config/site';
import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <footer className="navy-field pb-[calc(var(--bottom-bar)+0.75rem)] text-paper xl:pb-0">
      <div className="wrap-wide grid gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {t.brand.footerBlurb}
          </p>
          <Button className="mt-5 w-full sm:w-auto" onClick={() => openModal('footer')}>
            {t.cta.freeSurvey}
          </Button>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-sun-bright">
            {t.footer.explore}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {t.nav.map((item) =>
              item.children ? (
                item.children.map((child) => (
                  <li key={child.to}>
                    <Link to={child.to} className="text-white/75 hover:text-white">
                      {child.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={item.id}>
                  <Link to={item.to} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link to={ROUTES.calculator} className="text-white/75 hover:text-white">
                {t.cta.checkSavings}
              </Link>
            </li>
            <li>
              <Link to={ROUTES.contact} className="text-white/75 hover:text-white">
                {t.footer.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-sun-bright">
            {t.footer.contact}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a href={telUrl()} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="size-4 text-sun" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} className="inline-flex items-center gap-2 hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden />
              <span>
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}
                <br />
                {BUSINESS.address.line3}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-sun-bright">
            {t.footer.legal}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to={ROUTES.privacy} className="text-white/75 hover:text-white">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to={ROUTES.terms} className="text-white/75 hover:text-white">
                {t.footer.terms}
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/45">{formattedAddress()}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="wrap-wide text-xs text-white/45">
          © {new Date().getFullYear()} {BUSINESS.name}. {BUSINESS.address.city}.
        </p>
      </div>
    </footer>
  );
}
