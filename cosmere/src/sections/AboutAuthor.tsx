import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import brandonPortrait from '../assets/brandon/portrait.webp';

export default function AboutAuthor() {
  return (
    <section id="autor" className="section about-author about-author--compact" aria-label="Quem é Brandon Sanderson">
      <div className="container about-author__compact">
        <motion.div
          className="about-author__compact-portrait"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={brandonPortrait}
            alt="Retrato de Brandon Sanderson"
            className="about-author__portrait-image"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div className="about-author__compact-content">
          <SectionHeading eyebrow="O autor" title="Quem é Brandon Sanderson?" />
          <p className="about-author__compact-intro">
            Brandon Sanderson é o autor por trás de Mistborn, Relatos da Guerra das Tempestades e dos mundos que formam a Cosmere. Suas histórias combinam sistemas de magia engenhosos, personagens marcantes e conexões que crescem livro a livro.
          </p>
        </div>
      </div>
    </section>
  );
}
