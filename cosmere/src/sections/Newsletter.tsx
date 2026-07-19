import { FormEvent, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { NEWSLETTER_ENDPOINT, subscribeToNewsletter } from '../lib/newsletter';
import { socialLinks } from '../data/social';

type FormState = 'idle' | 'loading' | 'success' | 'error';

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
    } else {
      setError(
        result.status === 'not-configured'
          ? 'Nosso formulário ainda está a caminho.'
          : result.message
      );
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <NewsletterShell>
        <p className="newsletter__success" role="status">
          Sua jornada continua. Inscrição confirmada! Fique de olho no seu e-mail para acompanhar
          os próximos lançamentos e descobertas da Trama.
        </p>
      </NewsletterShell>
    );
  }

  if (!NEWSLETTER_ENDPOINT) {
    return (
      <NewsletterShell>
        <p className="newsletter__success" role="status">
          Nosso canal de novidades por e-mail ainda está sendo preparado. Enquanto isso, acompanhe
          a Trama nas redes sociais e não perca os próximos lançamentos:
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
            {state === 'loading' ? 'Enviando…' : 'Quero acompanhar o Cosmere'}
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

        <p className="newsletter__privacy">
          Respeitamos sua privacidade. Você poderá cancelar o recebimento quando quiser.
        </p>
      </form>
    </NewsletterShell>
  );
}

function NewsletterShell({ children }: { children: React.ReactNode }) {
  return (
    <section id="newsletter" className="section newsletter" aria-label="Newsletter">
      <div className="container newsletter__inner">
        <span className="newsletter__symbol" aria-hidden="true">✦</span>
        <SectionHeading
          align="center"
          title="Alguns segredos levam tempo para serem revelados."
          subtitle="Receba novidades sobre lançamentos, pré-vendas e novas viagens pelo Cosmere diretamente da Trama."
        />

        <ul className="newsletter__benefits" aria-label="O que você receberá">
          <li>Novos lançamentos</li>
          <li>Abertura de pré-vendas</li>
          <li>Conteúdos e novidades do Cosmere</li>
        </ul>

        {children}
      </div>
    </section>
  );
}
