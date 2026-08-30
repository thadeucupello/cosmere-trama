import { useEffect } from 'react';

const SITE_URL = 'https://cosmere.editoratrama.com.br';
const DEFAULT_IMAGE = `${SITE_URL}/og-cosmere.jpg`;

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${window.location.pathname === '/' ? '/' : window.location.pathname}`;

    document.title = title;

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);
  }, [title, description]);
}
