import { readFile } from "node:fs/promises";

const candidates = JSON.parse(await readFile(new URL("../src/data/candidate-source.json", import.meta.url), "utf8"));
const translations = JSON.parse(await readFile(new URL("../src/data/candidate-translations-en.json", import.meta.url), "utf8"));
const korean = /[가-힣]/;
const counts = (values) => Object.fromEntries([...new Set(values)].map((value) => [value, values.filter((item) => item === value).length]));
const duplicates = (values) => Object.entries(counts(values)).filter(([, count]) => count > 1);

const missingTranslations = [];
const koreanInEnglish = [];
const incompleteSource = [];
const malformedImages = [];
const stepNumberIssues = [];

for (const row of candidates) {
  const translation = translations[row.source_id];
  if (!translation?.name_en || !translation?.ingredients_en || !translation?.steps_en?.length) {
    missingTranslations.push({ id: row.source_id, name: row.name_ko });
  } else {
    const englishText = `${translation.name_en} ${translation.ingredients_en} ${translation.steps_en.map((step) => step.instruction).join(" ")}`;
    if (korean.test(englishText)) koreanInEnglish.push({ id: row.source_id, name: row.name_ko });
  }

  if (!row.name_ko || !row.ingredients_original || !row.steps_original?.length || !row.source_category) {
    incompleteSource.push({ id: row.source_id, name: row.name_ko });
  }

  if (row.image_candidate && !/^https?:\/\//.test(row.image_candidate) && !/^\/images\/[a-z0-9][a-z0-9._-]*$/i.test(row.image_candidate)) {
    malformedImages.push({ id: row.source_id, image: row.image_candidate });
  }

  const stepNumbers = (row.steps_original || []).map((step) => step.step_no);
  if (new Set(stepNumbers).size !== stepNumbers.length || stepNumbers.some((number) => !Number.isInteger(number) || number < 1)) {
    stepNumberIssues.push({ id: row.source_id, name: row.name_ko, steps: stepNumbers });
  }
}

const imageUrls = candidates.map((row) => row.image_candidate).filter(Boolean);
const duplicateImages = duplicates(imageUrls).map(([image, count]) => ({ image, count }));
const duplicateNames = duplicates(candidates.map((row) => row.name_ko)).map(([name, count]) => ({ name, count }));
const trailingTranslationArtifacts = Object.entries(translations).filter(([, translation]) =>
  translation.steps_en?.some((step) => /(?:^|\s)[abc]\.?\s*$/i.test(step.instruction) || /\bYeojoo\b/i.test(step.instruction)),
).map(([id, translation]) => ({ id, name: translation.source_name_ko }));

const report = {
  totalCandidates: candidates.length,
  totalTranslations: Object.keys(translations).length,
  categoryCounts: counts(candidates.map((row) => row.source_category)),
  missingTranslations,
  koreanInEnglish,
  incompleteSource,
  malformedImages,
  missingImages: candidates.filter((row) => !row.image_candidate).map((row) => ({ id: row.source_id, name: row.name_ko })),
  duplicateIds: duplicates(candidates.map((row) => row.source_id)),
  duplicateNames,
  duplicateImages,
  stepNumberIssues,
  trailingTranslationArtifacts,
};

console.log(JSON.stringify(report, null, 2));

const blockingChecks = [
  report.missingTranslations,
  report.koreanInEnglish,
  report.incompleteSource,
  report.malformedImages,
  report.missingImages,
  report.duplicateIds,
  report.duplicateNames,
  report.duplicateImages,
  report.stepNumberIssues,
  report.trailingTranslationArtifacts,
];

if (report.totalCandidates !== 500 || report.totalTranslations !== 500 || blockingChecks.some((items) => items.length > 0)) {
  process.exitCode = 1;
}
