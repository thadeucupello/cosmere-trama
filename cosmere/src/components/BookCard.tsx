import { motion } from 'framer-motion';
import type { Book } from '../types';

const statusLabel: Record<Book['status'], string> = {
  published: 'Publicado',
  preorder: 'Pré-venda',
  'coming-soon': 'Em breve',
};

interface Props {
  book: Book;
  highlighted?: boolean;
}

export default function BookCard({ book, highlighted = false }: Props) {
  return (
    <motion.article
      id={book.id}
      className={`book-card ${highlighted ? 'book-card--highlighted' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {highlighted && <span className="book-card__journey-badge">Seu primeiro livro</span>}

      <div className="book-card__cover">
        {book.cover ? (
          <img src={book.cover} alt={`Capa de ${book.title}`} loading="lazy" width={240} height={360} />
        ) : (
          <div className="book-card__placeholder" role="img" aria-label={`Capa de ${book.title} ainda não disponível`}>
            <span>{book.title}</span>
          </div>
        )}
        <span className={`book-card__status book-card__status--${book.status}`}>{statusLabel[book.status]}</span>
        {book.isPartOfCosmere === false && (
          <span className="book-card__universe-badge">Fora da Cosmere</span>
        )}
        {book.coverIsProvisional && (
          <span className="book-card__provisional">Capa provisória (edição internacional)</span>
        )}
      </div>

      <div className="book-card__body">
        <p className="book-card__series">{book.series}</p>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__description">{book.description}</p>

        {book.purchaseUrl ? (
          <div className="book-card__actions">
            <a
              href={book.purchaseUrl}
              className="btn btn-primary book-card__action"
              target="_blank"
              rel="noreferrer"
            >
              Ver na loja da Trama
            </a>
          </div>
        ) : (
          <p className="book-card__pending-note">Link oficial em preparação.</p>
        )}
      </div>
    </motion.article>
  );
}
