# K-Food Table Google Play 재검증

검사일: 2026-09-16

## 등록 정보

- 개발자/제작자: Yang Seung Chan
- 회사/개발자명: AIPRO
- 문의 이메일: aipro7524@gmail.com
- 패키지: `com.kfoodtable.app`
- 공개 도메인: `https://kfood-table.vercel.app`

개발자 정보는 앱 메타데이터, 개인정보처리방침, Play 등록 문안과 공개 운영 사이트에 반영했다.

## 판정

웹 앱과 Android 프로젝트는 정상적으로 빌드되며, 업로드 키로 서명된 AAB와 스토어 그래픽을 만들었다. Play Console에서 발급되는 Play App Signing 지문을 Digital Asset Links에 반영하고 정책 설문을 완료하면 내부 테스트 제출을 진행할 수 있다.

## 통과

- Next.js 프로덕션 빌드와 TypeScript 검사
- ESLint
- 자동 테스트 6개
- 500개 데이터 감사: 번역 누락, 영문 내 한글 잔존, 중복 ID·이름·사진, 누락 사진, 단계 번호 오류 모두 0건
- Android release 번들 컴파일 성공
- Android Lint 0 errors
- `compileSdkVersion 36`, `targetSdkVersion 36`
- 패키지 `com.kfoodtable.app`, 버전 코드 1
- 민감한 Android 권한 없음
- npm 프로덕션 의존성 취약점 0건
- 공개 홈페이지, 개인정보처리방침, 웹 매니페스트, 서비스 워커 HTTP 200
- 운영 배포 `https://kfood-table.vercel.app` 완료 및 개인정보처리방침 연락처 확인
- 초기 HTML에서 500개 데이터를 분리해 1.4MB 수준에서 33KB로 축소
- 1024×500 특성 그래픽과 1080×1920 휴대전화 스크린샷 4장 준비
- 업로드 키 생성 및 서명된 release AAB 검증

## 제출 차단 항목

1. 공개 `/.well-known/assetlinks.json`은 아직 없다. Play Console의 앱 서명 키 SHA-256 지문이 발급된 뒤 배포해야 한다.
2. 생성한 업로드 키와 비공개 설정 파일을 안전한 외부 저장소에 백업해야 한다.
3. Play Console 개발자 계정, 연락처·전화번호 인증, 콘텐츠 등급, 대상 연령, 광고 여부, 데이터 보안 설문 상태를 확인해야 한다.
4. 조직 계정으로 AIPRO를 등록한다면 D-U-N-S 번호, 조직 법적 이름·주소, 조직 전화번호와 웹사이트가 필요하다.

## 제품 데이터 상태

- Supabase `recipe_library`: 공개 조회 기준 0행
- Supabase `recipe-images/18.webp`: 없음
- 현재 앱은 로컬 JSON 500개와 식품안전나라 외부 사진을 사용하므로 화면은 동작한다.
- 500개 영문은 구조 감사를 통과했지만 전체 사람 검수 완료 상태는 아니며 화면에 `Unreviewed candidates`가 표시된다.

## 다음 출시 순서

1. 업로드 키와 `keystore.properties`를 안전하게 별도 백업한다.
2. Play Console에서 앱을 만들고 Play App Signing을 활성화한다.
3. 서명된 AAB를 내부 테스트 트랙에 올린다.
4. Play App Signing SHA-256 지문으로 `assetlinks.json`을 만들어 웹에 배포한다.
5. 준비한 특성 그래픽과 실제 앱 화면 스크린샷을 등록한다.
6. 정책 설문과 실제 기기 테스트를 완료한다.
