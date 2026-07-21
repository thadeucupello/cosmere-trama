import type { Book } from '../types';

const statusLabel: Record<Book['status'], string> = {
  published: 'Publicado',
  preorder: 'Pré-venda',
  'coming-soon': 'Em breve',
};

interface Props {
  book: Book;
}

export default function RelatedBookCard({ book }: Props) {
  return (
    <article className="related-book-card">
      <div className="related-book-card__cover">
        {book.cover ? (
          <img src={book.cover} alt={`Capa de ${book.title}`} loading="lazy" width={160} height={252} />
        ) : (
          <span className="related-book-card__placeholder">{book.title}</span>
        )}
        <span className={`related-book-card__status related-book-card__status--${book.status}`}>
          {statusLabel[book.status]}
        </span>
      </div>

      <div className="related-book-card__content">
        <p>{book.series}</p>
        <h3>{book.title}</h3>
        {book.purchaseUrl ? (
          <a href={book.purchaseUrl} target="_blank" rel="noreferrer">
            Ver na loja da Trama
          </a>
        ) : (
          <small>Link oficial em preparação.</small>
        )}
      </div>
    </article>
  );
}
