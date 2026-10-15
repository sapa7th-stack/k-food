"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import { kimchiRecipes } from "@/data/kimchi-recipes";

export default function KimchiGuide() {
  const { locale } = useLanguage();
  const ko = locale === "ko";
  const [group, setGroup] = useState("all");
  const groups = useMemo(() => Array.from(new Set(kimchiRecipes.map((recipe) => ko ? recipe.groupKo : recipe.groupEn))), [ko]);
  const recipes = group === "all" ? kimchiRecipes : kimchiRecipes.filter((recipe) => (ko ? recipe.groupKo : recipe.groupEn) === group);

  return <main id="main-content" className="min-h-screen bg-[#faf9f7] text-neutral-900">
    <Header />
    <section className="mx-auto max-w-7xl px-5 pb-14 pt-10 md:pt-16">
      <Link href="/" className="text-sm font-bold text-red-700 hover:underline">← {ko ? "메인으로" : "Back to home"}</Link>
      <div className="mt-7 overflow-hidden rounded-[2.5rem] bg-neutral-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/kimchi-guide-hero.png" alt={ko ? "여러 종류의 김치를 그릇에 담은 한상" : "A Korean table filled with many varieties of kimchi"} className="aspect-[16/8] w-full object-cover md:aspect-[16/7]" />
        <div className="px-7 py-10 md:px-14 md:py-14">
          <p className="font-bold uppercase tracking-[0.2em] text-red-400">{ko ? "김치 전용 페이지" : "The Kimchi Guide"}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{ko ? "우리 식탁의 김치를 하나씩 담가보세요." : "Make Korea’s essential kimchi, one batch at a time."}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">{ko ? "배추김치부터 총각김치, 깍두기, 파김치, 오이소박이와 시원한 물김치까지 준비 과정과 숙성법을 친절하게 정리했습니다." : "From napa cabbage and ponytail radish to cucumber kimchi and clear water kimchi, each guide walks through preparation, seasoning, packing, and fermentation."}</p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-10">
      <div className="flex flex-wrap gap-2" aria-label={ko ? "김치 종류 선택" : "Choose a kimchi family"}>
        <button type="button" onClick={() => setGroup("all")} className={`rounded-full px-5 py-3 text-sm font-bold ${group === "all" ? "bg-red-600 text-white" : "border border-neutral-300 bg-white"}`}>{ko ? `전체 ${kimchiRecipes.length}가지` : `All ${kimchiRecipes.length}`}</button>
        {groups.map((name) => <button type="button" key={name} onClick={() => setGroup(name)} className={`rounded-full px-5 py-3 text-sm font-bold ${group === name ? "bg-red-600 text-white" : "border border-neutral-300 bg-white"}`}>{name}</button>)}
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl items-start gap-6 px-5 pb-20 md:grid-cols-2">
      {recipes.map((recipe, index) => <article id={recipe.slug} key={recipe.slug} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={recipe.image} alt={ko ? `${recipe.nameKo}을 그릇에 담은 모습` : `${recipe.nameEn} served in a ceramic dish`} loading="lazy" className="aspect-[4/3] w-full bg-neutral-100 object-cover" />
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
          <div><p className="text-sm font-bold text-red-700">{ko ? recipe.groupKo : recipe.groupEn}</p><h2 className="mt-1 text-2xl font-black">{ko ? recipe.nameKo : recipe.nameEn}</h2>{!ko && <p lang="ko" className="mt-1 text-neutral-500">{recipe.nameKo}</p>}</div>
          <span className="text-4xl font-black text-red-100">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="p-6">
          <p className="leading-7 text-neutral-600">{ko ? recipe.descriptionKo : recipe.descriptionEn}</p>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl bg-neutral-50 p-3"><dt className="text-neutral-500">{ko ? "분량" : "Yield"}</dt><dd className="mt-1 font-bold">{ko ? recipe.yieldKo : recipe.yieldEn}</dd></div>
            <div className="rounded-2xl bg-neutral-50 p-3"><dt className="text-neutral-500">{ko ? "준비" : "Prep"}</dt><dd className="mt-1 font-bold">{ko ? recipe.prepKo : recipe.prepEn}</dd></div>
            <div className="rounded-2xl bg-neutral-50 p-3"><dt className="text-neutral-500">{ko ? "숙성" : "Ferment"}</dt><dd className="mt-1 font-bold">{ko ? recipe.fermentKo : recipe.fermentEn}</dd></div>
          </dl>
          <details className="group mt-6 rounded-2xl border border-neutral-200 open:border-red-200 open:bg-red-50/40">
            <summary className="cursor-pointer list-none px-5 py-4 font-bold text-red-700">{ko ? "재료와 만드는 법 자세히 보기" : "Open ingredients and detailed method"} <span className="float-right transition group-open:rotate-45">＋</span></summary>
            <div className="border-t border-neutral-200 px-5 py-5">
              <h3 className="font-black">{ko ? "재료" : "Ingredients"}</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">{(ko ? recipe.ingredientsKo : recipe.ingredientsEn).map((item) => <li key={item} className="flex gap-2"><span className="text-red-600">•</span>{item}</li>)}</ul>
              <h3 className="mt-7 font-black">{ko ? "만드는 순서" : "Method"}</h3>
              <ol className="mt-3 space-y-4">{(ko ? recipe.stepsKo : recipe.stepsEn).map((step, stepIndex) => <li key={step} className="flex gap-3 leading-7"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{stepIndex + 1}</span><span>{step}</span></li>)}</ol>
              <div className="mt-6 rounded-2xl bg-white p-4 text-sm leading-6"><strong className="text-red-700">{ko ? "실패 줄이는 팁" : "Success tip"}</strong><p className="mt-1">{ko ? recipe.tipKo : recipe.tipEn}</p></div>
            </div>
          </details>
        </div>
      </article>)}
    </section>

    <aside className="mx-auto mb-20 max-w-7xl px-5">
      <div className="rounded-3xl bg-amber-50 p-7 text-amber-950"><h2 className="text-xl font-black">{ko ? "안전하게 보관하기" : "Store kimchi safely"}</h2><p className="mt-3 max-w-4xl leading-7">{ko ? "손과 도구, 용기는 깨끗이 씻고 완전히 헹궈 사용하세요. 숙성 중 재료가 국물 아래에 있도록 누르고, 원하는 맛이 들면 냉장 보관하세요. 곰팡이, 이상한 냄새 또는 비정상적인 변색이 보이면 먹지 마세요." : "Wash and rinse hands, tools, and containers thoroughly. Keep vegetables pressed beneath their brine, then refrigerate once the flavor is where you want it. Discard a batch if you see mold, an unusual odor, or abnormal discoloration."}</p></div>
    </aside>
  </main>;
}
