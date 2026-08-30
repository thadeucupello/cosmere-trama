import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(rootDir, 'dist');
const templatePath = join(distDir, 'index.html');
const siteUrl = 'https://cosmere.editoratrama.com.br';
const defaultImage = `${siteUrl}/og-cosmere.jpg`;

const pages = [
  {
    path: '/',
    title: 'Descubra a Cosmere | Brandon Sanderson na Editora Trama',
    description: 'Explore os mundos, os livros e os melhores caminhos para começar sua jornada pelo universo compartilhado de Brandon Sanderson.',
  },
  {
    path: '/scadrial',
    title: 'Scadrial | Descubra a Cosmere — Editora Trama',
    description: 'Conheça Scadrial, o mundo de Mistborn: Alomancia, Feruquimia, Hemalurgia e os livros publicados pela Trama.',
  },
  {
    path: '/roshar',
    title: 'Roshar | Descubra a Cosmere — Editora Trama',
    description: 'Conheça Roshar, o mundo de Relatos da Guerra das Tempestades, e os livros publicados pela Trama.',
  },
  {
    path: '/nalthis',
    title: 'Nalthis | Descubra a Cosmere — Editora Trama',
    description: 'Conheça Nalthis, o mundo de Warbreaker, e sua magia BioCromática construída sobre cor e Respiração.',
  },
  {
    path: '/projetos-secretos',
    title: 'Projetos Secretos | Descubra a Cosmere — Editora Trama',
    description: 'Conheça as edições especiais dos Projetos Secretos, publicadas pela Editora Trama.',
  },
  {
    path: '/jornada',
    title: 'Sua Jornada | Descubra a Cosmere — Editora Trama',
    description: 'Escolha sua trilha de leitura recomendada para começar no universo de Brandon Sanderson.',
  },
  {
    path: '/biblioteca',
    title: 'Biblioteca Trama | Descubra a Cosmere',
    description: 'Explore os livros de Brandon Sanderson publicados pela Editora Trama e encontre sua próxima jornada.',
  },
  {
    path: '/arquivos',
    title: 'Arquivos da Cosmere | Editora Trama',
    description: 'Guias, mundos e caminhos de leitura para explorar a Cosmere sem spoilers.',
  },
  {
    path: '/arquivos/por-onde-comecar-brandon-sanderson',
    title: 'Por onde começar a ler Brandon Sanderson? | Arquivos da Cosmere',
    description: 'Não existe uma única porta de entrada para a Cosmere. Descubra a história certa para o tipo de aventura que você procura.',
  },
  {
    path: '/arquivos/o-que-e-a-cosmere',
    title: 'O que é a Cosmere e como seus mundos se conectam? | Arquivos da Cosmere',
    description: 'Scadrial, Roshar, Nalthis e outros planetas pertencem a uma mesma galáxia literária. Entenda a ideia sem spoilers.',
  },
  {
    path: '/arquivos/mistborn-guia-scadrial',
    title: 'Mistborn: o que saber antes de entrar em Scadrial | Arquivos da Cosmere',
    description: 'Cinzas, metais e uma rebelião impossível. Um guia para chegar a O Império Final sabendo apenas o necessário.',
  },
  {
    path: '/arquivos/roshar-guia-sem-spoilers',
    title: 'Roshar: um guia sem spoilers para a Guerra das Tempestades | Arquivos da Cosmere',
    description: 'Tempestades, spren e juramentos. O essencial para começar O Caminho dos Reis sem perder o prazer da descoberta.',
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceAttributeTag(html, selectorPattern, replacement) {
  return selectorPattern.test(html) ? html.replace(selectorPattern, replacement) : html;
}

function renderPage(template, page) {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceAttributeTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`);
  html = replaceAttributeTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceAttributeTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`);
  html = replaceAttributeTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`);
  html = replaceAttributeTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${defaultImage}" />`);
  html = replaceAttributeTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceAttributeTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceAttributeTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`);
  html = replaceAttributeTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${defaultImage}" />`);
  return html;
}

const template = await readFile(templatePath, 'utf8');

for (const page of pages) {
  const outputPath = page.path === '/'
    ? templatePath
    : join(distDir, `${page.path.slice(1)}.html`);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderPage(template, page), 'utf8');
}

console.log(`SEO: ${pages.length} páginas HTML geradas.`);
