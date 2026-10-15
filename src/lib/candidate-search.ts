import { classifyCandidate } from './explore-categories';
export type Candidate = {
  source_id: string; name_ko: string; source_category: string;
  ingredients_original: string;
  steps_original: { step_no: number; instruction: string }[];
  image_candidate: string | null; source_url: string;
  name_en?: string; ingredients_en?: string;
  steps_en?: { step_no: number; instruction: string }[];
};
export type CandidateCollection = 'all' | 'easy' | 'kimchi';

export function isEasyCandidate(row: Candidate) {
  return row.steps_original.length <= 3 && row.ingredients_original.length <= 200;
}

export function isKimchiCandidate(row: Candidate) {
  return /김치|깍두기|소박이/.test(`${row.name_ko} ${row.ingredients_original}`);
}

export function filterCandidates(rows: Candidate[], query: string, category: string, collection: CandidateCollection = 'all') {
  const terms = query.normalize('NFKC').toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const filtered = rows.filter(row => (collection === 'all' || (collection === 'easy' && isEasyCandidate(row)) || (collection === 'kimchi' && isKimchiCandidate(row))) &&
    (category === 'all' || classifyCandidate(row) === category || row.source_category === category) &&
    terms.every(term => `${row.name_ko} ${row.ingredients_original} ${row.name_en ?? ''} ${row.ingredients_en ?? ''}`.normalize('NFKC').toLocaleLowerCase().includes(term)));
  return collection === 'kimchi'
    ? filtered.toSorted((a, b) => Number(/김치|깍두기|소박이/.test(b.name_ko)) - Number(/김치|깍두기|소박이/.test(a.name_ko)))
    : filtered;
}
export const categoryEnglish: Record<string, string> = { '국&찌개': 'Soups & Stews', '밥': 'Rice & Porridge', '반찬': 'Side Dishes', '일품': 'Main Dishes' };
export function candidateImage(url: string | null) {
  if (!url) return null;
  if (/^\/images\/[a-z0-9][a-z0-9._-]*$/i.test(url)) return url;
  try { const parsed = new URL(url); return parsed.hostname === 'www.foodsafetykorea.go.kr' && /^https?:$/.test(parsed.protocol) ? `https://${parsed.host}${parsed.pathname}` : null; }
  catch { return null; }
}
