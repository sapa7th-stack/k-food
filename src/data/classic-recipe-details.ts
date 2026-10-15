type RecipeText = { ingredients: string[]; steps: string[]; tip: string };
type RecipeDetail = { servings: number; ko: RecipeText; en: RecipeText };

export const classicRecipeDetails: Record<string, RecipeDetail> = {
  bibimbap: {
    servings: 2,
    ko: {
      ingredients: ["밥 2공기", "소고기 채 썬 것 150g", "시금치 100g, 콩나물 100g", "당근 1/2개, 애호박 1/2개", "달걀 2개", "고추장 2큰술, 물 1큰술, 설탕 1작은술", "간장 1큰술, 다진 마늘 1작은술", "참기름 2작은술, 식용유 1큰술", "소금 1/2작은술, 깨 1작은술"],
      steps: ["당근과 애호박을 채 썰고, 소고기는 간장과 다진 마늘에 10분간 재웁니다.", "끓는 물에 시금치를 30초 데쳐 찬물에 헹구고 물기를 짭니다. 콩나물은 별도로 4~5분 삶아 건집니다. 소금과 참기름 절반을 나누어 넣어 각각 무칩니다.", "팬에 식용유를 나누어 두르고 당근과 애호박을 각각 2~3분 볶습니다. 소고기도 따로 4~5분 충분히 익을 때까지 볶습니다.", "달걀은 흰자와 노른자가 익도록 부칩니다. 고추장, 물, 설탕을 섞어 비빔 양념을 만듭니다.", "그릇에 따뜻한 밥을 담고 채소, 소고기, 달걀을 올립니다. 남은 참기름과 깨를 뿌리고 양념은 조금씩 넣어 비빕니다."],
      tip: "덜 맵게 먹으려면 고추장 양념을 절반만 넣고 맛을 보며 더하세요. 고기 대신 두부를 구워 올려도 좋습니다.",
    },
    en: {
      ingredients: ["2 bowls cooked rice", "150g thinly sliced beef", "100g spinach, 100g soybean sprouts", "1/2 carrot, 1/2 zucchini", "2 eggs", "2 tbsp gochujang, 1 tbsp water, 1 tsp sugar", "1 tbsp soy sauce, 1 tsp minced garlic", "2 tsp sesame oil, 1 tbsp cooking oil", "1/2 tsp salt, 1 tsp sesame seeds"],
      steps: ["Julienne the carrot and zucchini. Marinate the beef with soy sauce and garlic for 10 minutes.", "Blanch spinach for 30 seconds, rinse cold, and squeeze dry. Separately boil sprouts for 4–5 minutes and drain. Divide the salt and half the sesame oil between the vegetables and season separately.", "Divide cooking oil between batches. Stir-fry carrot and zucchini separately for 2–3 minutes each. Cook beef separately for 4–5 minutes until cooked through.", "Fry eggs until whites and yolks are set. Mix gochujang, water, and sugar for the sauce.", "Divide warm rice between bowls. Top with vegetables, beef, and eggs. Add remaining sesame oil and sesame seeds, then mix in sauce gradually to taste."],
      tip: "Start with half the gochujang sauce for a milder bowl. Pan-fried tofu can replace the beef.",
    },
  },
  bulgogi: {
    servings: 2,
    ko: {
      ingredients: ["불고기용 소고기 300g", "양파 1/2개, 당근 1/3개, 대파 1/2대", "간장 3큰술, 설탕 1큰술", "배 간 것 2큰술 또는 물 2큰술", "다진 마늘 1큰술, 참기름 1큰술", "후추 약간, 식용유 1작은술, 깨 1작은술"],
      steps: ["소고기의 핏물을 키친타월로 닦고 먹기 좋게 자릅니다. 양파와 당근은 얇게 썰고 대파는 어슷 썹니다.", "간장, 설탕, 배 간 것 또는 물, 마늘, 참기름, 후추를 섞습니다. 소고기를 버무려 냉장고에서 15분간 재웁니다.", "달군 팬에 식용유를 두르고 소고기를 펼쳐 중강불에서 3~4분 볶습니다.", "양파, 당근, 대파와 남은 양념을 넣고 5~7분 더 볶아 고기를 충분히 익힙니다. 너무 마르면 물을 1큰술씩 넣습니다.", "양념이 고루 배면 불을 끄고 깨를 뿌립니다. 밥이나 쌈 채소와 함께 냅니다."],
      tip: "고기가 겹치지 않도록 넓은 팬을 쓰세요. 35분은 15분 재우는 시간을 포함한 예상 시간입니다.",
    },
    en: {
      ingredients: ["300g thinly sliced beef", "1/2 onion, 1/3 carrot, 1/2 stalk green onion", "3 tbsp soy sauce, 1 tbsp sugar", "2 tbsp grated pear or water", "1 tbsp minced garlic, 1 tbsp sesame oil", "A pinch of pepper, 1 tsp cooking oil, 1 tsp sesame seeds"],
      steps: ["Pat beef dry and cut into bite-size pieces. Thinly slice onion and carrot, and slice green onion diagonally.", "Mix soy sauce, sugar, grated pear or water, garlic, sesame oil, and pepper. Coat beef and marinate in the refrigerator for 15 minutes.", "Heat cooking oil in a wide pan. Spread out beef and stir-fry over medium-high heat for 3–4 minutes.", "Add vegetables and remaining marinade. Stir-fry for another 5–7 minutes until beef is cooked through. Add water a tablespoon at a time if the pan dries out.", "Turn off the heat when everything is coated in sauce. Sprinkle with sesame seeds and serve with rice or lettuce leaves."],
      tip: "Use a wide pan to avoid crowding. The estimated 35 minutes includes 15 minutes of marinating.",
    },
  },
  "kimchi-jjigae": {
    servings: 2,
    ko: {
      ingredients: ["잘 익은 배추김치 250g, 김치 국물 3큰술", "돼지고기 목살 또는 삼겹살 150g", "두부 150g", "양파 1/2개, 대파 1/2대", "물 500ml", "고춧가루 1큰술, 다진 마늘 1작은술", "식용유 1작은술, 국간장 1작은술(간을 보고 조절)"],
      steps: ["김치와 돼지고기를 한입 크기로 자릅니다. 양파는 채 썰고 두부는 도톰하게, 대파는 어슷 썹니다.", "냄비에 식용유를 두르고 돼지고기를 중불에서 3~4분 볶은 뒤 김치를 넣어 5분 더 볶습니다.", "물, 김치 국물, 양파, 고춧가루, 마늘을 넣습니다. 끓어오르면 중약불로 줄여 20분 끓입니다.", "두부와 대파를 넣어 5분 더 끓입니다. 돼지고기가 속까지 충분히 익었는지 확인합니다.", "국물을 맛보고 국간장을 조금씩 넣어 간을 맞춥니다. 너무 졸았으면 물을 조금 보충하고 한 번 더 끓입니다."],
      tip: "김치마다 짠맛이 달라 국간장은 마지막에 조절하세요. 신맛이 강하면 설탕 1/2작은술을 추가해도 좋습니다.",
    },
    en: {
      ingredients: ["250g fermented napa cabbage kimchi, 3 tbsp kimchi brine", "150g pork shoulder or pork belly", "150g tofu", "1/2 onion, 1/2 stalk green onion", "500ml water", "1 tbsp gochugaru, 1 tsp minced garlic", "1 tsp cooking oil, up to 1 tsp soup soy sauce to taste"],
      steps: ["Cut kimchi and pork into bite-size pieces. Slice onion, cut tofu into thick pieces, and slice green onion diagonally.", "Heat oil in a pot and stir-fry pork over medium heat for 3–4 minutes. Add kimchi and cook for another 5 minutes.", "Add water, kimchi brine, onion, gochugaru, and garlic. Bring to a boil, then simmer over medium-low heat for 20 minutes.", "Add tofu and green onion and simmer for 5 more minutes. Make sure the pork is fully cooked through.", "Taste and gradually add soup soy sauce as needed. If too much liquid has evaporated, add a little water and bring back to a boil."],
      tip: "Kimchi varies in saltiness, so season at the end. Add 1/2 tsp sugar if the stew tastes too sour.",
    },
  },
  tteokbokki: {
    servings: 2,
    ko: {
      ingredients: ["떡볶이떡 300g", "어묵 100g, 대파 1/2대", "물 400ml", "고추장 2큰술, 고춧가루 1큰술", "설탕 1큰술, 간장 1큰술", "깨 1작은술"],
      steps: ["굳은 냉장 떡은 미지근한 물에 10분 불린 뒤 물기를 뺍니다. 부드러운 떡은 헹궈 바로 쓰고, 냉동 떡은 포장지 안내대로 해동합니다.", "어묵을 먹기 좋은 크기로 자르고 대파를 어슷 썹니다. 넓은 팬에 물, 고추장, 고춧가루, 설탕, 간장을 넣고 잘 풉니다.", "양념물이 끓으면 떡을 넣고 중불에서 5분 끓이며 바닥에 붙지 않게 저어줍니다.", "어묵과 대파를 넣고 5~7분 더 끓여 떡이 말랑해지고 소스가 걸쭉해지면 불을 끕니다. 너무 되직하면 물을 조금 넣습니다.", "깨를 뿌려 따뜻할 때 냅니다. 떡의 두께에 따라 익는 시간이 달라 하나를 잘라 속까지 부드러운지 확인하세요."],
      tip: "순하게 만들려면 고춧가루를 빼고 고추장을 1큰술로 줄이세요. 냉동 떡의 해동 시간은 예상 조리 시간에 별도로 더하세요.",
    },
    en: {
      ingredients: ["300g tteokbokki rice cakes", "100g Korean fish cakes, 1/2 stalk green onion", "400ml water", "2 tbsp gochujang, 1 tbsp gochugaru", "1 tbsp sugar, 1 tbsp soy sauce", "1 tsp sesame seeds"],
      steps: ["Soak firm refrigerated rice cakes in lukewarm water for 10 minutes and drain. Rinse soft rice cakes and use directly; thaw frozen ones according to the package.", "Cut fish cakes into bite-size pieces and slice green onion. Mix water, gochujang, gochugaru, sugar, and soy sauce in a wide pan.", "Bring the sauce to a boil, add rice cakes, and cook over medium heat for 5 minutes, stirring to prevent sticking.", "Add fish cakes and green onion. Cook for another 5–7 minutes until rice cakes are soft and sauce thickens. Add a little water if needed.", "Sprinkle with sesame seeds and serve warm. Cut one rice cake to check it is soft in the center; cooking time varies with thickness."],
      tip: "For a milder version, omit gochugaru and reduce gochujang to 1 tbsp. Allow extra thawing time for frozen rice cakes.",
    },
  },
};
