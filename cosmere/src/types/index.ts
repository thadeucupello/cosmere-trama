export type BookStatus = 'published' | 'preorder' | 'coming-soon';

export type WorldId = 'scadrial' | 'roshar' | 'nalthis' | 'secret-projects';

export interface Book {
  id: string;
  title: string;
  originalTitle?: string;
  series: string;
  world: WorldId;
  order: number;
  description: string;
  cover?: string;
  coverIsProvisional?: boolean;
  status: BookStatus;
  releaseDate?: string;
  purchaseUrl?: string;
  featured?: boolean;
  /** Set to false only for the rare title that isn't set within the Cosmere
   * shared universe (e.g. The Frugal Wizard's Handbook). Defaults to true. */
  isPartOfCosmere?: boolean;
}

export interface World {
  id: WorldId;
  name: string;
  tagline: string;
  teaser: string;
  accent: string;
  accentSoft: string;
}

export type PathId = 'aventura' | 'epico' | 'unico' | 'completo';

export interface ReadingPath {
  id: PathId;
  title: string;
  audience: string;
  recommendedLabel: string;
  tagline: string;
  commitment: string;
  symbol: string;
  firstBook: string;
  steps: string[];
}

export interface NavItem {
  id: string;
  label: string;
  route: string;
  hash?: string;
}

export interface CampaignHighlight {
  eyebrow: string;
  headline: string;
  description: string;
  date?: string;
  image?: string;
  ctaLabel: string;
  ctaUrl?: string;
}
