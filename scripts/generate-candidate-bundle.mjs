import { mkdir, readFile, writeFile } from 'node:fs/promises';

const sourceUrl = new URL('../src/data/candidate-source.json', import.meta.url);
const translationsUrl = new URL('../src/data/candidate-translations-en.json', import.meta.url);
const outputUrl = new URL('../public/data/candidates.json', import.meta.url);

const [source, translations] = await Promise.all([
  readFile(sourceUrl, 'utf8').then(JSON.parse),
  readFile(translationsUrl, 'utf8').then(JSON.parse),
]);

const merged = source.map((row) => {
  const translated = translations[row.source_id];
  return translated ? { ...row, ...translated } : row;
});

await mkdir(new URL('../public/data/', import.meta.url), { recursive: true });
await writeFile(outputUrl, `${JSON.stringify(merged)}\n`, 'utf8');
console.log(`Generated ${merged.length} lazy-loaded recipes at public/data/candidates.json`);
