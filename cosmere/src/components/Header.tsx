import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/content';
import { useActiveNavId } from '../hooks/useActiveNavId';
import { useScrollProgress } from '../hooks/useScrollProgress';
import CompassNav from './CompassNav';
import TramaLogo from './TramaLogo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveNavId();
  const progress = useScrollProgress();

  const activeIndex = Math.max(
    0,
    navItems.findIndex((n) => n.id === activeId)
  );
  const needleAngle = (activeIndex / (navItems.length - 1)) * 320 - 160;

  return (
    <header className="site-header">
      <div className="site-header__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container site-header__row">
        <Link to="/" className="site-header__logo" aria-label="Descubra a Cosmere — início">
          <TramaLogo size="small" />
        </Link>

        <button
          type="button"
          className="compass-trigger"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="Abrir navegação da jornada"
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
            <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: '20px 20px', transition: 'transform 500ms cubic-bezier(0.22,1,0.36,1)' }}>
              <path d="M20 8 L23 20 L20 32 L17 20 Z" fill="currentColor" opacity="0.9" />
            </g>
            <circle cx="20" cy="20" r="2.4" fill="currentColor" />
          </svg>
          <span className="visually-hidden">Menu / navegação</span>
        </button>
      </div>

      <CompassNav open={open} onClose={() => setOpen(false)} activeId={activeId} />
    </header>
  );
}
