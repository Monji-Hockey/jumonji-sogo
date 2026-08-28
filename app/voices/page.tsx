import Link from "next/link";
import {
  formatLatestUpdateLabel,
  formatVoicePeriod,
  getArchivedVoices,
  getVoicesWithinMonths,
  groupVoicesByPeriod,
  type Voice,
} from "@/lib/voices";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客様の声",
  description: "株式会社十文字総合開発に寄せられたお客様の声を掲載しています。",
};

function VoiceCard({ v }: { v: Voice }) {
  return (
    <article className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="text-xs font-bold tracking-wide text-[#c2185b]">
          {v.customerLabel}
        </p>
        <p className="text-xs text-[#888]">{formatVoicePeriod(v)}</p>
      </div>
      <p className="mt-1 text-lg font-bold text-[#333]">{v.subject}</p>
      <p className="mt-3 leading-relaxed text-[#333]">{v.body}</p>
    </article>
  );
}

export default function VoicesPage() {
  const recent = getVoicesWithinMonths(undefined, 12);
  const archived = getArchivedVoices(undefined, 12);
  const recentGroups = groupVoicesByPeriod(recent);
  const archivedGroups = groupVoicesByPeriod(archived);
  const latestUpdate = formatLatestUpdateLabel();

  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
          お客様の声
        </h1>
        <p className="text-sm text-[#666]">
          毎月お客様の声を掲載しています。直近12か月分を表示し、それ以前は過去分として掲載しています（個人情報は匿名化しています）。
        </p>
        {latestUpdate ? (
          <p className="mt-2 text-sm font-medium text-[#333]">
            最終更新：{latestUpdate}
          </p>
        ) : null}

        {recent.length === 0 && archived.length === 0 ? (
          <p className="mt-8 rounded-xl border border-[#e8d46a]/40 bg-white p-6 text-center text-sm text-[#666]">
            現在、お客様の声はありません。
          </p>
        ) : (
          <div className="mt-8 space-y-10">
            {recentGroups.map((group) => (
              <section key={group.key}>
                <h2 className="mb-4 text-base font-bold text-[#c2185b] sm:text-lg">
                  {group.label}
                  <span className="ml-2 text-sm font-normal text-[#888]">
                    （{group.voices.length}件）
                  </span>
                </h2>
                <div className="space-y-4">
                  {group.voices.map((v) => (
                    <VoiceCard key={v.id} v={v} />
                  ))}
                </div>
              </section>
            ))}

            {archived.length > 0 ? (
              <details className="rounded-xl border border-[#e8d46a]/40 bg-white p-4 sm:p-5">
                <summary className="cursor-pointer text-sm font-bold text-[#333]">
                  過去のお客様の声（{archived.length}件）
                </summary>
                <div className="mt-6 space-y-10">
                  {archivedGroups.map((group) => (
                    <section key={group.key}>
                      <h2 className="mb-4 text-base font-bold text-[#c2185b] sm:text-lg">
                        {group.label}
                        <span className="ml-2 text-sm font-normal text-[#888]">
                          （{group.voices.length}件）
                        </span>
                      </h2>
                      <div className="space-y-4">
                        {group.voices.map((v) => (
                          <VoiceCard key={v.id} v={v} />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </details>
            ) : null}
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
