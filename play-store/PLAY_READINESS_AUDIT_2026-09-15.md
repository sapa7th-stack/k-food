# K-Food Table Google Play 출시 준비 감사

검사일: 2026-09-15

## 판정

현재 웹 앱과 Android 프로젝트는 빌드되지만, Google Play에 그대로 제출할 상태는 아니다. 서명, Digital Asset Links, 스토어 그래픽, 개인정보 문의 연락처, 실제 기기 테스트가 완료되어야 한다.

## 통과

- Next.js 프로덕션 빌드 및 TypeScript 검사
- ESLint
- 자동 테스트 6개
- 500개 레시피 데이터 감사: 누락 번역, 영문 내 한글 잔존, 번역 꼬리표, 중복 ID·이름·사진, 누락 사진, 단계 번호 오류 모두 0건
- Android release 번들 컴파일: API 36, 패키지 `com.kfoodtable.app`, 버전 코드 1
- Android Lint: 0 errors, 11 non-blocking warnings
- 민감한 Android 권한 없음
- npm production dependency audit: 알려진 취약점 0건
- 공개 웹사이트, 웹 매니페스트, 서비스 워커, 개인정보처리방침: HTTP 200
- 390×844 모바일 화면에서 가로 넘침 없음
- 영어 검색 `tofu`: 82건, 한국어 검색 `두부`: 80건
- 검색 결과 첫 페이지 음식 사진 12장 실제 로딩 성공
- 김치 별도 페이지와 서비스 워커 동작 확인

## 이번 감사에서 수정

- 영문에 한글이 남거나 불필요한 꼬리 문자가 붙은 9개 레시피 번역 수정
- 데이터 감사에서 결함이 있으면 명령이 실패하도록 변경
- Android API 36 release 빌드가 한글 경로와 제한된 메모리에서 동작하도록 Gradle 설정 보완
- 회전 가능한 화면으로 변경해 태블릿·폴더블 호환성 개선
- Android 13 이상 테마 아이콘용 단색 아이콘 추가
- 오래된 Android Manifest 패키지 표기 제거
- 빌드 캐시, 이미지 준비 폴더, Android 프로젝트가 Vercel 배포에 포함되지 않도록 제외

## 제출 차단 항목

1. `android/app/build/outputs/bundle/release/app-release.aab`는 컴파일됐지만 서명되지 않았다. 업로드 키를 만들고 안전하게 백업한 뒤 서명된 AAB를 다시 만들어야 한다.
2. `https://kfood-table.vercel.app/.well-known/assetlinks.json`이 HTTP 404다. Play App Signing 인증서의 SHA-256 지문을 받아 배포해야 TWA가 주소 표시줄 없는 앱 화면으로 열린다.
3. `recipe_library`는 공개 조회 기준 0행이며 `recipe-images` 표본 객체도 없다. 현재 앱은 Supabase가 아니라 로컬 JSON 500개와 식품안전나라 외부 사진 499개를 사용한다.
4. Google Play 필수 특성 그래픽 1024×500과 휴대전화 스크린샷 2장 이상이 없다.
5. 개인정보처리방침에 실제 개발자 정보와 개인정보 문의 이메일 또는 문의 방법을 넣어야 한다.
6. Play Console의 개발자 신원·연락처 확인, 데이터 보안, 광고 여부, 대상 연령, 콘텐츠 등급을 완료해야 한다.
7. 2023-11-13 이후 생성된 개인 개발자 계정이면 12명이 14일 연속 참여하는 비공개 테스트가 필요하다.

## 출시 전 품질 권고

- 500개 영문은 구조 검사를 통과했지만 전체가 사람의 문장·조리 정확성 검수를 받은 상태는 아니다. 화면에도 `Unreviewed candidates`가 표시된다.
- 초기 HTML이 약 1.4MB이고 2.5MB를 넘는 PNG가 있어 느린 모바일 네트워크에서 체감 속도를 확인하고 데이터 지연 로딩과 WebP 전환을 권한다.
- Android Lint의 남은 11개 경고는 `autoVerify`의 하위 API 호환 경고와 Bubblewrap 생성 리소스 중복·미사용 경고다. 제출 차단 오류는 아니다.
- 데이터 보안 답변은 앱 코드상 수집 없음으로 작성할 수 있지만, Vercel 또는 Supabase에서 Analytics나 로그 보관을 켰다면 실제 설정에 맞춰 다시 신고해야 한다.

## 현재 산출물

- 미서명 검사 번들: `android/app/build/outputs/bundle/release/app-release.aab`
- Android Lint 보고서: `android/app/build/reports/lint-results-release.html`
- 스토어 등록 문안: `play-store/STORE_LISTING.md`
- 데이터 보안 초안: `play-store/DATA_SAFETY.md`

