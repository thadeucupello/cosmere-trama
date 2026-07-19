import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import CampaignHighlight from '../components/CampaignHighlight';
import BackToMapLink from '../components/BackToMapLink';
import { books } from '../data/books';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePageMeta } from '../hooks/usePageMeta';
import type { Book, PathId } from '../types';

type CollectionFilter = 'todos' | 'mistborn' | 'tempestades' | 'warbreaker' | 'secretos';
type AvailabilityFilter = 'todos' | Book['status'];

const collectionFilters: { id: CollectionFilter; label: string }[] = [
  { id: 'todos', label: 'Todas as coleções' },
  { id: 'mistborn', label: 'Mistborn' },
  { id: 'tempestades', label: 'Relatos da Guerra das Tempestades' },
  { id: 'warbreaker', label: 'Warbreaker' },
  { id: 'secretos', label: 'Projetos Secretos' },
];

const availabilityFilters: { id: AvailabilityFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'published', label: 'Publicados' },
  { id: 'preorder', label: 'Pré-venda' },
  { id: 'coming-soon', label: 'Em breve' },
];

const collectionWorld: Record<Exclude<CollectionFilter, 'todos'>, Book['world']> = {
  mistborn: 'scadrial',
  tempestades: 'roshar',
  warbreaker: 'nalthis',
  secretos: 'secret-projects',
};

const groups: { heading: string; description: string; world: Book['world'] }[] = [
  {
    heading: 'Mistborn',
    description: 'Duas eras, um mundo transformado pelo poder dos metais.',
    world: 'scadrial',
  },
  {
    heading: 'Relatos da Guerra das Tempestades',
    description: 'Uma saga monumental de tempestades, juramentos e mundos em conflito.',
    world: 'roshar',
  },
  {
    heading: 'Warbreaker',
    description: 'Uma história completa sobre cores, deuses e escolhas.',
    world: 'nalthis',
  },
  {
    heading: 'Projetos Secretos',
    description: 'Viagens inesperadas por mundos muito diferentes.',
    world: 'secret-projects',
  },
];

const journeySpotlights: Record<PathId, { route: string; destination: string; bookId: string; bookTitle: string }> = {
  aventura: {
    route: 'A porta de entrada',
    destination: 'Scadrial',
    bookId: 'mistborn-1',
    bookTitle: 'O Império Final',
  },
  epico: {
    route: 'A grande saga',
    destination: 'Roshar',
    bookId: 'stormlight-1',
    bookTitle: 'O Caminho dos Reis',
  },
  unico: {
    route: 'Uma história completa',
    destination: 'Nalthis',
    bookId: 'warbreaker',
    bookTitle: 'Warbreaker: o sopro dos Deuses',
  },
  completo: {
    route: 'O mapa inteiro',
    destination: 'Scadrial',
    bookId: 'mistborn-1',
    bookTitle: 'O Império Final',
  },
};

export default function TramaLibrary() {
  const [collectionFilter, setCollectionFilter] = useState<CollectionFilter>('todos');
  const [availabilityFilter, setAvailabilityFilter] = useState<AvailabilityFilter>('todos');
  const [selectedPath] = useLocalStorage<PathId | null>('cosmere:selected-path', null);
  const spotlight = selectedPath ? journeySpotlights[selectedPath] : null;

  usePageMeta(
    'Biblioteca Trama | Descubra o Cosmere',
    'Explore os livros de Brandon Sanderson publicados pela Editora Trama e encontre sua próxima jornada.'
  );

  const filteredByWorld = useMemo(() => {
    return groups.map((group) => ({
      ...group,
      books: books
        .filter((book) => {
          const matchesCollection =
            collectionFilter === 'todos' || book.world === collectionWorld[collectionFilter];
          const matchesAvailability =
            availabilityFilter === 'todos' || book.status === availabilityFilter;
          return book.world === group.world && matchesCollection && matchesAvailability;
        })
        .sort((a, b) => a.order - b.order),
    }));
  }, [collectionFilter, availabilityFilter]);

  const hasResults = filteredByWorld.some((group) => group.books.length > 0);
  const hasActiveFilters = collectionFilter !== 'todos' || availabilityFilter !== 'todos';

  const showRecommendedBook = () => {
    if (!spotlight) return;
    setCollectionFilter('todos');
    setAvailabilityFilter('todos');
    window.setTimeout(() => {
      document.getElementById(spotlight.bookId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  return (
    <section id="biblioteca" className="section trama-library" aria-label="Biblioteca Trama">
      <div className="container">
        <BackToMapLink to="/" label="Voltar para o início" />
        <SectionHeading
          title="Uma biblioteca de mundos."
          subtitle="Reúna suas próximas jornadas pelo Cosmere. Explore as séries publicadas pela Trama, descubra por onde começar e acompanhe os próximos lançamentos."
        />

        {spotlight && (
          <aside className="trama-library__journey" aria-label="Livro recomendado para sua jornada">
            <span className="trama-library__journey-eyebrow">Sua jornada começa em {spotlight.destination}</span>
            <h2>Você escolheu “{spotlight.route}”.</h2>
            <p>
              Seu primeiro livro é <strong>{spotlight.bookTitle}</strong>. Ele está destacado no catálogo
              para que você possa continuar exatamente de onde parou.
            </p>
            <button type="button" className="btn btn-primary" onClick={showRecommendedBook}>
              Ver meu primeiro livro
            </button>
          </aside>
        )}

        <CampaignHighlight />

        <div className="trama-library__filter-panel">
          <div className="trama-library__filter-group">
            <p className="trama-library__filter-label">Explore por coleção</p>
            <div className="trama-library__filters" role="group" aria-label="Filtrar por coleção">
              {collectionFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`filter-chip ${collectionFilter === filter.id ? 'is-active' : ''}`}
                  aria-pressed={collectionFilter === filter.id}
                  onClick={() => setCollectionFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="trama-library__filter-group">
            <p className="trama-library__filter-label">Disponibilidade</p>
            <div className="trama-library__filters" role="group" aria-label="Filtrar por disponibilidade">
              {availabilityFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`filter-chip ${availabilityFilter === filter.id ? 'is-active' : ''}`}
                  aria-pressed={availabilityFilter === filter.id}
                  onClick={() => setAvailabilityFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  type="button"
                  className="filter-chip filter-chip--reset"
                  onClick={() => {
                    setCollectionFilter('todos');
                    setAvailabilityFilter('todos');
                  }}
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        <aside className="trama-library__status-guide" aria-label="Entenda a disponibilidade dos livros">
          <p><strong>Publicado</strong><span>Disponível na Trama</span></p>
          <p><strong>Pré-venda</strong><span>Compra antecipada aberta</span></p>
          <p><strong>Em breve</strong><span>Publicação anunciada, ainda sem venda individual</span></p>
        </aside>

        {!hasResults && (
          <p className="trama-library__empty">Nenhum livro corresponde a esta combinação de filtros no momento.</p>
        )}

        {filteredByWorld.map(
          (group) =>
            group.books.length > 0 && (
              <div key={group.world} className="trama-library__group">
                <div className="trama-library__group-heading">
                  <h2 className="trama-library__group-title">{group.heading}</h2>
                  <p>{group.description}</p>
                </div>
                <div className="trama-library__grid">
                  {group.books.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      highlighted={spotlight?.bookId === book.id}
                    />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
