import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface RetailContextValue {
  isRetailMode: boolean;
  storeSlug?: string;
  storeName?: string;
  unitSlug?: string;
  unitName?: string;
}

const RetailContext = createContext<RetailContextValue>({ isRetailMode: true });

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
  const channel = params.get('canal')?.trim().toLowerCase();

  // Online purchase is opt-in. The plain site stays safe for physical bookstores.
  if (channel === 'online') {
    return { isRetailMode: false };
  }

  const storeSlug = params.get('loja')?.trim().toLowerCase();
  const unitSlug = params.get('unidade')?.trim().toLowerCase() || undefined;

  if (!storeSlug && channel !== 'livraria') return null;

  const storeName = storeSlug ? knownStores[storeSlug] ?? humanizeSlug(storeSlug) : undefined;
  const unitName = unitSlug ? humanizeSlug(unitSlug) : undefined;

  return {
    isRetailMode: true,
    storeSlug,
    storeName,
    unitSlug,
    unitName,
  };
}

export function RetailContextProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [retail, setRetail] = useState<RetailContextValue>(() =>
    fromSearch(window.location.search) ?? { isRetailMode: true }
  );

  useEffect(() => {
    const incoming = fromSearch(location.search);
    if (incoming) setRetail(incoming);
  }, [location.search]);

  const value = useMemo(() => retail, [retail]);
  return <RetailContext.Provider value={value}>{children}</RetailContext.Provider>;
}

export function useRetailContext() {
  return useContext(RetailContext);
}
