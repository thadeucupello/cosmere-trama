import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <motion.div
      className="section-heading-block"
      style={{ textAlign: align }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-sub" style={{ marginInline: align === 'center' ? 'auto' : 0 }}>{subtitle}</p>}
    </motion.div>
  );
}
