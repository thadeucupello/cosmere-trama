import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import brandonPortrait from '../assets/brandon/portrait.webp';

const facts = [
  'Best-seller internacional',
  'Milhões de livros vendidos em todo o mundo',
  'Criador do Cosmere',
  'Autor de Mistborn e Relatos da Guerra das Tempestades',
];

const timeline = [
  { year: '2005', label: 'Elantris apresenta o primeiro mundo do Cosmere' },
  { year: '2006', label: 'Mistborn abre as portas de Scadrial' },
  { year: '2010', label: 'Começa a jornada pelos Relatos da Guerra das Tempestades' },
  { year: 'Hoje', label: 'Mundos, histórias e personagens continuam expandindo o Cosmere' },
];

export default function AboutAuthor() {
  return (
    <section id="autor" className="section about-author" aria-label="Quem é Brandon Sanderson">
      <div className="container about-author__grid">
        <motion.div
          className="about-author__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={brandonPortrait}
            alt="Retrato de Brandon Sanderson"
            className="about-author__portrait-image"
            width={800}
            height={1000}
          />
        </motion.div>

        <div className="about-author__content">
          <SectionHeading eyebrow="O autor" title="Quem é Brandon Sanderson?" />
          <p className="about-author__intro">
            Brandon Sanderson constrói mundos como poucos. Suas histórias combinam sistemas de magia engenhosos,
            personagens inesquecíveis e tramas que recompensam cada detalhe. No centro de sua obra está o Cosmere,
            um universo compartilhado que cresce livro a livro e convida cada leitor a descobrir suas conexões.
          </p>

          <ul className="about-author__facts">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <ol className="about-author__timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="about-author__timeline-year">{item.year}</span>
                <span className="about-author__timeline-label">{item.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
