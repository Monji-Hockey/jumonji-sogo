import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-w-0 break-words px-3 py-16 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-3xl rounded-xl border border-[#e8d46a]/40 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-[#c2185b]">404 Not Found</p>
        <h1 className="mt-2 text-xl font-bold text-[#333] sm:text-2xl">
          ページが見つかりませんでした
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#666]">
          URLが変更されたか、削除された可能性があります。トップページからお探しください。
        </p>
        <p className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-lg border-2 border-[#c2185b] bg-white px-5 py-2.5 text-sm font-bold text-[#c2185b] transition hover:bg-[#fce4ec]/50"
          >
            ホームへ戻る
          </Link>
        </p>
      </div>
    </main>
  );
}

