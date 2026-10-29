import { ArrowUpRight, Award, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { Reveal } from "../components/ui";

/** Renders [[da:…]] / [[ba:…]] phrases in that role's colour. */
function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[\[(?:da|ba):[^\]]+\]\])/).map((part, i) => {
        const m = part.match(/^\[\[(da|ba):(.+)\]\]$/);
        if (!m) return part;
        return (
          <span
            key={i}
            className={`underline decoration-2 underline-offset-[0.375rem] ${m[1] === "da" ? "text-da decoration-da/40" : "text-ba decoration-ba/40"}`}
          >
            {m[2]}
          </span>
        );
      })}
    </>
  );
}

const zoom = "transition-[transform,opacity,filter] duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110";

/** Photo strip across the top of a card, with an optional caption tag. */
function PhotoTop({ src, caption, position = "50% 50%" }: { src?: string; caption?: string; position?: string }) {
  if (!src) return null;
  return (
    <div className="relative h-36 overflow-hidden">
      <img src={src} alt="" loading="lazy" style={{ objectPosition: position }} className={`h-full w-full object-cover opacity-80 ${zoom}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      {caption && (
        <span className="absolute right-3 top-3 rounded-md border border-fg/10 bg-bg/70 px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-fg/80 backdrop-blur">
          {caption}
        </span>
      )}
    </div>
  );
}

/** Full-bleed background photo, fading into the card. */
function BgPhoto({ src, soft }: { src?: string; soft?: boolean }) {
  if (!src) return null;
  return (
    <>
      <img
        src={src}
        alt=""
        loading="lazy"
        className={`absolute inset-0 -z-10 h-full w-full object-cover ${zoom} ${
          soft ? "object-top opacity-20 blur-[0.1875rem] group-hover:opacity-35 group-hover:blur-[0.0625rem]" : "opacity-60"
        }`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-card via-card/60 to-transparent" />
    </>
  );
}

/** Logo badges overlapping the bottom edge of the photo. */
function Logos({ logos }: { logos: (string | undefined)[] }) {
  const list = logos.filter(Boolean) as string[];
  if (!list.length) return null;
  return (
    <div className="relative z-10 -mt-7 flex px-6">
      {list.map((src, i) => (
        <span
          key={src}
          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-[#fbf8f1] p-2 shadow-xl ring-2 ring-card transition-transform duration-500 group-hover:-translate-y-1 ${
            i > 0 ? "-ml-3" : ""
          }`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <img src={src} alt="" className="max-h-full max-w-full object-contain" />
        </span>
      ))}
    </div>
  );
}

function Ping() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}

/** Long arrow that stretches on hover (link-arrow parent). */
function Line() {
  return (
    <span aria-hidden className="relative ml-2 inline-block h-px w-16 bg-current opacity-60 transition-all duration-500 group-hover/l:w-20 group-hover/l:opacity-100">
      <span className="absolute -top-[0.1875rem] right-0 h-[0.4375rem] w-[0.4375rem] rotate-45 border-r border-t border-current" />
    </span>
  );
}

