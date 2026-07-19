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
  {
    title: 'Altas Tempestades',
    description:
      'Muralhas de vento, chuva e pedra que atravessam o continente, transformando a paisagem e determinando o ritmo da vida em Roshar.',
  },
  {
    title: 'Luz das tempestades',
    description:
      'Uma energia capturada em esferas durante as tempestades. Ela ilumina cidades, alimenta a magia e pode conceder habilidades extraordinárias.',
  },
  {
    title: 'Spren',
    description:
      'Seres atraídos por emoções, ideias e forças da natureza. Em Roshar, medo, glória, dor e até o vento podem ganhar forma diante dos olhos.',
  },
  {
    title: 'Cavaleiros Radiantes',
    description:
      'Dez antigas ordens formadas por pessoas ligadas aos spren. Seus poderes nascem de vínculos e juramentos que precisam ser vividos, não apenas pronunciados.',
  },
  {
    title: 'Espadas e Armaduras Fractais',
    description:
      'Relíquias dos antigos Radiantes que concedem poder quase sobre-humano e podem transformar o destino de uma batalha ou de um reino.',
  },
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
        <SectionHeading
          eyebrow="O mundo de Relatos da Guerra das Tempestades"
          title={world.name}
          subtitle="Um mundo de pedra e tempestades, onde juramentos despertam poderes e antigas lendas começam a retornar."
        />

        <div className="world-section__intro">
          <p>
            Roshar é um mundo moldado por tempestades tão violentas que transformaram sua paisagem, sua fauna e a
            maneira como seus povos vivem. Reinos disputam poder em guerras intermináveis, enquanto Espadas e
            Armaduras Fractais, vestígios de uma era lendária, ainda são capazes de decidir batalhas e coroar
            governantes.
          </p>
          <p>
            É nesse cenário que se cruzam as histórias de Kaladin, um soldado que luta para não perder a esperança;
            Shallan, uma jovem estudiosa cercada por segredos; e Dalinar, um guerreiro assombrado pelo próprio
            passado. Cada um carrega feridas, verdades ocultas e juramentos que podem mudar o destino do mundo.
          </p>
          <p>
            Enquanto uma antiga ameaça volta a despertar, os Cavaleiros Radiantes, desaparecidos há séculos,
            começam a deixar novos sinais. Relatos da Guerra das Tempestades é uma fantasia épica sobre guerra,
            honra, poder e pessoas quebradas tentando reconstruir a si mesmas antes que Roshar seja destruída.
          </p>
        </div>

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
