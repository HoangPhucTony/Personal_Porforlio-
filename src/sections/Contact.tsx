import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileText } from "lucide-react";
import { profile } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { Magnetic, Reveal } from "../components/ui";
import { CvButton } from "../components/Cv";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  };

  const links = [
    { href: profile.linkedin, label: "LinkedIn" },
    { href: profile.github, label: "GitHub" },
  ].filter((l) => l.href);

  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal className="tile overflow-hidden p-8 sm:p-12">
        {profile.contact.backdrop && (
          <img src={profile.contact.backdrop} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-card via-card/80 to-card/30" />

        <p className="label mb-6">04 — {t(ui.nav.contact)}</p>
        <h2 className="heading max-w-2xl text-4xl uppercase sm:text-5xl">{t(profile.contact.headline)}</h2>
        <p className="mt-5 max-w-xl text-muted-fg">{t(profile.contact.note)}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn bg-primary text-primary-fg hover:shadow-[0_10px_30px_-10px_hsl(var(--fg)/0.5)]">
              {t(ui.emailMe)} <ArrowUpRight size={14} />
            </a>
          </Magnetic>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
              {l.label} <ArrowUpRight size={14} />
            </a>
          ))}
          {(["da", "ba"] as const).map((r) => (
            <CvButton key={r} role={r} className="btn border border-accent/50 text-accent hover:bg-accent/10">
              <FileText size={14} /> {t(ui.cvFor, { role: t(ui.roleLabel[r]) })}
            </CvButton>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <span className="font-mono text-sm">{profile.email}</span>
          <button
            onClick={copy}
            className="inline-flex min-h-[2.75rem] cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-fg transition-colors hover:text-fg"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span aria-live="polite">{t(copied ? ui.copied : ui.copyEmail)}</span>
          </button>
        </div>
      </Reveal>
      <footer className="mt-10 flex flex-wrap justify-between gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-fg">
        <span>
          © {new Date().getFullYear()} {t(profile.name)}
        </span>
        <span>{t(ui.photoCredits)}</span>
        <span>{t(ui.footerBuilt)}</span>
      </footer>
    </section>
  );
}
