import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import BackToMapLink from '../components/BackToMapLink';
import { getWorld } from '../data/worlds';
import { getBooksByWorld } from '../data/books';
import { useMarkExplored } from '../hooks/useMarkExplored';
import { usePageMeta } from '../hooks/usePageMeta';

const world = getWorld('secret-projects');
const allBooks = getBooksByWorld('secret-projects');
const cosmereBooks = allBooks.filter((b) => b.isPartOfCosmere !== false);
const nonCosmereBooks = allBooks.filter((b) => b.isPartOfCosmere === false);

export default function SecretProjects() {
  const ref = useMarkExplored('secret-projects');
  const navigate = useNavigate();
  usePageMeta(
    'Projetos Secretos | Descubra o Cosmere — Editora Trama',
    'Conheça as edições especiais dos Projetos Secretos, publicadas pela Editora Trama.'
  );

  return (
    <section
      id="projetos-secretos"
      ref={ref as React.RefObject<HTMLElement>}
      className="section world-section world-section--secret"
      style={{ ['--accent' as string]: world.accent, ['--accent-soft' as string]: world.accentSoft }}
      aria-label="Projetos Secretos"
    >
      <div className="container">
        <BackToMapLink />
        <SectionHeading eyebrow="Edições especiais" title={world.name} subtitle={world.tagline} />

        <p className="world-section__intro">
          Quatro histórias nasceram de uma campanha que surpreendeu o mercado editorial. Cada uma é uma
          descoberta à parte — sem spoilers, sem pressa, no seu próprio ritmo.
        </p>

        <h3 className="world-section__subheading">Histórias do Cosmere</h3>
        <div className="secret-projects__grid">
          {cosmereBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {nonCosmereBooks.length > 0 && (
          <>
            <h3 className="world-section__subheading">Uma aventura fora do Cosmere</h3>
            <p className="world-section__note">
              Embora faça parte dos Projetos Secretos de Brandon Sanderson, esta aventura se passa fora do
              Cosmere.
            </p>
            <div className="secret-projects__grid">
              {nonCosmereBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/jornada')}>
            Ver sua jornada de leitura
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/biblioteca')}>
            Ver toda a biblioteca Trama
          </button>
        </div>
      </div>
    </section>
  );
}
