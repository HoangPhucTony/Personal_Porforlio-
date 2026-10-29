import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Database, FileCheck2, MessageCircleQuestion, ScanSearch, Wand2 } from "lucide-react";
import { profile, projectBySlug } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useReducedMotion } from "../hooks";
import { Reveal, SectionHeader } from "../components/ui";

const ICONS = {
  ask: MessageCircleQuestion,
  collect: Database,
  clean: Wand2,
  analyze: ScanSearch,
  visualize: BarChart3,
  specify: FileCheck2,
} as const;

const STEP_MS = 3600;

export default function Toolkit() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const steps = profile.pipeline;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  // walk through the stages until the visitor takes over
  useEffect(() => {
    if (!auto || reduced) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % steps.length), STEP_MS);
    return () => clearTimeout(id);
  }, [active, auto, reduced, steps.length]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const s = steps[active];

  return (
    <section id="toolkit" className="scroll-mt-24">
      <SectionHeader n="02" title={t(ui.toolkitTitle)} aside={<span className="label">{t(ui.toolkitFig)}</span>} />

      <Reveal className="tile overflow-hidden p-5 sm:p-8">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="mb-8 flex flex-wrap items-center gap-5">
          {(["da", "ba"] as const).map((r) => (
            <span key={r} data-role={r} className="inline-flex items-center gap-2 text-xs text-muted-fg">
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
              {t(ui.roleLabel[r])}
            </span>
          ))}
        </div>

        {/* track */}
        <div className="relative">
          <div aria-hidden className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-line md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-da to-ba"
              animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="travel absolute -top-[0.1875rem] h-[0.4375rem] w-[0.4375rem] rounded-full bg-fg shadow-[0_0_12px_hsl(var(--fg))]" />
          </div>

          <ol className="relative grid grid-cols-3 gap-y-6 md:grid-cols-6" role="tablist" aria-label={t(ui.toolkitTitle)}>
            {steps.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS];
              const on = i === active;
              const done = i < active;
              return (
                <li key={step.name.en} data-role={step.role} className="flex justify-center">
                  <button
                    role="tab"
                    aria-selected={on}
                    aria-controls="toolkit-panel"
                    onClick={() => pick(i)}
                    onMouseEnter={() => pick(i)}
                    onFocus={() => pick(i)}
                    className="group flex cursor-pointer flex-col items-center gap-3 text-center"
                  >
                    <span
                      className={`relative grid h-14 w-14 place-items-center rounded-full border bg-card transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                        on
                          ? "scale-110 border-accent text-accent shadow-[0_0_0_6px_hsl(var(--accent)/0.12),0_0_28px_hsl(var(--accent)/0.45)]"
                          : done
                            ? "border-accent/50 text-accent/80"
                            : "border-line text-muted-fg group-hover:border-accent/60 group-hover:text-fg"
                      }`}
                    >
                      <Icon size={20} />
                      {on && !reduced && (
                        <motion.span
                          layoutId="toolkit-ring"
                          className="absolute -inset-[0.4375rem] rounded-full border border-accent/40"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </span>
                    <span>
                      <span className="block font-mono text-[0.625rem] text-muted-fg">0{i + 1}</span>
                      <span className={`block text-xs font-medium transition-colors sm:text-sm ${on ? "text-fg" : "text-muted-fg"}`}>{t(step.name)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* detail panel */}
        <div id="toolkit-panel" role="tabpanel" data-role={s.role} className="mt-8 min-h-[11.875rem] rounded-xl border border-line bg-bg/40 p-5 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent">
                  {t(ui.stage)} 0{active + 1} · {t(ui.roleLabel[s.role])}
                </p>
                <h3 className="heading mt-2 text-3xl">{t(s.name)}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-fg">{t(s.desc)}</p>
              </div>
              <div className="space-y-5">
                <ul className="flex flex-wrap gap-2">
                  {s.tools.map((tool, i) => (
                    <motion.li
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="chip !text-xs !text-fg"
                    >
                      {tool}
                    </motion.li>
                  ))}
                </ul>
                {s.usedIn.some((slug) => projectBySlug(slug)) && (
                <div>
                  <p className="label mb-2">{t(ui.usedIn)} →</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {s.usedIn.map((slug) => {
                      const p = projectBySlug(slug);
                      return p ? (
                        <Link key={slug} to={`/projects/${slug}`} data-role={p.role} className="link-arrow !normal-case !tracking-normal !text-sm">
                          {t(p.title)} <ArrowUpRight size={14} />
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted-fg">{t(ui.toolkitNote)}</p>
      </Reveal>
    </section>
  );
}
