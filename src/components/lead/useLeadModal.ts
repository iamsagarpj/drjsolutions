import { createContext, useContext } from 'react';

export type LeadModalContextValue = {
  open: boolean;
  source: string;
  openModal: (source: string) => void;
  closeModal: () => void;
};

export const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error('useLeadModal must be used within LeadModalProvider');
  return ctx;
}
