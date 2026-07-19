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
    'Nalthis | Descubra a Cosmere — Editora Trama',
    'Conheça Nalthis, o mundo de Warbreaker, e sua magia BioCromática construída sobre cor e Respiração.'
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
        <SectionHeading
          eyebrow="O mundo de Warbreaker"
          title={world.name}
          subtitle="Um mundo onde a vida possui cor, o poder pode ser entregue e até os deuses precisam respirar."
        />

        <div className="world-section__intro">
          <p>
            Nalthis é um mundo de contrastes. De um lado está Idris, um reino austero que desconfia das cores e da
            magia. Do outro, Hallandren, uma cidade exuberante governada por deuses que morreram e retornaram à
            vida. Entre os dois cresce a ameaça de uma guerra capaz de destruir ambos.
          </p>
          <p>
            É nesse cenário que as princesas Siri e Vivenna veem seus destinos tomarem rumos inesperados. Uma delas
            é enviada para se casar com o misterioso Rei-Deus. A outra abandona tudo para tentar salvá-la. Enquanto
            as duas descobrem que quase nada é o que parece, sacerdotes, mercenários, imortais e uma espada muito
            particular movem seus próprios planos.
          </p>
          <p>
            <em>Warbreaker: o sopro dos Deuses</em> combina intriga política, humor, romance, religião e uma das
            magias mais visuais criadas por Brandon Sanderson.
          </p>
        </div>

        <div className="magic-card-grid">
          <MagicCard
            title="Respiração"
            description="Cada pessoa nasce com uma parcela de energia vital que pode ser entregue a outra. Quanto mais Respirações alguém acumula, mais intensamente percebe cores, sons e o mundo ao redor."
          />
          <MagicCard
            title="Magia BioCromática"
            description="Respirações podem ser utilizadas para despertar objetos e lhes dar comandos. Cordas, tecidos e outros materiais passam a se mover como se estivessem vivos."
          />
          <MagicCard
            title="Cor"
            description="A magia consome a cor dos objetos como combustível. Depois de utilizada, o que antes era vibrante pode se tornar completamente cinzento."
          />
          <MagicCard
            title="Retornados"
            description="Pessoas que morreram de maneira extraordinária e voltaram à vida como deuses. Adorados em Hallandren, eles dependem da Respiração de outras pessoas para continuar existindo."
          />
        </div>

        <h3 className="world-section__subheading">Warbreaker: o sopro dos Deuses</h3>
        <div className="world-section__note world-section__note--expanded">
          <p>
            Duas irmãs separadas por um tratado. Um Rei-Deus envolto em silêncio. Uma corte de divindades que não
            sabe por que retornou à vida. Em uma cidade onde poder, cor e Respiração podem ser negociados, cada
            escolha pode aproximar dois reinos da paz ou da guerra.
          </p>
          <p>
            Uma história completa em um único volume e uma excelente porta de entrada para a Cosmere. Pode ser
            lida de forma independente, mas suas conexões ganham importância especial para quem também percorre
            Roshar.
          </p>
        </div>
        <div className="book-timeline book-timeline--single">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <aside className="world-section__future-note" aria-label="O futuro de Nalthis">
          <span className="world-section__future-eyebrow">Próximo horizonte</span>
          <h3>O futuro de Nalthis</h3>
          <p>
            A história de <em>Warbreaker</em> termina neste volume, mas Nalthis ainda guarda outros segredos.
            Brandon Sanderson planeja retornar a esse mundo em uma continuação provisoriamente intitulada
            <em> Nightblood</em>, que deverá ampliar algumas das histórias, personagens e perguntas deixadas pelo
            primeiro livro.
          </p>
          <p>O projeto ainda não foi escrito e não possui data de lançamento confirmada.</p>
        </aside>

        <div className="world-section__actions">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/projetos-secretos')}>
            Continuar jornada
          </button>
        </div>
      </div>
    </section>
  );
}
