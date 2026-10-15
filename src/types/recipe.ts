export type Recipe = {
  id: number;
  slug: string;

  nameKo: string;
  nameEn: string;
  romanized: string;

  descriptionKo: string;
  descriptionEn: string;

  image: string;

  category: string;

  cookingTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  spicyLevel: number;

  tags: string[];
};
