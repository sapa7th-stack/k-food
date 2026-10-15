import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f7] px-6">
      <section className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <p className="font-bold uppercase tracking-widest text-red-600">K-Food Table</p>
        <h1 className="mt-4 text-4xl font-black">인터넷 연결을 확인해주세요.</h1>
        <p className="mt-4 leading-7 text-neutral-600">저장된 페이지는 계속 볼 수 있습니다. 연결이 복구되면 아래 버튼으로 다시 시도하세요.</p>
        <p className="mt-3 leading-7 text-neutral-500">Check your internet connection, then try again.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-red-600 px-7 py-4 font-bold text-white">다시 시도 · Retry</Link>
      </section>
    </main>
  );
}
