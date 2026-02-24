import Link from "next/link";
import { getNewsList } from "@/lib/microcms";

export const metadata = {
  title: "お知らせ",
  description: "株式会社十文字総合開発のお知らせ一覧です。",
};

function formatDate(s: string | undefined): string {
  if (!s) return "";
  const d = new Date(s);
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsListPage() {
  const { contents } = await getNewsList(50, 0);

  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-xl font-bold text-[#333] sm:text-2xl">
          お知らせ
        </h1>
        <p className="mb-8 text-sm text-[#666]">
          最新のお知らせを掲載しています。
        </p>

        {contents.length === 0 ? (
          <p className="rounded-xl border border-[#e8d46a]/40 bg-white py-12 text-center text-sm text-[#666] shadow-sm">
            現在、お知らせはありません
          </p>
        ) : (
          <ul className="space-y-4">
            {contents.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/news/${item.id}`}
                  className="block rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:p-6"
                >
                  <time
                    className="mb-2 block text-xs font-medium text-[#c2185b]"
                    dateTime={item.publishedAt ?? ""}
                  >
                    {formatDate(item.publishedAt)}
                  </time>
                  <h2 className="font-bold text-[#333] sm:text-lg">
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#c2185b] underline hover:no-underline"
          >
            ← トップへ戻る
          </Link>
        </p>
      </div>
    </main>
  );
}
