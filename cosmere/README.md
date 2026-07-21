# Descubra a Cosmere — Editora Trama

Site oficial da Editora Trama para apresentar Brandon Sanderson e a Cosmere a
novos leitores brasileiros. Construído com React, TypeScript, Vite e React
Router, em um modelo **híbrido de navegação**:

- A **página inicial** (`/`) continua sendo uma experiência imersiva de
  rolagem única — Herói → Autor → O que é a Cosmere → Escolha seu caminho →
  grade de mundos.
- **Scadrial, Roshar, Nalthis, Projetos Secretos, Sua Jornada e a Biblioteca
  Trama** são páginas próprias, com URL real (`/scadrial`, `/biblioteca`
  etc.), o que permite compartilhar links diretos (ex.: em QR Codes ou
  posts) e melhora a indexação de cada mundo/catálogo separadamente.
- A Bússola de navegação e o rodapé funcionam em todas as páginas: itens que
  apontam para a Home (Autor, O que é a Cosmere, Por onde começar) rolam até
  a seção correspondente; itens de mundos e catálogo navegam para a página
  dedicada.
- A newsletter e o rodapé são compartilhados por todas as páginas (definidos
  uma única vez no layout raiz).

Este README foi escrito para quem vai manter o projeto no dia a dia — não é
necessário ser desenvolvedor para atualizar catálogo, imagens e links.

---

## 0. Rodada de correções (mais recente)

Esta rodada corrigiu:

- **Símbolo da Cosmere**: adicionado como marca d'água sutil e giratória no
  Herói da página inicial (`src/sections/Hero.tsx`), usando o arquivo
  oficial fornecido. Respeitando `prefers-reduced-motion`, a rotação para
  quando o usuário prefere menos movimento.

- **Logo oficial da Trama** integrada no cabeçalho e rodapé (versão branca,
  proporções originais preservadas) via `src/components/TramaLogo.tsx`.
- **Vento e Verdade**: removida qualquer comunicação de que já estaria
  disponível; status corrigido para "Em breve", sem botão de compra.
- **Newsletter**: e-mail e consentimento agora são obrigatórios; nenhuma
  mensagem de sucesso falsa; integração centralizada em
  `src/lib/newsletter.ts`.
- **Botões "Saiba mais"**: removidos enquanto não levavam a lugar nenhum —
  cada capa agora mostra um único CTA honesto ("Ver na loja da Trama") só
  quando existe link oficial, ou nenhum botão quando ainda não existe.
- **Redes sociais**: centralizadas em `src/data/social.ts`, usando apenas
  URLs confirmadas (Instagram, X, Facebook). TikTok fica de fora até termos
  um link oficial.
- **O Manual do Mago Frugal**: agora aparece separado, em "Uma aventura fora
  da Cosmere", com aviso explicativo, dentro da página de Projetos Secretos.
- **Mapa da Cosmere**: Lumar, Komashi e Cântico agora são clicáveis e
  mostram nome, descrição, capa do livro relacionado e botão para conhecê-lo
  — com visual diferenciado (anel tracejado) por não terem página própria
  dedicada, diferente de Scadrial/Roshar/Nalthis.
- **Descrições de Lumar, Komashi e Cântico**: reescritas para bater com o
  conteúdo real dos livros, sem spoilers.
- **Imagem de compartilhamento (Open Graph)**: gerada e configurada em
  `public/og-cosmere.jpg`, usando a logo oficial — antes apontava para um
  arquivo que não existia.

### Ainda depende de você

- **RD Station**: defina `NEWSLETTER_ENDPOINT` em `src/lib/newsletter.ts`
  quando tiver o endpoint oficial.
- **Vento e Verdade**: confirme a data de lançamento e o link oficial
  (`src/data/content.ts` e `src/data/books.ts`, ambos já sinalizados com
  `TODO(Trama)`).
- **TikTok**: adicione a URL em `src/data/social.ts` quando tiver uma
  confirmada.
- **Capas dos dois boxes** (Wax & Wayne e Trilogia Original): atualizadas e
  padronizadas no mesmo formato das demais capas do catálogo.

---

## 1. Como instalar

