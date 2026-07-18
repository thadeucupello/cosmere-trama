.site-header {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 100;
}

.site-header__progress {
  height: 2px;
  background: var(--color-gold);
  transform-origin: left;
  width: 100%;
}

.site-header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  background: linear-gradient(to bottom, rgba(5, 7, 13, 0.85), transparent);
  backdrop-filter: blur(6px);
}

.site-header__logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.compass-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(201, 164, 98, 0.35);
  background: rgba(16, 20, 31, 0.45);
  backdrop-filter: blur(14px) saturate(120%);
  -webkit-backdrop-filter: blur(14px) saturate(120%);
  color: var(--color-gold);
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 2px 10px rgba(0, 0, 0, 0.25);
  transition: border-color 420ms var(--ease-standard), transform 420ms var(--ease-standard), box-shadow 420ms var(--ease-standard), background 420ms var(--ease-standard);
}

.compass-trigger:hover,
.compass-trigger:focus-visible {
  border-color: rgba(201, 164, 98, 0.75);
  background: rgba(20, 24, 36, 0.55);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(201, 164, 98, 0.18);
}

.compass-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(5, 7, 13, 0.72);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.compass-panel {
  width: 100%;
  max-width: 420px;
  max-height: 85vh;
  overflow-y: auto;
  background: var(--color-elevated);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-soft);
}

.compass-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.compass-panel__close {
  background: transparent;
  border: 1px solid var(--color-line);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  color: var(--color-text-secondary);
}

.compass-panel__close:hover {
  color: var(--color-text-primary);
  border-color: var(--color-gold);
}

.compass-panel__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-line);
}

.compass-panel__list li {
  position: relative;
}

.compass-panel__list a {
  display: block;
  padding: 0.7rem 0 0.7rem 1.4rem;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: var(--step-sm);
  transition: color var(--dur-fast) var(--ease-standard);
  min-height: 44px;
  display: flex;
  align-items: center;
}

.compass-panel__list a::before {
  content: '';
  position: absolute;
  left: -3.5px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-line);
}

.compass-panel__list a:hover {
  color: var(--color-text-primary);
}

.compass-panel__list a.is-active {
  color: var(--color-gold);
  font-weight: 600;
}

.compass-panel__list a.is-active::before {
  background: var(--color-gold);
  width: 8px;
  height: 8px;
}

.compass-panel__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);
}

.trama-logo {
  display: inline-block;
  height: 26px;
  width: auto;
}

.trama-logo--large {
  height: 34px;
}

@media (max-width: 480px) {
  .trama-logo {
    height: 22px;
  }

  .trama-logo--large {
    height: 28px;
  }
}
