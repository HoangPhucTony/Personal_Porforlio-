import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import { useRole } from "../hooks";

function introSeen() {
  try {
    return sessionStorage.getItem("introSeen") === "1";
  } catch {
    return false;
  }
}

export default function Home() {
  // recruiters following a deep link (#projects) skip straight to the content
  const [entered, setEntered] = useState(() => introSeen() || !!window.location.hash);
  const { role, setRole } = useRole();

  const enter = () => {
    setEntered(true);
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <>
      <AnimatePresence>{!entered && <Intro key="intro" onEnter={enter} />}</AnimatePresence>

      {entered && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative min-h-screen">
          <Backdrop />
          <Sidebar />
          <main className="relative px-4 pb-24 pt-20 sm:px-8 lg:ml-[18.75rem] lg:pl-4 lg:pr-14 lg:pt-10">
            <div className="max-w-[100rem] space-y-28">
              <About />
              <Experience />
              <Projects role={role} setRole={setRole} />
              <Contact />
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
}
