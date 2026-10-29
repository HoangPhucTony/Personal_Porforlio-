import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useReducedMotion } from "../hooks";
import Figure from "./Figure";

/** Clickable card → /projects/:slug, with a soft 3D tilt toward the cursor. */
export default function ProjectCard({ project: p, index, wide = !!p.featured }: { project: Project; index: number; wide?: boolean }) {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const cfg = { stiffness: 180, damping: 20 };
  const rx = useSpring(0, cfg);
  const ry = useSpring(0, cfg);

  const labels = ui.factLabels[p.role];
  // the card shows the first and last fact; the case study page shows all four
  const shown = [0, 3];

  return (
    <motion.div
      ref={ref}
      className={wide ? "md:col-span-2" : ""}
      style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 5);
        rx.set(((e.clientY - r.top) / r.height - 0.5) * -5);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <Link
        to={`/projects/${p.slug}`}
        className="tile group flex h-full flex-col overflow-hidden hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_hsl(var(--accent)/0.35)]"
      >
        <div className={`grid h-full ${wide ? "md:grid-cols-[1fr_1.1fr]" : ""}`}>
          <div className="grid-bg relative flex h-44 items-center justify-center overflow-hidden border-b border-line bg-muted/40 p-6 md:h-auto md:min-h-[12.5rem]">
            <span className="absolute left-4 top-3 z-10 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-fg">Fig. 2.{index + 1}</span>
            {p.cover ? (
              <img
                src={p.cover}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
              />
            ) : (
              <div className="h-24 w-full max-w-[16.25rem] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105">
                <Figure role={p.role} seed={index + 1} />
              </div>
            )}
          </div>

          <div className="flex flex-col p-6">
            {p.featured && <span className="label mb-2 !text-accent">{t(ui.featured)}</span>}
            <h3 className="font-display text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-accent">{t(p.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t(p.summary)}</p>

            <dl className="mt-5 space-y-3 border-t border-line pt-4">
              {shown.map((i) => (
                <div key={i} className="grid grid-cols-[96px_1fr] gap-3 text-sm">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-accent">{t(labels[i])}</dt>
                  <dd className="leading-snug">{t(p.facts[i])}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>

            <span className="link-arrow mt-auto self-start pt-6">
              {t(ui.viewCase)} <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
