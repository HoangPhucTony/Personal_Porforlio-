import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { profile, projectBySlug, type Experience, type Project } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useScrollLock } from "../hooks";
import { Reveal, SectionHeader } from "../components/ui";

export default function ExperienceSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeader n="02" title={t(ui.experienceTitle)} aside={<span className="label">{t(ui.experienceFig)}</span>} />
      {/* timeline: a vertical rail with one dot per entry, period on the left */}
      <ol className="relative">
        <span aria-hidden className="absolute bottom-6 left-[0.4375rem] top-6 w-px bg-gradient-to-b from-accent/70 via-line to-transparent sm:left-[9.4375rem]" />
        {profile.experience.map((e, i) => {
          const current = !!e.current;
          return (
            <li key={`${e.title.en}-${e.org?.en ?? i}`} className="relative grid gap-3 pb-6 pl-8 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-10 sm:pl-0">
              <Reveal delay={i * 0.06} className="sm:pt-7 sm:text-right">
                {t(e.period) && (
                  <span className={`font-mono text-xs uppercase tracking-[0.2em] ${current ? "text-accent" : "text-muted-fg"}`}>{t(e.period)}</span>
                )}
                {current && (
                  <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-accent sm:ml-auto sm:mt-2 sm:flex sm:w-fit">
                    {t(ui.now)}
                  </span>
                )}
              </Reveal>

              <span aria-hidden className="absolute left-0 top-1 flex h-[0.9375rem] w-[0.9375rem] sm:left-[9rem] sm:top-8">
                {current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />}
                <span className={`relative inline-flex h-full w-full rounded-full border-2 ${current ? "border-accent bg-accent/30" : "border-line bg-bg"}`} />
              </span>

              <Reveal delay={i * 0.06 + 0.04}>
                <article
                  className={`tile group grid overflow-hidden hover:-translate-y-0.5 ${e.photo ? "md:grid-cols-[1fr_15rem]" : ""} ${
                    current ? "border-accent/40 shadow-[0_20px_50px_-30px_hsl(var(--accent)/0.5)]" : ""
                  }`}
                >
                  {e.photo && (
                    <div className="relative h-32 overflow-hidden md:order-last md:h-auto">
                      <img
                        src={e.photo}
                        alt=""
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity,filter] duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 ${
                          e.photoSoft ? "object-top opacity-25 blur-[0.1875rem] group-hover:opacity-40 group-hover:blur-[0.0625rem]" : "opacity-70 group-hover:opacity-90"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:bg-gradient-to-r" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      {e.logo && (
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fbf8f1] p-1.5 shadow-lg transition-transform duration-500 group-hover:scale-105">
                          <img src={e.logo} alt="" className="max-h-full max-w-full object-contain" />
                        </span>
                      )}
                      <div>
                        <h3 className="font-display text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-accent">{t(e.title)}</h3>
                        {e.org && <p className="mt-0.5 text-sm text-fg/80">{t(e.org)}</p>}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-fg">{t(e.desc)}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {e.highlights && (
                      <button type="button" onClick={() => setOpen(i)} className="link-arrow mt-4 inline-flex cursor-pointer">
                        {t(ui.viewDetails)} <ArrowUpRight size={14} />
                      </button>
                    )}
                    {e.link && (
                      <a href={e.link.href} target="_blank" rel="noreferrer" className="link-arrow mt-4 inline-flex">
                        {t(e.link.label)} <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <AnimatePresence>{open !== null && <Details e={profile.experience[open]} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

/** Pop-up with the full list of what was done in one role, plus links to its case studies. */
function Details({ e, onClose }: { e: Experience; onClose: () => void }) {
  const { t } = useLang();
  useScrollLock(true);
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const cases = (e.caseStudies ?? []).map(projectBySlug).filter((p): p is Project => !!p);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-bg/80 p-4 backdrop-blur-md sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t(e.title)}
    >
      <motion.div
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(ev) => ev.stopPropagation()}
        data-lenis-prevent
        className="tile relative max-h-[85vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
      >
        <button
          autoFocus
          onClick={onClose}
          aria-label={t(ui.close)}
          className="absolute right-4 top-4 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line bg-card transition-colors hover:border-fg"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-3 pr-12">
          {e.logo && (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fbf8f1] p-1.5 shadow-lg">
              <img src={e.logo} alt="" className="max-h-full max-w-full object-contain" />
            </span>
          )}
          <div>
            <h3 className="font-display text-2xl font-semibold leading-snug">{t(e.title)}</h3>
            {e.org && <p className="mt-0.5 text-sm text-fg/80">{t(e.org)}</p>}
            {t(e.period) && <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">{t(e.period)}</p>}
          </div>
        </div>

        <p className="label mt-8">{t(ui.whatIDid)}</p>
        <ul className="mt-3 space-y-3">
          {e.highlights?.map((h) => (
            <li key={h.en} className="relative pl-4 text-sm leading-relaxed text-fg/85">
              <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
              {t(h)}
            </li>
          ))}
        </ul>

        {cases.length > 0 && (
          <>
            <p className="label mt-8">{t(ui.relatedCases)}</p>
            <ul className="mt-3 space-y-2">
              {cases.map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} data-role={p.role} className="group flex items-center justify-between gap-4 rounded-xl border border-line px-4 py-3 transition-colors hover:border-accent/60">
                    <span>
                      <span className="block font-mono text-[0.625rem] uppercase tracking-wider text-accent">{t(ui.roleLabel[p.role])}</span>
                      <span className="text-sm">{t(p.title)}</span>
                    </span>
                    <ArrowUpRight size={16} className="shrink-0 text-muted-fg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <ul className="mt-8 flex flex-wrap gap-1.5">
          {e.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
