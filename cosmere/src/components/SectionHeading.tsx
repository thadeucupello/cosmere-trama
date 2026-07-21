import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  level?: 1 | 2;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', level = 2 }: Props) {
  const HeadingTag = level === 1 ? 'h1' : 'h2';

  return (
    <motion.div
      className={`section-heading-block section-heading-block--${align}`}
      style={{ textAlign: align }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <HeadingTag className="section-heading">{title}</HeadingTag>
      {subtitle && <p className="section-sub" style={{ marginInline: align === 'center' ? 'auto' : 0 }}>{subtitle}</p>}
    </motion.div>
  );
}