Pré-requisito: [Node.js](https://nodejs.org) versão 18 ou superior instalado.

```bash
npm install
```

## 2. Como rodar localmente

```bash
npm run dev
```

Isso abre o projeto em `http://localhost:5173`. As alterações em arquivos são
refletidas automaticamente no navegador.

## 3. Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais são gerados na pasta `dist/`. Para conferir o resultado
antes de publicar:

```bash
npm run preview
```

## 4. Como publicar na Vercel

1. Crie um projeto novo na Vercel apontando para este repositório.
2. Framework preset: **Vite**.
3. Build command: `npm run build` (já é o padrão detectado pela Vercel).
4. Output directory: `dist` (padrão detectado automaticamente).
5. O arquivo `vercel.json` já está configurado para redirecionar todas as
   rotas para `index.html`, o que é necessário porque a navegação entre
   páginas (Scadrial, Biblioteca etc.) acontece no navegador, via React
   Router, e não em arquivos separados no servidor.

Ou, pela linha de comando, dentro da pasta do projeto:

```bash
npx vercel
```

---

## 5. Mapa de rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home imersiva: Herói, Autor, O que é a Cosmere, Escolha seu caminho, grade de mundos |
| `/scadrial` | Mundo de Mistborn |
| `/roshar` | Mundo de Relatos da Guerra das Tempestades |
| `/nalthis` | Mundo de Warbreaker |
| `/projetos-secretos` | Edições especiais dos Projetos Secretos |
| `/jornada` | Sua Jornada — trilhas de leitura recomendadas |
| `/biblioteca` | Biblioteca Trama — catálogo completo com filtros |

Cada uma dessas páginas define seu próprio título e meta description (ver
`usePageMeta` em `src/hooks/`), o que ajuda o SEO individual de cada mundo.

---

## 6. Onde editar o conteúdo

Todo o conteúdo variável do site fica em arquivos de dados dentro de
`src/data/`, separados dos componentes visuais. Isso significa que a equipe
da Trama pode atualizar textos, links e status sem mexer em código React.

| O que você quer mudar | Onde editar |
|---|---|
| Livros, capas, status de publicação, links de compra | `src/data/books.ts` |
| Textos e cores de cada mundo (Scadrial, Roshar, Nalthis, Projetos Secretos) | `src/data/worlds.ts` |
| Trilhas de leitura recomendadas | `src/data/content.ts` → `readingPaths` |
| Itens do menu (Bússola) | `src/data/content.ts` → `navItems` |
| Banner de campanha em destaque (ex.: lançamento de um livro) | `src/data/content.ts` → `campaignHighlight` |

### Adicionando ou atualizando um livro

Abra `src/data/books.ts` e edite (ou copie) um objeto de livro:

```ts
{
  id: 'mistborn-era2-1',
  title: 'Título oficial em português',
  series: 'Mistborn — Era Dois',
  world: 'scadrial',
  order: 4,
  description: 'Descrição curta e sem spoilers.',
  status: 'preorder', // 'published' | 'preorder' | 'coming-soon'
  cover: '/src/assets/books/mistborn-era2-1.jpg',
  purchaseUrl: 'https://...',
}
```

- Se `cover` não for definido, o site mostra um placeholder elegante no lugar
  da capa — nunca uma imagem quebrada.
- Se `purchaseUrl` não for definido, o botão "Comprar" simplesmente não
  aparece — o site nunca cria um link quebrado.
- O card de "Vento e Verdade" está marcado com `featured: true`, o que ativa
  o destaque visual de lançamento mais recente na seção Roshar.

### Atualizando a campanha em destaque

Abra `src/data/content.ts` e edite o objeto `campaignHighlight`. Se `ctaUrl`
não for definido, o botão fica visível mas desabilitado, para nunca apontar
para um link inválido.

---

## 7. Onde adicionar as imagens oficiais

O projeto já está preparado com pastas de destino e comentários no código
indicando exatamente onde cada arquivo deve entrar:

| Imagem | Pasta |
|---|---|
| Logo da Trama | `src/assets/logos/` (referenciado em `Header.tsx` e `Footer.tsx`) |
| Fotografia aprovada de Brandon Sanderson | ✅ já adicionada em `src/assets/brandon/portrait.webp` |
| Capas dos livros | ✅ 17 capas já adicionadas em `src/assets/books/` |
| Imagens ambientais dos mundos (se desejar substituir os efeitos em CSS) | `src/assets/worlds/` |

**Padronização de tamanho**: todas as capas do catálogo (incluindo os boxes)
passam por um recorte automático de fundo branco seguido de um ajuste para
um canvas fixo de 640×960px (proporção 2:3 — a mesma do quadro de cada card
na Biblioteca). Isso garante que a grade de livros fique sempre uniforme,
mesmo quando as artes originais chegam em tamanhos e proporções diferentes.
Ao substituir alguma capa no futuro, vale aplicar o mesmo tratamento para
manter a consistência.

**Capas já integradas**: O Império Final, O Poço da Ascensão, O Herói das Eras,
Mistborn: História Secreta, Box Mistborn Wax & Wayne, A Liga da Lei, As
Sombras de Si Mesmo, Os Braceletes da Perdição, O Metal Perdido, O Caminho
dos Reis, Palavras de Radiância, Sacramentadora, Ritmo da Guerra, Warbreaker,
Tress, Yumi e o Pintor de Pesadelos, O Manual do Mago Frugal, O Homem
Iluminado — **catálogo principal 100% com capas reais.** Todas foram
redimensionadas e comprimidas (máx. 900px, JPEG otimizado) para manter o
site rápido.: Vento e Verdade está exibindo a capa da edição
internacional (em inglês) como referência temporária, sinalizada com o rótulo
"Capa provisória" na própria interface (campo `coverIsProvisional: true` em
`books.ts`). Substitua por `coverIsProvisional: false` e a arte oficial em
português assim que estiver disponível.

**Mistborn — Era Dois**: além do box (já publicado), o catálogo já inclui os
quatro romances avulsos (A Liga da Lei, As Sombras de Si Mesmo, Os
Braceletes da Perdição, O Metal Perdido) marcados como `coming-soon`, prontos
para virar `published` assim que as vendas individuais abrirem — basta trocar
o `status` e adicionar o `purchaseUrl` de cada um em `books.ts`.

Pendências identificadas na conferência do catálogo (julho de 2026):
- **Vento e Verdade**: não localizado à venda em lojaeditoratrama.com.br no
  momento da checagem — confirme o link e a data antes de mudar o status
  para `published`.

---

## 8. Conectando a newsletter ao RD Station

O formulário de newsletter (`src/sections/Newsletter.tsx`) exige e-mail
válido e o consentimento marcado antes de enviar. Toda a lógica de
integração fica centralizada em `src/lib/newsletter.ts`:

1. Defina `NEWSLETTER_ENDPOINT` nesse arquivo com a URL do seu formulário
   do RD Station (ou de uma função serverless que você controle, caso seja
   necessária uma chave privada — nunca inclua chaves privadas diretamente
   no código do site).
2. Ajuste o corpo/headers da requisição em `subscribeToNewsletter` conforme
   o que esse endpoint esperar.
3. Enquanto `NEWSLETTER_ENDPOINT` estiver vazio (padrão), o site é honesto
   com o visitante: em vez de simular uma inscrição bem-sucedida, mostra um
   aviso amigável de que o formulário ainda está a caminho, com links para
   as redes sociais da Trama (`src/data/social.ts`) como alternativa.

---

## 9. Estrutura do projeto

```
src/
  assets/        Imagens locais (logos, fotos, capas)
  components/    Componentes reutilizáveis (cards, cabeçalho, navegação)
  data/          Arquivos de conteúdo editável (livros, mundos, trilhas)
  hooks/         Hooks de React (localStorage, seção ativa, meta de página)
  layout/        Layout raiz compartilhado por todas as rotas (bússola, newsletter, rodapé)
  pages/         Página inicial imersiva (Home)
  sections/      Conteúdo de cada mundo/página (também usados como as rotas dedicadas)
  styles/        CSS organizado por escopo (global, cabeçalho, seções)
  types/         Tipos TypeScript compartilhados
  utils/         Pequenos utilitários (ex.: construção de links da bússola)
  App.tsx        Define as rotas da aplicação
  main.tsx       Ponto de entrada do React, com o BrowserRouter
```

## 10. Principais dependências

- **React 18 + TypeScript + Vite** — base do projeto, sem back-end nem banco
  de dados.
- **React Router** — navegação entre a Home imersiva e as páginas dedicadas
  de cada mundo, da Biblioteca e da Jornada de leitura.
- **Framer Motion** — transições e animações controladas.
- **Lucide React** — ícones de interface.

## 11. Acessibilidade e desempenho

- Navegação por teclado completa, incluindo o painel da Bússola (foco
  travado dentro do painel, fecha com Esc).
- `prefers-reduced-motion` é respeitado: partículas, paralaxe e transições
  cinematográficas são desativadas para quem ativou essa preferência no
  sistema.
- Imagens abaixo da primeira tela usam `loading="lazy"` e reservam espaço
  para evitar saltos de layout.
- O catálogo funciona mesmo com JavaScript limitado, pois o conteúdo
  principal é HTML real, não depende de canvas ou de animações para ser lido.
