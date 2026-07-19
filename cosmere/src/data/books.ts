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
    series: 'Mistborn: a Trilogia Original',
    world: 'scadrial',
    order: 1,
    description: 'Por mil anos, o Senhor Soberano governou um mundo de cinzas. Agora, um ladrão capaz de sobreviver ao impossível reúne sua equipe para o maior golpe de todos: roubar o império e devolver a esperança a um povo que já esqueceu como lutar.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-imperio-final-brochura',
    cover: coverImperioFinal,
  },
  {
    id: 'mistborn-2',
    title: 'O Poço da Ascensão',
    originalTitle: 'The Well of Ascension',
    series: 'Mistborn: a Trilogia Original',
    world: 'scadrial',
    order: 2,
    description: 'Derrubar um império era apenas o começo. Cercados por inimigos e diante de uma profecia cada vez mais inquietante, os novos líderes de Scadrial descobrem que conquistar a liberdade pode ser mais fácil do que preservá-la.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-poco-da-ascensao-brochura',
    cover: coverPocoDaAscensao,
  },
  {
    id: 'mistborn-3',
    title: 'O Herói das Eras',
    originalTitle: 'The Hero of Ages',
    series: 'Mistborn: a Trilogia Original',
    world: 'scadrial',
    order: 3,
    description: 'O mundo se aproxima do colapso e antigos segredos finalmente começam a encontrar suas respostas. Escolhas, profecias e detalhes plantados desde o primeiro livro convergem para decidir o futuro de Scadrial.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/mistborn-o-heroi-das-eras-brochura',
    cover: coverHeroiDasEras,
  },
  {
    id: 'mistborn-box-trilogia-original',
    title: 'Box Mistborn: a Trilogia Original',
    series: 'Mistborn: a Trilogia Original',
    world: 'scadrial',
    order: 4,
    description: 'Os três romances que iniciam a saga reunidos em um único box: O Império Final, O Poço da Ascensão e O Herói das Eras. A jornada completa para entrar no Cosmere desde a primeira página.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/box-mistborn',
    cover: coverBoxTrilogiaOriginal,
  },

  // MISTBORN — HISTÓRIA SECRETA (novela bônus, contém spoilers da trilogia original)
  {
    id: 'mistborn-historia-secreta',
    title: 'Mistborn: História Secreta',
    originalTitle: 'Mistborn: Secret History',
    series: 'Mistborn: História Secreta',
    world: 'scadrial',
    order: 5,
    description: 'Uma história escondida entre as páginas da Trilogia Original. Descubra o que acontecia além do que os personagens podiam ver e dê o primeiro passo em direção aos segredos maiores do Cosmere.',
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
    series: 'Mistborn: Era Dois',
    world: 'scadrial',
    order: 6,
    description: 'Os quatro romances da Era Dois reunidos em um único box. Uma nova geração, uma Scadrial em transformação e uma história que amplia as fronteiras de Mistborn.',
    status: 'preorder',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/box-mistborn-wax-wayne',
    cover: coverBoxWaxWayne,
    featured: true,
  },
  {
    id: 'mistborn-era2-1',
    title: 'A Liga da Lei',
    originalTitle: 'The Alloy of Law',
    series: 'Mistborn: Era Dois',
    world: 'scadrial',
    order: 7,
    description: 'Depois de anos impondo a lei nas regiões mais perigosas de Scadrial, Wax retorna à grande cidade. Mas uma série de crimes mostra que os talentos que ele tentou deixar para trás ainda podem ser necessários.',
    status: 'coming-soon',
    cover: coverLigaDaLei,
  },
  {
    id: 'mistborn-era2-2',
    title: 'As Sombras de Si Mesmo',
    originalTitle: 'Shadows of Self',
    series: 'Mistborn: Era Dois',
    world: 'scadrial',
    order: 8,
    description: 'Assassinatos, tensão política e uma conspiração ameaçam mergulhar Elendel no caos. Para impedir o colapso, Wax e Wayne precisarão descobrir quem está manipulando a cidade pelas sombras.',
    status: 'coming-soon',
    cover: coverSombrasDeSiMesmo,
  },
  {
    id: 'mistborn-era2-3',
    title: 'Os Braceletes da Perdição',
    originalTitle: 'The Bands of Mourning',
    series: 'Mistborn: Era Dois',
    world: 'scadrial',
    order: 9,
    description: 'A busca por um artefato lendário conduz Wax e Wayne para além dos limites conhecidos de Scadrial, onde descobertas sobre o passado podem transformar o futuro do planeta.',
    status: 'coming-soon',
    cover: coverBraceletesDaPerdicao,
  },
  {
    id: 'mistborn-era2-4',
    title: 'O Metal Perdido',
    originalTitle: 'The Lost Metal',
    series: 'Mistborn: Era Dois',
    world: 'scadrial',
    order: 10,
    description: 'Na conclusão da Era Dois, uma ameaça de proporções inéditas força Wax e Wayne a enfrentar os limites de seus poderes e revela que o destino de Scadrial está ligado a algo muito maior.',
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
    description: 'Em uma guerra que parece não ter fim, um soldado escravizado luta para proteger seus homens, uma jovem estudiosa se aproxima de um segredo perigoso e um guerreiro começa a receber visões que podem anunciar o retorno de uma antiga ameaça.',
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
    description: 'Os sinais do passado se tornam impossíveis de ignorar. Enquanto novos poderes despertam e os conflitos nas Planícies Quebradas se intensificam, antigos juramentos começam a recuperar seu significado.',
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
    description: 'Para unir um mundo dividido, Dalinar precisará enfrentar as lembranças que tentou esquecer. Enquanto a guerra se espalha por Roshar, o passado de um homem pode decidir o futuro de todos.',
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
    description: 'A guerra entra em uma nova fase. Descobertas sobre a Luz das tempestades transformam o conflito, enquanto batalhas travadas por dentro se tornam tão decisivas quanto aquelas que ameaçam Roshar.',
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
    description: 'O quinto volume reúne as jornadas, os juramentos e os conflitos construídos desde O Caminho dos Reis. Um momento decisivo para Roshar e o encerramento do primeiro grande arco de Relatos da Guerra das Tempestades.',
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
    description: 'Siri foi preparada para quase tudo, menos para se casar com um deus. Quando ocupa inesperadamente o lugar da irmã, ela entra em uma corte repleta de cores, intrigas e perigos, enquanto Vivenna parte para salvá-la e descobre que o mundo fora de Idris não é como imaginava.',
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
    description: 'Tress sempre viveu em uma ilha tranquila, cercada por mares de esporos que podem explodir ao menor contato com a água. Quando a pessoa que ama é levada para longe, ela abandona tudo o que conhece e embarca em uma jornada repleta de piratas, perigos e uma feiticeira impossível de enfrentar. Uma aventura sobre coragem, amizade e a descoberta de que pessoas comuns também podem transformar o próprio destino.',
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
    description: 'Yumi dedica a vida a convocar espíritos. Pintor protege sua cidade de pesadelos que ganham forma. Quando uma força inexplicável une seus destinos, os dois precisam compreender mundos, responsabilidades e maneiras de viver completamente diferentes. Uma fantasia romântica sobre arte, dever e duas pessoas aprendendo a enxergar uma à outra.',
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
    description: 'Perseguido por uma força implacável, um homem conhecido como Nômade chega a Canticle, um planeta onde permanecer sob a luz do sol significa morrer. Para sobreviver, cidades inteiras precisam continuar em movimento, sempre fugindo do amanhecer. Uma aventura veloz, intensa e profundamente conectada ao futuro do Cosmere.',
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
    description: 'Um homem desperta em uma versão da Inglaterra medieval sem lembrar quem é ou como chegou ali. Sua única pista é um manual de sobrevivência parcialmente destruído, criado para turistas capazes de viajar entre dimensões. Uma aventura de ficção científica com humor, viagens interdimensionais, cavaleiros e tecnologia fora do lugar.',
    status: 'published',
    purchaseUrl: 'https://www.lojaeditoratrama.com.br/o-manual-do-mago-frugal',
    cover: coverManualDoMagoFrugal,
    isPartOfCosmere: false,
  },
];

export const getBooksByWorld = (world: Book['world']) =>
  books.filter((b) => b.world === world).sort((a, b) => a.order - b.order);

export const seriesList = Array.from(new Set(books.map((b) => b.series)));
