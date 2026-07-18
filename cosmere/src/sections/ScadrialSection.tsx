import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import MagicCard from '../components/MagicCard';
import BookCard from '../components/BookCard';
import BackToMapLink from '../components/BackToMapLink';
import { getWorld } from '../data/worlds';
import { getBooksByWorld } from '../data/books';
import { useMarkExplored } from '../hooks/useMarkExplored';
import { usePageMeta } from '../hooks/usePageMeta';

const world = getWorld('scadrial');
const scadrialBooks = getBooksByWorld('scadrial');
const originalTrilogyGroup = scadrialBooks.filter((b) => b.series === 'Mistborn — Trilogia Original');
const eraTwoBooks = scadrialBooks.filter((b) => b.series === 'Mistborn — Era Dois');
const secretHistory = scadrialBooks.find((b) => b.series === 'Mistborn — História Secreta');

const magicSystems = [
  { title: 'Allomancia', description: 'Um sistema em que metais específicos concedem habilidades únicas a quem os consome.' },
  { title: 'Feruquimia', description: 'Uma arte baseada em armazenar atributos pessoais para utilizá-los mais tarde.' },
  { title: 'Hemalurgia', description: 'Uma arte misteriosa e perigosa cuja verdadeira natureza é revelada ao longo dos livros.' },
];

export default function ScadrialSection() {
  const ref = useMarkExplored('scadrial');
  const navigate = useNavigate();
  usePageMeta(
    'Scadrial | Descubra o Cosmere — Editora Trama',
    'Conheça Scadrial, o mundo de Mistborn: Allomancia, Feruquimia, Hemalurgia e os livros publicados pela Trama.'
  );

  return (
    <section
      id="scadrial"
      ref={ref as React.RefObject<HTMLElement>}
      className="section world-section world-section--scadrial"
      style={{ ['--accent' as string]: world.accent, ['--accent-soft' as string]: world.accentSoft }}
      aria-label="Scadrial"
    >
      <div className="container">
        <BackToMapLink />
        <SectionHeading eyebrow="Mundo" title={world.name} subtitle={world.tagline} />

        <p className="world-section__intro">
          Em Scadrial, cinzas caem lentamente do céu e a névoa cobre as noites. É um mundo onde metais guardam
          poderes extraordinários e onde impérios inteiros já se ergueram — e caíram.
        </p>

        <h3 className="world-section__subheading">Sistemas de magia</h3>
        <div className="magic-card-grid">
          {magicSystems.map((m) => (
            <MagicCard key={m.title} {...m} />
          ))}
        </div>

        <h3 className="world-section__subheading">Mistborn — Trilogia Original</h3>
        <div className="book-timeline">
          {originalTrilogyGroup.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <p className="world-section__note">
          Uma história completa. A melhor porta de entrada para novos leitores — em três volumes individuais
          ou em um único box com a trilogia completa.
        </p>

        <div className="world-transition-caption" aria-hidden="true">
          Trezentos anos depois...
        </div>

        <h3 className="world-section__subheading">Mistborn — Era Dois</h3>
        <p className="world-section__note">
          Uma nova geração enfrenta um mundo em transformação. Recomendamos começar pela Trilogia Original antes
          de seguir para estes livros. Hoje a Trama publica a Era Dois em um box com os quatro romances — as
          edições avulsas abaixo estão previstas para breve.
        </p>
        <div className="book-timeline">
          {eraTwoBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {secretHistory && (
          <>
            <h3 className="world-section__subheading">Mistborn — História Secreta</h3>
            <p className="world-section__note">
              Uma novela complementar, à parte da linha do tempo principal — recomendada apenas para quem já leu
              a Trilogia Original.
            </p>
            <div className="book-timeline book-timeline--single">
              <BookCard book={secretHistory} />
            </div>
          </>
        )}

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/roshar')}>
            Continuar explorando o Cosmere
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/biblioteca')}>
            Conhecer os livros publicados pela Trama
          </button>
        </div>
      </div>
    </section>
  );
}
