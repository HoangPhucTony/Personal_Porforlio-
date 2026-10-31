import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Github, GraduationCap, Info, TrendingUp, X } from "lucide-react";
import { profile, projectBySlug, projectsByRole } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useScrollLock } from "../hooks";
import Backdrop from "../components/Backdrop";
import Figure from "../components/Figure";
import { LangToggle, Magnetic, Reveal } from "../components/ui";

function Lightbox({ src, caption, onClose }: { src: string; caption: string; onClose: () => void }) {
  const { t } = useLang();
  useScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-bg/90 p-4 backdrop-blur-md sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      <button
        autoFocus
        onClick={onClose}
        aria-label={t(ui.close)}
        className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-card transition-colors hover:border-fg"
      >
        <X size={18} />
      </button>
      <motion.figure
        initial={{ scale: 0.94, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-h-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={caption} className="max-h-[80vh] w-auto rounded-xl border border-line" />
        <figcaption className="mt-3 text-center text-sm text-muted-fg">{caption}</figcaption>
      </motion.figure>
    </motion.div>
  );
}

export default function ProjectPage() {
  const { slug = "" } = useParams();
  const { t } = useLang();
  const p = projectBySlug(slug);
  const [open, setOpen] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  if (!p) {
    return (
      <div className="grid min-h-screen place-items-center p-6 text-center">
        <div>
          <p className="heading text-3xl">{t(ui.notFound)}</p>
          <Link to="/#projects" className="link-arrow mt-6">
            <ArrowLeft size={14} /> {t(ui.allProjects)}
          </Link>
        </div>
      </div>
    );
  }

  const siblings = projectsByRole(p.role);
  const next = siblings[(siblings.indexOf(p) + 1) % siblings.length];
  const back = `/?role=${p.role}#projects`;
  const labels = ui.factLabels[p.role];

  return (
    <motion.div data-role={p.role} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative min-h-screen">
      <Backdrop />
      <motion.div aria-hidden className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent" style={{ scaleX: progress }} />

      <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
          <Link to={back} className="link-arrow !text-muted-fg hover:!text-fg">
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> {t(ui.allProjects)}
          </Link>
          <LangToggle id="project" />
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-8 sm:pt-16">
        {/* hero */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap items-center gap-3">
          <span className="label !text-accent">
            {t(ui.caseStudy)} · {t(ui.roleLabel[p.role])}
          </span>
          {p.university && (
            <span className="label inline-flex items-center gap-1.5 rounded-full border border-fg/20 px-2.5 py-1 !text-fg/80">
              <GraduationCap size={12} /> {t(ui.universityProject)}
            </span>
          )}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="heading mt-4 max-w-4xl text-4xl sm:text-6xl"
        >
          {t(p.title)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-fg"
        >
          {t(p.summary)}
        </motion.p>

        {/* at a glance: role and what I did on the left, timeline / team / tools on the right */}
        <motion.section
          aria-label={t(ui.overview)}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="tile mt-10 grid overflow-hidden lg:grid-cols-[1.35fr_1fr]"
        >
          <div className="p-6 sm:p-8">
            <p className="label">{t(ui.myRole)}</p>
            <p className="mt-2 font-display text-2xl font-semibold leading-snug">{t(p.myRole)}</p>
            {p.contributions && p.contributions.length > 0 && (
              <>
                <p className="label mt-7">{t(ui.whatIDid)}</p>
                <ul className="mt-3 space-y-2.5">
                  {p.contributions.map((c, i) => (
                    <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                      <Check size={16} aria-hidden className="mt-1 shrink-0 text-accent" />
                      <span>{t(c)}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <dl className="space-y-6 border-t border-line bg-fg/[0.02] p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div className={`grid gap-4 ${p.team ? "grid-cols-2" : ""}`}>
              <div>
                <dt className="label">{t(ui.timeline)}</dt>
                <dd className="mt-1.5 text-sm">{t(p.period)}</dd>
              </div>
              {p.team && (
                <div>
                  <dt className="label">{t(ui.team)}</dt>
                  <dd className="mt-1.5 text-sm">{t(p.team)}</dd>
                </div>
              )}
            </div>
            <div>
              <dt className="label">{t(ui.tools)}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-accent/50 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
            {p.methods && p.methods.length > 0 && (
              <div>
                <dt className="label">{t(ui.methods[p.role])}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {p.methods.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {(p.source || p.demo) && (
              <div className="flex flex-wrap gap-3 pt-1">
                {p.demo && (
                  <Magnetic>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-accent">
                      {t(p.demoLabel ?? ui.demo[p.role])} <ArrowUpRight size={14} />
                    </a>
                  </Magnetic>
                )}
                {p.source && (
                  <a href={p.source} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <Github size={14} /> {t(ui.source)}
                  </a>
                )}
              </div>
            )}
          </dl>
        </motion.section>

        {/* key results: the numbers, then the impact / outcome fact */}
        <Reveal className="mt-10">
          <h2 className="label">{t(ui.keyResults)}</h2>
          {p.metrics && p.metrics.length > 0 && (
            <div className={`mt-3 grid gap-4 ${p.metrics.length === 2 ? "sm:grid-cols-2" : p.metrics.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
              {p.metrics.map((m) => (
                <div key={m.value} className="tile p-5">
                  <p className="heading text-4xl text-accent sm:text-5xl">{m.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t(m.label)}</p>
                </div>
              ))}
            </div>
          )}
          <p className="mt-4 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/[0.06] px-5 py-4 text-[0.9375rem] leading-relaxed">
            <TrendingUp size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
            <span>
              <span className="label mr-2 !text-accent">{t(labels[3])}</span>
              {t(p.facts[3])}
            </span>
          </p>
        </Reveal>

        {p.note && (
          <p className="mt-12 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-fg/90">
            <Info size={16} className="mt-0.5 shrink-0 text-accent" />
            {t(p.note)}
          </p>
        )}

        {/* cover */}
        <Reveal className={`tile group overflow-hidden ${p.note ? "mt-4" : "mt-12"}`}>
          {p.cover ? (
            <img src={p.cover} alt={t(p.title)} className="aspect-[16/8] w-full object-cover" />
          ) : (
            <div className="grid-bg flex aspect-[16/7] items-center justify-center p-10">
              <div className="w-full max-w-md">
                <Figure role={p.role} seed={siblings.indexOf(p) + 1} />
              </div>
            </div>
          )}
        </Reveal>

        {/* the details: section labels stay in view while their section scrolls */}
        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-[200px_1fr]">
          <h2 className="label pt-1 md:sticky md:top-24 md:self-start">01 — {t(ui.context)}</h2>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {p.facts.slice(0, 3).map((f, i) => (
                <Reveal key={i} delay={i * 0.06} className="tile p-5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent">{t(labels[i])}</p>
                  <p className="mt-2 text-sm leading-relaxed">{t(f)}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-lg leading-relaxed">{t(p.context)}</p>
            </Reveal>
          </div>

          <h2 className="label pt-1 md:sticky md:top-24 md:self-start">02 — {t(ui.process)}</h2>
          <ol className="relative space-y-6 border-l border-line pl-8">
            {p.process.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="group relative">
                  <span className="absolute -left-[2.8125rem] top-0 grid h-7 w-7 place-items-center rounded-full border border-accent/60 bg-bg font-mono text-[0.625rem] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-fg">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{t(s.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-fg">{t(s.body)}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          {p.gallery.length > 0 && (
            <>
              <h2 className="label pt-1 md:sticky md:top-24 md:self-start">03 — {t(ui.gallery)}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {p.gallery.map((g, i) => (
                  <Reveal key={g.src} delay={i * 0.05} className={p.gallery.length === 1 ? "sm:col-span-2" : ""}>
                    <button onClick={() => setOpen(i)} className="tile group block w-full cursor-zoom-in overflow-hidden text-left">
                      <div className="overflow-hidden">
                        <img
                          src={g.src}
                          alt={t(g.caption)}
                          loading="lazy"
                          className="w-full transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                      <p className="border-t border-line px-4 py-3 text-xs text-muted-fg">{t(g.caption)}</p>
                    </button>
                  </Reveal>
                ))}
              </div>
            </>
          )}

          <h2 className="label pt-1 md:sticky md:top-24 md:self-start">
            0{p.gallery.length > 0 ? 4 : 3} — {t(ui.outcome)}
          </h2>
          <Reveal className="space-y-6">
            <p className="text-lg leading-relaxed">{t(p.outcome)}</p>
            {p.learnings && (
              <blockquote className="border-l-2 border-accent pl-5">
                <p className="label mb-2">{t(ui.learnings)}</p>
                <p className="font-display text-xl italic leading-relaxed">“{t(p.learnings)}”</p>
              </blockquote>
            )}
          </Reveal>
        </div>

        {/* next */}
        {next && next.slug !== p.slug && (
          <Reveal className="mt-24">
            <Link to={`/projects/${next.slug}`} className="tile group flex items-center justify-between gap-6 p-8 hover:border-accent/50">
              <div>
                <p className="label">{t(ui.nextProject)}</p>
                <p className="heading mt-2 text-3xl transition-colors duration-300 group-hover:text-accent sm:text-4xl">{t(next.title)}</p>
              </div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </Reveal>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link to={back} className="link-arrow">
            <ArrowLeft size={14} /> {t(ui.allProjects)}
          </Link>
          {profile.cv[p.role] && (
            <a href={profile.cv[p.role]} download className="btn btn-ghost">
              {t(ui.downloadCv, { role: p.role.toUpperCase() })}
            </a>
          )}
        </div>
      </main>

      <AnimatePresence>
        {open !== null && <Lightbox src={p.gallery[open].src} caption={t(p.gallery[open].caption)} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </motion.div>
  );
}
