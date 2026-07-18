import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { readingPaths } from '../data/content';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { PathId } from '../types';

const cardCopy: Record<PathId, string> = {
  aventura: 'Quero uma grande aventura.',
  epico: 'Quero mergulhar em uma saga épica.',
  unico: 'Quero começar por um livro único.',
  completo: 'Quero explorar todo o Cosmere.',
};

export default function PathSelector() {
  const [selectedPath, setSelectedPath] = useLocalStorage<PathId | null>('cosmere:selected-path', null);

  return (
    <section id="caminho" className="section path-selector" aria-label="Por onde você quer começar">
      <div className="container">
        <SectionHeading align="center" title="Por onde você quer começar?" />

        <div className="path-selector__grid">
          {readingPaths.map((path) => (
            <button
              key={path.id}
              type="button"
              className={`path-selector__card ${selectedPath === path.id ? 'is-selected' : ''}`}
              onClick={() => setSelectedPath(path.id)}
              aria-pressed={selectedPath === path.id}
            >
              <p className="path-selector__prompt">{cardCopy[path.id]}</p>
              <span className="path-selector__recommendation">{path.recommendedLabel}</span>
            </button>
          ))}
        </div>

        {selectedPath && (
          <p className="path-selector__note">
            Ótima escolha — sua jornada recomendada foi atualizada na página{' '}
            <Link to="/jornada">Sua Jornada</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
