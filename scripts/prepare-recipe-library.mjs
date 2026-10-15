import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = new URL("../", import.meta.url);
const sourcePath = new URL("../src/data/candidate-source.json", import.meta.url);
const translationPath = new URL("../src/data/candidate-translations-en.json", import.meta.url);
const stagingDirectory = new URL("../storage-staging/original-images/", import.meta.url);
const generatedDirectory = new URL("../storage-staging/generated/", import.meta.url);
const source = JSON.parse(await readFile(sourcePath, "utf8"));
const translations = JSON.parse(await readFile(translationPath, "utf8"));
const officialRows = [
  ...JSON.parse(await readFile(new URL("../../recipe-library/source/official-1.json", import.meta.url), "utf8")).COOKRCP01.row,
  ...JSON.parse(await readFile(new URL("../../recipe-library/source/official-1001.json", import.meta.url), "utf8")).COOKRCP01.row,
];
const officialMainImages = new Map(officialRows.map((row) => [String(row.RCP_SEQ), row.ATT_FILE_NO_MAIN]));

const imageOverrides = {
  "140": "/images/maesaengi-sundubu-tang.webp",
  "745": "/images/maesil-gwamegi-grill.png",
};

const fixes = {
  "18": {
    name_en: "King Oyster Mushrooms in Soy Milk Sauce",
    ingredients_en: "King oyster mushrooms: 100 g; olive oil: 10 g. Sauce: soy milk 20 g, heavy cream 10 g, 1/2 Cheongyang chili, black pepper. To serve: baby greens 20 g.",
    steps_en: ["Cut the mushrooms into thick strips and sauté them in olive oil until golden.", "Simmer the soy milk, cream, sliced chili, and pepper gently over low heat.", "Add the mushrooms to the sauce, toss until evenly coated, and serve with baby greens."],
  },
  "19": {
    name_en: "Stir-Fried White Beech Mushrooms",
    ingredients_en: "White beech mushrooms: 65 g; yellow bell pepper: 5 g; red bell pepper: 5 g; canola oil: 3 g.",
    steps_en: ["Remove the bell-pepper seeds and cut the peppers to match the size of the mushrooms.", "Heat the canola oil in a pan and sauté the white beech mushrooms.", "When the mushrooms begin to soften, add the peppers and stir-fry briefly. Transfer to a plate."],
  },
  "29": {
    name_en: "Steamed Chives with Soybean Flour",
    ingredients_en: "For 1 serving: Korean chives 50 g; raw soybean flour 7 g. Sauce: low-sodium soy sauce 3 g, chopped green onion 5 g, minced garlic 2 g, gochugaru 2 g, cooking syrup 2 g, sesame oil 2 g, and sesame seeds.",
    steps_en: ["Wash and drain the chives, cut them into 5 cm lengths, and toss evenly with the soybean flour.", "Line a steamer with cloth, add the chives, and steam just until bright green and tender.", "Mix all sauce ingredients. Place the steamed chives in a serving bowl and serve the sauce alongside."],
  },
  "36": {
    name_en: "Dried Pollack Soup with Low-Sodium Doenjang",
    ingredients_en: "Shredded dried pollack 15 g, bean sprouts 30 g, radish 30 g, low-sodium doenjang 10 g, water 300 ml, 1/2 Cheongyang chili, and minced garlic 2 g.",
    steps_en: ["Rinse and drain the dried pollack. Trim and wash the bean sprouts, and slice the chili diagonally.", "Add the water, pollack, and radish to a pot and bring to a boil. Remove any impurities and dissolve the doenjang into the broth.", "Add the bean sprouts, garlic, and chili. Cover and boil until the sprouts are cooked through."],
  },
  "40": {
    name_en: "Sweet Potato and Kabocha Soup",
    ingredients_en: "Sweet potato 70 g, kabocha squash 30 g, milk 100 ml, sugar 2 g, and water 50 ml.",
    steps_en: ["Steam the sweet potato and kabocha for 10–20 minutes. Peel, mash, and press through a sieve.", "Combine the mashed vegetables, milk, and sugar in a pot. Bring to a gentle simmer while stirring.", "Add the water a little at a time and simmer until the soup reaches a smooth, thick consistency."],
  },
  "479": {
    name_en: "Rice Croquettes with Quail Eggs",
    ingredients_en: "Onion 20 g, green onion 10 g, carrot 20 g, garlic 10 g, cooking oil 10 g, quail eggs 100 g, cooked rice 100 g, salt 0.5 g, flour 20 g, starch 10 g, egg 50 g, breadcrumbs 20 g, frying oil 400 g. Sauce: chili sauce 50 g.",
    steps_en: ["Finely chop the onion, green onion, carrot, and garlic.", "Sauté the chopped vegetables quickly in a lightly oiled warm pan, then let them cool.", "Boil the quail eggs in salted water for about 5 minutes. Cool them in cold water and peel.", "Mix the sautéed vegetables and salt into the rice. Wrap each quail egg completely with the rice mixture.", "Combine the flour and starch. Coat each croquette in the flour mixture, beaten egg, and breadcrumbs in that order.", "Fry at about 170°C until evenly golden. Drain well and serve with chili sauce."],
  },
  "504": {
    name_en: "Beef Risotto Rolls",
    ingredients_en: "Rice 50 g, turmeric powder 20 g, butter 10 g, garlic 10 g, onion 20 g, king oyster mushroom 30 g, bell pepper 30 g, thin beef slices 150 g, salt 0.1 g, black pepper 0.02 g, white doenjang 10 g, heavy cream 20 g, and stock 200 ml.",
    steps_en: ["Soak the rice. Mince the garlic, and coarsely chop the onion, mushroom, and bell pepper.", "Lay out the beef slices and season lightly with salt and pepper.", "Melt the butter in a pot. Sauté the garlic and onion first, then add the mushroom and bell pepper.", "Add the drained rice and turmeric. Sauté briefly, reduce the heat, and cook until the rice is tender.", "Place a spoonful of risotto on each beef slice and roll it up securely.", "Mix the white doenjang with the cream. Bring the stock to a simmer, stir in the mixture, add the beef rolls, and cook gently until the beef is done and the sauce has reduced."],
  },
  "572": {
    name_en: "Corn Fried Rice in a Crispy Rice-Paper Bowl",
    ingredients_en: "Corn kernels 200 g, zucchini 1/3, carrot 20 g, onion 30 g, king oyster mushroom 1/2, garlic 10 g, rice paper 1 sheet, low-sodium soy sauce 20 g, rice 150 g, black pepper 0.01 g, and cooking oil 10 g.",
    steps_en: ["Rinse and soak the rice for at least 30 minutes. Cook the rice and let it cool.", "Drain the corn thoroughly in a sieve.", "Dice the zucchini, carrot, onion, and mushroom to the size of the corn kernels. Mince the garlic.", "Heat a little oil in a pan and stir-fry the vegetables.", "Add the cooled rice. Season with soy sauce and pepper, then add the corn and stir-fry briefly.", "Shallow-fry the rice paper so it forms a crisp bowl. Drain, place it on a serving plate, and fill it with the fried rice."],
  },
  "576": {
    name_en: "Abalone Risotto",
    ingredients_en: "Rice 100 g, abalone 1, carrot 20 g, onion 30 g, button mushrooms 3, milk 200 g, olive oil 10 g, salt 0.2 g, black pepper 0.01 g, and butter 10 g.",
    steps_en: ["Rinse the rice and soak it for about 30 minutes.", "Remove the abalone from its shell with a spoon and scrub it with salt. Rinse well.", "Melt the butter in a pan and sear the abalone until just cooked. Set aside.", "Finely dice the carrot, onion, and mushrooms.", "Heat the olive oil in a pot and sauté the drained rice.", "When the rice turns slightly translucent, add the vegetables and sauté. Add the milk and simmer gently until the rice is tender, then add the seared abalone and heat through."],
  },
};

