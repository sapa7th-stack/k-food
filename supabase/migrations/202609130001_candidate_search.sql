begin;
grant select (source_id,name_ko,source_category,ingredients_original,steps_original,image_candidate,source_url)
on public.recipe_candidates to anon, authenticated;
create policy "Read searchable food candidates" on public.recipe_candidates
for select to anon, authenticated using (true);
commit;
