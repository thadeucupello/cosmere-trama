import { useEffect, useState } from 'react';

const localStorageEvent = 'cosmere:local-storage';

/**
 * Lightweight, resilient localStorage hook.
 * Falls back silently to in-memory state if localStorage is unavailable
 * (private browsing, disabled storage, etc). No email or sensitive data
 * is ever stored here — only non-sensitive personalization like the
 * selected reading path or which worlds have been explored.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new CustomEvent(localStorageEvent, { detail: { key, value } }));
    } catch {
      // Storage disabled or full — the app continues without persistence.
    }
  }, [key, value]);

  useEffect(() => {
    const syncValue = (event: Event) => {
      const detail = (event as CustomEvent<{ key: string; value: T }>).detail;
      if (detail?.key === key) setValue(detail.value);
    };

    const syncOtherTab = (event: StorageEvent) => {
      if (event.key !== key || event.newValue === null) return;
      try { setValue(JSON.parse(event.newValue) as T); } catch { /* Ignore invalid external values. */ }
    };

    window.addEventListener(localStorageEvent, syncValue);
    window.addEventListener('storage', syncOtherTab);
    return () => {
      window.removeEventListener(localStorageEvent, syncValue);
      window.removeEventListener('storage', syncOtherTab);
    };
  }, [key]);

  return [value, setValue] as const;
}
