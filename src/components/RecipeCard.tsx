"use client";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { Recipe } from "@/types/recipe";
import { classicRecipeDetails } from "@/data/classic-recipe-details";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  const { locale, t, label } = useLanguage();
  const name = locale === "ko" ? recipe.nameKo : recipe.nameEn;
  const detail = classicRecipeDetails[recipe.slug];
  const instructions = detail?.[locale];
  return (
    <article id={recipe.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
        <Image width={700} height={525} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={recipe.image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-red-600">
            {label(recipe.category)}
          </span>

          <span className="text-sm text-neutral-500">
            {recipe.cookingTime} {t("min")}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900">
          {name}
        </h3>

        <p className="mt-1 text-sm font-medium text-neutral-500">
          {locale === "ko" ? recipe.nameEn : recipe.nameKo}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-600">
          {locale === "ko" ? recipe.descriptionKo : recipe.descriptionEn}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-neutral-500">
              {t("spice")} 
            </span>

            <div className="mt-1" role="img" aria-label={`${t("spice")}: ${recipe.spicyLevel} / 5`}>
              {"🌶️".repeat(recipe.spicyLevel)}
              {"○".repeat(5 - recipe.spicyLevel)}
            </div>
          </div>

          {detail && <span className="text-xs text-neutral-500">{detail.servings}{locale === "ko" ? "인분" : " servings"}</span>}
        </div>
        {instructions && (
          <details className="group mt-5 border-t border-neutral-200 pt-4">
            <summary className="cursor-pointer rounded-lg py-2 font-semibold text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600">
              <span className="group-open:hidden">{locale === "ko" ? "레시피 보기" : "View recipe"}</span>
              <span className="hidden group-open:inline">{locale === "ko" ? "레시피 접기" : "Hide recipe"}</span>
              <span className="sr-only"> — {name}</span>
            </summary>
            <div className="mt-4 space-y-5 text-sm leading-6 text-neutral-700">
              <p>{locale === "ko" ? "기준: 1큰술 = 15ml · 1작은술 = 5ml" : "Measures: 1 tbsp = 15ml · 1 tsp = 5ml"}</p>
              <div>
                <h4 className="font-bold text-neutral-900">{locale === "ko" ? "재료 (2인분)" : "Ingredients (2 servings)"}</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5">{instructions.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">{locale === "ko" ? "조리 순서" : "Instructions"}</h4>
                <ol className="mt-2 list-decimal space-y-3 pl-5">{instructions.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              </div>
              <p className="rounded-xl bg-orange-50 p-3"><strong>{locale === "ko" ? "요리 팁: " : "Cooking tip: "}</strong>{instructions.tip}</p>
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
