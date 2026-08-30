// RD_STATION_API_KEY is injected by Vercel in Preview and Production.
const RD_CONVERSION_ENDPOINT = 'https://api.rd.services/platform/conversions';
const CONVERSION_IDENTIFIER = 'newsletter-cosmere-trama';
const CONTACT_TAGS = ['cosmere', 'newsletter', 'trama'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function safeString(value, maxLength = 180) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  const apiKey = process.env.RD_STATION_API_KEY;

  if (request.method === 'GET') {
    return apiKey
      ? response.status(200).json({ ok: true, service: 'newsletter' })
      : response.status(503).json({ ok: false, code: 'configuration_missing' });
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'GET, POST');
    return response.status(405).json({ ok: false, code: 'method_not_allowed' });
  }

  if (!apiKey) {
    return response.status(503).json({ ok: false, code: 'configuration_missing' });
  }

  let body = request.body ?? {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return response.status(400).json({ ok: false, code: 'invalid_json' });
    }
  }

  const email = safeString(body.email, 254).toLowerCase();
  const consent = body.consent === true;

  if (!EMAIL_PATTERN.test(email)) {
    return response.status(400).json({ ok: false, code: 'invalid_email' });
  }

  if (!consent) {
    return response.status(400).json({ ok: false, code: 'consent_required' });
  }

  const source = safeString(body.source);
  const medium = safeString(body.medium);
  const campaign = safeString(body.campaign);

  const payload = {
    conversion_identifier: CONVERSION_IDENTIFIER,
    email,
    tags: CONTACT_TAGS,
    legal_bases: [
      {
        category: 'communications',
        type: 'consent',
        status: 'granted',
      },
    ],
    ...(source ? { traffic_source: source } : {}),
    ...(medium ? { traffic_medium: medium } : {}),
    ...(campaign ? { traffic_campaign: campaign } : {}),
  };

  try {
    const rdResponse = await fetch(`${RD_CONVERSION_ENDPOINT}?api_key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!rdResponse.ok) {
      return response.status(502).json({ ok: false, code: 'rd_station_error' });
    }

    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ ok: false, code: 'rd_station_unavailable' });
  }
}
