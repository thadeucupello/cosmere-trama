import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import CampaignHighlight from '../components/CampaignHighlight';
import BackToMapLink from '../components/BackToMapLink';
import { books } from '../data/books';
import { usePageMeta } from '../hooks/usePageMeta';
import type { Book } from '../types';

type FilterId = 'todos' | 'mistborn' | 'tempestades' | 'warbreaker' | 'secretos' | 'published' | 'preorder' | 'coming-soon';

const filters: { id: FilterId; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'mistborn', label: 'Mistborn' },
  { id: 'tempestades', label: 'Relatos da Guerra das Tempestades' },
  { id: 'warbreaker', label: 'Warbreaker' },
  { id: 'secretos', label: 'Projetos Secretos' },
  { id: 'published', label: 'Publicados' },
  { id: 'preorder', label: 'Pré-venda' },
  { id: 'coming-soon', label: 'Em breve' },
];

function matchesFilter(book: Book, filter: FilterId): boolean {
  switch (filter) {
    case 'todos':
      return true;
    case 'mistborn':
      return book.world === 'scadrial';
    case 'tempestades':
      return book.world === 'roshar';
    case 'warbreaker':
      return book.world === 'nalthis';
    case 'secretos':
      return book.world === 'secret-projects';
    case 'published':
    case 'preorder':
    case 'coming-soon':
      return book.status === filter;
  }
}

const groups: { heading: string; world: Book['world'] }[] = [
  { heading: 'Mistborn', world: 'scadrial' },
  { heading: 'Relatos da Guerra das Tempestades', world: 'roshar' },
  { heading: 'Warbreaker', world: 'nalthis' },
  { heading: 'Projetos Secretos', world: 'secret-projects' },
];

export default function TramaLibrary() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('todos');
  usePageMeta(
    'Biblioteca Trama | Descubra o Cosmere',
    'Explore todos os livros de Brandon Sanderson publicados pela Editora Trama: Mistborn, Relatos da Guerra das Tempestades, Warbreaker e Projetos Secretos.'
  );

  const filteredByWorld = useMemo(() => {
    return groups.map((group) => ({
      ...group,
      books: books.filter((b) => b.world === group.world && matchesFilter(b, activeFilter)).sort((a, b) => a.order - b.order),
    }));
  }, [activeFilter]);

  const hasResults = filteredByWorld.some((g) => g.books.length > 0);

  return (
    <section id="biblioteca" className="section trama-library" aria-label="Os livros publicados pela Trama">
      <div className="container">
        <BackToMapLink to="/" label="Voltar para o início" />
        <SectionHeading title="Os livros publicados pela Trama" />

        <CampaignHighlight />

        <div className="trama-library__filters" role="group" aria-label="Filtrar catálogo">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-chip ${activeFilter === f.id ? 'is-active' : ''}`}
              aria-pressed={activeFilter === f.id}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
          {activeFilter !== 'todos' && (
            <button type="button" className="filter-chip filter-chip--reset" onClick={() => setActiveFilter('todos')}>
              Limpar filtros
            </button>
          )}
        </div>

        {!hasResults && <p className="trama-library__empty">Nenhum livro corresponde a este filtro no momento.</p>}

        {filteredByWorld.map(
          (group) =>
            group.books.length > 0 && (
              <div key={group.world} className="trama-library__group">
                <h3 className="trama-library__group-title">{group.heading}</h3>
                <div className="trama-library__grid">
                  {group.books.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
