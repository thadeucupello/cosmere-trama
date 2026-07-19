import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useMouseParallax } from '../hooks/useMouseParallax';
import cosmereSymbol from '../assets/logos/cosmere-symbol-gold.png';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const parallax = useMouseParallax();

  const scrollNext = () => {
    document.getElementById('autor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nebulaX = parallax.x * 4;
  const nebulaY = parallax.y * 4;
  const symbolX = parallax.x * 6;
  const symbolY = parallax.y * 6;

  return (
    <section id="hero" className="hero section" aria-label="Abertura">
      <div
        className="hero__nebula-wrap"
        aria-hidden="true"
        style={{ transform: `translate3d(${nebulaX}px, ${nebulaY}px, 0)` }}
      >
        <div className="hero__nebula" />
      </div>

      <div
        className="hero__symbol-wrap"
        style={{ transform: `translate(calc(-50% + ${symbolX}px), calc(-50% + ${symbolY}px))` }}
      >
        <motion.img
          src={cosmereSymbol}
          alt=""
          aria-hidden="true"
          className="hero__symbol"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.07, rotate: reducedMotion ? 0 : 360 }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeOut' },
            rotate: reducedMotion ? { duration: 0 } : { duration: 240, repeat: Infinity, ease: 'linear' },
          }}
        />
      </div>

      <div className="container hero__content">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hero__title"
        >
          DESCUBRA O COSMERE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hero__subtitle"
        >
          Mundos distintos. Histórias que se encontram. Um universo maior do que você imagina, criado por Brandon
          Sanderson.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <button type="button" className="btn btn-primary hero__cta" onClick={scrollNext}>
            Comece sua jornada
          </button>
        </motion.div>

        <motion.button
          type="button"
          className="hero__hint"
          onClick={scrollNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.4 }}
        >
          Role para explorar
          <ChevronDown size={18} aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  );
}
