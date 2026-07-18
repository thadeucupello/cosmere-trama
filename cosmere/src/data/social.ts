// ─────────────────────────────────────────────────────────────────────────
// SOCIAL LINKS
// Centralized here so the footer (and anywhere else) never hardcodes a
// social URL directly. Confirmed against lojaeditoratrama.com.br (jul/2026).
// Leave a field as `undefined`/omit it if there's no confirmed URL yet —
// components should hide the icon entirely rather than link to '#'.
// ─────────────────────────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { id: 'instagram', label: 'Trama no Instagram', url: 'https://instagram.com/editoratrama' },
  { id: 'x', label: 'Trama no X', url: 'https://x.com/editoratrama' },
  { id: 'facebook', label: 'Trama no Facebook', url: 'https://facebook.com/editoratrama' },
  // TikTok: ainda sem URL oficial confirmada — adicione aqui quando houver.
];
