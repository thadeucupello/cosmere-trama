import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Tracks pointer position as a normalized offset from the viewport center
 * (-1 to 1 on each axis). Used to drive very subtle parallax drift on
 * background layers — never more than a few pixels of movement.
 * Disabled entirely when the user prefers reduced motion, or on touch-only
 * devices where there's no meaningful pointer to track.
 */
export function useMouseParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const frame = useRef<number>();

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setOffset({ x, y });
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [reducedMotion]);

  return offset;
}
