import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社十文字総合開発の会社情報、代表メッセージ、経営理念・経営ビジョンを掲載しています。",
};

const cardClass =
  "rounded-xl border border-[#e8d46a]/40 bg-white p-6 shadow-sm";
const cardTitleClass = "mb-4 text-base font-bold text-[#c2185b]";

export default function CompanyPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* 会社の様子（トップ） */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl shadow-md md:max-w-xl">
          <Image
            src="/images/十文字総合開発_会社画像.jpg"
            alt="株式会社十文字総合開発の会社の様子"
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 576px"
          />
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#333] sm:text-2xl">
            会社概要
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <RevealOnScroll delayMs={60}>
            <div className={cardClass}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-base font-bold text-[#c2185b]">会社情報</h2>
                <Image
                  src="/images/十文字総合開発_ロゴだけ.svg"
                  alt="株式会社 十文字総合開発 ロゴ"
                  width={160}
                  height={48}
                  className="h-10 w-auto max-w-[220px] object-contain sm:h-12"
                />
              </div>
              <dl className="space-y-3 text-sm text-[#333]">
                <div>
                  <dt className="font-medium text-[#666]">社名</dt>
                  <dd>株式会社 十文字総合開発</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">代表取締役</dt>
                  <dd>十文字 直子</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">設立年月日</dt>
                  <dd>平成7年6月16日</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">営業時間</dt>
                  <dd>月曜〜土曜 8:00 〜 17:10</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">定休日</dt>
                  <dd>日曜日、祝日（隔週水・土は不定休あり）</dd>
                </div>
              </dl>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <div className={cardClass}>
              <h2 className={cardTitleClass}>代表メッセージ</h2>
              <p className="text-sm leading-relaxed text-[#333]">
                おかげさまで創業より30年、地域の皆様に保険のご相談を承ってまいりました。
                私たちは「保険を通じて、お客様と社員の幸せを守ること」を経営理念に掲げ、お客様一人ひとりに寄り添ったご提案と、契約後のきめ細かなサポートに努めております。
                これからも、安心してご相談いただける保険代理店であり続けますよう、スタッフ一同精進してまいります。どうぞよろしくお願いいたします。
              </p>
              <p className="mt-4 text-right text-sm font-medium text-[#555]">
                代表取締役　十文字 直子
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <RevealOnScroll delayMs={180}>
            <div className={cardClass}>
              <h2 className={cardTitleClass}>経営理念</h2>
              <p
                className="text-sm leading-relaxed text-[#333] sm:text-base"
                style={{ fontFamily: "serif" }}
              >
                保険を通じて、お客様と社員の幸せを守ること
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#666]">
                私たちの行動の指針となる理念です。お客様と社員、ともに幸せであることを願い、日々の業務に取り組んでおります。
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={220}>
            <div className={cardClass}>
              <h2 className={cardTitleClass}>経営ビジョン</h2>
              <p className="text-sm leading-relaxed text-[#333] sm:text-base">
                私たちは地域に根ざした保険代理店として、常に「お客様のために」を原点に行動します。
                誠実な対応と確かな提案で地域に安心を届け、岩手県で最も頼られる存在を目指します。
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-[#f5d6a2] bg-[#fff8ed] px-4 py-3 shadow-sm sm:flex-row sm:gap-3">
            <Image
              src="/images/hitotsuboshi/color/security_action_hitotsuboshi-small_color.png"
              alt="SECURITY ACTION 一つ星 ロゴ"
              width={180}
              height={60}
              className="h-10 w-auto sm:h-11"
            />
            <p className="text-center text-xs font-medium leading-relaxed text-[#8b4a56] sm:text-left sm:text-sm">
              SECURITY ACTION 一つ星を宣言しました
            </p>
          </div>
        </div>

        <p className="pt-4 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg border-2 border-[#c2185b]/30 bg-white px-4 py-2 text-sm font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/40"
          >
            ホームに戻る
          </Link>
        </p>
      </div>
    </main>
  );
}
