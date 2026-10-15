import "server-only";
import { createClient } from "@supabase/supabase-js";
import { recipes as sampleRecipes } from "@/data/recipes";
import { mapRecipe, type RecipeRow } from "@/lib/recipe-mapper";
import type { Recipe } from "@/types/recipe";

export type RecipeResult = { recipes: Recipe[]; status: "sample" | "ready" | "error" };

export async function getRecipes(): Promise<RecipeResult> {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return { recipes: sampleRecipes, status: "sample" };
  }

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await supabase
      .from("recipes")
      .select("id,slug,name_ko,name_en,romanized,description_ko,description_en,image,category,cooking_time,difficulty,spicy_level,tags")
      .eq("is_published", true)
      .order("display_order", { ascending: true });

    if (error) throw error;
    if (!data?.length) return { recipes: sampleRecipes, status: "sample" };

    return { recipes: (data as RecipeRow[]).map(mapRecipe), status: "ready" };
  } catch (error) {
    console.error("Supabase recipe query failed; using bundled recipes.", error);
    return { recipes: sampleRecipes, status: "sample" };
  }
}
