import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ReadingPathCard from '../components/ReadingPathCard';
import BackToMapLink from '../components/BackToMapLink';
import { readingPaths } from '../data/content';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePageMeta } from '../hooks/usePageMeta';
import type { PathId } from '../types';

export default function ReadingJourney() {
  const [selectedPath, setSelectedPath] = useLocalStorage<PathId | null>('cosmere:selected-path', null);
  const navigate = useNavigate();
  const selectedRoute = readingPaths.find((path) => path.id === selectedPath);

  const chooseAnotherRoute = () => {
    setSelectedPath(null);
    window.requestAnimationFrame(() => {
      document.getElementById('reading-routes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  usePageMeta(
    'Sua Jornada | Descubra a Cosmere — Editora Trama',
    'Escolha sua trilha de leitura recomendada para começar no universo de Brandon Sanderson.'
  );

  return (
    <section id="jornada" className="section reading-journey" aria-label="Sua jornada de leitura">
      <div className="container">
        <BackToMapLink to="/" label="Voltar para o início" />
        <SectionHeading
          level={1}
          align="center"
          title="Toda jornada começa com uma escolha."
          subtitle="Não existe uma ordem obrigatória para descobrir a Cosmere. Escolha a rota que combina com o tipo de história que você quer viver agora."
        />

        <div id="reading-routes" className="reading-journey__grid">
          {readingPaths.map((path) => (
            <ReadingPathCard
              key={path.id}
              path={path}
              selected={selectedPath === path.id}
              onSelect={() => setSelectedPath(path.id)}
            />
          ))}
        </div>

        {selectedRoute && (
          <div className="reading-journey__selection" aria-live="polite">
            <span className="reading-journey__selection-eyebrow">Sua jornada foi escolhida</span>
            <h2>Agora, basta abrir o primeiro livro.</h2>
            <p>
              Seu primeiro destino é <strong>{selectedRoute.firstBook}</strong>. A partir dele,
              cada nova leitura revelará um pouco mais deste universo.
            </p>
            <div className="reading-journey__selection-actions">
              <button type="button" className="btn btn-primary" onClick={() => navigate('/biblioteca')}>
                Encontrar {selectedRoute.firstBook} na Biblioteca
              </button>
              <button type="button" className="btn btn-ghost" onClick={chooseAnotherRoute}>
                Escolher outra rota
              </button>
            </div>
          </div>
        )}

        <aside className="reading-journey__connections">
          <span aria-hidden="true">✦</span>
          <div>
            <h2>As conexões aparecem durante o caminho.</h2>
            <p>
              Você não precisa conhecer toda a Cosmere para aproveitar cada história. Mas, quanto
              mais mundos visitar, mais detalhes começará a reconhecer. Personagens, objetos e
              acontecimentos atravessam essas páginas de maneiras nem sempre evidentes.
            </p>
          </div>
        </aside>

        <p className="reading-journey__disclaimer">
          Estas rotas são convites, não regras. Cada série conta uma história própria e pode ser
          lida separadamente.
        </p>

        {!selectedRoute && (
          <div className="world-section__actions" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/biblioteca')}>
              Ver a biblioteca completa da Trama
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
