import Link from "next/link";
import { getLatestDayoriPublished, getLatestNewsPublished } from "@/lib/microcms";
import { isPublishedWithinDays, RECENT_PUBLISH_DAYS } from "@/lib/date";

export default async function RecentPublishBanner() {
  const [latestNews, latestDayori] = await Promise.all([
    getLatestNewsPublished(),
    getLatestDayoriPublished(),
  ]);

  const showNews =
    latestNews != null && isPublishedWithinDays(latestNews.publishedAt, RECENT_PUBLISH_DAYS);
  const showDayori =
    latestDayori != null &&
    isPublishedWithinDays(latestDayori.publishedAt, RECENT_PUBLISH_DAYS);

  if (!showNews && !showDayori) {
    return null;
  }

  return (
    <div
      className="border-b border-[#c2185b]/20 px-3 py-2.5 sm:px-6 lg:px-12 xl:px-20"
      style={{
        background: "linear-gradient(90deg, #fce4ec 0%, #f5e6a6 50%, #fce4ec 100%)",
      }}
      role="region"
      aria-label="直近の新着お知らせ"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-2 text-center text-sm text-[#333] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1 sm:text-base">
        {showNews && (
          <p className="m-0">
            <span className="font-semibold text-[#ad1457]">直近{RECENT_PUBLISH_DAYS}日以内</span>
            に新しい
            <Link href="/news" className="mx-1 font-bold text-[#c2185b] underline underline-offset-2 hover:no-underline">
              お知らせ
            </Link>
            があります。
          </p>
        )}
        {showDayori && (
          <p className="m-0">
            <span className="font-semibold text-[#ad1457]">直近{RECENT_PUBLISH_DAYS}日以内</span>
            に新しい
            <Link href="/dayori" className="mx-1 font-bold text-[#c2185b] underline underline-offset-2 hover:no-underline">
              十文字総合開発だより
            </Link>
            があります。
          </p>
        )}
      </div>
    </div>
  );
}
