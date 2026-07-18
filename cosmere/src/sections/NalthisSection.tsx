import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import MagicCard from '../components/MagicCard';
import BookCard from '../components/BookCard';
import BackToMapLink from '../components/BackToMapLink';
import { getWorld } from '../data/worlds';
import { getBooksByWorld } from '../data/books';
import { useMarkExplored } from '../hooks/useMarkExplored';
import { usePageMeta } from '../hooks/usePageMeta';

const world = getWorld('nalthis');
const books = getBooksByWorld('nalthis');

export default function NalthisSection() {
  const ref = useMarkExplored('nalthis');
  const navigate = useNavigate();
  usePageMeta(
    'Nalthis | Descubra o Cosmere — Editora Trama',
    'Conheça Nalthis, o mundo de Warbreaker, e sua magia construída sobre cor e fôlego.'
  );

  return (
    <section
      id="nalthis"
      ref={ref as React.RefObject<HTMLElement>}
      className="section world-section world-section--nalthis"
      style={{ ['--accent' as string]: world.accent, ['--accent-soft' as string]: world.accentSoft }}
      aria-label="Nalthis"
    >
      <div className="container">
        <BackToMapLink />
        <SectionHeading eyebrow="Mundo" title={world.name} subtitle={world.tagline} />

        <p className="world-section__intro">
          Nalthis tem uma atmosfera única dentro do Cosmere: cores vívidas, tecidos que ganham vida e uma magia
          construída sobre algo tão simples — e tão precioso — quanto o fôlego.
        </p>

        <div className="magic-card-grid magic-card-grid--compact">
          <MagicCard title="Fôlego" description="Uma energia vital que pode ser doada, acumulada e trocada entre pessoas." />
          <MagicCard title="Cor" description="A intensidade das cores em Nalthis está diretamente ligada à magia do mundo." />
        </div>

        <h3 className="world-section__subheading">Warbreaker</h3>
        <div className="book-timeline book-timeline--single">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <p className="world-section__note">Uma excelente porta de entrada — uma história completa em um único volume.</p>

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/projetos-secretos')}>
            Continuar jornada
          </button>
        </div>
      </div>
    </section>
  );
}
