import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社十文字総合開発の会社情報と代表メッセージを掲載しています。",
};

export default function CompanyPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-xl font-bold text-[#333] sm:text-2xl">
            会社概要
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="rounded-lg border-2 border-[#c2185b]/30 bg-white px-3 py-2 text-sm font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/40"
            >
              ホームに戻る
            </Link>
          </div>
        </div>

        <div className="mb-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <RevealOnScroll delayMs={60}>
            <div className="rounded-xl border border-[#e8d46a]/40 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-[#c2185b]/30 pb-2">
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
            <div className="rounded-xl border border-[#e8d46a]/40 bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b border-[#c2185b]/30 pb-2 text-base font-bold text-[#c2185b]">
                代表メッセージ
              </h2>
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
      </div>
    </main>
  );
}

