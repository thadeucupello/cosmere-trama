// ─────────────────────────────────────────────────────────────────────────
// NEWSLETTER INTEGRATION
//
// This is the single place to wire up the real RD Station (or other ESP)
// form. Until `ENDPOINT` is set to a real URL, the site is honest with
// visitors instead of faking a successful subscription — see
// `subscribeToNewsletter` below and `Newsletter.tsx`'s "unavailable" state.
//
// To go live:
// 1. Set ENDPOINT to your RD Station public form endpoint (or a serverless
//    function you control that forwards to RD Station). Never put a
//    private API key directly in this front-end file.
// 2. Adjust the request body/headers below to match what that endpoint
//    expects.
// ─────────────────────────────────────────────────────────────────────────

export const NEWSLETTER_ENDPOINT = ''; // e.g. 'https://www.editoratrama.com.br/api/rd-station-subscribe'

export type NewsletterResult =
  | { status: 'ok' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string };

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
      body: JSON.stringify({ email, consent }),
    });

    if (!response.ok) {
      return { status: 'error', message: 'Não foi possível confirmar sua inscrição agora. Tente novamente em instantes.' };
    }
    return { status: 'ok' };
  } catch {
    return { status: 'error', message: 'Não foi possível confirmar sua inscrição agora. Verifique sua conexão e tente novamente.' };
  }
}
