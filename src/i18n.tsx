import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useSetQueryParam } from "./hooks";

export type Lang = "en" | "vi";
/** A string in both languages. */
export type L = { en: string; vi: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (x: L | string, vars?: Record<string, string | number>) => string;
};

const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "en" || q === "vi") return q;
  try {
    const s = localStorage.getItem("lang");
    if (s === "en" || s === "vi") return s;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  // a shared link carries ?lang=…: keep it in step with the toggle so a refresh doesn't switch back
  const { search } = useLocation();
  const setParam = useSetQueryParam();
  const urlLang = new URLSearchParams(search).get("lang");
  useEffect(() => {
    if (urlLang && urlLang !== lang) setParam("lang", lang);
  }, [lang]);

  const t = useCallback(
    (x: L | string, vars?: Record<string, string | number>) => {
      let s = typeof x === "string" ? x : x[lang];
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
      return s;
    },
    [lang],
  );

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
