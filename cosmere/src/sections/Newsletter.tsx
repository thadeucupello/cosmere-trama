import { FormEvent, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { subscribeToNewsletter } from '../lib/newsletter';
import { socialLinks } from '../data/social';

type FormState = 'idle' | 'loading' | 'success' | 'error' | 'unavailable';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!EMAIL_PATTERN.test(email)) {
      setError('Digite um e-mail válido para continuar.');
      setState('error');
      return;
    }

    if (!consent) {
      setError('Marque a caixa de consentimento para receber nossas comunicações.');
      setState('error');
      return;
    }

    setState('loading');
    const result = await subscribeToNewsletter(email, consent);

    if (result.status === 'ok') {
      setState('success');
    } else if (result.status === 'not-configured') {
      setState('unavailable');
    } else {
      setError(result.message);
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <NewsletterShell>
        <p className="newsletter__success" role="status">
          Inscrição confirmada! Fique de olho no seu e-mail para não perder nenhuma novidade da Trama.
        </p>
      </NewsletterShell>
    );
  }

  if (state === 'unavailable') {
    return (
      <NewsletterShell>
        <p className="newsletter__success" role="status">
          Nosso formulário de novidades por e-mail ainda está a caminho. Enquanto isso, você pode acompanhar
          os lançamentos da Trama nas redes sociais:
        </p>
        {socialLinks.length > 0 && (
          <div className="newsletter__social">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noreferrer">
                {social.label.replace('Trama no ', '')}
              </a>
            ))}
          </div>
        )}
      </NewsletterShell>
    );
  }

  return (
    <NewsletterShell>
      <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
        <div className="newsletter__field">
          <label htmlFor="newsletter-email" className="visually-hidden">
            Endereço de e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={state === 'error'}
            aria-describedby={state === 'error' ? 'newsletter-error' : undefined}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={state === 'loading'}>
            {state === 'loading' ? 'Enviando…' : 'Receber novidades'}
          </button>
        </div>

        <label className="newsletter__consent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-required="true"
            required
          />
          Aceito receber comunicações da Editora Trama por e-mail.
        </label>

        {state === 'error' && (
          <p id="newsletter-error" className="newsletter__error" role="alert">
            {error}
          </p>
        )}

        <p className="newsletter__privacy">Respeitamos sua privacidade.</p>
      </form>
    </NewsletterShell>
  );
}

function NewsletterShell({ children }: { children: React.ReactNode }) {
  return (
    <section id="newsletter" className="section newsletter" aria-label="Newsletter">
      <div className="container newsletter__inner">
        <SectionHeading
          align="center"
          title="Continue explorando o Cosmere."
          subtitle="Receba novidades sobre novos lançamentos, eventos e conteúdos especiais da Trama."
        />
        {children}
      </div>
    </section>
  );
}
