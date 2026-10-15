import 'server-only';
import type { Candidate } from './candidate-search';
import candidateData from '@/data/candidate-source.json';
import englishData from '@/data/candidate-translations-en.json';
const translations = englishData as Record<string, { source_name_ko: string; name_en: string; ingredients_en: string; steps_en: Candidate['steps_original'] }>;
export async function getCandidates(): Promise<{ candidates: Candidate[]; candidateError: boolean }> {
  const candidates = (candidateData as Candidate[]).map((row) => {
    const english = translations[row.source_id];
    return english?.source_name_ko === row.name_ko
      ? { ...row, name_en: english.name_en, ingredients_en: english.ingredients_en, steps_en: english.steps_en }
      : row;
  });
  return { candidates, candidateError: false };
}
