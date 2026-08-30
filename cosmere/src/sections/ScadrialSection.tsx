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
    'Conheça Scadrial, o mundo de Mistborn: Alomancia, Feruquimia, Hemalurgia e os livros publicados pela Trama.'
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
            Scadrial é um mundo marcado pelo poder dos metais. Na Era Um, cinzas caem do céu, o sol é vermelho e o
            Senhor Soberano governa há mil anos. Séculos depois, o mesmo planeta entra em uma nova era de ferrovias,
            armas de fogo e cidades em expansão.
          </p>
          <p>
            Ao longo das duas eras de Mistborn, Brandon Sanderson transforma o próprio mundo em personagem: sistemas
            políticos mudam, religiões nascem, tecnologias avançam e os poderes conhecidos ganham novas combinações.
          </p>
        </div>

        <div className="magic-grid" aria-label="Sistemas de magia de Scadrial">
          {magicSystems.map((system) => (
            <MagicCard key={system.title} title={system.title} description={system.description} />
          ))}
        </div>

        <div className="world-book-group">
          <SectionHeading
            eyebrow="Mistborn: a Trilogia Original"
            title="A queda de um império. O nascimento de uma lenda."
            subtitle="Comece a sua jornada por Scadrial com a trilogia que apresentou Mistborn ao mundo."
          />
          <div className="book-grid">
            {originalTrilogyGroup.map((book) => <BookCard key={book.id} book={book} />)}
          </div>
        </div>

        <div className="world-book-group">
          <SectionHeading
            eyebrow="Mistborn: Era Dois"
            title="O mundo mudou. Os metais também."
            subtitle="Séculos depois da Trilogia Original, Scadrial entra em uma era de ferrovias, armas de fogo e novos heróis."
          />
          <div className="book-grid">
            {eraTwoBooks.map((book) => <BookCard key={book.id} book={book} />)}
          </div>
        </div>

        {secretHistory && (
          <div className="world-book-group world-book-group--secret-history">
            <SectionHeading
              eyebrow="Uma história por trás da história"
              title="Mistborn: História Secreta"
              subtitle="Uma viagem aos bastidores da Trilogia Original — recomendada para quem já conhece os acontecimentos dos três primeiros livros."
            />
            <div className="book-grid book-grid--single">
              <BookCard book={secretHistory} />
            </div>
          </div>
        )}

        <div className="world-next-step">
          <p className="eyebrow">Continue a jornada</p>
          <h2>Depois de Scadrial, há outros mundos esperando.</h2>
          <div className="world-next-step__actions">
            <button type="button" className="btn btn-primary" onClick={() => navigate('/roshar')}>Conhecer Roshar</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/biblioteca')}>Ver todos os livros</button>
          </div>
        </div>
      </div>
    </section>
  );
}
