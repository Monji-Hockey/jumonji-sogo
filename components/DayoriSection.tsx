import Link from "next/link";
import ArticleNewBadge from "@/components/ArticleNewBadge";
import { getDayoriList } from "@/lib/microcms";
import { formatJaDate, isPublishedWithinDays, RECENT_PUBLISH_DAYS } from "@/lib/date";

export default async function DayoriSection() {
  const { contents } = await getDayoriList(3, 0);

  return (
    <section className="bg-[#fefdfb] px-3 py-10 sm:px-4 sm:py-12 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 flex justify-center gap-2 text-xl font-bold text-[#333] sm:text-2xl">
          <span aria-hidden>✉️</span>
          <span>十文字総合開発だより</span>
        </h2>
        <p className="mb-6 text-center text-sm text-[#666]">
          社員からのちょっとした発信をお届けします。
        </p>

        {contents.length === 0 ? (
          <p className="rounded-xl border border-[#e8d46a]/40 bg-white py-8 text-center text-sm text-[#666] shadow-sm">
            現在、十文字総合開発だよりはありません
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/dayori/${item.id}`}
                  className="block rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <time
                      className="text-xs font-medium text-[#c2185b]"
                      dateTime={item.publishedAt ?? ""}
                    >
                      {formatJaDate(item.publishedAt)}
                    </time>
                    {isPublishedWithinDays(item.publishedAt, RECENT_PUBLISH_DAYS) ? (
                      <ArticleNewBadge />
                    ) : null}
                  </div>
                  <h3 className="line-clamp-2 min-h-[2.5rem] font-bold leading-relaxed text-[#333] text-sm sm:min-h-[3rem] sm:text-base">
                    {item.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {contents.length > 0 && (
          <p className="mt-6 text-center">
            <Link
              href="/dayori"
              className="inline-block rounded-lg border-2 border-[#c2185b] bg-white px-5 py-2.5 text-sm font-bold text-[#c2185b] transition hover:bg-[#fce4ec]/50"
            >
              十文字総合開発だより一覧へ
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

