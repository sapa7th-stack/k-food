import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | K-Food Table",
  description: "K-Food Table 개인정보처리방침 및 Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-14 text-neutral-800">
      <Link href="/" className="font-bold text-red-700">← K-Food Table</Link>
      <h1 className="mt-8 text-4xl font-black text-neutral-950">개인정보처리방침</h1>
      <p className="mt-3 text-neutral-500">시행일: 2026년 9월 14일</p>
      <div className="mt-10 space-y-8 leading-8">
        <section><h2 className="text-2xl font-bold">수집하는 정보</h2><p className="mt-2">K-Food Table은 회원가입 기능이 없으며 이름, 이메일, 위치정보와 같은 개인 식별 정보를 수집하지 않습니다. 선택한 표시 언어를 기억하기 위해 기기에 언어 설정 쿠키(kfood-locale)를 저장합니다.</p></section>
        <section><h2 className="text-2xl font-bold">정보의 이용과 공유</h2><p className="mt-2">언어 설정은 사이트를 한국어 또는 영어로 표시하는 목적으로만 사용됩니다. 광고 추적이나 사용자 프로파일링에 사용하지 않으며 제3자에게 판매하지 않습니다.</p></section>
        <section><h2 className="text-2xl font-bold">외부 콘텐츠</h2><p className="mt-2">일부 레시피와 이미지에는 식품안전나라 등 외부 출처의 링크가 포함됩니다. 외부 사이트를 방문하면 해당 사이트의 개인정보처리방침이 적용됩니다.</p></section>
        <section><h2 className="text-2xl font-bold">보관과 삭제</h2><p className="mt-2">언어 설정 쿠키는 최대 1년간 기기에 보관됩니다. 브라우저 또는 앱의 사이트 데이터 설정에서 언제든 삭제할 수 있습니다.</p></section>
        <section><h2 className="text-2xl font-bold">개발자 및 문의</h2><p className="mt-2">K-Food Table은 AIPRO가 운영하며 제작자는 Yang Seung Chan입니다. 개인정보 관련 문의는 <a className="font-semibold text-red-700 underline" href="mailto:aipro7524@gmail.com">aipro7524@gmail.com</a>으로 보내주세요.</p></section>
      </div>

      <hr className="my-14 border-neutral-200" />
      <h1 lang="en" className="text-4xl font-black text-neutral-950">Privacy Policy</h1>
      <p lang="en" className="mt-3 text-neutral-500">Effective: September 14, 2026</p>
      <div lang="en" className="mt-10 space-y-8 leading-8">
        <section><h2 className="text-2xl font-bold">Information we collect</h2><p className="mt-2">K-Food Table has no account registration and does not collect identifying information such as your name, email address, or location. It stores a language preference cookie (kfood-locale) on your device.</p></section>
        <section><h2 className="text-2xl font-bold">Use and sharing</h2><p className="mt-2">The language preference is used only to display the website in Korean or English. We do not use it for advertising, user profiling, or sale to third parties.</p></section>
        <section><h2 className="text-2xl font-bold">External content</h2><p className="mt-2">Some recipes and images link to external sources such as Food Safety Korea. Their privacy policies apply when you visit those services.</p></section>
        <section><h2 className="text-2xl font-bold">Retention and deletion</h2><p className="mt-2">The language cookie remains on your device for up to one year. You may delete it at any time through your browser or app site-data settings.</p></section>
        <section><h2 className="text-2xl font-bold">Developer and contact</h2><p className="mt-2">K-Food Table is operated by AIPRO and created by Yang Seung Chan. For privacy inquiries, email <a className="font-semibold text-red-700 underline" href="mailto:aipro7524@gmail.com">aipro7524@gmail.com</a>.</p></section>
      </div>
    </main>
  );
}
