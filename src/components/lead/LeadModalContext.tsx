import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { track } from '@/services/analytics';
import { LeadModalContext } from '@/components/lead/useLeadModal';

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('website');

  const openModal = useCallback((nextSource: string) => {
    setSource(nextSource);
    setOpen(true);
    track('quote_form_open', { source: nextSource });
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, source, openModal, closeModal }),
    [open, source, openModal, closeModal],
  );

  return <LeadModalContext.Provider value={value}>{children}</LeadModalContext.Provider>;
}
