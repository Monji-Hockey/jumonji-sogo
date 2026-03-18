import Link from "next/link";
import { getExcerpt, getLatestVoices } from "@/lib/voices";

export default function VoicesSection() {
  const voices = getLatestVoices(3);

  return (
    <section className="border-y border-[#e8d46a]/30 bg-[#fefdfb] px-3 py-12 sm:px-4 sm:py-14 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-[#333] sm:text-2xl">
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
                <p className="text-xs font-bold tracking-wide text-[#c2185b]">
                  {v.customerLabel}
                </p>
                <p className="mt-1 text-sm font-bold text-[#333]">{v.subject}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#333]">
                  {getExcerpt(v.body, 110)}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/voices/${v.id}`}
                    className="text-sm font-bold text-[#c2185b] underline hover:no-underline"
                  >
                    続きを読む
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

