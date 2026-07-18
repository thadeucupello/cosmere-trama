import type { NavItem } from '../types';

/**
 * Builds the `to` value for a NavItem.
 * - route === '.' means "stay on the current route" (used by Newsletter,
 *   which is rendered on every page from the shared layout).
 * - hash appends an in-page anchor that ScrollManager will scroll to
 *   after navigation, whether or not the route itself changed.
 */
export function navItemTo(item: NavItem, currentPathname: string): string {
  const base = item.route === '.' ? currentPathname : item.route;
  return item.hash ? `${base}#${item.hash}` : base;
}
