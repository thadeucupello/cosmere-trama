import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

export default function LatestArticles() {
  return <section className="section latest-archives" id="arquivos"><div className="container"><div className="latest-archives__heading"><div><p className="eyebrow">Arquivos da Cosmere</p><h2 className="section-heading">Toda jornada deixa pistas.</h2><p className="section-sub">Guias sem spoilers para escolher seu próximo mundo e compreender as conexões no seu tempo.</p></div><Link className="btn btn-ghost" to="/arquivos">Ver todos os arquivos</Link></div><div className="archive-grid">{articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>;
}
