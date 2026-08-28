import Link from "next/link";
import VoicesList from "@/components/VoicesList";
import {
  formatLatestUpdateLabel,
  getArchivedVoices,
  getVoicesWithinMonths,
  groupVoicesByPeriod,
} from "@/lib/voices";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客様の声",
  description: "株式会社十文字総合開発に寄せられたお客様の声を掲載しています。",
};

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
          毎月お客様の声を掲載しています。月を選んでご覧ください。直近12か月分を表示し、それ以前は過去分として掲載しています（個人情報は匿名化しています）。
        </p>
        {latestUpdate ? (
          <p className="mt-2 text-sm font-medium text-[#333]">
            最終更新：{latestUpdate}
          </p>
        ) : null}

        <VoicesList
          recentGroups={recentGroups}
          archivedGroups={archivedGroups}
          archivedCount={archived.length}
        />

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
