import type { Recipe } from "../types/recipe";

export type RecipeRow = {
  id: number; slug: string; name_ko: string; name_en: string; romanized: string;
  description_ko: string; description_en: string; image: string; category: string;
  cooking_time: number; difficulty: Recipe["difficulty"]; spicy_level: number; tags: string[];
};

export function mapRecipe(row: RecipeRow): Recipe {
  return {
    id: row.id, slug: row.slug, nameKo: row.name_ko, nameEn: row.name_en,
    romanized: row.romanized, descriptionKo: row.description_ko,
    descriptionEn: row.description_en, image: row.image, category: row.category,
    cookingTime: row.cooking_time, difficulty: row.difficulty,
    spicyLevel: row.spicy_level, tags: row.tags,
  };
}
