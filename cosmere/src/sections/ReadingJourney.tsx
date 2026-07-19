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
          title="Toda jornada começa com uma escolha."
          subtitle="Não existe uma ordem obrigatória para descobrir o Cosmere. Escolha a rota que combina com o tipo de história que você quer viver agora."
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
          Estas rotas são convites, não regras. Cada série conta uma história própria e pode ser lida separadamente. Conforme você avançar, as conexões entre os mundos começarão a se revelar.
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
