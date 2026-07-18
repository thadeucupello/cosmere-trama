import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useExploredWorlds() {
  return useLocalStorage<string[]>('cosmere:explored-worlds', []);
}

export function useMarkExplored(worldId: string) {
  const [, setExplored] = useExploredWorlds();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExplored((prev) => (prev.includes(worldId) ? prev : [...prev, worldId]));
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [worldId, setExplored]);

  return ref;
}
