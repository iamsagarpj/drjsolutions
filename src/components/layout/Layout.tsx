import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BottomActionBar } from '@/components/layout/BottomActionBar';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LeadModal } from '@/components/lead/LeadModal';

export function Layout() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-sand">
      <ScrollToTop />
      <Navbar />
      <main id="main" className="min-w-0">
        <Outlet />
      </main>
      <Footer />
      <BottomActionBar />
      <WhatsAppFloat />
      <LeadModal />
    </div>
  );
}
