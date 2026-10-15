"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { foodLabels, messages, type Locale, type MessageKey } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
  label: (value: string) => string;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ initialLocale, children }: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, updateLocale] = useState(initialLocale);
  const setLocale = (nextLocale: Locale) => {
    updateLocale(nextLocale);
    document.cookie = `kfood-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  };

  useEffect(() => {
    const savedLocale = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith("kfood-locale="))
      ?.split("=")[1];
    // Hydration starts with the exported locale; apply the saved preference after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedLocale === "ko" || savedLocale === "en") updateLocale(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].title;
  }, [locale]);

  return <LanguageContext.Provider value={{ locale, setLocale,
    t: (key) => messages[locale][key],
    label: (value) => locale === "ko" ? foodLabels[value] ?? value : value,
  }}>
    <a href="#main-content" className="skip-link">{messages[locale].skip}</a>
    {children}
  </LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
