import { Link } from 'react-router-dom';
import type { Article } from '../types';

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`archive-card ${featured ? 'archive-card--featured' : ''}`}>
      <div className="archive-card__symbol" aria-hidden="true">{article.symbol}</div>
      <div className="archive-card__content">
        <p className="archive-card__eyebrow">{article.eyebrow}</p>
        <h3><Link to={`/arquivos/${article.slug}`}>{article.title}</Link></h3>
        <p className="archive-card__excerpt">{article.excerpt}</p>
        <div className="archive-card__meta"><span>{article.readingTime}</span><span aria-hidden="true">·</span><span>{article.publishedAt}</span></div>
        <Link className="archive-card__link" to={`/arquivos/${article.slug}`}>Abrir arquivo <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
