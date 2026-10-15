export type KimchiRecipe = {
  slug: string;
  image: string;
  nameKo: string;
  nameEn: string;
  groupKo: string;
  groupEn: string;
  descriptionKo: string;
  descriptionEn: string;
  yieldKo: string;
  yieldEn: string;
  prepKo: string;
  prepEn: string;
  fermentKo: string;
  fermentEn: string;
  ingredientsKo: string[];
  ingredientsEn: string[];
  stepsKo: string[];
  stepsEn: string[];
  tipKo: string;
  tipEn: string;
};

export const kimchiRecipes: KimchiRecipe[] = [
  {
    slug: "baechu-kimchi", image: "/images/kimchi-baechu.webp", nameKo: "배추김치", nameEn: "Napa Cabbage Kimchi", groupKo: "배추김치", groupEn: "Cabbage Kimchi",
    descriptionKo: "아삭한 배추 사이에 감칠맛 나는 양념을 채운 가장 대표적인 김치입니다.", descriptionEn: "The classic kimchi: crisp napa cabbage layered with a deeply savory red seasoning.",
    yieldKo: "3L 용기 1개", yieldEn: "One 3-liter container", prepKo: "약 2시간 30분", prepEn: "About 2 hr 30 min", fermentKo: "실온 12~24시간 후 냉장", fermentEn: "12–24 hr at room temperature, then refrigerate",
    ingredientsKo: ["배추 1포기(약 2kg)", "굵은소금 1컵", "물 2L", "무 300g", "쪽파 80g", "고춧가루 1컵", "멸치액젓 1/2컵", "새우젓 2큰술", "다진 마늘 3큰술", "다진 생강 1작은술", "식힌 찹쌀풀 1컵"],
    ingredientsEn: ["1 napa cabbage (about 2 kg)", "1 cup coarse sea salt", "2 L water", "300 g Korean radish", "80 g scallions", "1 cup gochugaru", "1/2 cup anchovy fish sauce", "2 tbsp salted shrimp", "3 tbsp minced garlic", "1 tsp minced ginger", "1 cup cooled sweet-rice paste"],
    stepsKo: ["배추를 길게 4등분하고 밑동만 살짝 칼집 낸 뒤 손으로 가릅니다.", "물 2L에 소금 절반을 녹입니다. 배추를 적신 뒤 남은 소금을 줄기 사이에 조금씩 뿌려 1시간 30분~2시간 절이고 중간에 한 번 뒤집습니다.", "줄기가 부드럽게 휘면 찬물에 2~3번 씻어 채반에서 30분 이상 물기를 뺍니다.", "무는 가늘게 채 썰고 쪽파는 4cm로 자릅니다. 고춧가루, 액젓, 새우젓, 마늘, 생강, 찹쌀풀을 섞은 뒤 무와 쪽파를 넣습니다.", "장갑을 끼고 양념을 배춧잎 사이사이에 얇고 고르게 바릅니다. 겉잎으로 감싸 깨끗한 용기에 빈틈없이 담습니다.", "국물이 넘치지 않도록 위쪽을 3cm 비우고 뚜껑을 닫습니다. 원하는 산미가 생기면 바로 냉장 보관합니다."],
    stepsEn: ["Quarter the cabbage lengthwise, cutting only through the base before pulling the leaves apart.", "Dissolve half the salt in 2 L water. Wet the cabbage, sprinkle the remaining salt between thick stems, and brine for 1½–2 hours, turning once.", "When the stems bend without snapping, rinse 2–3 times in cold water and drain cut-side down for at least 30 minutes.", "Julienne the radish and cut scallions into 4 cm pieces. Mix gochugaru, fish sauce, salted shrimp, garlic, ginger, and rice paste, then fold in the vegetables.", "Wearing gloves, spread a thin, even layer of seasoning between the leaves. Wrap each quarter with an outer leaf and pack tightly into a clean container.", "Leave 3 cm of headspace. Cover, ferment to your preferred tang, then refrigerate."],
    tipKo: "처음에는 양념을 줄기 쪽에 조금 더, 잎 쪽에는 얇게 바르면 짜지 않고 고르게 익어요.", tipEn: "Use a little more seasoning on thick stems and less on leafy tips for even flavor."
  },
  {
    slug: "chonggak-kimchi", image: "/images/kimchi-chonggak.webp", nameKo: "총각김치", nameEn: "Ponytail Radish Kimchi", groupKo: "무김치", groupEn: "Radish Kimchi",
    descriptionKo: "알타리무의 단단한 식감과 무청의 향을 함께 즐기는 시원한 김치입니다.", descriptionEn: "Crunchy young radishes and peppery greens fermented together for a refreshing bite.",
    yieldKo: "3L 용기 1개", yieldEn: "One 3-liter container", prepKo: "약 1시간 40분", prepEn: "About 1 hr 40 min", fermentKo: "실온 1일 후 냉장", fermentEn: "1 day at room temperature, then refrigerate",
    ingredientsKo: ["알타리무 2kg", "굵은소금 2/3컵", "쪽파 100g", "고춧가루 3/4컵", "멸치액젓 1/3컵", "새우젓 1큰술", "다진 마늘 2큰술", "다진 생강 1작은술", "매실청 2큰술", "식힌 찹쌀풀 1/2컵"], ingredientsEn: ["2 kg ponytail radish", "2/3 cup coarse sea salt", "100 g scallions", "3/4 cup gochugaru", "1/3 cup anchovy fish sauce", "1 tbsp salted shrimp", "2 tbsp minced garlic", "1 tsp minced ginger", "2 tbsp plum syrup", "1/2 cup cooled sweet-rice paste"],
    stepsKo: ["무청의 누런 잎을 떼고 무 표면을 솔로 문질러 씻습니다. 큰 무는 밑동에 십자 칼집을 냅니다.", "무와 무청에 소금을 고루 뿌려 50~60분 절이고 중간에 한 번 뒤집습니다.", "찬물에 2번 헹군 뒤 채반에서 20분간 물기를 뺍니다.", "고춧가루, 액젓, 새우젓, 마늘, 생강, 매실청, 찹쌀풀을 섞고 쪽파를 넣습니다.", "무와 무청에 양념을 고루 묻힌 뒤 무청으로 무를 한두 번 감아 용기에 차곡차곡 담습니다.", "실온에서 하루 정도 익힌 뒤 국물에 기포가 보이기 시작하면 냉장합니다."], stepsEn: ["Remove yellow leaves and scrub the radishes clean. Cut a shallow cross into the base of larger radishes.", "Sprinkle salt over radishes and greens; brine 50–60 minutes, turning once.", "Rinse twice and drain for 20 minutes.", "Mix gochugaru, fish sauce, salted shrimp, garlic, ginger, plum syrup, and rice paste; add scallions.", "Coat every radish and leaf, wrap the greens loosely around each radish, and pack into a clean container.", "Ferment about one day at room temperature; refrigerate when tiny bubbles appear."],
    tipKo: "무를 너무 오래 절이면 아삭함이 줄어듭니다. 손으로 눌렀을 때 살짝 휘는 정도가 좋아요.", tipEn: "Do not over-brine; the radish should bend slightly but remain firm."
  },
  {
    slug: "kkakdugi", image: "/images/kimchi-kkakdugi.webp", nameKo: "깍두기(무김치)", nameEn: "Kkakdugi (Cubed Radish Kimchi)", groupKo: "무김치", groupEn: "Radish Kimchi",
    descriptionKo: "한입 크기로 썬 무를 매콤하게 버무려 국밥과 잘 어울리는 김치입니다.", descriptionEn: "Juicy, spicy radish cubes—the classic partner for soups and rice dishes.",
    yieldKo: "2L 용기 1개", yieldEn: "One 2-liter container", prepKo: "약 50분", prepEn: "About 50 min", fermentKo: "실온 1일 후 냉장", fermentEn: "1 day at room temperature, then refrigerate",
    ingredientsKo: ["무 2kg", "굵은소금 3큰술", "설탕 1큰술", "쪽파 80g", "고춧가루 1/2컵", "멸치액젓 1/4컵", "새우젓 1큰술", "다진 마늘 2큰술", "다진 생강 1/2작은술"], ingredientsEn: ["2 kg Korean radish", "3 tbsp coarse sea salt", "1 tbsp sugar", "80 g scallions", "1/2 cup gochugaru", "1/4 cup anchovy fish sauce", "1 tbsp salted shrimp", "2 tbsp minced garlic", "1/2 tsp minced ginger"],
    stepsKo: ["무를 깨끗이 씻어 2cm 크기 정육면체로 썹니다.", "소금과 설탕을 뿌려 30분 절인 뒤 나온 물은 절반만 따라냅니다.", "고춧가루를 먼저 넣어 무 표면을 붉게 물들입니다.", "액젓, 새우젓, 마늘, 생강과 3cm로 자른 쪽파를 넣어 가볍게 버무립니다.", "깨끗한 용기에 눌러 담고 실온에서 하루 익힌 뒤 냉장합니다."], stepsEn: ["Wash the radish and cut it into 2 cm cubes.", "Toss with salt and sugar for 30 minutes; pour off only half the released liquid.", "Add gochugaru first and toss until every cube is evenly red.", "Add fish sauce, salted shrimp, garlic, ginger, and 3 cm scallion pieces; mix gently.", "Pack into a clean container, ferment one day at room temperature, then refrigerate."],
    tipKo: "무에서 나온 물을 조금 남기면 양념이 잘 어우러지고 국물이 시원해집니다.", tipEn: "Keeping a little radish liquid helps the seasoning blend and creates a refreshing brine."
  },
  {
    slug: "pa-kimchi", image: "/images/kimchi-pa.webp", nameKo: "파김치", nameEn: "Green Onion Kimchi", groupKo: "향채김치", groupEn: "Aromatic Kimchi",
    descriptionKo: "쪽파의 향과 액젓 양념이 어우러져 고기나 라면 곁들임으로 좋은 김치입니다.", descriptionEn: "Fragrant scallions in a bold, savory seasoning—excellent with grilled meat or noodles.",
    yieldKo: "1.5L 용기 1개", yieldEn: "One 1.5-liter container", prepKo: "약 45분", prepEn: "About 45 min", fermentKo: "실온 6~12시간 후 냉장", fermentEn: "6–12 hr at room temperature, then refrigerate",
    ingredientsKo: ["쪽파 1kg", "멸치액젓 1/2컵", "고춧가루 3/4컵", "다진 마늘 2큰술", "다진 생강 1/2작은술", "매실청 2큰술", "식힌 찹쌀풀 1/2컵", "통깨 1큰술"], ingredientsEn: ["1 kg scallions", "1/2 cup anchovy fish sauce", "3/4 cup gochugaru", "2 tbsp minced garlic", "1/2 tsp minced ginger", "2 tbsp plum syrup", "1/2 cup cooled sweet-rice paste", "1 tbsp sesame seeds"],
    stepsKo: ["쪽파의 뿌리와 시든 잎을 다듬고 씻은 뒤 물기를 충분히 뺍니다.", "넓은 쟁반에 흰 뿌리 부분을 모아 놓고 액젓을 먼저 부어 20분 절입니다. 중간에 한 번 뒤집습니다.", "남은 액젓에 고춧가루, 마늘, 생강, 매실청, 찹쌀풀을 섞습니다.", "뿌리 부분부터 양념을 묻히고 잎에는 남은 양념을 가볍게 훑어 바릅니다.", "5~6줄기씩 가지런히 접어 용기에 담고 통깨를 뿌립니다. 짧게 실온 숙성한 뒤 냉장합니다."], stepsEn: ["Trim roots and wilted leaves, wash well, and drain completely.", "Gather the white ends on a tray, pour fish sauce over them, and brine 20 minutes, turning once.", "Mix the used fish sauce with gochugaru, garlic, ginger, plum syrup, and rice paste.", "Coat the white ends generously, then lightly run the remaining seasoning along the green leaves.", "Fold bundles of 5–6 scallions into a clean container, sprinkle sesame seeds, briefly ferment, then refrigerate."],
    tipKo: "쪽파 잎을 세게 주무르면 풋내가 날 수 있으니 양념을 쓸어 바르듯 가볍게 다뤄주세요.", tipEn: "Handle the green tops gently; squeezing them can create a grassy taste."
  },
  {
    slug: "oi-sobagi", image: "/images/kimchi-oi-sobagi.webp", nameKo: "오이소박이", nameEn: "Stuffed Cucumber Kimchi", groupKo: "여름김치", groupEn: "Summer Kimchi",
    descriptionKo: "아삭한 오이에 부추 양념을 채워 짧게 익혀 먹는 산뜻한 김치입니다.", descriptionEn: "Crisp cucumbers stuffed with garlicky chive seasoning and enjoyed after a short ferment.",
    yieldKo: "2L 용기 1개", yieldEn: "One 2-liter container", prepKo: "약 1시간", prepEn: "About 1 hr", fermentKo: "실온 6~12시간 후 냉장", fermentEn: "6–12 hr at room temperature, then refrigerate",
    ingredientsKo: ["백오이 10개", "굵은소금 1/3컵", "뜨거운 물 1.5L", "부추 150g", "양파 1/2개", "당근 1/3개", "고춧가루 1/2컵", "멸치액젓 3큰술", "다진 마늘 2큰술", "매실청 2큰술"], ingredientsEn: ["10 Korean cucumbers", "1/3 cup coarse sea salt", "1.5 L hot water", "150 g garlic chives", "1/2 onion", "1/3 carrot", "1/2 cup gochugaru", "3 tbsp anchovy fish sauce", "2 tbsp minced garlic", "2 tbsp plum syrup"],
    stepsKo: ["오이는 소금으로 문질러 씻고 5cm 길이로 자릅니다. 한쪽 끝 1cm를 남기고 십자 모양으로 칼집을 냅니다.", "뜨거운 물에 소금을 녹여 오이에 붓고 25~30분 절입니다. 찬물에 한 번 헹궈 물기를 뺍니다.", "부추는 3cm로 자르고 양파와 당근은 가늘게 채 썹니다.", "고춧가루, 액젓, 마늘, 매실청을 섞은 뒤 손질한 채소를 가볍게 버무립니다.", "오이의 칼집 사이에 소를 넉넉히 채우고 겉면에도 얇게 묻혀 용기에 담습니다.", "반나절 이내로 실온에서 익힌 뒤 냉장하고 1주일 안에 먹으면 가장 아삭합니다."], stepsEn: ["Scrub cucumbers with salt and cut into 5 cm pieces. Make a cross cut, leaving 1 cm intact at one end.", "Dissolve salt in hot water, pour over cucumbers, and brine 25–30 minutes. Rinse once in cold water and drain.", "Cut chives into 3 cm pieces; finely julienne onion and carrot.", "Mix gochugaru, fish sauce, garlic, and plum syrup, then gently fold in the vegetables.", "Fill each cucumber generously and lightly coat the outside before packing into a container.", "Ferment no more than half a day at room temperature, refrigerate, and enjoy within a week for maximum crunch."],
    tipKo: "뜨거운 소금물을 사용하면 숙성 뒤에도 오이의 아삭한 식감이 오래 유지됩니다.", tipEn: "Hot brine helps the cucumbers stay crisp after fermentation."
  },
  {
    slug: "yeolmu-kimchi", image: "/images/kimchi-yeolmu.webp", nameKo: "열무김치", nameEn: "Young Radish Kimchi", groupKo: "여름김치", groupEn: "Summer Kimchi",
    descriptionKo: "연한 열무와 시원한 국물을 함께 즐겨 비빔국수에 곁들이기 좋은 김치입니다.", descriptionEn: "Tender young radish greens in a light, tangy brine—perfect with cold noodles.",
    yieldKo: "3L 용기 1개", yieldEn: "One 3-liter container", prepKo: "약 1시간 20분", prepEn: "About 1 hr 20 min", fermentKo: "실온 12시간 후 냉장", fermentEn: "About 12 hr at room temperature, then refrigerate",
    ingredientsKo: ["열무 1.5kg", "얼갈이배추 500g", "굵은소금 1/2컵", "물 2L", "쪽파 100g", "홍고추 2개", "고춧가루 1/2컵", "멸치액젓 1/4컵", "다진 마늘 2큰술", "식힌 밀가루풀 1컵"], ingredientsEn: ["1.5 kg young radish greens", "500 g young napa cabbage", "1/2 cup coarse sea salt", "2 L water", "100 g scallions", "2 red chilies", "1/2 cup gochugaru", "1/4 cup anchovy fish sauce", "2 tbsp minced garlic", "1 cup cooled flour paste"],
    stepsKo: ["열무는 뿌리와 잎 사이 흙을 깨끗이 씻고 7cm 길이로 자릅니다. 얼갈이도 같은 길이로 자릅니다.", "물 1L에 소금을 녹여 채소에 붓고 35~40분 절입니다. 풋내가 나지 않도록 뒤집을 때도 살살 다룹니다.", "찬물에 2번 가볍게 헹궈 물기를 뺍니다.", "남은 물 1L에 고춧가루, 액젓, 마늘, 밀가루풀을 풀어 국물을 만들고 쪽파와 홍고추를 넣습니다.", "채소를 용기에 담고 국물을 부어 잠기게 합니다. 실온에서 짧게 익힌 뒤 냉장합니다."], stepsEn: ["Wash soil carefully from the roots and cut young radish greens and cabbage into 7 cm lengths.", "Dissolve salt in 1 L water, pour over the vegetables, and brine 35–40 minutes. Handle gently when turning.", "Rinse lightly twice and drain.", "Mix the remaining 1 L water with gochugaru, fish sauce, garlic, and flour paste; add scallions and sliced red chilies.", "Place vegetables in a clean container, pour over the brine to cover, briefly ferment, then refrigerate."],
    tipKo: "열무는 치대지 말고 아래에서 위로 들어 올리듯 섞어야 풋내가 덜합니다.", tipEn: "Lift and fold the greens instead of kneading them to avoid a grassy flavor."
  },
  {
    slug: "baek-kimchi", image: "/images/kimchi-baek.webp", nameKo: "백김치", nameEn: "White Kimchi", groupKo: "배추김치", groupEn: "Cabbage Kimchi",
    descriptionKo: "고춧가루 없이 배와 채소의 은은한 단맛으로 담그는 맑고 순한 김치입니다.", descriptionEn: "A mild, clear-brined cabbage kimchi sweetened naturally with pear and vegetables.",
    yieldKo: "3L 용기 1개", yieldEn: "One 3-liter container", prepKo: "약 2시간", prepEn: "About 2 hr", fermentKo: "실온 1일 후 냉장", fermentEn: "1 day at room temperature, then refrigerate",
    ingredientsKo: ["배추 1포기(약 1.8kg)", "굵은소금 3/4컵", "물 2.5L", "무 250g", "배 1/2개", "쪽파 60g", "대추 4개", "밤 4개", "다진 마늘 2큰술", "다진 생강 1/2작은술", "소금 2큰술"], ingredientsEn: ["1 napa cabbage (about 1.8 kg)", "3/4 cup coarse sea salt", "2.5 L water", "250 g Korean radish", "1/2 Asian pear", "60 g scallions", "4 jujubes", "4 chestnuts", "2 tbsp minced garlic", "1/2 tsp minced ginger", "2 tbsp salt"],
    stepsKo: ["배추를 4등분해 소금물에 1시간 30분 절이고 찬물에 2번 헹궈 물기를 뺍니다.", "무, 배, 밤, 대추는 곱게 채 썰고 쪽파는 4cm로 자릅니다.", "손질한 채소에 마늘과 생강을 넣어 가볍게 섞고 배춧잎 사이에 채웁니다.", "물 1.5L에 소금 2큰술을 완전히 녹이고 간을 봅니다. 약간 짭짤한 정도가 좋습니다.", "배추를 용기에 담고 소금물을 부어 잠기게 한 뒤 실온에서 하루 익혀 냉장합니다."], stepsEn: ["Quarter the cabbage, brine 1½ hours, rinse twice, and drain well.", "Finely julienne radish, pear, chestnuts, and jujubes; cut scallions into 4 cm pieces.", "Gently mix the vegetables with garlic and ginger, then tuck the filling between cabbage leaves.", "Dissolve 2 tbsp salt in 1.5 L water. It should taste pleasantly salty, not harsh.", "Pack cabbage into a clean container, cover with brine, ferment one day at room temperature, then refrigerate."],
    tipKo: "배는 갈지 않고 채 썰어 넣으면 국물이 탁해지지 않고 깔끔한 단맛이 납니다.", tipEn: "Julienne rather than puree the pear to keep the brine clear."
  },
  {
    slug: "gat-kimchi", image: "/images/kimchi-gat.webp", nameKo: "갓김치", nameEn: "Mustard Leaf Kimchi", groupKo: "향채김치", groupEn: "Aromatic Kimchi",
    descriptionKo: "갓 특유의 톡 쏘는 향과 진한 젓갈 양념이 매력적인 남도식 김치입니다.", descriptionEn: "Peppery mustard leaves meet a rich seafood seasoning in this bold southern-style kimchi.",
    yieldKo: "2L 용기 1개", yieldEn: "One 2-liter container", prepKo: "약 1시간 30분", prepEn: "About 1 hr 30 min", fermentKo: "실온 12~24시간 후 냉장", fermentEn: "12–24 hr at room temperature, then refrigerate",
    ingredientsKo: ["갓 1.5kg", "굵은소금 1/2컵", "쪽파 100g", "고춧가루 3/4컵", "멸치액젓 1/3컵", "새우젓 1큰술", "다진 마늘 2큰술", "다진 생강 1작은술", "매실청 2큰술", "찹쌀풀 1/2컵"], ingredientsEn: ["1.5 kg mustard greens", "1/2 cup coarse sea salt", "100 g scallions", "3/4 cup gochugaru", "1/3 cup anchovy fish sauce", "1 tbsp salted shrimp", "2 tbsp minced garlic", "1 tsp minced ginger", "2 tbsp plum syrup", "1/2 cup sweet-rice paste"],
    stepsKo: ["갓의 억센 줄기 끝을 다듬고 흐르는 물에 여러 번 씻어 흙을 제거합니다.", "소금을 줄기 쪽에 집중해 뿌리고 50분 절인 뒤 한 번 뒤집습니다.", "찬물에 2번 헹궈 물기를 충분히 뺍니다.", "고춧가루, 액젓, 새우젓, 마늘, 생강, 매실청, 찹쌀풀을 섞고 쪽파를 넣습니다.", "갓 줄기부터 양념을 고르게 바른 뒤 잎을 접어 용기에 담습니다. 하루 이내 숙성 후 냉장합니다."], stepsEn: ["Trim tough stem ends and wash repeatedly to remove all soil.", "Concentrate salt on the stems, brine 50 minutes, and turn once.", "Rinse twice and drain thoroughly.", "Mix gochugaru, fish sauce, salted shrimp, garlic, ginger, plum syrup, and rice paste; add scallions.", "Coat stems first, fold the leaves, pack into a clean container, ferment up to one day, then refrigerate."],
    tipKo: "갓의 매운 향은 냉장 숙성 1~2주 뒤 한결 부드러워지고 감칠맛이 깊어집니다.", tipEn: "The sharp mustard flavor mellows and deepens after 1–2 weeks in the refrigerator."
  },
  {
    slug: "dongchimi", image: "/images/kimchi-dongchimi.webp", nameKo: "동치미", nameEn: "Dongchimi", groupKo: "물김치", groupEn: "Water Kimchi",
    descriptionKo: "작은 무를 통째로 익혀 맑고 톡 쏘는 국물까지 즐기는 겨울 물김치입니다.", descriptionEn: "Whole radishes ferment in a clear, sparkling winter brine that is as prized as the vegetables.",
    yieldKo: "4L 용기 1개", yieldEn: "One 4-liter container", prepKo: "약 50분", prepEn: "About 50 min", fermentKo: "실온 1~2일 후 냉장", fermentEn: "1–2 days at room temperature, then refrigerate",
    ingredientsKo: ["동치미무 2kg", "굵은소금 1/2컵", "물 2.5L", "소금 3큰술", "배 1/2개", "쪽파 100g", "마늘 8쪽", "생강 20g", "청양고추 3개", "홍고추 2개"], ingredientsEn: ["2 kg small dongchimi radishes", "1/2 cup coarse sea salt", "2.5 L water", "3 tbsp salt", "1/2 Asian pear", "100 g scallions", "8 garlic cloves", "20 g ginger", "3 green chilies", "2 red chilies"],
    stepsKo: ["무는 잔뿌리를 다듬고 껍질을 벗기지 않은 채 솔로 깨끗이 씻습니다.", "젖은 무에 굵은소금을 굴려 묻히고 40분 둡니다.", "깨끗한 용기에 무, 큼직하게 썬 배, 묶은 쪽파, 고추를 담습니다. 마늘과 생강은 면포나 다시백에 넣습니다.", "물 2.5L에 소금 3큰술을 완전히 녹여 붓고 모든 재료가 잠기도록 누름판이나 작은 접시로 눌러줍니다.", "실온에서 국물에 잔기포가 생길 때까지 1~2일 익힌 뒤 냉장합니다."], stepsEn: ["Trim root hairs and scrub the unpeeled radishes clean.", "Roll the wet radishes in coarse salt and rest for 40 minutes.", "Pack radishes, pear chunks, bundled scallions, and chilies into a clean container. Place garlic and ginger in a spice bag.", "Dissolve 3 tbsp salt in 2.5 L water, pour over, and use a small clean plate or weight to keep everything submerged.", "Ferment 1–2 days until tiny bubbles appear in the brine, then refrigerate."],
    tipKo: "재료가 국물 위로 뜨면 변질되기 쉬우니 항상 깨끗한 누름판으로 잠기게 유지하세요.", tipEn: "Keep every ingredient submerged under the brine with a clean fermentation weight."
  },
  {
    slug: "nabak-kimchi", image: "/images/kimchi-nabak.webp", nameKo: "나박김치", nameEn: "Nabak Kimchi", groupKo: "물김치", groupEn: "Water Kimchi",
    descriptionKo: "배추와 무를 얇고 네모지게 썰어 명절상에도 잘 어울리는 산뜻한 물김치입니다.", descriptionEn: "Thin squares of cabbage and radish in a rosy, refreshing brine often served for celebrations.",
    yieldKo: "3L 용기 1개", yieldEn: "One 3-liter container", prepKo: "약 45분", prepEn: "About 45 min", fermentKo: "실온 12~24시간 후 냉장", fermentEn: "12–24 hr at room temperature, then refrigerate",
    ingredientsKo: ["무 800g", "배추 500g", "굵은소금 3큰술", "물 2L", "고춧가루 3큰술", "배 1/2개", "미나리 80g", "쪽파 60g", "마늘 5쪽", "생강 10g", "소금 2큰술"], ingredientsEn: ["800 g Korean radish", "500 g napa cabbage", "3 tbsp coarse sea salt", "2 L water", "3 tbsp gochugaru", "1/2 Asian pear", "80 g water dropwort", "60 g scallions", "5 garlic cloves", "10 g ginger", "2 tbsp salt"],
    stepsKo: ["무와 배추를 3cm 너비의 얇은 네모로 썰어 굵은소금을 뿌리고 20분 절입니다.", "미나리와 쪽파는 3cm로 자르고 배는 얇게 썹니다.", "고춧가루를 면포나 촘촘한 체에 넣고 물 2L에 흔들어 고운 붉은 물을 냅니다.", "붉은 물에 소금 2큰술을 녹이고 얇게 썬 마늘과 생강을 넣습니다.", "절인 무와 배추는 씻지 않고 용기에 담아 배, 미나리, 쪽파를 올린 뒤 국물을 붓습니다.", "실온에서 국물이 살짝 새콤해질 때까지 익힌 뒤 냉장합니다."], stepsEn: ["Cut radish and cabbage into thin 3 cm squares, sprinkle with coarse salt, and rest 20 minutes.", "Cut water dropwort and scallions into 3 cm lengths; thinly slice the pear.", "Place gochugaru in cheesecloth or a fine sieve and swish it through 2 L water to tint the brine red without flakes.", "Dissolve 2 tbsp salt in the tinted water and add thinly sliced garlic and ginger.", "Without rinsing, place the salted vegetables in a clean container; add pear and herbs, then pour over the brine.", "Ferment until lightly tangy, then refrigerate."],
    tipKo: "고춧가루 건더기를 걸러내면 국물이 텁텁하지 않고 맑고 산뜻하게 완성됩니다.", tipEn: "Straining out the pepper flakes keeps the brine clear and clean-tasting."
  }
];
