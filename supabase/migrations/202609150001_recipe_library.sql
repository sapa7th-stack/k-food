begin;

create table if not exists public.recipe_library (
  source_id text primary key,
  name_ko text not null,
  name_en text not null,
  source_category text not null,
  cooking_method text not null,
  ingredients_ko text not null,
  ingredients_en text not null,
  steps_ko jsonb not null,
  steps_en jsonb not null,
  image_url text not null,
  image_path text not null unique,
  source_url text not null,
  source_license text not null,
  image_review text not null,
  rights_review text not null,
  content_status text not null,
  translation_status text not null,
  is_published boolean not null default false,
  updated_at timestamptz not null default now()
);

create index if not exists recipe_library_published_category_idx
  on public.recipe_library (is_published, source_category, name_ko);

alter table public.recipe_library enable row level security;
revoke all on public.recipe_library from anon, authenticated;
grant select on public.recipe_library to anon, authenticated;
drop policy if exists "Read published recipe library" on public.recipe_library;
create policy "Read published recipe library" on public.recipe_library
  for select to anon, authenticated using (is_published = true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'recipe-images',
  'recipe-images',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

commit;
