import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { useReducedMotion, useScrollLock } from "../hooks";
import Motes from "./Motes";
import Datasaurus from "./Datasaurus";
import { Avatar, LangToggle, Magnetic } from "./ui";

/**
 * Cover screen: Saigon at night (city lights as data points), floating motes,
 * and the Datasaurus — same numbers, different stories.
 */
export default function Intro({ onEnter }: { onEnter: () => void }) {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  useScrollLock(true);

  // gentle parallax following the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 60, damping: 20 };
  const px = useSpring(useTransform(mx, (v) => v * -18), spring);
  const py = useSpring(useTransform(my, (v) => v * -12), spring);
  const mpx = useSpring(useTransform(mx, (v) => v * 10), spring);
  const mpy = useSpring(useTransform(my, (v) => v * 8), spring);

  const enter = () => {
    if (leaving) return;
    if (reduced) return onEnter();
    setLeaving(true);
    setTimeout(onEnter, 700);
  };

  // wheel / swipe / key also enters, like scrolling past a cover
  useEffect(() => {
    const onWheel = (e: WheelEvent) => e.deltaY > 20 && enter();
    const onKey = (e: KeyboardEvent) => ["ArrowDown", "PageDown"].includes(e.key) && enter();
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
    const onTouchEnd = (e: TouchEvent) => startY - e.changedTouches[0].clientY > 60 && enter();
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: leaving ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 },
    transition: { duration: leaving ? 0.45 : 0.9, delay: leaving ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  const [q1, q2] = t(profile.intro.question).split("\n");
  const name = t(profile.name);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onPointerMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      {/* photo: slow Ken Burns drift + cursor parallax */}
      <motion.div aria-hidden className="absolute -inset-8" style={reduced ? undefined : { x: px, y: py }}>
        <motion.img
          src="/images/intro-saigon-lg.webp"
          srcSet="/images/intro-saigon-sm.webp 900w, /images/intro-saigon-lg.webp 1800w"
          sizes="100vw"
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={
            reduced
              ? { scale: 1.05, opacity: 0.55 }
              : leaving
                ? { scale: 1.3, opacity: 0 }
                : { scale: [1.08, 1.18], x: ["0%", "-2%"], y: ["0%", "-1.5%"], opacity: 0.55 }
          }
          transition={
            leaving
              ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              : { duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", opacity: { duration: 1.6 } }
          }
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,transparent_10%,hsl(var(--bg)/0.75)_70%)]" />
      <motion.div aria-hidden className="absolute inset-0" style={reduced ? undefined : { x: mpx, y: mpy }}>
        <Motes count={70} />
      </motion.div>

      {/* top bar */}
      <motion.div {...fade(0.1)} className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-12 sm:py-6">
        <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-fg sm:block">
          <span className="text-da">Data</span> → Insight → <span className="text-ba">Requirement</span> → <span className="text-fg">Decision</span>
        </span>
        <span className="font-display text-lg font-semibold sm:hidden">{profile.initials}</span>
        <LangToggle id="intro" />
      </motion.div>

      <div className="relative flex h-full flex-col justify-end gap-6 px-5 pb-8 pt-20 sm:px-12 sm:pb-12 lg:justify-end">
        {/* Datasaurus panel */}
        <motion.div {...fade(0.45)} className="w-full max-w-[28.75rem] self-end [@media(max-height:640px)]:hidden lg:absolute lg:right-12 lg:top-24 lg:max-w-[31.25rem]">
          <Datasaurus />
        </motion.div>

        <motion.h1 {...fade(0.25)} className="heading max-w-4xl text-[clamp(2.1rem,6.4vw,5.6rem)] uppercase lg:max-w-[58%]">
          {q1}
          <br />
          <span className="italic text-da">{q2}</span>
        </motion.h1>

        <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-end md:gap-8">
          <motion.div {...fade(0.6)} className="tile flex items-center gap-4 p-3 pr-6">
            <Avatar photo={profile.photo} initials={profile.initials} alt={name} size={48} />
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-wide">{name}</p>
              <p className="text-xs text-muted-fg">
                <span className="text-da">Data</span> · <span className="text-ba">Business</span> Analyst · Portfolio {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>

          <motion.p {...fade(0.7)} className="hidden max-w-md text-sm leading-relaxed text-muted-fg sm:block md:justify-self-center">
            {t(profile.intro.blurb)}
          </motion.p>

          <motion.div {...fade(0.85)} className="flex flex-col items-start gap-2 md:items-end">
            <Magnetic strength={0.35}>
              <button
                onClick={enter}
                className="group relative inline-flex min-h-[3.25rem] cursor-pointer items-center gap-4 overflow-hidden rounded-full border border-fg/30 bg-bg/30 px-7 font-mono text-xs uppercase tracking-[0.25em] backdrop-blur transition-colors duration-500 hover:border-da hover:text-bg"
              >
                <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-da transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
                <span className="relative">{t(ui.enter)}</span>
                <ArrowRight size={16} className="relative transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </Magnetic>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-fg">{t(ui.scrollHint)}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
