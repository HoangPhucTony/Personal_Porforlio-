import { useEffect, useMemo, useRef, useState } from "react";
import { DATASAURUS } from "../data/datasaurus";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useReducedMotion } from "../hooks";

const HOLD = 2200;
const MORPH = 1300;
const X0 = 10, X1 = 100, Y0 = -5, Y1 = 105;

function stats(pts: number[]) {
  const n = pts.length / 2;
  let sx = 0, sy = 0;
  for (let i = 0; i < n; i++) (sx += pts[2 * i]), (sy += pts[2 * i + 1]);
  const mx = sx / n, my = sy / n;
  let vx = 0, vy = 0, cxy = 0;
  for (let i = 0; i < n; i++) {
    const dx = pts[2 * i] - mx, dy = pts[2 * i + 1] - my;
    vx += dx * dx;
    vy += dy * dy;
    cxy += dx * dy;
  }
  return { mx, my, sx: Math.sqrt(vx / (n - 1)), sy: Math.sqrt(vy / (n - 1)), r: cxy / Math.sqrt(vx * vy) };
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * The Datasaurus Dozen: every shape has the same mean, SD and correlation.
 * Points morph from one shape to the next while the mean crosshair never moves.
 */
export default function Datasaurus() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const canvas = useRef<HTMLCanvasElement>(null);
  const [target, setTarget] = useState(0);
  const st = useMemo(() => stats(DATASAURUS[0].pts), []);

  // animation state kept outside React to avoid re-rendering every frame
  const anim = useRef({ pos: Float32Array.from(DATASAURUS[0].pts), from: Float32Array.from(DATASAURUS[0].pts), to: 0, start: 0 });

  // start a morph whenever the target changes
  useEffect(() => {
    const a = anim.current;
    a.from = Float32Array.from(a.pos);
    a.to = target;
    a.start = performance.now();
    if (reduced) a.pos = Float32Array.from(DATASAURUS[target].pts);
  }, [target, reduced]);

  // auto-advance through the shapes
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setTarget((i) => (i + 1) % DATASAURUS.length), HOLD + MORPH);
    return () => clearTimeout(id);
  }, [target, reduced]);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const css = getComputedStyle(document.documentElement);
    const da = css.getPropertyValue("--da").trim();
    const ba = css.getPropertyValue("--ba").trim();
    const fg = css.getPropertyValue("--fg").trim();
    let w = 0, h = 0, raf = 0;

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

    const pad = { l: 26, r: 14, t: 8, b: 20 };
    const sx = (x: number) => pad.l + ((x - X0) / (X1 - X0)) * (w - pad.l - pad.r);
    const sy = (y: number) => h - pad.b - ((y - Y0) / (Y1 - Y0)) * (h - pad.t - pad.b);

    const draw = (now: number) => {
      const a = anim.current;
      const dest = DATASAURUS[a.to].pts;
      const k = reduced ? 1 : ease(Math.min(1, (now - a.start) / MORPH));
      for (let i = 0; i < a.pos.length; i++) a.pos[i] = a.from[i] + (dest[i] - a.from[i]) * k;

      ctx.clearRect(0, 0, w, h);

      // grid + ticks
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.fillStyle = `hsl(${fg} / 0.4)`;
      ctx.strokeStyle = `hsl(${fg} / 0.07)`;
      ctx.lineWidth = 1;
      for (let v = 20; v <= 100; v += 20) {
        const x = sx(v);
        ctx.beginPath();
        ctx.moveTo(x, pad.t);
        ctx.lineTo(x, h - pad.b);
        ctx.stroke();
        ctx.textAlign = "center";
        ctx.fillText(String(v), x, h - 6);
        ctx.textAlign = "left";
      }
      for (let v = 0; v <= 100; v += 25) {
        const y = sy(v);
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(w - pad.r, y);
        ctx.stroke();
        ctx.fillText(String(v), 2, y + 3);
      }

      // the mean never moves
      ctx.strokeStyle = `hsl(${ba} / 0.7)`;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sx(st.mx), pad.t);
      ctx.lineTo(sx(st.mx), h - pad.b);
      ctx.moveTo(pad.l, sy(st.my));
      ctx.lineTo(w - pad.r, sy(st.my));
      ctx.stroke();
      ctx.setLineDash([]);

      // points
      ctx.shadowColor = `hsl(${da} / 0.9)`;
      ctx.shadowBlur = 6;
      ctx.fillStyle = `hsl(${da} / 0.95)`;
      const r = w < 420 ? 1.8 : 2.4;
      for (let i = 0; i < a.pos.length; i += 2) {
        ctx.beginPath();
        ctx.arc(sx(a.pos[i]), sy(a.pos[i + 1]), r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [st, reduced]);

  const rows = [
    ["x̄", st.mx.toFixed(1)],
    ["ȳ", st.my.toFixed(1)],
    ["σx", st.sx.toFixed(1)],
    ["σy", st.sy.toFixed(1)],
    ["r", st.r.toFixed(2)],
  ];

  return (
    <figure className="tile overflow-hidden p-4 sm:p-5">
      <figcaption className="mb-3 flex items-center justify-between gap-3">
        <span className="label">Fig. 0 · {t(ui.intro.shapes[DATASAURUS[target].name])}</span>
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ba">{t(ui.intro.sameStats)}</span>
      </figcaption>

      <canvas ref={canvas} role="img" aria-label="Datasaurus Dozen scatter plot" className="h-[8.75rem] w-full sm:h-[11.875rem] lg:h-[16.25rem]" />

      <dl className="mt-3 hidden grid-cols-5 gap-1 border-t border-line pt-3 sm:grid">
        {rows.map(([k, v]) => (
          <div key={k} className="text-center">
            <dt className="font-mono text-[0.625rem] text-muted-fg">{k}</dt>
            <dd className="font-mono text-sm tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label={t(ui.intro.pickShape)}>
        {DATASAURUS.map((d, i) => (
          <button
            key={d.name}
            onClick={() => setTarget(i)}
            aria-pressed={i === target}
            className={`cursor-pointer rounded-full border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wider transition-all duration-300 ${
              i === target ? "border-da bg-da/15 text-fg" : "border-line text-muted-fg hover:border-fg/40 hover:text-fg"
            }`}
          >
            {t(ui.intro.shapes[d.name])}
          </button>
        ))}
      </div>
      <p className="mt-3 hidden font-mono text-[0.5625rem] sm:block uppercase tracking-[0.15em] text-muted-fg/70">{t(ui.intro.credit)}</p>
    </figure>
  );
}
