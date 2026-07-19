import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
      // Reapply after layout so content restored from localStorage cannot
      // preserve the scroll position from the previous route.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
      });
    }
  }, [location.key, location.pathname, location.hash]);

  return null;
}
