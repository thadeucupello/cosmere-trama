export type BookStatus = 'published' | 'preorder' | 'coming-soon';

export type WorldId = 'scadrial' | 'roshar' | 'nalthis' | 'secret-projects';

export interface Book { id: string; title: string; originalTitle?: string; series: string; world: WorldId; order: number; description: string; cover?: string; coverIsProvisional?: boolean; status: BookStatus; releaseDate?: string; purchaseUrl?: string; featured?: boolean; isPartOfCosmere?: boolean; }
export interface World { id: WorldId; name: string; tagline: string; teaser: string; accent: string; accentSoft: string; }
export type PathId = 'aventura' | 'epico' | 'unico' | 'completo';
export interface ReadingPath { id: PathId; title: string; audience: string; recommendedLabel: string; tagline: string; commitment: string; symbol: string; firstBook: string; steps: string[]; }
export interface NavItem { id: string; label: string; route: string; hash?: string; }
export interface CampaignHighlight { eyebrow: string; headline: string; description: string; date?: string; image?: string; ctaLabel: string; ctaUrl?: string; }

export type ArticleCategory = 'comece-aqui' | 'cosmere' | 'scadrial' | 'roshar';
export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'spoiler'; title: string; text: string };

export interface Article {
  slug: string;
  title: string;
  eyebrow: string;
  category: ArticleCategory;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  symbol: string;
  blocks: ArticleBlock[];
  relatedBookIds: string[];
}
