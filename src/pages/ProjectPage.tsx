import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Info, X } from "lucide-react";
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
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="label !text-accent">
          {t(ui.caseStudy)} · {t(ui.roleLabel[p.role])}
        </motion.p>
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

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3"
        >
          <div>
            <dt className="label">{t(ui.myRole)}</dt>
            <dd className="mt-1.5 text-sm">{t(p.myRole)}</dd>
          </div>
          <div>
            <dt className="label">{t(ui.timeline)}</dt>
            <dd className="mt-1.5 text-sm">{t(p.period)}</dd>
          </div>
          <div>
            <dt className="label">{t(ui.tools)}</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </motion.dl>

        {(p.source || p.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {p.demo && (
              <Magnetic>
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-accent">
                  {t(ui.demo[p.role])} <ArrowUpRight size={14} />
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

        {p.note && (
          <p className="mt-10 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-fg/90">
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

        {/* facts */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.facts.map((f, i) => (
            <Reveal key={i} delay={i * 0.06} className="tile p-5 hover:-translate-y-1">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent">{t(labels[i])}</p>
              <p className="mt-2 text-sm leading-relaxed">{t(f)}</p>
            </Reveal>
          ))}
        </div>

        {/* metrics */}
        {p.metrics && p.metrics.length > 0 && (
          <Reveal className="mt-16 grid gap-8 border-y border-line py-10 sm:grid-cols-3">
            {p.metrics.map((m) => (
              <div key={m.value}>
                <p className="heading text-5xl text-accent">{m.value}</p>
                <p className="mt-2 text-sm text-muted-fg">{t(m.label)}</p>
              </div>
            ))}
          </Reveal>
        )}

        {/* context + process */}
        <div className="mt-16 grid gap-12 md:grid-cols-[200px_1fr]">
          <p className="label pt-1">01 — {t(ui.context)}</p>
          <Reveal>
            <p className="text-lg leading-relaxed">{t(p.context)}</p>
          </Reveal>

          <p className="label pt-1">02 — {t(ui.process)}</p>
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
              <p className="label pt-1">03 — {t(ui.gallery)}</p>
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

          <p className="label pt-1">
            0{p.gallery.length > 0 ? 4 : 3} — {t(ui.outcome)}
          </p>
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
