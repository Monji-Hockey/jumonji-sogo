import Image from "next/image";
import Link from "next/link";
import CompanySection from "@/components/CompanySection";
import CalendarSection from "@/components/CalendarSection";
import NewsSection from "@/components/NewsSection";
import DayoriSection from "@/components/DayoriSection";
import RecentPublishBanner from "@/components/RecentPublishBanner";
import RevealOnScroll from "@/components/RevealOnScroll";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      <RecentPublishBanner />
      {/* メインビジュアル：30周年・経営理念（HP 会社案内.pdf 準拠） */}
      <RevealOnScroll>
        <section
          className="relative px-3 py-10 sm:px-4 sm:py-16 lg:px-12 xl:px-20"
          style={{
            background: "linear-gradient(160deg, #f5e6a6 0%, #fce4ec 50%, #f5e6a6 100%)",
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold tracking-wider text-[#c2185b] sm:text-base">
              保険代理店として、お陰様で30周年をむかえました
            </p>
            <div className="mb-6 flex w-full justify-center">
              <Image
                src="/images/十文字総合開発_ロゴ%26名前.svg"
                alt="株式会社十文字総合開発"
                width={280}
                height={84}
                className="mx-auto block h-24 w-auto max-w-full object-contain sm:h-28 md:h-32"
                priority
              />
            </div>
            <div className="mt-7 pt-5">
              <h2 className="mb-3 text-sm font-bold tracking-wide text-[#c2185b]">
                スズランに込めた想い
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
                受け取った人に幸せが訪れるという鈴蘭の花言葉のように、保険を通じて安心をお届けしたい
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 各種お問い合わせ・事故・故障受付 */}
      <RevealOnScroll delayMs={80}>
        <section className="bg-[#fefdfb] px-3 py-8 sm:px-4 sm:py-10 lg:px-12 xl:px-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
            {/* 各種お問い合わせ */}
            <div className="flex w-full flex-col items-center gap-3">
              <p className="text-sm font-medium text-[#666]">各種お問い合わせはこちら</p>
              <a
                href="tel:0195-23-7141"
                className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 rounded-xl border-2 border-[#c2185b] bg-white px-6 py-4 text-base font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/50 active:scale-[0.98] sm:text-lg"
                aria-label="十文字総合開発本社 電話 0195-23-7141"
              >
                <span className="text-xl" aria-hidden>📞</span>
                <span>
                  十文字総合開発本社
                  <br />
                  <span className="font-semibold">0195-23-7141</span>
                </span>
              </a>
              <Link
                href="/contact"
                className="text-sm font-medium text-[#c2185b] underline hover:no-underline"
              >
                メールでのお問い合わせはこちら
              </Link>
            </div>

            {/* 事故・故障 24時間365日 */}
            <div className="flex w-full flex-col items-center gap-3">
              <p className="text-sm font-medium text-[#666]">事故・故障の24時間365日受付対応はこちら</p>
              <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:max-w-none sm:justify-center">
                <a
                  href="tel:0120-365-110"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-95 active:scale-[0.98] sm:text-lg"
                  style={{
                    backgroundColor: "#d32f2f",
                    boxShadow: "0 4px 16px rgba(211,47,47,0.4)",
                  }}
                  aria-label="損保ジャパン フリーダイヤル 0120-365-110"
                >
                  損保ジャパン
                  <br />
                  0120-365-110
                </a>
                <a
                  href="tel:0120-044-787"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-95 active:scale-[0.98] sm:text-lg"
                  style={{
                    backgroundColor: "#d32f2f",
                    boxShadow: "0 4px 16px rgba(211,47,47,0.4)",
                  }}
                  aria-label="共栄火災 フリーダイヤル 0120-044-787"
                >
                  共栄火災
                  <br />
                  0120-044-787
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 会社概要（設立・代表メッセージ・強み・営業所） */}
      <RevealOnScroll delayMs={120}>
        <CompanySection />
      </RevealOnScroll>

      {/* お知らせ：最新3件 */}
      <RevealOnScroll delayMs={160}>
        <NewsSection />
      </RevealOnScroll>

      {/* 十文字総合開発だより：最新3件 */}
      <RevealOnScroll delayMs={160}>
        <DayoriSection />
      </RevealOnScroll>

      {/* 営業日カレンダー：ボタンで今月/来月を切り替え */}
      <RevealOnScroll delayMs={200}>
        <CalendarSection />
      </RevealOnScroll>
    </>
  );
}
