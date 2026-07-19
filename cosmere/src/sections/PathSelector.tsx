import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { readingPaths } from '../data/content';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { PathId } from '../types';

const cardCopy: Record<PathId, string> = {
  aventura: 'Quero começar pela melhor porta de entrada.',
  epico: 'Quero mergulhar em uma saga monumental.',
  unico: 'Quero viver uma história completa em um só livro.',
  completo: 'Quero percorrer o Cosmere e descobrir todas as conexões.',
};

export default function PathSelector() {
  const [selectedPath, setSelectedPath] = useLocalStorage<PathId | null>('cosmere:selected-path', null);

  return (
    <section id="caminho" className="section path-selector" aria-label="Por onde você quer começar">
      <div className="container">
        <SectionHeading
          align="center"
          title="Por onde você quer começar?"
          subtitle="Não existe uma única porta de entrada para o Cosmere. Escolha o tipo de história que mais chama você."
        />

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
            Seu primeiro destino está marcado. Veja a rota completa em{' '}
            <Link to="/jornada">Sua Jornada</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
