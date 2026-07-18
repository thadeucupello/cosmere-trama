import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
}

export default function MagicCard({ title, description }: Props) {
  return (
    <motion.div
      className="magic-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="magic-card__title">{title}</h3>
      <p className="magic-card__description">{description}</p>
    </motion.div>
  );
}
