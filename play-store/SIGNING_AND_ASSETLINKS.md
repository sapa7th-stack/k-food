# Android 서명 및 웹 연결

## 현재 업로드 키

- 키 파일: `android/kfood-table-upload.keystore`
- 설정 파일: `android/keystore.properties`
- 별칭: `kfoodtable`
- 위 두 파일은 저장소에서 제외되며 함께 안전한 외부 저장소에 백업해야 한다.
- 업로드 키는 AAB를 Play Console에 올릴 때 사용한다. Play App Signing 키와는 별개의 키다.

## 서명된 AAB 만들기

`android` 폴더에서 `./gradlew bundleRelease`를 실행한다. 결과물은 `android/app/build/outputs/bundle/release/app-release.aab`이다. `keystore.properties`가 있으면 release 빌드에 업로드 키가 자동 적용된다.

## Digital Asset Links 적용

1. 서명된 AAB를 Play Console 내부 테스트 트랙에 업로드하고 Play App Signing을 활성화한다.
2. Play Console의 **설정 > 앱 무결성 > 앱 서명 키 인증서**에서 SHA-256 인증서 지문을 복사한다.
3. `play-store/assetlinks.template.json`의 `REPLACE_WITH_PLAY_APP_SIGNING_SHA256`을 해당 지문으로 바꾼다.
4. 완성 파일을 `public/.well-known/assetlinks.json`으로 저장하고 Vercel에 배포한다.
5. `https://kfood-table.vercel.app/.well-known/assetlinks.json`이 로그인이나 리디렉션 없이 HTTP 200으로 열리는지 확인한다.

업로드 키 지문을 대신 넣으면 Play 배포본의 주소 표시줄이 사라지지 않을 수 있으므로 반드시 **앱 서명 키 인증서** 지문을 사용한다.
