import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useMouseParallax } from '../hooks/useMouseParallax';

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinklePeriod: number; // seconds for one full twinkle cycle
  twinklePhase: number;
  tier: 'micro' | 'medium' | 'main';
}

interface GoldParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

/**
 * Ambient background: three tiers of stars (micro / medium / a handful of
 * elegant "main" stars with a soft gold glimmer), a few gold dust particles
 * drifting very slowly across the screen, and a barely-there parallax
 * response to the pointer. Everything is slow and understated by design —
 * the background should never compete with the content in front of it.
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const parallax = useMouseParallax();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let particles: GoldParticle[] = [];
    let animationId = 0;
    let visible = true;
    let startTime = performance.now();

    const isMobile = window.innerWidth < 640;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const microCount = isMobile ? 70 : 150;
      const mediumCount = isMobile ? 10 : 22;
      const mainCount = isMobile ? 4 : 6;

      const makeStars = (count: number, tier: Star['tier'], rRange: [number, number], alphaRange: [number, number]): Star[] =>
        Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          r: rRange[0] + Math.random() * (rRange[1] - rRange[0]),
          baseAlpha: alphaRange[0] + Math.random() * (alphaRange[1] - alphaRange[0]),
          twinklePeriod: 8 + Math.random() * 7, // 8–15s
          twinklePhase: Math.random() * Math.PI * 2,
          tier,
        }));

      stars = [
        ...makeStars(microCount, 'micro', [0.4, 0.9], [0.08, 0.22]),
        ...makeStars(mediumCount, 'medium', [0.9, 1.4], [0.25, 0.45]),
        ...makeStars(mainCount, 'main', [1.6, 2.2], [0.55, 0.85]),
      ];

      particles = Array.from({ length: isMobile ? 2 : 4 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.012,
        vy: 0.006 + Math.random() * 0.01,
        r: 1 + Math.random() * 1.2,
        alpha: 0.15 + Math.random() * 0.15,
      }));
    };

    const draw = (now: number) => {
      const t = (now - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        let alpha = star.baseAlpha;
        if (!reducedMotion) {
          const cycle = Math.sin((t / star.twinklePeriod) * Math.PI * 2 + star.twinklePhase);
          alpha = star.baseAlpha + cycle * star.baseAlpha * 0.35;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        if (star.tier === 'main') {
          const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 5);
          glow.addColorStop(0, `rgba(201, 164, 98, ${Math.max(0, alpha)})`);
          glow.addColorStop(1, 'rgba(201, 164, 98, 0)');
          ctx.fillStyle = glow;
          ctx.arc(star.x, star.y, star.r * 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(250, 240, 220, ${Math.min(1, alpha + 0.15)})`;
        } else {
          ctx.fillStyle = `rgba(245, 243, 238, ${Math.max(0, alpha)})`;
        }
        ctx.fill();
      }

      if (!reducedMotion) {
        for (const p of particles) {
          p.x += p.vx;
          p.y -= p.vy;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 164, 98, ${p.alpha})`;
          ctx.fill();
        }
      }

      if (visible) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible) {
        startTime = performance.now() - startTime;
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reducedMotion]);

  const px = parallax.x * 2;
  const py = parallax.y * 2;

  return (
    <canvas
      ref={canvasRef}
      className="star-field"
      aria-hidden="true"
      style={{ transform: `translate3d(${px}px, ${py}px, 0)` }}
    />
  );
}
