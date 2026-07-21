import { Link, useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import ArticleShare from '../components/ArticleShare';
import RelatedBookCard from '../components/RelatedBookCard';
import { articles, getArticle } from '../data/articles';
import { books } from '../data/books';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  usePageMeta(article ? `${article.title} | Arquivos da Cosmere` : 'Arquivo não encontrado | A Cosmere', article?.excerpt);

  if (!article) return <section className="section archive-not-found"><div className="container"><span>◇</span><h1>Este arquivo ainda não foi encontrado.</h1><Link className="btn btn-primary" to="/arquivos">Voltar aos arquivos</Link></div></section>;

  const relatedBooks = article.relatedBookIds.map((id) => books.find((book) => book.id === id)).filter((book): book is NonNullable<typeof book> => Boolean(book));
  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <div className="article-page">
      <header className="article-header section"><div className="container article-header__inner">
        <Link className="back-to-map" to="/arquivos">← Todos os arquivos</Link>
        <p className="eyebrow">{article.eyebrow}</p><h1>{article.title}</h1><p className="article-header__dek">{article.excerpt}</p>
        <div className="article-header__meta"><span>Por Editora Trama</span><span>{article.publishedAt}</span><span>{article.readingTime}</span></div>
        {article.heroImage && (
          <figure className="article-hero-visual">
            <div className={`article-hero-visual__frame ${article.heroFit === 'contain' ? 'is-contained' : ''} ${article.heroFit === 'document' ? 'is-document' : ''}`}>
              {article.heroFit === 'contain' && <img className="article-hero-visual__backdrop" src={article.heroImage} alt="" aria-hidden="true" />}
              <img className="article-hero-visual__main" src={article.heroImage} alt={article.heroAlt ?? ''} style={{ objectPosition: article.heroPosition }} />
              <span className="article-hero-visual__archive" aria-hidden="true">ARQUIVO · {article.symbol}</span>
            </div>
            {article.imageCredit && (
              <figcaption>
                <span>{article.imageSource}</span>
                <span>Ilustração: <a href={article.imageCreditUrl} target="_blank" rel="noreferrer">{article.imageCredit}</a></span>
              </figcaption>
            )}
          </figure>
        )}
      </div></header>

      <article className="article-body container">
        <div className="article-body__rail" aria-hidden="true"><span>{article.symbol}</span></div>
        <div className="article-body__content">
          {article.blocks.map((block, index) => {
            if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>;
            if (block.type === 'callout') return <aside key={index} className="article-callout"><span>✦</span><div><h3>{block.title}</h3><p>{block.text}</p></div></aside>;
            if (block.type === 'spoiler') return <details key={index} className="article-spoiler"><summary><span>Conteúdo com orientação de spoiler</span><strong>{block.title}</strong></summary><p>{block.text}</p></details>;
            return <p key={index}>{block.text}</p>;
          })}
          <ArticleShare title={article.title} />
        </div>
      </article>

      <section className="section article-books"><div className="container"><p className="eyebrow">Continue a leitura</p><h2>Livros relacionados</h2><div className="related-books-grid">{relatedBooks.map((book) => <RelatedBookCard key={book.id} book={book} />)}</div></div></section>
      <section className="section article-related"><div className="container"><p className="eyebrow">Outros arquivos</p><h2>Há mais mundos no mapa</h2><div className="archive-grid">{relatedArticles.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>
    </div>
  );
}
