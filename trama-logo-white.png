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
  usePageMeta(
    'Sua Jornada | Descubra o Cosmere — Editora Trama',
    'Escolha sua trilha de leitura recomendada para começar no universo de Brandon Sanderson.'
  );

  return (
    <section id="jornada" className="section reading-journey" aria-label="Sua jornada de leitura">
      <div className="container">
        <BackToMapLink to="/" label="Voltar para o início" />
        <SectionHeading
          align="center"
          title="Sua jornada começa aqui."
          subtitle="Não existe uma única forma de entrar no Cosmere. Escolha o caminho que faz mais sentido para você."
        />

        <div className="reading-journey__grid">
          {readingPaths.map((path) => (
            <ReadingPathCard
              key={path.id}
              path={path}
              selected={selectedPath === path.id}
              onSelect={() => setSelectedPath(path.id)}
            />
          ))}
        </div>

        <p className="reading-journey__disclaimer">
          Uma rota recomendada para você. Você também pode explorar os mundos em outra ordem.
        </p>

        <div className="world-section__actions" style={{ justifyContent: 'center' }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/biblioteca')}>
            Ver a biblioteca completa da Trama
          </button>
        </div>
      </div>
    </section>
  );
}
