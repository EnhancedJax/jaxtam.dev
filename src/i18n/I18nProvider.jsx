"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import en from "./messages/en.json";
import zhHK from "./messages/zh-HK.json";

const byLocale = { en, "zh-HK": zhHK };

export function pathnameToLocale(pathname) {
  if (pathname === "/hk" || pathname.startsWith("/hk/")) return "zh-HK";
  return "en";
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const pathname = usePathname();
  const locale = pathnameToLocale(pathname);
  const dict = byLocale[locale];

  const value = useMemo(() => {
    function t(key) {
      const v = dict[key];
      return v !== undefined ? v : key;
    }
    return { locale, t };
  }, [locale, dict]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}
