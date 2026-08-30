import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'cosmere:retail-context';

interface RetailContextValue {
  isRetailMode: boolean;
  storeSlug?: string;
  storeName?: string;
  unitSlug?: string;
  unitName?: string;
}

const RetailContext = createContext<RetailContextValue>({ isRetailMode: false });

const knownStores: Record<string, string> = {
  leitura: 'Livraria Leitura',
  travessa: 'Livraria da Travessa',
  'martins-fontes': 'Martins Fontes',
};

function humanizeSlug(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function fromSearch(search: string): RetailContextValue | null {
  const params = new URLSearchParams(search);
  const storeSlug = params.get('loja')?.trim().toLowerCase();

  if (!storeSlug) return null;

  const unitSlug = params.get('unidade')?.trim().toLowerCase() || undefined;
  const storeName = knownStores[storeSlug] ?? humanizeSlug(storeSlug);
  const unitName = unitSlug ? humanizeSlug(unitSlug) : undefined;

  return {
    isRetailMode: true,
    storeSlug,
    storeName,
    unitSlug,
    unitName,
  };
}

function fromSession(): RetailContextValue | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RetailContextValue;
    return parsed.isRetailMode ? parsed : null;
  } catch {
    return null;
  }
}

export function RetailContextProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [retail, setRetail] = useState<RetailContextValue>(() =>
    fromSearch(window.location.search) ?? fromSession() ?? { isRetailMode: false }
  );

  useEffect(() => {
    const incoming = fromSearch(location.search);
    if (!incoming) return;

    setRetail(incoming);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
    } catch {
      // The experience still works on the current page when storage is unavailable.
    }
  }, [location.search]);

  const value = useMemo(() => retail, [retail]);
  return <RetailContext.Provider value={value}>{children}</RetailContext.Provider>;
}

export function useRetailContext() {
  return useContext(RetailContext);
}
