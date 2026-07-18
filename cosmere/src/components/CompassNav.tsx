import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import { navItemTo } from '../utils/navItemTo';

interface Props {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

export default function CompassNav({ open, onClose, activeId }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="compass-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navegação da jornada"
          ref={panelRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="compass-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="compass-panel__header">
              <span className="eyebrow">A jornada</span>
              <button
                type="button"
                ref={closeButtonRef}
                className="compass-panel__close"
                onClick={onClose}
                aria-label="Fechar navegação"
              >
                ✕
              </button>
            </div>

            <ol className="compass-panel__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={navItemTo(item, location.pathname)}
                    className={item.id === activeId ? 'is-active' : ''}
                    onClick={onClose}
                    aria-current={item.id === activeId ? 'true' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>

            <div className="compass-panel__footer">
              <Link to="/biblioteca" onClick={onClose} className="btn btn-ghost">
                Ir para a biblioteca
              </Link>
              <Link to="/jornada" onClick={onClose} className="btn btn-ghost">
                Ir para o guia de leitura
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