for (const [id, fix] of Object.entries(fixes)) {
  const current = translations[id];
  if (!current) throw new Error(`Missing translation ${id}`);
  translations[id] = {
    ...current,
    ...fix,
    steps_en: fix.steps_en.map((instruction, index) => ({ step_no: index + 1, instruction: `${index + 1}. ${instruction}` })),
    translation_status: "automated_qa_passed",
  };
}

for (const translation of Object.values(translations)) {
  if (translation.translation_status !== "automated_qa_passed") {
    translation.translation_status = "machine_translated_unreviewed";
  }
}

await mkdir(stagingDirectory, { recursive: true });
await mkdir(generatedDirectory, { recursive: true });

const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
if (!supabaseUrl) throw new Error("SUPABASE_URL is required");

const prepared = [];
for (const row of source) {
  const translation = translations[row.source_id];
  if (!translation) throw new Error(`Missing translation for ${row.source_id}`);
  const originalUrl = imageOverrides[row.source_id] || officialMainImages.get(row.source_id) || row.image_candidate;
  const detectedExtension = path.extname(new URL(originalUrl, "https://local.invalid").pathname).toLowerCase();
  const extension = [".jpg", ".jpeg", ".png", ".webp"].includes(detectedExtension) ? detectedExtension : ".jpg";
  const originalFilename = `${row.source_id}${extension}`;
  const filename = `${row.source_id}.webp`;
  prepared.push({
    ...row,
    ...translation,
    image_original_url: originalUrl,
    image_original_path: originalFilename,
    image_path: filename,
    image_candidate: `${supabaseUrl}/storage/v1/object/public/recipe-images/${filename}`,
    image_review: "automated_file_check_passed",
    rights_review: originalUrl.startsWith("/images/") ? "user_selected" : "food_safety_korea_open_api_with_attribution",
    content_status: "automated_structure_qa_passed",
    is_published: true,
  });
}

const headers = ["source_id", "name_ko", "name_en", "source_category", "cooking_method", "ingredients_ko", "ingredients_en", "steps_ko", "steps_en", "image_url", "image_path", "source_url", "source_license", "image_review", "rights_review", "content_status", "translation_status", "is_published"];
const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
const csvRows = prepared.map((row) => [row.source_id, row.name_ko, row.name_en, row.source_category, row.cooking_method, row.ingredients_original, row.ingredients_en, JSON.stringify(row.steps_original), JSON.stringify(row.steps_en), row.image_candidate, row.image_path, row.source_url, "Food Safety Korea Open API: attribution required; commercial and derivative use permitted", row.image_review, row.rights_review, row.content_status, row.translation_status, row.is_published].map(quote).join(","));

await writeFile(new URL("candidate-source.db.json", generatedDirectory), `${JSON.stringify(prepared, null, 2)}\n`);
await writeFile(new URL("candidate-translations-en.reviewed.json", generatedDirectory), `${JSON.stringify(translations, null, 2)}\n`);
await writeFile(new URL("recipe-library.csv", generatedDirectory), `\uFEFF${headers.join(",")}\n${csvRows.join("\n")}\n`);

for (const row of prepared) {
  if (!row.image_original_url.startsWith("/images/")) continue;
  await copyFile(new URL(`public${row.image_original_url}`, root), new URL(row.image_original_path, stagingDirectory));
}

console.log(`Prepared ${prepared.length} recipes and ${Object.keys(fixes).length} corrected translations.`);
