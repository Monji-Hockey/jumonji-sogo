"use client";

import { useState } from "react";
import {
  formatVoicePeriod,
  type Voice,
  type VoicePeriodGroup,
} from "@/lib/voices";

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

type VoicesListProps = {
  recentGroups: VoicePeriodGroup[];
  archivedGroups: VoicePeriodGroup[];
  archivedCount: number;
};

export default function VoicesList({
  recentGroups,
  archivedGroups,
  archivedCount,
}: VoicesListProps) {
  const [activeKey, setActiveKey] = useState(recentGroups[0]?.key ?? "");
  const activeGroup =
    recentGroups.find((g) => g.key === activeKey) ?? recentGroups[0] ?? null;

  if (recentGroups.length === 0 && archivedCount === 0) {
    return (
      <p className="mt-8 rounded-xl border border-[#e8d46a]/40 bg-white p-6 text-center text-sm text-[#666]">
        現在、お客様の声はありません。
      </p>
    );
  }

  return (
    <div className="mt-8 space-y-8">
      {recentGroups.length > 0 && activeGroup ? (
        <section>
          {recentGroups.length > 1 ? (
            <div
              className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1"
              role="tablist"
              aria-label="掲載月"
            >
              {recentGroups.map((group) => {
                const selected = group.key === activeGroup.key;
                return (
                  <button
                    key={group.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveKey(group.key)}
                    className={
                      selected
                        ? "shrink-0 border-b-2 border-[#c2185b] px-3 py-2 text-sm font-bold text-[#c2185b]"
                        : "shrink-0 border-b-2 border-transparent px-3 py-2 text-sm font-medium text-[#666] transition hover:text-[#c2185b]"
                    }
                  >
                    {group.label}
                    <span className="ml-1 font-normal text-[#888]">
                      ({group.voices.length})
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <h2 className="mb-4 text-base font-bold text-[#c2185b] sm:text-lg">
              {activeGroup.label}
              <span className="ml-2 text-sm font-normal text-[#888]">
                （{activeGroup.voices.length}件）
              </span>
            </h2>
          )}
          <div className="space-y-4" role="tabpanel">
            {activeGroup.voices.map((v) => (
              <VoiceCard key={v.id} v={v} />
            ))}
          </div>
        </section>
      ) : null}

      {archivedCount > 0 ? (
        <details className="rounded-xl border border-[#e8d46a]/40 bg-white p-4 sm:p-5">
          <summary className="cursor-pointer text-sm font-bold text-[#333]">
            過去のお客様の声（{archivedCount}件）
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
  );
}
