import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollLock } from "../hooks";

// a rising trend, in percent of the screen; the last point is where we dive in
const POINTS: [number, number][] = [
  [0, 82], [9, 76], [17, 80], [26, 67], [35, 71], [44, 58], [52, 62], [61, 47], [70, 51], [82, 30],
];
const [END_X, END_Y] = POINTS[POINTS.length - 1];

const DRAW = 0.7; // seconds for the line
const DIVE = 0.55; // seconds for the last point to open onto the site

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Second intro screen, about a second long: a trend line draws across the screen and its
 * last point opens up into the site. Any click or key skips it.
 */
export default function Dive({ onDone }: { onDone: () => void }) {
  const finished = useRef(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  useScrollLock(true);

  // the path is drawn in real pixels: a stretched viewBox breaks the dash trick behind pathLength
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const on = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  const path = "M" + POINTS.map(([x, y]) => `${(x / 100) * size.w},${(y / 100) * size.h}`).join(" L");

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    doneRef.current();
  };

  useEffect(() => {
    const id = setTimeout(finish, (DRAW + DIVE + 0.1) * 1000);
    // no wheel here: momentum from the scroll that left the cover would skip this screen at once
    const onKey = (e: KeyboardEvent) => ["Enter", " ", "Escape", "ArrowDown", "PageDown"].includes(e.key) && finish();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(id);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden bg-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      onClick={finish}
    >
      <svg aria-hidden viewBox={`0 0 ${size.w} ${size.h}`} className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="dive-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="hsl(var(--da))" stopOpacity="0.2" />
            <stop offset="1" stopColor="hsl(var(--da))" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#dive-line)"
          strokeWidth={2}
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: DRAW, ease: "easeInOut" }}
        />
      </svg>

      {/* data points light up as the line reaches them (HTML, so they stay round on any screen) */}
      {POINTS.slice(0, -1).map(([x, y], i) => (
        <motion.span
          key={x}
          aria-hidden
          className="absolute -ml-[0.1875rem] -mt-[0.1875rem] h-1.5 w-1.5 rounded-full bg-da/70"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: (i / (POINTS.length - 1)) * DRAW }}
        />
      ))}

      {/* the last point: pops, then grows past the edges of the screen */}
      <div aria-hidden className="absolute flex h-0 w-0 items-center justify-center" style={{ left: `${END_X}%`, top: `${END_Y}%` }}>
        <motion.span
          className="h-[300vmax] w-[300vmax] shrink-0 rounded-full border-2 border-da bg-[radial-gradient(circle,hsl(var(--da)/0.35),hsl(var(--bg))_70%)] shadow-[0_0_40px_hsl(var(--da))]"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 0.012, 0.007, 1] }}
          transition={{ duration: DIVE + 0.2, delay: DRAW - 0.1, times: [0, 0.2, 0.3, 1], ease }}
        />
      </div>
    </motion.div>
  );
}
