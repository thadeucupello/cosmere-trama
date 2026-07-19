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
    title: 'A porta de entrada',
    audience: 'Para quem vai conhecer Brandon Sanderson pela primeira vez.',
    recommendedLabel: 'Comece por Mistborn',
    steps: [
      'O Império Final',
      'O Poço da Ascensão',
      'O Herói das Eras',
      'Warbreaker: o sopro dos Deuses',
      'Tress, a garota do Mar Esmeralda',
    ],
  },
  {
    id: 'epico',
    title: 'A grande saga',
    audience: 'Para quem quer mergulhar de imediato em uma fantasia monumental.',
    recommendedLabel: 'Viaje para Roshar',
    steps: [
      'O Caminho dos Reis',
      'Palavras de Radiância',
      'Sacramentadora',
      'Ritmo da Guerra',
      'Vento e Verdade (novembro de 2026)',
    ],
  },
  {
    id: 'unico',
    title: 'Uma história completa',
    audience: 'Para quem prefere começar por aventuras independentes.',
    recommendedLabel: 'Descubra os livros únicos',
    steps: [
      'Warbreaker: o sopro dos Deuses',
      'Tress, a garota do Mar Esmeralda',
      'Yumi e o Pintor de Pesadelos',
      'O Homem Iluminado',
    ],
  },
  {
    id: 'completo',
    title: 'O mapa inteiro',
    audience: 'Para quem quer acompanhar as conexões entre todos os mundos.',
    recommendedLabel: 'Siga a rota Cosmere da Trama',
    steps: [
      'Mistborn: a Trilogia Original',
      'Warbreaker: o sopro dos Deuses',
      'Relatos da Guerra das Tempestades, volumes 1 a 4',
      'Mistborn: Era Dois',
      'Mistborn: História Secreta',
      'Projetos Secretos',
      'Vento e Verdade (novembro de 2026)',
    ],
  },
];

// Update this object to change the promotional highlight without touching code.
export const campaignHighlight: CampaignHighlight = {
  eyebrow: 'Em breve',
  headline: 'Vento e Verdade chega em novembro de 2026',
  description: 'O quinto volume de Relatos da Guerra das Tempestades ainda não foi lançado pela Editora Trama — fique de olho.',
  ctaLabel: 'Saiba mais',
  // ctaUrl: 'https://editoratrama.com.br/...' — adicione o link oficial assim que a pré-venda abrir.
};
