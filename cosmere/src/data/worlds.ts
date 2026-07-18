import type { World } from '../types';

// Accent colors are controlled here per world.
// Update freely — the rest of the interface reads from this file.
export const worlds: World[] = [
  {
    id: 'scadrial',
    name: 'Scadrial',
    tagline: 'O mundo onde a primeira grande porta para o Cosmere foi aberta.',
    teaser: 'Um império de cinzas onde metais concedem poderes extraordinários.',
    accent: '#B8C0CC',
    accentSoft: 'rgba(184, 192, 204, 0.14)',
  },
  {
    id: 'roshar',
    name: 'Roshar',
    tagline: 'Um mundo moldado por tempestades.',
    teaser: 'Tempestades varrem um continente onde a luz das tempestades sustenta a vida e a magia.',
    accent: '#5C86B8',
    accentSoft: 'rgba(92, 134, 184, 0.16)',
  },
  {
    id: 'nalthis',
    name: 'Nalthis',
    tagline: 'Um mundo onde as cores fazem parte da própria magia.',
    teaser: 'Um reino vibrante onde o fôlego da vida pode ser doado, guardado e trocado.',
    accent: '#D68A63',
    accentSoft: 'rgba(214, 138, 99, 0.16)',
  },
  {
    id: 'secret-projects',
    name: 'Projetos Secretos',
    tagline: 'Histórias que surpreenderam o próprio Cosmere.',
    teaser: 'Edições especiais nascidas de uma campanha que surpreendeu o mundo editorial.',
    accent: '#C9A462',
    accentSoft: 'rgba(201, 164, 98, 0.16)',
  },
];

// Companion worlds shown in the "What is the Cosmere" orbit that don't have
// a full dedicated page of their own — each is tied to one published Secret
// Project book instead. Clicking one shows an inline preview (cover + link
// to that book) rather than navigating away, since there's no separate
// /lumar, /komashi or /canticle route.
export interface OrbitCompanionWorld {
  id: string;
  name: string;
  teaser: string;
  accent: string;
  relatedBookId: string;
}

export const orbitCompanionWorlds: OrbitCompanionWorld[] = [
  {
    id: 'lumar',
    name: 'Lumar',
    teaser:
      'Lumar é um mundo coberto por mares formados por esporos, que reagem de maneiras diferentes quando entram em contato com a água. É nesse planeta singular que acontece a jornada de Tress.',
    accent: '#5FA88C',
    relatedBookId: 'secret-project-1',
  },
  {
    id: 'komashi',
    name: 'Komashi',
    teaser:
      'Um mundo de contrastes, onde culturas distintas se encontram e espíritos convivem perto demais dos pesadelos — o cenário da jornada de Yumi.',
    accent: '#3E6FA8',
    relatedBookId: 'secret-project-2',
  },
  {
    id: 'canticle',
    name: 'Canticle',
    teaser:
      'Um ambiente extremo, onde a luz do sol é uma ameaça constante e seus habitantes nunca podem parar de se mover — o palco de O Homem Iluminado.',
    accent: '#A8433A',
    relatedBookId: 'secret-project-4',
  },
];

export const getOrbitCompanionWorld = (id: string) => orbitCompanionWorlds.find((w) => w.id === id);

export const getWorld = (id: World['id']) => worlds.find((w) => w.id === id)!;
