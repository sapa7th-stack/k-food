'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { candidateImage, filterCandidates, type Candidate, type CandidateCollection } from '@/lib/candidate-search';
import { exploreCategories, classifyCandidate } from '@/lib/explore-categories';

export default function CandidateSearch({ candidates, candidateStatus, category, onCategoryChange, collection, onCollectionChange }: { candidates: Candidate[]; candidateStatus: 'loading' | 'ready' | 'error'; category: string; onCategoryChange: (value: string) => void; collection: CandidateCollection; onCollectionChange: (value: CandidateCollection) => void }) {
  const { locale } = useLanguage(); const ko = locale === 'ko';
  const [query, setQuery] = useState(''); const [page, setPage] = useState(1);
  const results = filterCandidates(candidates, query, category, collection); const pages = Math.max(1, Math.ceil(results.length / 12));
  const currentPage = Math.min(page, pages);
  return <section id="recipe-search" className="mx-auto max-w-7xl px-5 pb-20">
    <h2 className="text-3xl font-black">{ko ? '레시피 검색' : 'Search recipes'}</h2>
    <p className="mt-3 text-neutral-600">{ko ? '한국어 또는 영어로 음식명이나 재료를 입력하세요. 여러 단어로 결과를 좁힐 수 있습니다.' : 'Search dish names or ingredients in English or Korean. Multiple words narrow your results.'}</p>
    {collection !== 'all' && <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl bg-neutral-900 px-5 py-4 text-white"><span className="font-bold">{collection === 'easy' ? (ko ? '정말 쉬운 요리 · 3단계 이하' : 'Really Easy Cooking · 3 steps or fewer') : (ko ? '김치 전용 코너' : 'Kimchi Corner')}</span><button type="button" onClick={() => { onCollectionChange('all'); setPage(1); }} className="rounded-full bg-white/15 px-4 py-2 text-sm hover:bg-white/25">{ko ? '전체 레시피 보기' : 'Show all recipes'}</button></div>}
    <p className="mt-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">{ko ? '검수 전 후보 · 식품안전나라 원본 자료입니다. 사진과 조리 설명은 검수·보강 중이며 영어는 자동 번역입니다.' : 'Unreviewed candidates · Food Safety Korea recipes with machine-translated English. Photos and cooking instructions are still under review.'}</p>
    {candidateStatus === 'loading' ? <div role="status" aria-live="polite" className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6"><p className="font-semibold">{ko ? '500개 레시피를 불러오는 중입니다…' : 'Loading 500 recipes…'}</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-100"><div className="h-full w-1/2 animate-pulse rounded-full bg-red-600" /></div></div> : candidateStatus === 'error' ? <div role="alert" className="mt-6 rounded-xl bg-red-50 p-5"><p>{ko ? '후보 목록을 불러오지 못했습니다.' : 'Could not load recipe candidates.'}</p><button className="mt-3 underline" onClick={() => window.location.reload()}>{ko ? '다시 시도' : 'Retry'}</button></div> : <>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <label className="flex-1"><span className="mb-2 block font-semibold">{ko ? '음식명·재료' : 'Dish or ingredient'}</span><input type="search" value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder={ko ? '김치, 두부, 닭고기…' : 'Kimchi, tofu, chicken…'} className="w-full rounded-xl border border-neutral-300 bg-white p-4 focus:outline-red-600" /></label>
        <label><span className="mb-2 block font-semibold">{ko ? '분류' : 'Category'}</span><select value={category} onChange={e => { onCategoryChange(e.target.value); onCollectionChange('all'); setPage(1); }} className="w-full rounded-xl border border-neutral-300 bg-white p-4"><option value="all">{ko ? '전체' : 'All'}</option>{exploreCategories.map(c => <option key={c.title} value={c.title}>{ko ? c.ko : c.title}</option>)}</select></label>
      </div>
      <p role="status" className="my-5 text-neutral-600">{ko ? `전체 ${candidates.length}개 중 ${results.length}개 검색됨` : `${results.length} of ${candidates.length} recipes`}</p>
      {!results.length && <p className="rounded-xl bg-white p-8">{ko ? '검색 결과가 없습니다. 다른 재료나 짧은 음식명으로 검색해주세요.' : 'No matches. Try a different ingredient or shorter dish name.'}</p>}
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">{results.slice((currentPage-1)*12,currentPage*12).map(r => <article key={r.source_id} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
        <CandidatePhoto url={candidateImage(r.image_candidate)} name={ko ? r.name_ko : r.name_en ?? r.name_ko} ko={ko} />
        <div className="p-5"><p className="text-sm text-red-700">{ko ? exploreCategories.find(c => c.title === classifyCandidate(r))?.ko : classifyCandidate(r)} · {ko ? '검수 전' : 'Unreviewed'}</p><h3 className="mt-2 text-xl font-bold">{ko ? r.name_ko : r.name_en ?? r.name_ko}</h3>
          {!ko && <p lang="ko" className="mt-1 text-sm text-neutral-500">{r.name_ko}</p>}
          <details className="mt-4"><summary className="cursor-pointer font-semibold text-red-700">{ko ? '재료와 조리법 보기' : 'Ingredients & instructions'}</summary><h4 className="mt-4 font-bold">{ko ? '재료' : 'Ingredients'}</h4><p className="mt-2 whitespace-pre-line text-sm leading-7">{ko ? r.ingredients_original : r.ingredients_en ?? r.ingredients_original}</p><h4 className="mt-4 font-bold">{ko ? '조리 순서' : 'Steps'}</h4><ol className="mt-2 list-decimal space-y-3 pl-5 text-sm leading-7">{(ko ? r.steps_original : r.steps_en ?? r.steps_original).map(s => <li key={s.step_no}>{s.instruction.replace(/^\s*\d+[.)]\s*/, '')}</li>)}</ol></details>
          <a href="https://www.foodsafetykorea.go.kr/api/newDatasetDetail.do?svc_no=COOKRCP01" target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs text-neutral-500 underline">{ko ? '출처: 식품안전나라' : 'Source: Food Safety Korea'}</a>
        </div></article>)}</div>
      {pages > 1 && <nav aria-label={ko ? '검색 결과 페이지' : 'Search pages'} className="mt-8 flex items-center justify-center gap-5"><button disabled={currentPage===1} onClick={() => setPage(currentPage-1)} className="rounded-full border px-5 py-3 disabled:opacity-40">{ko ? '이전' : 'Previous'}</button><span>{currentPage} / {pages}</span><button disabled={currentPage===pages} onClick={() => setPage(currentPage+1)} className="rounded-full border px-5 py-3 disabled:opacity-40">{ko ? '다음' : 'Next'}</button></nav>}
    </>}
  </section>;
}
function CandidatePhoto({ url, name, ko }: { url: string | null; name: string; ko: boolean }) {
  const [failed, setFailed] = useState(false);
  return url && !failed ? /* eslint-disable-next-line @next/next/no-img-element */
    <img src={url} alt={name} loading="lazy" onError={() => setFailed(true)} className="aspect-[4/3] w-full bg-neutral-100 object-contain" /> : <div className="flex aspect-[4/3] items-center justify-center bg-neutral-100 text-neutral-500">{name} · {ko ? '사진 준비 중' : 'Photo unavailable'}</div>;
}
