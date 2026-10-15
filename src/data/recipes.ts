import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "bibimbap",

    nameKo: "비빔밥",
    nameEn: "Bibimbap",
    romanized: "Bibimbap",

    descriptionKo:
      "밥 위에 여러 가지 나물과 고기, 달걀을 올리고 고추장과 함께 비벼 먹는 대표적인 한국 음식입니다.",

    descriptionEn:
      "One of Korea's most iconic dishes, made with rice, seasoned vegetables, meat, egg, and gochujang.",

    image: "/images/bibimbap-fresh.jpg",

    category: "Rice",

    cookingTime: 40,
    difficulty: "Medium",
    spicyLevel: 2,

    tags: ["Rice", "Healthy", "Popular"],
  },

  {
    id: 2,
    slug: "bulgogi",

    nameKo: "불고기",
    nameEn: "Bulgogi",
    romanized: "Bulgogi",

    descriptionKo:
      "얇게 썬 소고기를 간장 기반의 달콤하고 짭조름한 양념에 재워 구워 먹는 대표 한식입니다.",

    descriptionEn:
      "Thinly sliced beef marinated in a sweet and savory soy-based sauce.",

    image: "/images/bulgogi-selected.png",

    category: "BBQ",

    cookingTime: 35,
    difficulty: "Easy",
    spicyLevel: 0,

    tags: ["Beef", "BBQ", "Beginner"],
  },

  {
    id: 3,
    slug: "kimchi-jjigae",

    nameKo: "김치찌개",
    nameEn: "Kimchi Jjigae",
    romanized: "Gimchi-jjigae",

    descriptionKo:
      "잘 익은 김치와 돼지고기 또는 참치 등을 넣어 깊은 맛을 내는 한국의 대표적인 찌개입니다.",

    descriptionEn:
      "A comforting Korean stew made with fermented kimchi, often cooked with pork or tuna.",

    image: "/images/kimchi-jjigae-selected.png",

    category: "Stew",

    cookingTime: 40,
    difficulty: "Easy",
    spicyLevel: 3,

    tags: ["Stew", "Spicy", "Comfort Food"],
  },

  {
    id: 4,
    slug: "tteokbokki",

    nameKo: "떡볶이",
    nameEn: "Tteokbokki",
    romanized: "Tteokbokki",

    descriptionKo:
      "쫄깃한 떡을 매콤달콤한 고추장 소스에 조려 만든 대표적인 한국 길거리 음식입니다.",

    descriptionEn:
      "Chewy rice cakes cooked in a spicy, sweet gochujang-based sauce.",

    image: "/images/tteokbokki-selected.png",

    category: "Street Food",

    cookingTime: 25,
    difficulty: "Easy",
    spicyLevel: 4,

    tags: ["Street Food", "Spicy", "Popular"],
  },
];
