import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks";

type Mote = { x: number; y: number; r: number; vy: number; sway: number; phase: number; hue: string; tw: number };

/** Soft glowing particles drifting upward — the ambient "floating" layer. */
export default function Motes({ count = 60, className = "" }: { count?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;

    const css = getComputedStyle(document.documentElement);
    const hues = [css.getPropertyValue("--da").trim(), css.getPropertyValue("--ba").trim(), css.getPropertyValue("--fg").trim()];

    const resize = () => {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    const motes: Mote[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vy: Math.random() * 0.25 + 0.06,
      sway: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      hue: hues[Math.random() < 0.55 ? 0 : Math.random() < 0.6 ? 1 : 2],
      tw: Math.random() * 0.02 + 0.005,
    }));

    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        if (!reduced) {
          m.y -= m.vy;
          m.x += Math.sin(t * 0.01 + m.phase) * m.sway * 0.3;
          if (m.y < -10) {
            m.y = h + 10;
            m.x = Math.random() * w;
          }
        }
        const a = 0.35 + 0.45 * Math.abs(Math.sin(t * m.tw + m.phase));
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4);
        g.addColorStop(0, `hsl(${m.hue} / ${a})`);
        g.addColorStop(1, `hsl(${m.hue} / 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count, reduced]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none h-full w-full ${className}`} />;
}
