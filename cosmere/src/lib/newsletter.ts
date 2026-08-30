// ─────────────────────────────────────────────────────────────────────────
// NEWSLETTER INTEGRATION
//
// The browser talks only to our own Vercel Function. The RD Station API key
// lives server-side in the `RD_STATION_API_KEY` environment variable and is
// never exposed in this bundle.
// ─────────────────────────────────────────────────────────────────────────

export const NEWSLETTER_ENDPOINT = '/api/newsletter';

export type NewsletterResult =
  | { status: 'ok' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string };

function getAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') ?? '',
    medium: params.get('utm_medium') ?? '',
    campaign: params.get('utm_campaign') ?? '',
  };
}

export async function subscribeToNewsletter(email: string, consent: boolean): Promise<NewsletterResult> {
  if (!consent) {
    return { status: 'error', message: 'É preciso aceitar receber comunicações da Trama.' };
  }

  if (!NEWSLETTER_ENDPOINT) {
    return { status: 'not-configured' };
  }

  try {
    const response = await fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, consent, ...getAttribution() }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null) as { code?: string } | null;
      if (data?.code === 'configuration_missing') {
        return { status: 'not-configured' };
      }

      return { status: 'error', message: 'Não foi possível confirmar sua inscrição agora. Tente novamente em instantes.' };
    }

    return { status: 'ok' };
  } catch {
    return { status: 'error', message: 'Não foi possível confirmar sua inscrição agora. Verifique sua conexão e tente novamente.' };
  }
}
