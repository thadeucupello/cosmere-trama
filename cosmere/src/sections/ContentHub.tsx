import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articleCategories, articles } from '../data/articles';
import type { ArticleCategory } from '../types';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContentHub() {
  const [category, setCategory] = useState<'todos' | ArticleCategory>('todos');
  const [query, setQuery] = useState('');
  usePageMeta('Arquivos da Cosmere | Editora Trama', 'Guias, mundos e caminhos de leitura para explorar a Cosmere sem spoilers.');

  const featured = articles.find((article) => article.featured)!;
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('pt-BR');
    return articles.filter((article) => (category === 'todos' || article.category === category) && (!term || `${article.title} ${article.excerpt} ${article.eyebrow}`.toLocaleLowerCase('pt-BR').includes(term)));
  }, [category, query]);

  return (
    <div className="archive-hub">
      <section className="archive-hero section">
        <div className="container archive-hero__inner">
          <div><p className="eyebrow">Leituras para atravessar mundos</p><h1>Arquivos da Cosmere</h1><p>Guias, contextos e caminhos de leitura para quem acaba de chegar e para quem já começou a enxergar as conexões.</p></div>
          <div className="archive-hero__seal" aria-hidden="true"><span>✦</span><small>ARQUIVOS</small></div>
        </div>
      </section>

      <section className="section archive-featured"><div className="container"><p className="eyebrow">Arquivo em destaque</p><ArticleCard article={featured} featured /></div></section>

      <section className="section archive-index"><div className="container">
        <div className="archive-index__heading"><div><p className="eyebrow">Explore por assunto</p><h2>Encontre sua próxima descoberta</h2></div><label className="archive-search"><Search size={18} aria-hidden="true" /><span className="visually-hidden">Buscar nos arquivos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar nos arquivos" type="search" /></label></div>
        <div className="archive-filters" role="group" aria-label="Filtrar artigos por categoria">{articleCategories.map((item) => <button key={item.id} type="button" className={category === item.id ? 'is-active' : ''} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div>
        <p className="archive-results" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'arquivo encontrado' : 'arquivos encontrados'}</p>
        {filtered.length ? <div className="archive-grid">{filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="archive-empty"><span>◇</span><h3>Nenhum arquivo encontrado</h3><p>Tente outro termo ou volte para todos os assuntos.</p></div>}
      </div></section>
    </div>
  );
}
