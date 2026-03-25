import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVoiceById, VOICES } from "@/lib/voices";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return VOICES.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const v = getVoiceById(id);
  if (!v) {
    return { title: "お客様の声" };
  }
  return {
    title: `お客様の声：${v.subject}`,
    description: "株式会社十文字総合開発に寄せられたお客様の声を掲載しています。",
  };
}

export default async function VoiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const v = getVoiceById(id);
  if (!v) notFound();

  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="border-b border-[#e8d46a]/50 pb-3 text-2xl font-bold text-[#333]">
            お客様の声
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="rounded-lg border-2 border-[#c2185b]/30 bg-white px-3 py-2 text-sm font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/40"
            >
              ホームに戻る
            </Link>
            <Link
              href="/voices"
              className="rounded-lg border border-[#c2185b]/30 bg-white px-3 py-2 text-sm font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/40"
            >
              一覧へ戻る
            </Link>
          </div>
        </div>

        <article className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] p-6 shadow-sm">
          <p className="text-xs font-bold tracking-wide text-[#c2185b]">
            {v.customerLabel}
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#333]">{v.subject}</h2>
          <p className="mt-4 leading-relaxed text-[#333]">{v.body}</p>
        </article>
      </div>
    </main>
  );
}

