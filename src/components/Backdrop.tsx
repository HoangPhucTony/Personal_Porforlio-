import { motion, useScroll, useTransform } from "framer-motion";
import Motes from "./Motes";

/** Fixed ambient layer behind the main page: blurred night photo, grid and floating motes. */
export default function Backdrop() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <motion.img
        src="/images/intro-saigon-sm.webp"
        alt=""
        style={{ y }}
        className="absolute inset-0 h-[115%] w-full scale-110 object-cover opacity-[0.16] blur-2xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--da)/0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,hsl(var(--ba)/0.06),transparent_50%)]" />
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="absolute inset-0">
        <Motes count={45} />
      </div>
    </div>
  );
}