export default function About() {
  const { t } = useLang();
  const { about } = profile;
  const [l1, l2, l3] = t(about.headline).split("\n");
  const edu = about.education;
  const jobs = profile.experience.filter((e) => e.current);
  const cert = profile.experience.find((e) => e.link);

  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-[1.7fr_1fr_1fr]">
        <Reveal className="tile flex flex-col overflow-hidden p-8 sm:p-10 md:col-span-2 lg:col-span-1 lg:row-span-2">
          <p className="label">01 — {t(ui.about)}</p>
          <h2 className="heading my-10 text-4xl uppercase !leading-[1.2] sm:text-5xl lg:my-auto lg:text-[2.6rem]">
            <span>{l1} </span>
            <span className="text-muted-fg">{l2} </span>
            <span>{l3}</span>
          </h2>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a href="#projects" className="group/l link-arrow">
              {t(ui.seeProjects)} <Line />
            </a>
            <a href={`mailto:${profile.email}`} className="group/l link-arrow !text-muted-fg hover:!text-fg">
              {t(ui.emailMe)} <Line />
            </a>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.05} className="tile group flex flex-col overflow-hidden">
          <PhotoTop src={edu.photo} caption={edu.photoCaption} position="50% 35%" />
          <Logos logos={[edu.logo]} />
          <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
            <p className="label">{t(ui.education)}</p>
            <p className="mt-2 text-lg font-semibold leading-snug">{t(edu.short)}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t(edu.detail)}</p>
            {edu.gpa && <span className="chip mt-4 self-start !text-accent">GPA {edu.gpa}</span>}
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.1} className="tile group overflow-hidden">
          <BgPhoto src={about.locationPhoto} />
          <div className="flex h-full min-h-[18.75rem] flex-col justify-end p-6">
            <MapPin size={18} className="text-accent" />
            <p className="label mt-3">{t(ui.location)}</p>
            <p className="mt-2 text-lg font-semibold">{t(profile.location)} · GMT+7</p>
            <p className="mt-1 text-sm text-muted-fg">{t(profile.locationNote)}</p>
          </div>
        </Reveal>

        {/* Experience — the current internships */}
        {jobs.length > 0 && (
          <Reveal delay={0.05} className="tile group flex flex-col overflow-hidden">
            <a href="#experience" className="flex flex-1 flex-col">
              <PhotoTop src={jobs[0].photo} caption={jobs.map((j) => j.short).join(" · ")} />
              <Logos logos={jobs.map((j) => j.logo)} />
              <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                <p className="label flex items-center gap-2">
                  <Ping />
                  {t(ui.experienceCard)}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-accent">
                  {t(jobs[0].title)} @ {jobs.map((j) => j.short).join(" & ")}
                </p>
                <p className="mt-auto pt-3 text-sm text-muted-fg">{t(jobs[0].period)}</p>
              </div>
            </a>
          </Reveal>
        )}

        {/* Certificate */}
        {cert?.link && (
          <Reveal delay={0.1} className="tile group overflow-hidden">
            <a href={cert.link.href} target="_blank" rel="noreferrer" className="flex h-full min-h-[18.75rem] flex-col justify-end p-6">
              <BgPhoto src={cert.photo} soft />
              <Award size={18} className="text-accent" />
              <p className="label mt-3">{t(ui.certificate)}</p>
              <p className="mt-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-accent">{t(cert.cardTitle ?? cert.title)}</p>
              <p className="mt-1 text-sm text-muted-fg">
                {t(cert.period)} ·{" "}
                <span className="inline-flex items-center gap-1 whitespace-nowrap transition-colors group-hover:text-fg">
                  {t(cert.link.label)} <ArrowUpRight size={13} />
                </span>
              </p>
            </a>
          </Reveal>
        )}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
        <Reveal delay={0.05} className="tile relative overflow-hidden p-8 sm:p-10 lg:col-span-2">
          {/* DA → BA hairline and a soft glow from each corner */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-da via-da/40 to-ba" />
          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-da/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-64 w-64 rounded-full bg-ba/10 blur-3xl" />
          <span aria-hidden className="pointer-events-none absolute right-6 top-2 font-display text-[7.5rem] leading-none text-fg/[0.05]">
            &rdquo;
          </span>

          {about.paragraphs.map((p, i) => (
            <p
              key={p.en}
              className={i === 0 ? "font-display text-xl leading-relaxed text-fg sm:text-2xl" : "mt-5 text-[0.9375rem] leading-relaxed text-muted-fg"}
            >
              <Marked text={t(p)} />
            </p>
          ))}

          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
            <span className="rounded-full border border-da/40 bg-da/10 px-3 py-1 text-da">Data</span>
            <span className="text-muted-fg">×</span>
            <span className="rounded-full border border-ba/40 bg-ba/10 px-3 py-1 text-ba">Business</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="tile p-6">
          <p className="label mb-6">{t(ui.careerPath)}</p>
          <ol className="relative space-y-3">
            {/* track: lit from the current step downward, fading toward the goal */}
            <span aria-hidden className="absolute bottom-4 left-[0.5625rem] top-4 w-px bg-gradient-to-b from-accent via-line to-ba/60" />
            {about.careerPath.map((step, i) => {
              const now = step.state === "now";
              const open = step.state === "open";
              const last = i === about.careerPath.length - 1;
              return (
                <li
                  key={step.title.en}
                  className={`group/step relative flex items-start gap-4 rounded-xl py-2 pl-0 pr-3 transition-colors duration-300 hover:bg-fg/[0.04] ${
                    now ? "bg-accent/[0.07]" : open ? "bg-emerald-400/[0.07] ring-1 ring-emerald-400/40" : ""
                  }`}
                >
                  <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    {now && <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />}
                    <span
                      className={`relative h-3.5 w-3.5 rounded-full border-2 transition-transform duration-300 group-hover/step:scale-125 ${
                        now
                          ? "border-accent bg-accent shadow-[0_0_14px_hsl(var(--accent))]"
                          : open
                            ? "border-emerald-400 bg-card shadow-[0_0_12px_theme(colors.emerald.400/60%)]"
                            : last
                              ? "border-ba/70 bg-card"
                              : "border-line bg-card"
                      }`}
                    />
                  </span>
                  <div className="min-w-0">
                    <span className={`font-mono text-[0.625rem] uppercase tracking-wider ${now ? "text-accent" : open ? "text-emerald-400" : "text-muted-fg"}`}>
                      0{i + 1} · {t(step.stage)}
                    </span>
                    <p
                      className={`text-sm transition-colors ${now || open ? "font-semibold text-fg" : "text-muted-fg group-hover/step:text-fg"}`}
                    >
                      {t(step.title)}
                    </p>
                    {step.note && <p className="mt-0.5 text-xs leading-relaxed text-muted-fg">{t(step.note)}</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
