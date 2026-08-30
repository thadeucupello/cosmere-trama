import { useState } from 'react';
import type { Book } from '../types';
import { useRetailContext } from '../context/RetailContext';

interface Props {
  book: Book;
  compact?: boolean;
}

export default function BookPurchaseAction({ book, compact = false }: Props) {
  const retail = useRetailContext();
  const [open, setOpen] = useState(false);
  const isWindAndTruth = book.id === 'stormlight-5';

  if (retail.isRetailMode) {
    if (isWindAndTruth) {
      return compact
        ? <small>Em breve.</small>
        : <p className="book-card__pending-note">Em breve.</p>;
    }

    return (
      <div className={`retail-purchase ${compact ? 'retail-purchase--compact' : ''}`}>
        <button
          type="button"
          className={compact ? 'retail-purchase__link' : 'btn btn-primary book-card__action'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          Quero este livro
        </button>

        {open && (
          <div className="retail-purchase__panel" role="status">
            <strong>Quero este livro</strong>
            <p>Procure este título nesta livraria ou mostre esta tela a um atendente.</p>
          </div>
        )}
      </div>
    );
  }

  if (!book.purchaseUrl) {
    return compact
      ? <small>Link oficial em preparação.</small>
      : <p className="book-card__pending-note">Link oficial em preparação.</p>;
  }

  return (
    <a
      href={book.purchaseUrl}
      className={compact ? undefined : 'btn btn-primary book-card__action'}
      target="_blank"
      rel="noreferrer"
    >
      Ver na loja da Trama
    </a>
  );
}
