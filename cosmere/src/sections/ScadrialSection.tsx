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
const originalTrilogyGroup = scadrialBooks.filter((b) => b.series === 'Mistborn: a Trilogia Original');
const eraTwoBooks = scadrialBooks.filter((b) => b.series === 'Mistborn: Era Dois');
const secretHistory = scadrialBooks.find((b) => b.series === 'Mistborn: História Secreta');

const magicSystems = [
  {
    title: 'Alomancia',
    description: 'Metais ingeridos e “queimados” despertam habilidades extraordinárias. Cada metal concede um poder diferente.',
  },
  {
    title: 'Feruquimia',
    description:
      'Força, velocidade, memória e outros atributos podem ser armazenados em metais para serem recuperados quando necessário.',
  },
  {
    title: 'Hemalurgia',
    description:
      'Uma prática proibida que utiliza os metais de uma forma muito mais sombria. Seus verdadeiros segredos são revelados ao longo da saga.',
  },
];

export default function ScadrialSection() {
  const ref = useMarkExplored('scadrial');
  const navigate = useNavigate();
  usePageMeta(
    'Scadrial | Descubra a Cosmere — Editora Trama',
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
        <SectionHeading
          level={1}
          eyebrow="O mundo de Mistborn"
          title={world.name}
          subtitle="Um mundo forjado entre cinzas e névoas, onde o poder dos metais pode mudar o destino de impérios."
        />

        <div className="world-section__intro">
          <p>
            Scadrial é o palco de uma saga construída para atravessar eras. Na Trilogia Original, você encontrará
            um império coberto por cinzas, uma sociedade dividida pela opressão e um grupo de ladrões disposto a
            realizar o golpe impossível: derrubar um governante imortal. É uma história de revolução, poder e
            sobrevivência, conduzida por uma jovem que ainda está descobrindo do que é capaz.
          </p>
          <p>
            Trezentos anos depois, a Era Dois acompanha uma Scadrial em plena transformação. Ferrovias, armas,
            grandes cidades e novas tecnologias dividem espaço com a Alomancia e a Feruquimia. A fantasia épica
            ganha elementos de investigação, aventura de fronteira e romance policial, enquanto as consequências
            da primeira trilogia continuam moldando o mundo.
          </p>
          <p>
            E a história ainda não terminou. Brandon Sanderson já trabalha em <em>Ghostbloods</em>, a terceira era
            de Mistborn, ambientada aproximadamente cinquenta anos depois e inspirada nos anos 1980 e no início da
            era da computação. Mais adiante, o planejamento do autor levará Scadrial até a era espacial. Assim,
            Mistborn acompanhará um mesmo mundo desde um império de cinzas até um futuro de ficção científica.
          </p>
        </div>

        <h3 className="world-section__subheading">Sistemas de magia</h3>
        <div className="magic-card-grid">
          {magicSystems.map((m) => (
            <MagicCard key={m.title} {...m} />
          ))}
        </div>

        <h3 className="world-section__subheading">Mistborn: a Trilogia Original</h3>
        <div className="book-timeline">
          {originalTrilogyGroup.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <p className="world-section__note">
          Uma fantasia épica com o ritmo de uma história de assalto. Tudo começa com um grupo de ladrões decidido
          a derrubar um império governado há mil anos pelo mesmo homem. A partir daí, a trama cresce livro a livro
          até alcançar o destino de toda Scadrial. Uma história completa em três volumes e a melhor porta de entrada
          para a Cosmere.
        </p>

        <div className="world-transition-caption" aria-hidden="true">
          Trezentos anos depois, o mundo mudou. Os metais ainda guardam poder.
        </div>

        <h3 className="world-section__subheading">Mistborn: Era Dois</h3>
        <div className="world-section__note world-section__note--expanded">
          <p>
            Scadrial sobreviveu ao fim do mundo e entrou em uma nova era. Trezentos anos depois da Trilogia
            Original, ferrovias atravessam o continente, armas substituem espadas e os primeiros arranha-céus
            transformam as cidades. A Alomancia e a Feruquimia continuam presentes, agora combinadas às invenções
            de uma sociedade em plena modernização.
          </p>
          <p>
            É nesse mundo que surgem Wax e Wayne, dois homens da lei com poderes, métodos e temperamentos muito
            diferentes. Misturando fantasia, investigação, aventura de fronteira e romance policial, os quatro
            livros revelam como as decisões da primeira era continuam moldando Scadrial e aproximam Mistborn das
            grandes conexões da Cosmere.
          </p>
          <p>Recomendamos a leitura depois da Trilogia Original.</p>
        </div>
        <div className="book-timeline">
          {eraTwoBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {secretHistory && (
          <>
            <h3 className="world-section__subheading">Mistborn: História Secreta</h3>
            <div className="world-section__note world-section__note--expanded">
              <p>
                Há outra história acontecendo por trás dos acontecimentos da Trilogia Original. <em>Mistborn:
                História Secreta</em> revisita momentos decisivos da saga por uma perspectiva inesperada, revela
                parte da engrenagem oculta da Cosmere e transforma a maneira como enxergamos alguns personagens e
                acontecimentos de Scadrial.
              </p>
              <p>
                É uma leitura complementar, feita para quem deseja atravessar as fronteiras da história principal
                e começar a perceber com mais clareza as conexões entre os mundos de Brandon Sanderson.
              </p>
            </div>
            <aside className="world-section__spoiler-note" aria-label="Aviso sobre a ordem de leitura">
              <strong>Atenção: esta história contém grandes spoilers da Trilogia Original.</strong>
              <p>
                Leia somente depois de <em>O Herói das Eras</em>. Para preservar também as revelações da Era Dois,
                a experiência ideal é ler depois de <em>Os Braceletes da Perdição</em>.
              </p>
            </aside>
            <div className="book-timeline book-timeline--single">
              <BookCard book={secretHistory} />
            </div>
          </>
        )}

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/roshar')}>
            Continuar explorando a Cosmere
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/biblioteca')}>
            Conhecer os livros publicados pela Trama
          </button>
        </div>
      </div>
    </section>
  );
}
