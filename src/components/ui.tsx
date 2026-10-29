import { useRef, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";
import { useLang, type Lang } from "../i18n";
import { useReducedMotion } from "../hooks";

export function SectionHeader({ n, title, aside }: { n: string; title: string; aside?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
      <h2 className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{n}</span>
        <span className="heading text-3xl sm:text-4xl">{title}</span>
      </h2>
      {aside}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Avatar({ photo, initials, alt, size = 64 }: { photo: string; initials: string; alt: string; size?: number }) {
  return photo ? (
    <img src={photo} alt={alt} width={size} height={size} className="rounded-xl border border-line object-cover" style={{ width: `${size / 16}rem`, height: `${size / 16}rem` }} />
  ) : (
    <div
      aria-hidden
      className="grid shrink-0 place-items-center rounded-xl border border-line bg-muted font-display font-semibold"
      style={{ width: `${size / 16}rem`, height: `${size / 16}rem`, fontSize: `${(size * 0.32) / 16}rem` }}
    >
      {initials}
    </div>
  );
}

/** Pulls its child gently toward the cursor. */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const cfg = { stiffness: 220, damping: 16, mass: 0.4 };
  const x = useSpring(0, cfg);
  const y = useSpring(0, cfg);

  if (reduced) return <div className={`inline-block ${className}`}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function LangToggle({ id }: { id: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className="inline-flex rounded-full border border-line bg-card/60 p-1 backdrop-blur" role="group" aria-label={t({ en: "Language", vi: "Ngôn ngữ" })}>
      {(["en", "vi"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`relative h-8 min-w-[2.75rem] cursor-pointer rounded-full px-3 font-mono text-[0.6875rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
            lang === l ? "text-bg" : "text-muted-fg hover:text-fg"
          }`}
        >
          {lang === l && (
            <motion.span layoutId={`lang-pill-${id}`} className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
          )}
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
}
