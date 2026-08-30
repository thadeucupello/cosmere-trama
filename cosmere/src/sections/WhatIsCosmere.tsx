import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  const relatedBook = activeWorld?.relatedBookId ? books.find((b) => b.id === activeWorld.relatedBookId) : undefined;

  return (
    <section id="cosmere" className="section cosmere-map cosmere-map--refined" aria-label="O que é a Cosmere">
      <div className="container cosmere-map__grid">
        <div className="cosmere-map__intro">
          <SectionHeading
            align="left"
            eyebrow="O universo"
            title="O que é a Cosmere?"
            subtitle="A Cosmere é o universo compartilhado que abriga grande parte das histórias de Brandon Sanderson. Cada saga acontece em um mundo diferente e pode ser lida de forma independente. Aos poucos, conexões entre mundos, personagens e histórias começam a aparecer."
          />
        </div>

        <div className="cosmere-map__experience">
          <div className="cosmere-map__orbit-wrap">
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
                    aria-pressed={activeWorld?.id === entry.id}
                    onMouseEnter={() => setActiveWorld(entry)}
                    onFocus={() => setActiveWorld(entry)}
                    onClick={() => setActiveWorld(entry)}
                  >
                    <span className="cosmere-orbit__dot" />
                    <span className="cosmere-orbit__label">{entry.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="cosmere-map__panel" role="status" aria-live="polite">
            {activeWorld ? (
              <motion.div
                key={activeWorld.id}
                className="cosmere-map__panel-content"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
              >
                <span className="cosmere-map__panel-eyebrow">Mundo da Cosmere</span>
                <h3 className="cosmere-map__panel-title" style={{ color: activeWorld.accent }}>
                  {activeWorld.name}
                </h3>
                <p className="cosmere-map__panel-copy">{activeWorld.teaser}</p>

                {relatedBook?.cover && (
                  <div className="cosmere-map__panel-book">
                    <img
                      src={relatedBook.cover}
                      alt={`Capa de ${relatedBook.title}`}
                      className="cosmere-tooltip__cover"
                      loading="lazy"
                    />
                    <div>
                      <span className="cosmere-map__panel-book-label">Leia este mundo em</span>
                      <strong>{relatedBook.title}</strong>
                    </div>
                  </div>
                )}

                {activeWorld.kind === 'primary' ? (
                  <Link to={`/${activeWorld.id}`} className="btn btn-ghost cosmere-map__panel-action">
                    Explorar {activeWorld.name}
                  </Link>
                ) : relatedBook ? (
                  <Link to={`/projetos-secretos#${relatedBook.id}`} className="btn btn-ghost cosmere-map__panel-action">
                    Conhecer {relatedBook.title}
                  </Link>
                ) : null}
              </motion.div>
            ) : (
              <div className="cosmere-map__panel-content cosmere-map__panel-content--intro">
                <span className="cosmere-map__panel-eyebrow">Mundos conectados</span>
                <p className="cosmere-map__statement">
                  Na Cosmere, cada livro conta uma história. Juntos, eles formam um universo.
                </p>
                <span className="cosmere-map__panel-hint">Passe o mouse ou toque em um mundo para conhecê-lo.</span>
              </div>
            )}

            <button
              type="button"
              className="btn btn-ghost cosmere-map__all-worlds"
              onClick={() => document.getElementById('mundos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar os mundos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
