import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText, Mail, MessageCircle, Phone, X } from "lucide-react";
import { profile, type Role } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useScrollLock } from "../hooks";
import { LangToggle } from "./ui";

type Tab = "cv" | "letter";

const ROLES: Role[] = ["da", "ba"];
// role pills: filled in the role's colour when chosen, tinted on hover otherwise
const PILL_ON: Record<Role, string> = { da: "bg-da/15 text-da ring-1 ring-da/40", ba: "bg-ba/15 text-ba ring-1 ring-ba/40" };
const PILL_OFF: Record<Role, string> = { da: "text-muted-fg hover:text-da", ba: "text-muted-fg hover:text-ba" };
const pill = "min-h-[2.25rem] min-w-[3rem] cursor-pointer rounded-full px-3 font-mono text-[0.6875rem] uppercase tracking-[0.15em] transition-colors duration-300";

/** Opens the role's CV (and cover letter, if any) in a preview; with no CV for the role, says so for a few seconds. */
export function CvButton({
  role,
  className,
  wrapClassName = "",
  label,
  children,
}: {
  role: Role;
  className: string;
  wrapClassName?: string;
  label?: string; // accessible name when the visible text is short, e.g. "DA"
  children: ReactNode;
}) {
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
        aria-label={missing ? undefined : label}
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

// sidebar CV buttons: same shape and hover lift as the social buttons; the role being viewed is tinted
const CARD_ON: Record<Role, string> = { da: "border-da/60 bg-da/10 text-fg", ba: "border-ba/60 bg-ba/10 text-fg" };
const CARD_OFF: Record<Role, string> = { da: "border-line text-muted-fg hover:border-da/60 hover:text-fg", ba: "border-line text-muted-fg hover:border-ba/60 hover:text-fg" };
const ICON: Record<Role, string> = { da: "text-da", ba: "text-ba" };

/** "View CV: DA / BA": the visitor picks which CV to open. */
export function CvPicker({ current }: { current: Role }) {
  const { t } = useLang();
  return (
    <div role="group" aria-label={t(ui.chooseCv)}>
      <p className="label mb-2">{t(ui.viewCvShort)}</p>
      <div className="flex gap-2">
        {ROLES.map((r) => (
          <CvButton
            key={r}
            role={r}
            label={t(ui.viewCv, { role: r.toUpperCase() })}
            className={`group/cv inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              r === current ? CARD_ON[r] : CARD_OFF[r]
            }`}
          >
            <FileText size={15} className={`${ICON[r]} transition-transform duration-300 group-hover/cv:-rotate-6`} />
            {r.toUpperCase()}
          </CvButton>
        ))}
      </div>
    </div>
  );
}

function CvModal({ role: initial, onClose }: { role: Role; onClose: () => void }) {
  const { t, lang } = useLang();
  useScrollLock(true);
  // the preview can switch between roles, whichever button opened it
  const [role, setRole] = useState(initial);
  const roles = ROLES.filter((r) => profile.cv[r]);
  const letter = profile.coverLetter[role];
  const [picked, setTab] = useState<Tab>("cv");
  const tab: Tab = letter ? picked : "cv";
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
        {/* toolbar: role, tabs, language (cover letter only), download, close */}
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-3 sm:gap-3 sm:px-5">
          {roles.length > 1 && (
            <div role="group" aria-label={t(ui.chooseCv)} className="flex rounded-full border border-line p-1">
              {roles.map((r) => (
                <button
                  key={r}
                  aria-pressed={role === r}
                  title={t(ui.roleLabel[r])}
                  onClick={() => setRole(r)}
                  className={`${pill} ${role === r ? PILL_ON[r] : PILL_OFF[r]}`}
                >
                  {r.toUpperCase()}
                </button>
              ))}
            </div>
          )}
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
        <div key={`${role}-${tab}`} role="tabpanel" data-lenis-prevent className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-muted/50 p-3 sm:p-6">
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
                <p className="mt-1 font-display italic">{t(ui.roleLabel[role])}</p>
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
