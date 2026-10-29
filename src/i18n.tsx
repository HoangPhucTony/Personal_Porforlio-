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

// only a language the visitor picked is remembered (the old "lang" key also stored the browser default)
const STORAGE_KEY = "langChoice";

/** English unless the link says ?lang=vi or the visitor switched to Vietnamese before. */
function initialLang(): Lang {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "en" || q === "vi") return q;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "en" || s === "vi") return s;
  } catch {
    /* storage unavailable */
  }
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
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
