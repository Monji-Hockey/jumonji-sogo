import Link from "next/link";
import { VOICES } from "@/lib/voices";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客様の声",
  description: "株式会社十文字総合開発に寄せられたお客様の声を掲載しています。",
};

export default function VoicesPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
          お客様の声
        </h1>
        <p className="mb-8 text-sm text-[#666]">
          お客さまからいただいたご感想を掲載しています（個人情報は匿名化しています）。
        </p>

        {VOICES.length === 0 ? (
          <p className="rounded-xl border border-[#e8d46a]/40 bg-white p-6 text-center text-sm text-[#666]">
            現在、お客様の声はありません。
          </p>
        ) : (
          <div className="space-y-4">
            {VOICES.map((v) => (
              <article
                key={v.id}
                className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] p-6 shadow-sm"
              >
                <p className="text-xs font-bold tracking-wide text-[#c2185b]">
                  {v.customerLabel}
                </p>
                <p className="mt-1 text-lg font-bold text-[#333]">{v.subject}</p>
                <p className="mt-3 leading-relaxed text-[#333]">{v.body}</p>
                <div className="mt-4">
                  <Link
                    href={`/voices/${v.id}`}
                    className="text-sm font-bold text-[#c2185b] underline hover:no-underline"
                  >
                    詳細を見る
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg border-2 border-[#c2185b] bg-white px-5 py-2.5 text-sm font-bold text-[#c2185b] transition hover:bg-[#fce4ec]/50"
          >
            ホームに戻る
          </Link>
        </p>
      </div>
    </main>
  );
}

