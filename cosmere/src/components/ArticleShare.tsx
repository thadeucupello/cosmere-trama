import { useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';

interface Props {
  title: string;
}

export default function ArticleShare({ title }: Props) {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window === 'undefined' ? '' : window.location.href;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${pageUrl}`)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className="article-share" aria-label="Compartilhar este arquivo">
      <div>
        <span aria-hidden="true">✦</span>
        <p><strong>Compartilhe esta descoberta</strong><small>Envie este arquivo para outro viajante.</small></p>
      </div>
      <div className="article-share__actions">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Compartilhar pelo WhatsApp">
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
        <button type="button" onClick={copyLink} aria-live="polite">
          {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
          {copied ? 'Link copiado' : 'Copiar link'}
        </button>
      </div>
    </aside>
  );
}
