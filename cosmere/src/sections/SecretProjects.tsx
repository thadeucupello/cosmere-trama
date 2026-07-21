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
    'Projetos Secretos | Descubra a Cosmere — Editora Trama',
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
        <SectionHeading
          level={1}
          eyebrow="Quatro livros. Três novos cantos da Cosmere. Uma viagem para além dela."
          title={world.name}
          subtitle="Cada história abre uma nova porta."
        />

        <div className="world-section__intro">
          <p>
            Durante os anos de pandemia, Brandon Sanderson fez algo que ninguém esperava: escreveu novos livros em
            segredo. Quando revelou o projeto ao público, a campanha criada para publicá-los reuniu mais de 185 mil
            leitores e arrecadou US$ 41,7 milhões, tornando-se o maior financiamento coletivo da história do
            Kickstarter.
          </p>
          <p>
            Dessa surpresa nasceram quatro romances independentes, cada um com sua própria atmosfera, seu próprio
            mundo e uma identidade visual especial. Três expandem a Cosmere. Um segue por um caminho completamente
            diferente.
          </p>
          <p>Você não precisa ler os quatro em ordem. Cada história abre uma nova porta.</p>
        </div>

        <h3 className="world-section__subheading">Histórias da Cosmere</h3>
        <p className="world-section__note">
          <em>Tress</em> e <em>Yumi</em> funcionam muito bem como primeiras viagens pela Cosmere. <em>O Homem
          Iluminado</em> se conecta mais profundamente a outras histórias e recompensa especialmente quem já
          conhece Roshar.
        </p>
        <div className="secret-projects__grid">
          {cosmereBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {nonCosmereBooks.length > 0 && (
          <>
            <h3 className="world-section__subheading">Uma aventura fora da Cosmere</h3>
            <p className="world-section__note">
              Este livro nasceu da mesma campanha e recebeu o mesmo tratamento especial, mas sua história não
              pertence à Cosmere.
            </p>
            <div className="secret-projects__grid">
              {nonCosmereBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}

        <aside className="world-section__future-note" aria-label="Ainda há segredos por vir">
          <span className="world-section__future-eyebrow">Além do mapa</span>
          <h3>Ainda há segredos por vir</h3>
          <p>
            Brandon Sanderson já nos ensinou que um segredo nunca é apenas o que parece. Novas histórias continuam
            surgindo, novos mundos aguardam além do mapa e algumas portas ainda não estão prontas para ser abertas.
          </p>
          <p>Por enquanto, estas são as viagens que podemos compartilhar. O restante permanece em segredo.</p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Continue acompanhando a Trama
          </button>
        </aside>

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
