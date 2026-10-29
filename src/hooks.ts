import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import type { Role } from "./data/profile";

/** Rewrites one query param in place: keeps the #hash and the scroll position. */
export function useSetQueryParam() {
  const location = useLocation();
  const navigate = useNavigate();
  return (key: string, value: string) => {
    const params = new URLSearchParams(location.search);
    if (params.get(key) === value) return;
    params.set(key, value);
    navigate({ pathname: location.pathname, search: `?${params}`, hash: location.hash }, { replace: true, preventScrollReset: true });
  };
}

/** Role tab synced with ?role=da|ba so each application can link straight to its group. */
export function useRole() {
  const { search } = useLocation();
  const setParam = useSetQueryParam();
  const role: Role = new URLSearchParams(search).get("role") === "ba" ? "ba" : "da";
  const setRole = (next: Role) => setParam("role", next);
  return { role, setRole };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

// ---- Smooth scrolling (Lenis) ----

let lenis: Lenis | null = null;

export function useSmoothScroll() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
    let raf = 0;
    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // in-page anchors glide instead of jumping
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const el = a && findTarget(a.getAttribute("href")!);
      if (!el) return;
      e.preventDefault();
      lenis?.scrollTo(el, { offset: anchorOffset(el) });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
      lenis = null;
    };
  }, [reduced]);
}

/** "#id" → element; null for "#", empty or malformed hashes instead of throwing. */
function findTarget(hash: string): HTMLElement | null {
  if (hash.length < 2) return null;
  try {
    return document.querySelector<HTMLElement>(hash);
  } catch {
    return null;
  }
}

/** Respect the section's scroll-margin-top so headings clear the fixed mobile header. */
function anchorOffset(el: HTMLElement) {
  return -(parseFloat(getComputedStyle(el).scrollMarginTop) || 24);
}

export function scrollToTarget(target: string | number, immediate = false) {
  if (typeof target === "number") {
    // hard reset (new page): sync both the window and Lenis' internal position
    window.scrollTo(0, target);
    lenis?.scrollTo(target, { immediate: true, force: true });
    return;
  }
  const el = findTarget(target);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { immediate, force: true, offset: anchorOffset(el) });
  else el.scrollIntoView();
}

// overlays can overlap (cover → dive), so the page unlocks only when the last one closes
let scrollLocks = 0;

/** Stops page scroll while an overlay (intro, lightbox) is open. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    if (scrollLocks++ === 0) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (--scrollLocks > 0) return;
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [locked]);
}
