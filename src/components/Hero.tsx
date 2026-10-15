"use client";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
export default function Hero() {
  const { locale, t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 pb-16 pt-8 md:grid-cols-2 md:gap-10 md:pb-20 md:pt-10 lg:pt-12">
        <div>
          <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">
            {t("badge")} 
          </span>

          <h1 className="mt-5 max-w-xl text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-[1.08] tracking-tight text-neutral-900">
            {t("taste")} 
            <br />
            {t("cook")} 
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 lg:text-lg lg:leading-8">
            {t("intro")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#explore" className="rounded-full bg-red-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700 lg:text-base">
              {t("exploreCta")} 
            </a>

            <a href="#beginner" className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-center text-sm font-bold text-neutral-800 lg:text-base">
              {t("newCta")} 
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <strong className="block text-2xl text-neutral-900">
                KR / EN
              </strong>
              <span className="text-neutral-500">
                {t("foodNames")} 
              </span>
            </div>

            <div>
              <strong className="block text-2xl text-neutral-900">
                {t("home")} 
              </strong>
              <span className="text-neutral-500">
                {t("inspiration")} 
              </span>
            </div>
          </div>
        </div>

        <div className="relative md:mt-2">
          <div className="aspect-square overflow-hidden rounded-[3rem] bg-neutral-200 shadow-2xl">
            <Image width={1400} height={1400} priority sizes="(max-width: 768px) 100vw, 50vw"
              src="/images/bibimbap-fresh.jpg"
              alt={t("heroAlt")}
              className="h-full w-full object-cover object-[center_65%]"
            />
          </div>

          <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-xs font-semibold text-red-600">
              {t("today")} 
            </p>

            <p className="mt-1 font-bold">
              {locale === "ko" ? "비빔밥 · Bibimbap" : "Bibimbap · 비빔밥"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
