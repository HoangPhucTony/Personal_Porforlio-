import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, MessageCircle, Phone, X } from "lucide-react";
import { profile, type Role } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useScrollLock } from "../hooks";
import { LangToggle } from "./ui";

type Tab = "cv" | "letter";

/** Opens the role's CV (and cover letter, if any) in a preview; with no CV for the role, says so for a few seconds. */
export function CvButton({ role, className, wrapClassName = "", children }: { role: Role; className: string; wrapClassName?: string; children: ReactNode }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const has = !!profile.cv[role];

  return (
    <span data-role={role} className={`inline-flex ${wrapClassName}`}>
      <button
        type="button"
        className={className}
        aria-haspopup={has ? "dialog" : undefined}
        onClick={() => {
          if (has) return setOpen(true);
          setMissing(true);
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setMissing(false), 3000);
        }}
      >
        <span aria-live="polite" className="inline-flex items-center gap-2">
          {missing ? t(ui.cvMissing, { role: role.toUpperCase() }) : children}
        </span>
      </button>
      <AnimatePresence>{open && <CvModal role={role} onClose={() => setOpen(false)} />}</AnimatePresence>
    </span>
  );
}

/** The first role that has a CV, preferring the one being viewed. */
export function cvRole(preferred: Role): Role {
  if (profile.cv[preferred]) return preferred;
  return (Object.keys(profile.cv) as Role[]).find((r) => profile.cv[r]) ?? preferred;
}

function CvModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const { t, lang } = useLang();
  useScrollLock(true);
  const letter = profile.coverLetter[role];
  const [tab, setTab] = useState<Tab>("cv");
  const file = tab === "cv" || !letter ? profile.cv[role] : letter.pdf[lang];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "cv", label: t(ui.cvTab) },
    ...(letter ? [{ id: "letter" as Tab, label: t(ui.coverLetter) }] : []),
  ];
  const contacts = [
    { href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone, label: profile.phone },
    { href: profile.zalo, Icon: MessageCircle, label: "Zalo" },
    { href: `mailto:${profile.email}`, Icon: Mail, label: profile.email },
  ].filter((c) => c.href && !c.href.endsWith(":"));

  return createPortal(
    <motion.div
      data-role={role}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 p-2 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t(ui.cvPreviewTitle, { role: role.toUpperCase() })}
    >
      <motion.div
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="flex h-full max-h-[60rem] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
      >
        {/* toolbar: tabs, language (cover letter only), download, close */}
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-3 sm:gap-3 sm:px-5">
          <div role="tablist" aria-label={t(ui.cvPreviewTitle, { role: role.toUpperCase() })} className="flex rounded-full border border-line p-1">
            {tabs.map((x) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={tab === x.id}
                onClick={() => setTab(x.id)}
                className={`min-h-[2.25rem] cursor-pointer rounded-full px-4 text-xs font-medium transition-colors ${
                  tab === x.id ? "bg-accent text-accent-fg" : "text-muted-fg hover:text-fg"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
          {tab === "letter" && <LangToggle id="cv-modal" />}
          <div className="ml-auto flex items-center gap-2">
            <a href={file} download className="btn btn-accent !px-4 !py-2">
              <Download size={14} /> <span className="hidden sm:inline">{t(ui.downloadPdf)}</span>
            </a>
            <button
              autoFocus
              onClick={onClose}
              aria-label={t(ui.close)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-fg"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* preview */}
        {/* keyed by tab so each tab opens at the top */}
        <div key={tab} role="tabpanel" data-lenis-prevent className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-muted/50 p-3 sm:p-6">
          {tab === "cv" || !letter ? (
            <div className="mx-auto max-w-[48rem] space-y-4">
              {profile.cvPreview[role].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  width={1241}
                  height={1754}
                  loading={i === 0 ? "eager" : "lazy"}
                  alt={t(ui.cvPageAlt, { n: i + 1 })}
                  className="h-auto w-full rounded-sm bg-white shadow-xl"
                />
              ))}
            </div>
          ) : (
            <article className="mx-auto max-w-[48rem] rounded-sm bg-white px-6 py-8 text-[0.9375rem] leading-relaxed text-neutral-900 shadow-xl sm:px-14 sm:py-12">
              <header className="border-b border-neutral-900 pb-4 text-center">
                <p className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">{t(profile.name)}</p>
                <p className="mt-1 font-display italic">Business Analyst</p>
                <p className="mt-2 text-xs text-neutral-700">
                  {profile.phone} · {profile.email} · dohoangphuc.vercel.app
                </p>
              </header>
              <p className="mt-6 text-right">{t(letter.date)}</p>
              <p className="mt-6">{t(letter.greeting)}</p>
              {letter.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 sm:text-justify">
                  {t(p)}
                </p>
              ))}
              <p className="mt-6">{t(letter.closing)}</p>
              <p className="mt-8 font-semibold">{t(profile.name)}</p>
            </article>
          )}
        </div>

        {/* quick contact */}
        <div className="flex flex-wrap items-center gap-2 border-t border-line px-3 py-3 sm:px-5">
          <span className="label mr-1">{t(ui.nav.contact)}</span>
          {contacts.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-full border border-line px-3 text-xs transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={14} /> {label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
