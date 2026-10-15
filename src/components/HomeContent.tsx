"use client";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import CategoryCard from "@/components/CategoryCard";
import type { RecipeResult } from "@/lib/recipes";
import CandidateSearch from './CandidateSearch';
import { useEffect, useState } from 'react';
import { exploreCategories, classifyCandidate } from '@/lib/explore-categories';
import { isEasyCandidate, type Candidate, type CandidateCollection } from '@/lib/candidate-search';
import { kimchiRecipes } from '@/data/kimchi-recipes';
import { createClient } from '@supabase/supabase-js';

const categories = exploreCategories;

export default function HomeContent({ recipes, status }: RecipeResult) {
  const { t, locale } = useLanguage();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateStatus, setCandidateStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState<CandidateCollection>('all');
  useEffect(() => {
    const controller = new AbortController();
    const loadBundledCandidates = async () => {
      const response = await fetch('/data/candidates.json', { signal: controller.signal });
      if (!response.ok) throw new Error(`Candidate data request failed: ${response.status}`);
      return response.json() as Promise<Candidate[]>;
    };

    const loadCandidates = async () => {
      const bundled = await loadBundledCandidates();
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) return bundled;

      try {
        const supabase = createClient(url, key, {
          auth: { persistSession: false, autoRefreshToken: false },
        });
        const { data, error } = await supabase
          .from('recipe_candidates')
          .select('source_id,name_ko,source_category,ingredients_original,steps_original,image_candidate,source_url')
          .order('source_id', { ascending: true })
          .limit(1000);
        if (error) throw error;
        if (!data?.length) return bundled;

        const translations = new Map(bundled.map((row) => [row.source_id, row]));
        return (data as Candidate[]).map((row) => {
          const translated = translations.get(row.source_id);
          return translated
            ? { ...row, name_en: translated.name_en, ingredients_en: translated.ingredients_en, steps_en: translated.steps_en }
            : row;
        });
      } catch (error) {
        console.error('Supabase candidate query failed; using bundled candidates.', error);
        return bundled;
      }
    };

    loadCandidates()
      .then((rows) => {
        if (controller.signal.aborted) return;
        setCandidates(rows);
        setCandidateStatus('ready');
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setCandidateStatus('error');
      });
    return () => controller.abort();
  }, []);
  const showCollection = (collection: CandidateCollection) => {
    setSelectedCategory('all');
    setSelectedCollection(collection);
  };
  return (
    <main id="main-content" className="min-h-screen bg-[#faf9f7]">
      <Header />

      <Hero />

      <section id="popular" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                {t("popular")} 
              </p>

              <h2 className="mt-2 text-3xl font-black text-neutral-900 md:text-4xl">
                {t("popularTitle")} 
              </h2>

              <p className="mt-3 text-neutral-600">
                {t("popularDescription")} 
              </p>
            </div>

          </div>

          {status === "error" && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800"><p>{locale === "ko" ? "음식 목록을 불러오지 못했습니다. 잠시 후 다시 시도해주세요." : "We couldn’t load the dishes. Please try again shortly."}</p><button type="button" onClick={() => window.location.reload()} className="mt-3 rounded-full bg-red-700 px-5 py-2 font-semibold text-white">{locale === "ko" ? "다시 시도" : "Try again"}</button></div>}
          {status === "ready" && recipes.length === 0 && <p className="rounded-2xl bg-neutral-50 p-6 text-neutral-600">{locale === "ko" ? "새로운 한식을 준비하고 있습니다. 곧 만나요!" : "New dishes are on their way. Check back soon!"}</p>}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            {t("explore")} 
          </p>

          <h2 className="mt-2 text-3xl font-black text-neutral-900 md:text-4xl">
            {t("exploreTitle")} 
          </h2>

          <p className="mt-3 text-neutral-600">
            {t("exploreDescription")} 
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              emoji={category.emoji}
              title={category.title}
              count={candidateStatus === 'ready' ? candidates.filter(r => classifyCandidate(r) === category.title).length : undefined}
              selected={selectedCategory === category.title}
              onSelect={() => { setSelectedCategory(category.title); setSelectedCollection('all'); }}
            />
          ))}
        </div>
      </section>

      <CandidateSearch key={`${selectedCategory}-${selectedCollection}`} candidates={candidates} candidateStatus={candidateStatus} category={selectedCategory} onCategoryChange={setSelectedCategory} collection={selectedCollection} onCollectionChange={setSelectedCollection} />
      <section id="beginner" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2.5rem] bg-neutral-900 px-7 py-12 text-white md:px-14 md:py-16">
          <p className="font-semibold text-red-400">
            {t("beginnerLabel")} 
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-black md:text-5xl">
            {t("beginnerTitle")} 
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
            {t("beginnerDescription")}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-7 text-neutral-900">
              <span className="text-4xl" aria-hidden="true">🍳</span>
              <p className="mt-5 min-h-5 text-sm font-bold uppercase tracking-widest text-red-600">{candidateStatus === 'ready' ? `${candidates.filter(isEasyCandidate).length} ${locale === 'ko' ? '개 레시피' : 'recipes'}` : candidateStatus === 'loading' ? (locale === 'ko' ? '레시피 불러오는 중' : 'Loading recipes') : ''}</p>
              <h3 className="mt-2 text-2xl font-black">{t("easyCorner")}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{t("easyCornerDescription")}</p>
              <a href="#recipe-search" onClick={() => showCollection('easy')} className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 font-bold text-white">{t("easyCornerCta")}</a>
            </article>
            <article className="rounded-3xl bg-red-600 p-7 text-white">
              <span className="text-4xl" aria-hidden="true">🥬</span>
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-red-100">{`${kimchiRecipes.length} ${locale === 'ko' ? '개 상세 레시피' : 'detailed recipes'}`}</p>
              <h3 className="mt-2 text-2xl font-black">{t("kimchiCorner")}</h3>
              <p className="mt-3 leading-7 text-red-100">{t("kimchiCornerDescription")}</p>
              <a href="/kimchi" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-red-700">{t("kimchiCornerCta")}</a>
            </article>
          </div>
        </div>
      </section>
      <footer className="mx-auto max-w-7xl border-t border-neutral-200 px-5 py-8 text-sm leading-7 text-neutral-500"><p className="font-bold text-neutral-900">K-FOOD TABLE · {t("tagline")}</p><p>{t("photography")} <a href="https://commons.wikimedia.org/wiki/File:Bibimbap_with_egg.jpg">{locale === "ko" ? "비빔밥" : "Bibimbap"} — Cjkennedy15</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>). {t("cropped")}</p><p className="mt-2"><a href="/privacy">{locale === "ko" ? "개인정보처리방침" : "Privacy Policy"}</a></p></footer>
    </main>
  );
}
