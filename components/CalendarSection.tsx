"use client";

import { useState } from "react";

const calendarId =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "YOUR_CALENDAR_ID";

function calendarEmbedUrl(year: number, month: number) {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);
  const startStr = start.toISOString().slice(0, 10).replace(/-/g, "");
  const endStr = end.toISOString().slice(0, 10).replace(/-/g, "");
  return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&dates=${startStr}/${endStr}&mode=MONTH`;
}

export default function CalendarSection() {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;
  const nextYear = thisMonth === 12 ? thisYear + 1 : thisYear;
  const nextMonthNum = thisMonth === 12 ? 1 : thisMonth + 1;

  const [showNextMonth, setShowNextMonth] = useState(false);
  const year = showNextMonth ? nextYear : thisYear;
  const month = showNextMonth ? nextMonthNum : thisMonth;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-2 text-center text-xl font-bold text-[#333] sm:text-2xl">
        営業日カレンダー
      </h2>
      <p className="mb-6 text-center text-sm text-[#666]">
        定休日：日曜・祝日（隔週水・土は不定休あり）
      </p>

      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setShowNextMonth(false)}
          className={`min-h-[44px] min-w-[44px] rounded-lg px-4 py-2.5 text-sm font-bold transition sm:px-5 ${
            !showNextMonth
              ? "bg-[#c2185b] text-white shadow"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {thisYear}年{thisMonth}月
        </button>
        <button
          type="button"
          onClick={() => setShowNextMonth(true)}
          className={`min-h-[44px] min-w-[44px] rounded-lg px-4 py-2.5 text-sm font-bold transition sm:px-5 ${
            showNextMonth
              ? "bg-[#c2185b] text-white shadow"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {nextYear}年{nextMonthNum}月
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e8d46a]/40 bg-white p-3 shadow-sm sm:p-4">
        <div className="relative aspect-[3/4] min-h-[280px] w-full overflow-hidden rounded-lg bg-[#faf5e8] sm:min-h-[360px]">
          <iframe
            title={`${year}年${month}月のカレンダー`}
            src={calendarEmbedUrl(year, month)}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-[#666]">
        ※ 表示するには Google カレンダーの共有設定で「埋め込み」用のカレンダーIDを設定してください。
      </p>
    </section>
  );
}
