import Link from "next/link";
import { formatVoicePeriod, getExcerpt, getLatestVoices } from "@/lib/voices";

type VoicesSectionProps = {
  variant?: "standalone" | "embedded";
};

export default function VoicesSection({ variant = "standalone" }: VoicesSectionProps) {
  const voices = getLatestVoices(3);
  const isEmbedded = variant === "embedded";

  return (
    <section
      className={
        isEmbedded
          ? "mb-10"
          : "bg-[#fefdfb] px-3 py-12 sm:px-4 sm:py-14 lg:px-12 xl:px-20"
      }
    >
      <div className={isEmbedded ? "mx-auto max-w-5xl" : "mx-auto max-w-4xl"}>
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <h2 className={isEmbedded ? "text-lg font-bold text-[#333] sm:text-xl" : "text-xl font-bold text-[#333] sm:text-2xl"}>
              お客様の声
            </h2>
            <p className="mt-1 text-sm text-[#666]">
              お客さまからいただいたご感想を掲載しています（個人情報は匿名化しています）。
            </p>
          </div>
          <Link
            href="/voices"
            className="shrink-0 rounded-lg border border-[#c2185b]/30 bg-white px-3 py-2 text-sm font-bold text-[#c2185b] shadow-sm transition hover:bg-[#fce4ec]/40"
          >
            一覧へ
          </Link>
        </div>

        {voices.length === 0 ? (
          <p className="rounded-xl border border-[#e8d46a]/40 bg-white p-6 text-center text-sm text-[#666]">
            現在、お客様の声はありません。
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voices.map((v) => (
              <article
                key={v.id}
                className="rounded-xl border border-[#e8d46a]/50 bg-[#fefdf8] p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <p className="text-xs font-bold tracking-wide text-[#c2185b]">
                    {v.customerLabel}
                  </p>
                  <p className="text-xs text-[#888]">{formatVoicePeriod(v)}</p>
                </div>
                <p className="mt-1 text-sm font-bold text-[#333]">{v.subject}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#333]">
                  {getExcerpt(v.body, 110)}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
