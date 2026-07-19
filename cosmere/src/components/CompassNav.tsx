import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import { navItemTo } from '../utils/navItemTo';

interface Props { open: boolean; onClose: () => void; activeId: string; }

const navGroups = [
  { title: 'Comece aqui', symbol: '✦', ids: ['hero', 'cosmere', 'caminho', 'jornada'] },
  { title: 'Explore os mundos', symbol: '◇', ids: ['scadrial', 'roshar', 'nalthis', 'projetos-secretos'] },
  { title: 'Continue descobrindo', symbol: '◈', ids: ['autor', 'arquivos', 'biblioteca'] },
];

export default function CompassNav({ open, onClose, activeId }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const newsletter = navItems.find((item) => item.id === 'newsletter');

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="compass-overlay" role="dialog" aria-modal="true" aria-label="Mapa de navegação da Cosmere" ref={panelRef}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
          <motion.div className="compass-panel compass-panel--editorial"
            initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
            <div className="compass-panel__header">
              <div><span className="eyebrow">Mapa de navegação</span><h2>Para onde você quer ir?</h2></div>
              <button type="button" ref={closeButtonRef} className="compass-panel__close" onClick={onClose} aria-label="Fechar navegação">✕</button>
            </div>

            <div className="compass-panel__groups">
              {navGroups.map((group) => (
                <nav className={`compass-group ${group.ids.includes(activeId) ? 'is-active' : ''}`} aria-label={group.title} key={group.title}>
                  <p className="compass-group__title"><span aria-hidden="true">{group.symbol}</span>{group.title}</p>
                  <ul>
                    {group.ids.map((id) => {
                      const item = navItems.find((navItem) => navItem.id === id);
                      if (!item) return null;
                      return <li key={item.id}><Link to={navItemTo(item, location.pathname)}
                        className={item.id === activeId ? 'is-active' : ''} onClick={onClose}
                        aria-current={item.id === activeId ? 'page' : undefined}>
                        <span>{item.label}</span><span aria-hidden="true">→</span>
                      </Link></li>;
                    })}
                  </ul>
                </nav>
              ))}
            </div>

            {newsletter && <Link className="compass-panel__newsletter" to={navItemTo(newsletter, location.pathname)} onClick={onClose}>
              <span><small>Novidades da Trama</small><strong>Receba notícias de novos mundos</strong></span>
              <span aria-hidden="true">→</span>
            </Link>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
