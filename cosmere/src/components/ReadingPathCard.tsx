import { motion } from 'framer-motion';
import type { ReadingPath } from '../types';

interface Props {
  path: ReadingPath;
  selected: boolean;
  onSelect: () => void;
}

export default function ReadingPathCard({ path, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      className={`path-card path-card--${path.id} ${selected ? 'path-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className="path-card__symbol" aria-hidden="true">{path.symbol}</span>
      <span className="path-card__commitment">{path.commitment}</span>
      <h3 className="path-card__title">{path.title}</h3>
      <p className="path-card__audience">{path.audience}</p>
      <p className="path-card__tagline">{path.tagline}</p>
      <p className="path-card__recommendation">{path.recommendedLabel}</p>

      {selected && (
        <motion.ol
          className="path-card__steps"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {path.steps.map((step, i) => {
            const isFuture = step.includes('novembro de 2026');

            return (
              <li key={step}>
                <span className="path-card__step-index">{i + 1}</span>
                <span className="path-card__step-copy">
                  <span>{step}</span>
                  {i === 0 && <small>Comece aqui</small>}
                  {isFuture && <small>Em breve</small>}
                </span>
              </li>
            );
          })}
        </motion.ol>
      )}
    </button>
  );
}
