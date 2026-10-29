import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { ui } from "../data/ui";
import { useActiveSection } from "../hooks";
import { useLang } from "../i18n";
import { Avatar, LangToggle } from "./ui";

const IDS = ["about", "experience", "projects", "contact"] as const;

function Socials() {
  const links = [
    { href: profile.github, Icon: Github, label: "GitHub" },
    { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
  ].filter((l) => l.href && l.href !== "mailto:");
  return (
    <div className="flex gap-2">
      {links.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

export default function Sidebar() {
  const { t } = useLang();
  const active = useActiveSection(IDS as unknown as string[]);
  const [open, setOpen] = useState(false);
  const name = t(profile.name);

  const nav = (
    <nav aria-label="Sections">
      <ul className="space-y-1">
        {IDS.map((id, i) => {
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={on ? "true" : undefined}
                className={`group flex items-center gap-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  on ? "text-fg" : "text-muted-fg hover:text-fg"
                }`}
              >
                <span
                  className={`h-px transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                    on ? "w-12 bg-accent" : "w-6 bg-line group-hover:w-10 group-hover:bg-fg"
                  }`}
                />
                <span className="text-[0.625rem] opacity-60">0{i + 1}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">{t(ui.nav[id])}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[18.75rem] flex-col justify-between px-8 py-10 lg:flex">
        <div>
          <Avatar photo={profile.photo} initials={profile.initials} alt={name} size={72} />
          <h1 className="heading mt-5 text-2xl uppercase tracking-wide">{name}</h1>
          <p className="mt-1 text-sm">
            <span className="text-da">Data</span> <span className="text-muted-fg">&amp;</span> <span className="text-ba">Business</span> Analyst
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted-fg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t(profile.status)}
          </p>
          <div className="mt-12">{nav}</div>
        </div>
        <div className="space-y-5">
          <div>
            <p className="label mb-2">{t(ui.language)}</p>
            <LangToggle id="sidebar" />
          </div>
          <Socials />
        </div>
      </aside>

      {/* Mobile */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur lg:hidden">
        <div className="flex h-14 items-center justify-between gap-3 px-4">
          <a href="#about" className="flex min-w-0 items-center gap-3">
            <Avatar photo={profile.photo} initials={profile.initials} alt={name} size={32} />
            <span className="truncate font-display text-base font-semibold">{name}</span>
          </a>
          <div className="flex items-center gap-1">
            <LangToggle id="mobile" />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={t(open ? ui.menuClose : ui.menuOpen)}
              aria-expanded={open}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-fg"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line"
            >
              <div className="space-y-6 px-4 pb-6 pt-4">
                {nav}
                <Socials />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
