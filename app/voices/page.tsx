import type { Metadata } from "next";
import { VOICES } from "@/lib/voices";

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
                  {v.area} {v.nameLabel}
                </p>
                <p className="mt-3 leading-relaxed text-[#333]">{v.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

