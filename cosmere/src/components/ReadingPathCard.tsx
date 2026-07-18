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
      className={`path-card ${selected ? 'path-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <h3 className="path-card__title">{path.title}</h3>
      <p className="path-card__audience">{path.audience}</p>
      <p className="path-card__recommendation">{path.recommendedLabel}</p>

      {selected && (
        <motion.ol
          className="path-card__steps"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {path.steps.map((step, i) => (
            <li key={step}>
              <span className="path-card__step-index">{i + 1}</span>
              {step}
            </li>
          ))}
        </motion.ol>
      )}
    </button>
  );
}
