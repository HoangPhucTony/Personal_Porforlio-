import { useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LangProvider } from "./i18n";
import { scrollToTarget, useSmoothScroll } from "./hooks";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

/** Feeds the cursor position to .tile cards for their glow effect. */
function useSpotlight() {
  useEffect(() => {
    const on = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".tile") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", on, { passive: true });
    return () => document.removeEventListener("pointermove", on);
  }, []);
}

/** New page → top (or its #hash); a new #hash on the same page → glide there. Query-only changes (?role, ?lang) never scroll. */
function ScrollOnRoute() {
  const { pathname, hash } = useLocation();
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);
  useLayoutEffect(() => {
    const newPage = lastPath.current !== pathname;
    lastPath.current = pathname;
    if (hash) {
      // wait a frame so the target section exists
      const id = setTimeout(() => scrollToTarget(hash), 80);
      return () => clearTimeout(id);
    }
    if (newPage) scrollToTarget(0, true);
  }, [pathname, hash]);
  return null;
}

function Shell() {
  useSmoothScroll();
  useSpotlight();
  return (
    <>
      <ScrollOnRoute />
      <Routes>
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Shell />
      </LangProvider>
    </BrowserRouter>
  );
}
