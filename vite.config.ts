import type { Book } from '../types';

import coverImperioFinal from '../assets/books/o-imperio-final.jpg';
import coverPocoDaAscensao from '../assets/books/o-poco-da-ascensao.jpg';
import coverHeroiDasEras from '../assets/books/o-heroi-das-eras.jpg';
import coverBoxTrilogiaOriginal from '../assets/books/box-mistborn-trilogia-original.jpg';
import coverHistoriaSecreta from '../assets/books/mistborn-historia-secreta.jpg';
import coverBoxWaxWayne from '../assets/books/box-wax-e-wayne.jpg';
import coverLigaDaLei from '../assets/books/a-liga-da-lei.jpg';
import coverSombrasDeSiMesmo from '../assets/books/sombras-de-si-mesmo.jpg';
import coverBraceletesDaPerdicao from '../assets/books/os-braceletes-da-perdicao.jpg';
import coverMetalPerdido from '../assets/books/o-metal-perdido.jpg';
import coverCaminhoDosReis from '../assets/books/o-caminho-dos-reis.jpg';
import coverPalavrasDeRadiancia from '../assets/books/palavras-de-radiancia.jpg';
import coverSacramentadora from '../assets/books/sacramentadora.jpg';
import coverRitmoDaGuerra from '../assets/books/ritmo-da-guerra.jpg';
import coverWindAndTruthProvisional from '../assets/books/wind-and-truth-provisoria.jpg';
import coverTress from '../assets/books/tress.jpg';
import coverYumi from '../assets/books/yumi.jpg';
import coverManualDoMagoFrugal from '../assets/books/manual-do-mago-frugal.jpg';
import coverHomemIluminado from '../assets/books/o-homem-iluminado.jpg';
import coverWarbreaker from '../assets/books/warbreaker.jpg';

// ─────────────────────────────────────────────────────────────────────────
// CATALOGUE CONFIGURATION
// The Trama team can edit this file to update covers, release dates,
// publication status and purchase links without touching any component.
//
// - `cover`: path under /src/assets/books/. Leave undefined to show the
//    elegant placeholder until final artwork is supplied.
// - `coverIsProvisional`: set to true when the cover shown is a stand-in
//    (e.g. the international/English edition) rather than the final
//    Brazilian art — the UI shows a small "capa provisória" label.
// - `purchaseUrl`: leave undefined while there is no real link. The UI
//    will hide the "Comprar" action instead of rendering a broken link.
// - `status`: 'published' | 'preorder' | 'coming-soon'
// ─────────────────────────────────────────────────────────────────────────

