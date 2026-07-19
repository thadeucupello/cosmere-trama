import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { worlds, orbitCompanionWorlds } from '../data/worlds';
import { books } from '../data/books';

type OrbitEntry = {
  id: string;
  name: string;
  teaser: string;
  accent: string;
  angle: number;
  radius: number;
  kind: 'primary' | 'companion';
  relatedBookId?: string;
};

const orbitEntries: OrbitEntry[] = [
  ...worlds
    .filter((w) => w.id !== 'secret-projects')
    .map((w, i) => ({
      id: w.id,
      name: w.name,
      teaser: w.teaser,
      accent: w.accent,
      angle: i * 95,
      radius: 44,
      kind: 'primary' as const,
    })),
  ...orbitCompanionWorlds.map((w, i) => ({
    id: w.id,
    name: w.name,
    teaser: w.teaser,
    accent: w.accent,
    angle: 45 + i * 100,
    radius: 62,
    kind: 'companion' as const,
    relatedBookId: w.relatedBookId,
  })),
];

export default function WhatIsCosmere() {
  const [activeWorld, setActiveWorld] = useState<OrbitEntry | null>(null);
  const navigate = useNavigate();

  const handleSelect = (entry: OrbitEntry) => {
    if (entry.kind === 'primary') {
      navigate(`/${entry.id}`);
    } else {
      setActiveWorld(entry);
    }
  };

  const relatedBook = activeWorld?.relatedBookId ? books.find((b) => b.id === activeWorld.relatedBookId) : undefined;

  return (
    <section id="cosmere" className="section cosmere-map" aria-label="O que é a Cosmere">
      <div className="container cosmere-map__grid">
        <SectionHeading
          align="center"
          eyebrow="O universo"
          title="O que é a Cosmere?"
          subtitle="A Cosmere é o universo compartilhado que abriga grande parte das histórias de Brandon Sanderson. Cada saga acontece em um mundo diferente, com seus próprios povos, conflitos e sistemas de magia, e pode ser lida de forma independente. Mas, à medida que você viaja entre esses mundos, conexões começam a surgir, personagens atravessam histórias e algo muito maior se revela."
        />

        <p className="cosmere-map__statement">
          Na Cosmere, cada livro conta uma história. Juntos, eles formam um universo.
        </p>

        <div className="cosmere-orbit" role="group" aria-label="Mapa dos mundos da Cosmere">
          <div className="cosmere-orbit__core" aria-hidden="true" />

          {orbitEntries.map((entry) => {
            const rad = (entry.angle * Math.PI) / 180;
            const x = 50 + entry.radius * Math.cos(rad);
            const y = 50 + entry.radius * Math.sin(rad) * 0.6;
            return (
              <button
                key={entry.id}
                type="button"
                className={`cosmere-orbit__planet cosmere-orbit__planet--${entry.kind}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  // @ts-expect-error custom property
                  '--planet-accent': entry.accent,
                }}
                aria-label={`${entry.name}: ${entry.teaser}`}
                aria-expanded={activeWorld?.id === entry.id}
                onMouseEnter={() => setActiveWorld(entry)}
                onFocus={() => setActiveWorld(entry)}
                onClick={() => handleSelect(entry)}
              >
                <span className="cosmere-orbit__dot" />
                <span className="cosmere-orbit__label">{entry.name}</span>
              </button>
            );
          })}
        </div>

        <div className="cosmere-tooltip" role="status" aria-live="polite">
          {activeWorld ? (
            <motion.div
              key={activeWorld.id}
              className={relatedBook ? 'cosmere-tooltip__card' : undefined}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {relatedBook?.cover && (
                <img
                  src={relatedBook.cover}
                  alt={`Capa de ${relatedBook.title}`}
                  className="cosmere-tooltip__cover"
                  loading="lazy"
                />
              )}
              <div className="cosmere-tooltip__copy">
                <h3 className="cosmere-tooltip__name" style={{ color: activeWorld.accent }}>
                  {activeWorld.name}
                </h3>
                <p className="cosmere-tooltip__description">{activeWorld.teaser}</p>
                {relatedBook && (
                  <Link to={`/projetos-secretos#${relatedBook.id}`} className="btn btn-ghost cosmere-tooltip__cta">
                    Conhecer {relatedBook.title}
                  </Link>
                )}
              </div>
            </motion.div>
          ) : (
            <span className="cosmere-tooltip__hint">Toque ou passe o mouse sobre um mundo para conhecê-lo.</span>
          )}
        </div>

        <div className="cosmere-map__cta">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => document.getElementById('mundos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Continuar explorando
          </button>
        </div>
      </div>
    </section>
  );
}
