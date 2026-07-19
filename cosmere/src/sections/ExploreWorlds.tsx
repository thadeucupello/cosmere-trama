import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { worlds } from '../data/worlds';

export default function ExploreWorlds() {
  return (
    <section className="section explore-worlds" aria-label="Explorar os mundos">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Próximos destinos"
          title="Para onde sua jornada leva você?"
          subtitle="Cinzas, tempestades, cores e caminhos inesperados. Cada destino guarda uma nova forma de imaginar a fantasia."
        />

        <div className="explore-worlds__grid">
          {worlds.map((world) => (
            <Link
              key={world.id}
              to={`/${world.id}`}
              className="explore-worlds__card"
              style={{ ['--accent' as string]: world.accent, ['--accent-soft' as string]: world.accentSoft }}
            >
              <h3>{world.name}</h3>
              <p>{world.teaser}</p>
              <span className="explore-worlds__cta">Explorar {world.name} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
