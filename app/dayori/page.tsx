import Link from "next/link";
import ArticleNewBadge from "@/components/ArticleNewBadge";
import { getDayoriList } from "@/lib/microcms";
import { formatJaDate } from "@/lib/date";

export const metadata = {
  title: "十文字総合開発だより",
  description: "株式会社十文字総合開発の社員発信一覧です。",
};

export default async function DayoriListPage() {
  const { contents } = await getDayoriList(50, 0);
  const latestId = contents[0]?.id;

  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-xl font-bold text-[#333] sm:text-2xl">
          十文字総合開発だより
        </h1>
        <p className="mb-8 text-sm text-[#666]">
          社員からのちょっとした発信を掲載しています。
        </p>

        {contents.length === 0 ? (
          <p className="rounded-xl border border-[#e8d46a]/40 bg-white py-12 text-center text-sm text-[#666] shadow-sm">
            現在、十文字総合開発だよりはありません
          </p>
        ) : (
          <ul className="space-y-4">
            {contents.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/dayori/${item.id}`}
                  className="block rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:p-6"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <time
                      className="text-xs font-medium text-[#c2185b]"
                      dateTime={item.publishedAt ?? ""}
                    >
                      {formatJaDate(item.publishedAt)}
                    </time>
                    {item.id === latestId ? <ArticleNewBadge /> : null}
                  </div>
                  <h2 className="font-bold text-[#333] sm:text-lg">{item.title}</h2>
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

