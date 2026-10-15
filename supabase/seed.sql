-- Safe to repeat: existing recipes and chosen photos are preserved.
insert into public.recipes (slug,name_ko,name_en,romanized,description_ko,description_en,image,category,cooking_time,difficulty,spicy_level,tags,is_published,display_order)
values
('bibimbap', '비빔밥', 'Bibimbap', 'Bibimbap', '밥 위에 여러 가지 나물과 고기, 달걀을 올리고 고추장과 함께 비벼 먹는 대표적인 한국 음식입니다.', 'One of Korea''s most iconic dishes, made with rice, seasoned vegetables, meat, egg, and gochujang.', '/images/bibimbap-fresh.jpg', 'Rice', 40, 'Medium', 2, ARRAY['Rice','Healthy','Popular'], true, 1),
('bulgogi', '불고기', 'Bulgogi', 'Bulgogi', '얇게 썬 소고기를 간장 기반의 달콤하고 짭조름한 양념에 재워 구워 먹는 대표 한식입니다.', 'Thinly sliced beef marinated in a sweet and savory soy-based sauce.', '/images/bulgogi-selected.png', 'BBQ', 35, 'Easy', 0, ARRAY['Beef','BBQ','Beginner'], true, 2),
('kimchi-jjigae', '김치찌개', 'Kimchi Jjigae', 'Gimchi-jjigae', '잘 익은 김치와 돼지고기 또는 참치 등을 넣어 깊은 맛을 내는 한국의 대표적인 찌개입니다.', 'A comforting Korean stew made with fermented kimchi, often cooked with pork or tuna.', '/images/kimchi-jjigae-selected.png', 'Stew', 40, 'Easy', 3, ARRAY['Stew','Spicy','Comfort Food'], true, 3),
('tteokbokki', '떡볶이', 'Tteokbokki', 'Tteokbokki', '쫄깃한 떡을 매콤달콤한 고추장 소스에 조려 만든 대표적인 한국 길거리 음식입니다.', 'Chewy rice cakes cooked in a spicy, sweet gochujang-based sauce.', '/images/tteokbokki-selected.png', 'Street Food', 25, 'Easy', 4, ARRAY['Street Food','Spicy','Popular'], true, 4)
on conflict (slug) do nothing;
