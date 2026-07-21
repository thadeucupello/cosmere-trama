import { campaignHighlight } from '../data/content';

export default function CampaignHighlight() {
  const { eyebrow, headline, description, date, ctaLabel, ctaUrl } = campaignHighlight;

  return (
    <aside className="campaign-highlight" aria-label={headline}>
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="campaign-highlight__headline">{headline}</h3>
      <p className="campaign-highlight__description">{description}</p>
      {date && <p className="campaign-highlight__date">{date}</p>}
      {ctaUrl ? (
        <a href={ctaUrl} className="btn btn-primary">
          {ctaLabel}
        </a>
      ) : (
        <p className="campaign-highlight__pending">Mais informações em breve</p>
      )}
    </aside>
  );
}
