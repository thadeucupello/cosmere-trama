import { useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import { useActiveSection } from './useActiveSection';

const HOME_SCROLL_IDS = ['hero', 'autor', 'cosmere', 'caminho'];

export function useActiveNavId() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollActive = useActiveSection(isHome ? HOME_SCROLL_IDS : []);

  if (isHome) {
    return scrollActive;
  }

  const matched = navItems.find((item) => item.route === location.pathname);
  return matched?.id ?? '';
}
