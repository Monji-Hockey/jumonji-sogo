import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleNewBadge from "@/components/ArticleNewBadge";
import { getDayoriDetail, getDayoriList } from "@/lib/microcms";
import { formatJaDate, isPublishedWithinDays, RECENT_PUBLISH_DAYS } from "@/lib/date";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const { contents } = await getDayoriList(100, 0).catch(() => ({ contents: [] }));
  return contents.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = await getDayoriDetail(id);
  if (!post) return { title: "十文字総合開発だより" };
  return {
    title: `${post.title} | 十文字総合開発だより`,
    description: post.title,
  };
}

export default async function DayoriDetailPage({ params }: Props) {
  const { id } = await params;
  const post = await getDayoriDetail(id);

  if (!post) notFound();

  const showNew = isPublishedWithinDays(post.publishedAt, RECENT_PUBLISH_DAYS);

  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <time
              className="text-sm font-medium text-[#c2185b]"
              dateTime={post.publishedAt ?? ""}
            >
              {formatJaDate(post.publishedAt)}
            </time>
            {showNew ? <ArticleNewBadge /> : null}
          </div>
          <h1 className="text-xl font-bold text-[#333] sm:text-2xl">{post.title}</h1>
        </header>

        {post.body ? (
          <div
            className="prose prose-neutral max-w-none prose-headings:text-[#333] prose-a:text-[#c2185b] prose-strong:text-[#333]"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div className="prose prose-neutral max-w-none">
            <p className="text-[#666]">（本文はありません）</p>
          </div>
        )}

        <p className="mt-10">
          <Link
            href="/dayori"
            className="text-sm font-medium text-[#c2185b] underline hover:no-underline"
          >
            ← 十文字総合開発だより一覧へ
          </Link>
        </p>
      </article>
    </main>
  );
}

