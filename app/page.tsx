import Image from "next/image";
import CompanySection from "@/components/CompanySection";
import CalendarSection from "@/components/CalendarSection";

export default function Home() {
  return (
    <>
      {/* メインビジュアル：30周年・経営理念（HP 会社案内.pdf 準拠） */}
      <section
        className="relative overflow-hidden px-3 py-12 sm:px-4 sm:py-24"
        style={{
          background: "linear-gradient(160deg, #f5e6a6 0%, #fce4ec 50%, #f5e6a6 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-bold tracking-wider text-[#c2185b] sm:text-base">
            保険代理店として、お陰様で30周年をむかえました
          </p>
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/十文字総合開発_ロゴ.svg"
              alt="株式会社十文字総合開発"
              width={280}
              height={84}
              className="h-20 w-auto sm:h-24 md:h-28"
              priority
            />
          </div>
          <div className="mt-10 border-t border-[#e8d46a]/40 pt-8">
            <h2 className="mb-3 text-sm font-bold tracking-wide text-[#c2185b]">
              スズランに込めた想い
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
              受け取った人に幸せが訪れるという鈴蘭の花言葉のように、保険を通じて安心をお届けしたい
            </p>
          </div>
        </div>
      </section>

      {/* 経営理念・経営ビジョン（同じデザインで並列） */}
      <section className="border-y border-[#e8d46a]/30 bg-[#fefdfb] px-3 py-10 sm:px-4 sm:py-12">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] px-5 py-5 sm:px-6 sm:py-6">
            <p className="mb-2 text-xs font-bold tracking-wide text-[#c2185b]">経営理念</p>
            <p className="text-sm leading-relaxed text-[#333] sm:text-base" style={{ fontFamily: "serif" }}>
              保険を通じて、お客様と社員の幸せを守ること
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#666]">
              私たちの行動の指針となる理念です。お客様と社員、ともに幸せであることを願い、日々の業務に取り組んでおります。
            </p>
          </div>
          <div className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] px-5 py-5 sm:px-6 sm:py-6">
            <p className="mb-2 text-xs font-bold tracking-wide text-[#c2185b]">経営ビジョン</p>
            <p className="text-sm leading-relaxed text-[#333] sm:text-base">
              私たちは地域に根ざした保険代理店として、常に「お客様のために」を原点に行動します。
              誠実な対応と確かな提案で地域に安心を届け、岩手県で最も頼られる存在を目指します。
            </p>
          </div>
        </div>
      </section>

      {/* 事故・故障：電話であることを明確に、ページ中部に配置 */}
      <section className="border-y border-[#e8d46a]/30 bg-[#fefdfb] px-3 py-8 sm:px-4 sm:py-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium text-[#666]">事故・故障のご連絡はお電話で</p>
          <a
            href="tel:0195-23-7141"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:opacity-95 active:scale-[0.98]"
            style={{
              backgroundColor: "#d32f2f",
              boxShadow: "0 4px 16px rgba(211,47,47,0.4)",
            }}
            aria-label="事故・故障はこちら 電話 0195-23-7141"
          >
            <span className="text-2xl" aria-hidden>📞</span>
            <span>事故・故障はこちら</span>
            <span className="text-base font-semibold">0195-23-7141</span>
          </a>
        </div>
      </section>

      {/* 会社概要（設立・代表メッセージ・強み・営業所） */}
      <CompanySection />

      {/* 営業日カレンダー：ボタンで今月/来月を切り替え */}
      <CalendarSection />
    </>
  );
}
