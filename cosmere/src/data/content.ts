import type { CampaignHighlight, NavItem, ReadingPath } from '../types';

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Início', route: '/' },
  { id: 'autor', label: 'Brandon Sanderson', route: '/', hash: 'autor' },
  { id: 'cosmere', label: 'O que é o Cosmere', route: '/', hash: 'cosmere' },
  { id: 'caminho', label: 'Por onde começar', route: '/', hash: 'caminho' },
  { id: 'scadrial', label: 'Scadrial', route: '/scadrial' },
  { id: 'roshar', label: 'Roshar', route: '/roshar' },
  { id: 'nalthis', label: 'Nalthis', route: '/nalthis' },
  { id: 'projetos-secretos', label: 'Projetos Secretos', route: '/projetos-secretos' },
  { id: 'jornada', label: 'Sua Jornada', route: '/jornada' },
  { id: 'biblioteca', label: 'Biblioteca Trama', route: '/biblioteca' },
  { id: 'newsletter', label: 'Newsletter', route: '.', hash: 'newsletter' },
];

export const readingPaths: ReadingPath[] = [
  {
    id: 'aventura',
    title: 'Primeira viagem',
    audience: 'Para quem nunca leu Brandon Sanderson.',
    recommendedLabel: 'Mistborn, a Trilogia Original',
    steps: ['O Império Final', 'O Poço da Ascensão', 'O Herói das Eras', 'Continuar explorando o Cosmere'],
  },
  {
    id: 'epico',
    title: 'Fantasia épica',
    audience: 'Para quem busca uma saga monumental.',
    recommendedLabel: 'Relatos da Guerra das Tempestades',
    steps: ['O Caminho dos Reis', 'Palavras de Radiância', 'Sacramentadora', 'Ritmo da Guerra', 'Vento e Verdade'],
  },
  {
    id: 'unico',
    title: 'Livro único',
    audience: 'Para quem quer uma história completa em um só volume.',
    recommendedLabel: 'Warbreaker',
    steps: ['Warbreaker', 'Continuar explorando o Cosmere'],
  },
  {
    id: 'completo',
    title: 'Explorar tudo',
    audience: 'Para quem pretende mergulhar em todo o Cosmere.',
    recommendedLabel: 'Guia completo',
    steps: ['Mistborn — Trilogia Original', 'Relatos da Guerra das Tempestades', 'Warbreaker', 'Mistborn — Era Dois', 'Projetos Secretos'],
  },
];

// Update this object to change the promotional highlight without touching code.
// TODO(Trama): confirme a data oficial de lançamento de Vento e Verdade
// antes de publicar — "novembro de 2026" foi o texto sugerido, mas ainda
// não foi confirmado em lojaeditoratrama.com.br.
export const campaignHighlight: CampaignHighlight = {
  eyebrow: 'Em breve',
  headline: 'Vento e Verdade chega em novembro de 2026',
  description: 'O quinto volume de Relatos da Guerra das Tempestades ainda não foi lançado pela Editora Trama — fique de olho.',
  ctaLabel: 'Saiba mais',
  // ctaUrl: 'https://editoratrama.com.br/...' — adicione o link oficial assim que a pré-venda abrir.
};
