import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import MagicCard from '../components/MagicCard';
import BookCard from '../components/BookCard';
import BackToMapLink from '../components/BackToMapLink';
import { getWorld } from '../data/worlds';
import { getBooksByWorld } from '../data/books';
import { useMarkExplored } from '../hooks/useMarkExplored';
import { usePageMeta } from '../hooks/usePageMeta';

const world = getWorld('roshar');
const books = getBooksByWorld('roshar');

const blocks = [
  { title: 'Altas Tempestades', description: 'Tormentas violentas que varrem o continente, moldando paisagens, costumes e crenças.' },
  { title: 'Tempestuosidade', description: 'Uma energia capturada das tempestades, capaz de sustentar magia e vida.' },
  { title: 'Spren', description: 'Seres que surgem em resposta a emoções, ideias e fenômenos naturais.' },
  { title: 'Cavaleiros Radiantes', description: 'Antigas ordens ligadas a juramentos e a um poder pouco compreendido.' },
];

export default function RosharSection() {
  const ref = useMarkExplored('roshar');
  const navigate = useNavigate();
  usePageMeta(
    'Roshar | Descubra o Cosmere — Editora Trama',
    'Conheça Roshar, o mundo de Relatos da Guerra das Tempestades, e os livros publicados pela Trama.'
  );

  return (
    <section
      id="roshar"
      ref={ref as React.RefObject<HTMLElement>}
      className="section world-section world-section--roshar"
      style={{ ['--accent' as string]: world.accent, ['--accent-soft' as string]: world.accentSoft }}
      aria-label="Roshar"
    >
      <div className="container">
        <BackToMapLink />
        <SectionHeading eyebrow="Mundo" title={world.name} subtitle={world.tagline} />

        <p className="world-section__intro">
          Roshar é um dos cenários de fantasia mais admirados dos últimos anos. Tempestades moldam a terra, os
          povos e as lendas que atravessam gerações.
        </p>

        <div className="magic-card-grid">
          {blocks.map((b) => (
            <MagicCard key={b.title} {...b} />
          ))}
        </div>

        <h3 className="world-section__subheading">Relatos da Guerra das Tempestades</h3>
        <div className="book-journey">
          {books.map((book) => (
            <div key={book.id} className={book.featured ? 'book-journey__item book-journey__item--featured' : 'book-journey__item'}>
              <BookCard book={book} />
              {book.featured && (
                <span className="book-journey__badge">
                  {book.status === 'coming-soon' ? 'Em breve' : 'Lançamento mais recente'}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/nalthis')}>
            Continuar jornada
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/#cosmere')}>
            Explorar outro mundo
          </button>
        </div>
      </div>
    </section>
  );
}
