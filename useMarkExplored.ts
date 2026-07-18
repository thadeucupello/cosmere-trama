import { useEffect } from 'react';

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      meta = document.querySelector('meta[name="description"]');
      if (meta) {
        previousDescription = meta.getAttribute('content');
        meta.setAttribute('content', description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
