# 3단계: Supabase 레시피 연결

구현 완료: 서버 전용 데이터 조회, 한영 데이터 매핑, 테이블 SQL, 초기 음식 4개, 공개 데이터 읽기 정책, 오류/빈 목록 처리.
2026-09-12: kfood-table Supabase 프로젝트에 테이블과 초기 레시피 4개를 생성하고 .env.local 연결을 완료했습니다.

## 연결 순서

1. Supabase 프로젝트의 SQL Editor에서 `supabase/migrations/202609110001_recipes.sql`을 한 번 실행합니다. 기존 recipes 테이블이 있으면 먼저 구조를 비교해야 합니다. 이 파일은 기존 테이블을 삭제하지 않습니다.
2. `supabase/seed.sql`을 실행합니다. 현재 선택한 음식 사진을 포함하며, 재실행해도 기존 레시피를 덮어쓰지 않습니다.
3. `.env.example`을 `.env.local`로 복사하고 프로젝트 URL과 publishable key 또는 기존 anon key를 입력합니다. service_role/secret key는 사용하지 않습니다.
4. 개발 서버를 재시작합니다.
5. Supabase Table Editor에서 설명을 수정하고 홈을 새로고침해 반영을 확인합니다. is_published=false인 음식은 방문자에게 보이지 않습니다.

키가 모두 비어 있으면 기존 샘플 4개를 표시합니다. 설정이 일부만 있거나 DB 조회가 실패하면 오류 메시지를 표시합니다. 공개된 레시피가 없으면 빈 목록을 표시합니다.

현재 홈 조회는 display_order, id 순 최대 100개입니다. 사진은 public/images 안의 파일 경로를 사용합니다. 외부 이미지 저장소 및 상세 조리 재료·단계는 후속 단계에서 확장합니다. 현재 샘플 및 사용자가 선택한 사진은 그대로 보존했습니다.

## 검증

- `npm run build`: 빌드 및 타입 검사 통과.
- `node --test tests/recipes.test.cjs`: 모의 클라이언트로 미설정, 부분 설정, 데이터 매핑, 빈 결과, 오류 처리 5개 검사 통과.
- 로컬 홈 HTTP 응답, 한글 문구와 선택한 사진 경로 확인.
- 실제 Supabase SQL 실행 완료. 공개 키로 레시피 4개 조회 성공. RLS 활성화, anon SELECT 허용, INSERT/UPDATE/DELETE 금지 및 is_published=true 정책을 확인했습니다.