export const books: Book[] = [
  // MISTBORN — TRILOGIA ORIGINAL
  {
    id: 'mistborn-1',
    title: 'O Império Final',
    originalTitle: 'The Final Empire',
    series: 'Mistborn — Trilogia Original',
    world: 'scadrial',
    order: 1,
    description: 'Em um império onde as cinzas caem do céu, uma jovem descobre um poder capaz de mudar tudo.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-imperio-final-brochura',
    cover: coverImperioFinal,
  },
  {
    id: 'mistborn-2',
    title: 'O Poço da Ascensão',
    originalTitle: 'The Well of Ascension',
    series: 'Mistborn — Trilogia Original',
    world: 'scadrial',
    order: 2,
    description: 'Um novo governo enfrenta seus primeiros e mais perigosos desafios.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-poco-da-ascensao-brochura',
    cover: coverPocoDaAscensao,
  },
  {
    id: 'mistborn-3',
    title: 'O Herói das Eras',
    originalTitle: 'The Hero of Ages',
    series: 'Mistborn — Trilogia Original',
    world: 'scadrial',
    order: 3,
    description: 'O destino de Scadrial chega ao seu ponto mais decisivo.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-heroi-das-eras-brochura',
    cover: coverHeroiDasEras,
  },
  {
    id: 'mistborn-box-trilogia-original',
    title: 'Box Mistborn: A Trilogia Original',
    series: 'Mistborn — Trilogia Original',
    world: 'scadrial',
    order: 4,
    description: 'Os três romances da trilogia original em um só box — a mesma história de O Império Final, O Poço da Ascensão e O Herói das Eras.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/box-mistborn',
    cover: coverBoxTrilogiaOriginal,
  },

  // MISTBORN — HISTÓRIA SECRETA (novela bônus, contém spoilers da trilogia original)
  {
    id: 'mistborn-historia-secreta',
    title: 'Mistborn: História Secreta',
    originalTitle: 'Mistborn: Secret History',
    series: 'Mistborn — História Secreta',
    world: 'scadrial',
    order: 5,
    description: 'Uma novela complementar à trilogia original — recomendada para quem já leu os três primeiros livros.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-historia-secreta',
    cover: coverHistoriaSecreta,
  },

  // MISTBORN — ERA 2
  // A Trama vende atualmente o box com os quatro romances. Os quatro
  // volumes também estão previstos para lançamento individual em breve —
  // por isso já aparecem catalogados abaixo como "coming-soon", prontos
  // para virar "published" assim que as vendas avulsas abrirem.
  {
    id: 'mistborn-era2-box',
    title: 'Box Mistborn: Wax & Wayne',
    series: 'Mistborn — Era Dois',
    world: 'scadrial',
    order: 6,
    description: 'Trezentos anos depois, uma nova geração enfrenta um mundo em transformação — os quatro romances da Era Dois em um só box.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/box-mistborn-wax-wayne',
    cover: coverBoxWaxWayne,
    featured: true,
  },
  {
    id: 'mistborn-era2-1',
    title: 'A Liga da Lei',
    originalTitle: 'The Alloy of Law',
    series: 'Mistborn — Era Dois',
    world: 'scadrial',
    order: 7,
    description: 'Wax & Wayne, livro um: a fronteira selvagem dá lugar a uma metrópole em expansão — e a um novo tipo de herói.',
    status: 'coming-soon',
    cover: coverLigaDaLei,
  },
  {
    id: 'mistborn-era2-2',
    title: 'As Sombras de Si Mesmo',
    originalTitle: 'Shadows of Self',
    series: 'Mistborn — Era Dois',
    world: 'scadrial',
    order: 8,
    description: 'Wax & Wayne, livro dois: a cidade cresce, e com ela, novos perigos.',
    status: 'coming-soon',
    cover: coverSombrasDeSiMesmo,
  },
  {
    id: 'mistborn-era2-3',
    title: 'Os Braceletes da Perdição',
    originalTitle: 'The Bands of Mourning',
    series: 'Mistborn — Era Dois',
    world: 'scadrial',
    order: 9,
    description: 'Wax & Wayne, livro três: segredos do passado ameaçam o frágil equilíbrio do presente.',
    status: 'coming-soon',
    cover: coverBraceletesDaPerdicao,
  },
  {
    id: 'mistborn-era2-4',
    title: 'O Metal Perdido',
    originalTitle: 'The Lost Metal',
    series: 'Mistborn — Era Dois',
    world: 'scadrial',
    order: 10,
    description: 'Wax & Wayne, livro quatro: a conclusão da segunda era de Scadrial.',
    status: 'coming-soon',
    cover: coverMetalPerdido,
  },

  // RELATOS DA GUERRA DAS TEMPESTADES
  {
    id: 'stormlight-1',
    title: 'O Caminho dos Reis',
    originalTitle: 'The Way of Kings',
    series: 'Relatos da Guerra das Tempestades',
    world: 'roshar',
    order: 1,
    description: 'Em Roshar, tempestades moldam a terra e a história de reinos inteiros.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/produto/o-caminho-dos-reis.html',
    cover: coverCaminhoDosReis,
  },
  {
    id: 'stormlight-2',
    title: 'Palavras de Radiância',
    originalTitle: 'Words of Radiance',
    series: 'Relatos da Guerra das Tempestades',
    world: 'roshar',
    order: 2,
    description: 'Antigas ordens começam a despertar diante de uma ameaça crescente.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/produto/palavras-de-radiancia.html',
    cover: coverPalavrasDeRadiancia,
  },
  {
    id: 'stormlight-3',
    title: 'Sacramentadora',
    originalTitle: 'Oathbringer',
    series: 'Relatos da Guerra das Tempestades',
    world: 'roshar',
    order: 3,
    description: 'Juramentos são testados enquanto a guerra se espalha por Roshar.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/sacramentadora',
    cover: coverSacramentadora,
  },
  {
    id: 'stormlight-4',
    title: 'Ritmo da Guerra',
    originalTitle: 'Rhythm of War',
    series: 'Relatos da Guerra das Tempestades',
    world: 'roshar',
    order: 4,
    description: 'A guerra avança e revela novas dimensões do conflito entre os povos de Roshar.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/ritmo-da-guerra',
    cover: coverRitmoDaGuerra,
  },
  {
    id: 'stormlight-5',
    title: 'Vento e Verdade',
    originalTitle: 'Wind and Truth',
    series: 'Relatos da Guerra das Tempestades',
    world: 'roshar',
    order: 5,
    description: 'Em breve: o quinto volume de Relatos da Guerra das Tempestades, marcando um novo capítulo decisivo para Roshar.',
    // TODO(Trama): ainda não localizado à venda em lojaeditoratrama.com.br
    // (conferido em jul/2026) — atualize purchaseUrl e status assim que a
    // edição brasileira for confirmada. A capa exibida é a edição
    // internacional (inglês), usada apenas como referência temporária.
    status: 'coming-soon',
    cover: coverWindAndTruthProvisional,
    coverIsProvisional: true,
    featured: true,
  },

  // WARBREAKER
  {
    id: 'warbreaker',
    title: 'Warbreaker: o sopro dos Deuses',
    series: 'Warbreaker',
    world: 'nalthis',
    order: 1,
    description: 'Em Nalthis, cor e fôlego são a base de uma magia única — e de uma história completa em um único volume.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/warbreaker-o-sopro-dos-deuses',
    cover: coverWarbreaker,
  },

  // PROJETOS SECRETOS
  {
    id: 'secret-project-1',
    title: 'Tress, a garota do Mar Esmeralda',
    originalTitle: 'Tress of the Emerald Sea',
    series: 'Projetos Secretos',
    world: 'secret-projects',
    order: 1,
    description: 'A primeira das quatro histórias surpresa nascidas de uma campanha histórica.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/produto/projeto-secreto-1-titulo-provisorio.html',
    cover: coverTress,
  },
  {
    id: 'secret-project-2',
    title: 'Yumi e o Pintor de Pesadelos',
    originalTitle: 'Yumi and the Nightmare Painter',
    series: 'Projetos Secretos',
    world: 'secret-projects',
    order: 2,
    description: 'A segunda edição especial da campanha de Projetos Secretos.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/yumi-e-o-pintor-de-pesadelos',
    cover: coverYumi,
  },
  {
    id: 'secret-project-4',
    title: 'O Homem Iluminado',
    originalTitle: 'The Sunlit Man',
    series: 'Projetos Secretos',
    world: 'secret-projects',
    order: 3,
    description: 'A quarta edição especial da campanha de Projetos Secretos.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/o-homem-iluminado',
    cover: coverHomemIluminado,
  },
  {
    id: 'secret-project-3',
    title: 'O Manual do Mago Frugal',
    originalTitle: "The Frugal Wizard's Handbook for Surviving Medieval England",
    series: 'Projetos Secretos',
    world: 'secret-projects',
    order: 4,
    description: 'Uma aventura fora do Cosmere: a terceira edição especial da campanha de Projetos Secretos.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/o-manual-do-mago-frugal',
    cover: coverManualDoMagoFrugal,
    isPartOfCosmere: false,
  },
];

export const getBooksByWorld = (world: Book['world']) =>
  books.filter((b) => b.world === world).sort((a, b) => a.order - b.order);

export const seriesList = Array.from(new Set(books.map((b) => b.series)));
