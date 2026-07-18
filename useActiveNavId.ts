import { useEffect, useState } from 'react';

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
    } catch {
      // Storage disabled or full — the app continues without persistence.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
