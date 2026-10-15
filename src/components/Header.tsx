"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="K-Food Table home">
          <p className="text-xl font-black tracking-tight">
            K-FOOD
            <span className="text-red-600"> TABLE</span>
          </p>
        </Link>

        <nav aria-label={t("nav")} className="hidden gap-8 text-sm font-medium md:flex">
          <Link href="/#explore" className="hover:text-red-600">
            {t("explore")} 
          </Link>

          <Link href="/#recipe-search" className="hover:text-red-600">
            {t("recipes")} 
          </Link>

          <Link href="/#beginner" className="hover:text-red-600">
            {t("beginners")} 
          </Link>

          <Link href="/kimchi" className="hover:text-red-600">
            {t("kimchiGuide")}
          </Link>
        </nav>

        <div className="flex shrink-0 rounded-full border border-neutral-300 p-1" role="group" aria-label="Language / 언어">
          {(["en", "ko"] as const).map((language) => <button key={language} type="button" lang={language} aria-pressed={locale === language} onClick={() => setLocale(language)} className={"rounded-full px-3 py-2 text-sm font-semibold transition " + (locale === language ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100")}>
            {language === "en" ? "EN" : "한국어"}
          </button>)}
        </div>
      </div>
    </header>
  );
}
