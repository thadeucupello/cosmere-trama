import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { readingPaths } from '../data/content';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { PathId } from '../types';

const cardCopy: Record<PathId, string> = {
  aventura: 'Quero começar pela melhor porta de entrada.',
  epico: 'Quero mergulhar em uma saga monumental.',
  unico: 'Quero viver uma história completa em um só livro.',
  completo: 'Quero percorrer a Cosmere e descobrir todas as conexões.',
};

export default function PathSelector() {
  const [selectedPath, setSelectedPath] = useLocalStorage<PathId | null>('cosmere:selected-path', null);
  const navigate = useNavigate();

  const choosePath = (pathId: PathId) => {
    try {
      window.localStorage.setItem('cosmere:selected-path', JSON.stringify(pathId));
    } catch {
      // A navegação continua mesmo quando o armazenamento do navegador está indisponível.
    }
    setSelectedPath(pathId);
    navigate('/jornada', { state: { selectedPath: pathId } });
  };

  return (
    <section id="caminho" className="section path-selector" aria-label="Por onde você quer começar">
      <div className="container">
        <SectionHeading
          align="left"
          title="Por onde você quer começar?"
          subtitle="Não existe uma única porta de entrada para a Cosmere. Escolha o tipo de história que mais chama você."
        />

        <div className="path-selector__grid">
          {readingPaths.map((path) => (
            <button
              key={path.id}
              type="button"
              className={`path-selector__card ${selectedPath === path.id ? 'is-selected' : ''}`}
              onClick={() => choosePath(path.id)}
              aria-pressed={selectedPath === path.id}
            >
              <p className="path-selector__prompt">{cardCopy[path.id]}</p>
              <span className="path-selector__recommendation">{path.recommendedLabel}</span>
              <span className="path-selector__action">Escolher esta jornada →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
