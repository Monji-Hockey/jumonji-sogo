"use client";

import { useState, useEffect, useCallback } from "react";

type CalendarEvent = {
  date: string;
  title: string;
  isAllDay: boolean;
  start?: string;
  end?: string;
};

function getMonthLabel(year: number, month: number) {
  return `${year}年${month}月`;
}

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const firstDay = first.getDay();
  const daysCount = last.getDate();
  const leadingEmpty = firstDay;
  const totalCells = Math.ceil((leadingEmpty + daysCount) / 7) * 7;
  const days: { date: string; day: number; isCurrentMonth: boolean }[] = [];
  for (let i = 0; i < leadingEmpty; i++) {
    const d = new Date(year, month - 1, 1 - (leadingEmpty - i));
    days.push({
      date: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
      day: d.getDate(),
      isCurrentMonth: false,
    });
  }
  for (let d = 1; d <= daysCount; d++) {
    days.push({
      date: `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
      day: d,
      isCurrentMonth: true,
    });
  }
  const fill = totalCells - days.length;
  for (let i = 0; i < fill; i++) {
    const d = new Date(year, month, i + 1);
    days.push({
      date: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
      day: d.getDate(),
      isCurrentMonth: false,
    });
  }
  return days;
}

function eventsByDate(events: CalendarEvent[]): Record<string, CalendarEvent[]> {
  const map: Record<string, CalendarEvent[]> = {};
  for (const e of events) {
    if (!map[e.date]) map[e.date] = [];
    map[e.date].push(e);
  }
  return map;
}

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export default function CalendarSection() {
  const now = new Date();
  const initialYear = now.getFullYear();
  const initialMonth = now.getMonth() + 1;

  const [office, setOffice] = useState<"honbu" | "kuji">("honbu");
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const nextYear = initialMonth === 12 ? initialYear + 1 : initialYear;
  const nextMonthNum = initialMonth === 12 ? 1 : initialMonth + 1;
  const isThisMonth = year === initialYear && month === initialMonth;
  const isNextMonth = year === nextYear && month === nextMonthNum;

  const goPrevMonth = () => {
    if (isThisMonth) return;
    if (month === 1) {
      setMonth(12);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (isNextMonth) return;
    if (month === 12) {
      setMonth(1);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const fetchEvents = useCallback(async (y: number, m: number, off: "honbu" | "kuji") => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/calendar?year=${y}&month=${m}&office=${off}`
      );
      const data = await res.json();
      if (!res.ok) {
        setEvents([]);
        setError(data.error ?? "読み込みに失敗しました");
        return;
      }
      setEvents(data.events ?? []);
    } catch {
      setEvents([]);
      setError("読み込みに失敗しました");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents(year, month, office);
  }, [year, month, office, fetchEvents]);

  const days = getDaysInMonth(year, month);
  const byDate = eventsByDate(events);
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <h2 className="mb-2 text-center text-xl font-bold text-[#333] sm:text-2xl">
        営業日カレンダー
      </h2>
      <p className="mb-6 text-center text-sm text-[#666]">
        定休日：日曜・祝日（隔週水・土は不定休あり）
      </p>

      {/* 本社 / 久慈 タブ */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setOffice("honbu")}
          className={`min-h-[44px] rounded-lg px-5 py-2.5 text-sm font-bold transition sm:px-6 ${
            office === "honbu"
              ? "bg-[#c2185b] text-white shadow"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          二戸本社
        </button>
        <button
          type="button"
          onClick={() => setOffice("kuji")}
          className={`min-h-[44px] rounded-lg px-5 py-2.5 text-sm font-bold transition sm:px-6 ${
            office === "kuji"
              ? "bg-[#c2185b] text-white shadow"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          久慈営業所
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e8d46a]/40 bg-white p-3 shadow-sm sm:p-4">
        <div className="min-h-[280px] w-full overflow-hidden rounded-lg bg-[#faf5e8] sm:min-h-[360px]">
          {/* 前月・表示月・次月（今月・来月のみ表示） */}
          <div className="flex items-center justify-between border-b border-[#e8d46a]/50 bg-[#f5e6a6]/40 px-2 py-2 sm:px-3">
            <button
              type="button"
              onClick={goPrevMonth}
              disabled={isThisMonth}
              className="rounded px-2 py-1 text-sm font-medium text-[#333] hover:bg-[#e8d46a]/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent sm:px-3"
              aria-label="前の月"
            >
              ‹ 前月
            </button>
            <span className="text-sm font-bold text-[#333] sm:text-base">
              {getMonthLabel(year, month)}
            </span>
            <button
              type="button"
              onClick={goNextMonth}
              disabled={isNextMonth}
              className="rounded px-2 py-1 text-sm font-medium text-[#333] hover:bg-[#e8d46a]/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent sm:px-3"
              aria-label="次の月"
            >
              次月 ›
            </button>
          </div>
          {/* 曜日ヘッダー */}
          <div className="grid grid-cols-7 border-b border-[#e8d46a]/50 bg-[#f5e6a6]/60 text-center text-xs font-bold text-[#333] sm:text-sm">
            {WEEKDAYS.map((w, i) => (
              <div
                key={w}
                className={`py-2 ${i === 0 ? "text-[#c2185b]" : ""} ${i === 6 ? "text-[#1976d2]" : ""}`}
              >
                {w}
              </div>
            ))}
          </div>

          {loading ? (
            <div className="flex min-h-[240px] items-center justify-center text-[#666] sm:min-h-[300px]">
              <span className="text-sm">読み込み中…</span>
            </div>
          ) : (
            <div className="grid grid-cols-7 text-sm">
              {days.map((cell, idx) => {
                const isSun = idx % 7 === 0;
                const isSat = idx % 7 === 6;
                const isToday = cell.date === todayKey && cell.isCurrentMonth;
                const dayEvents = byDate[cell.date] ?? [];

                return (
                  <div
                    key={cell.date}
                    className={`min-h-[36px] border-b border-r border-[#e8d46a]/30 p-1 sm:min-h-[44px] sm:p-1.5 ${
                      !cell.isCurrentMonth ? "bg-white/50 text-[#999]" : ""
                    } ${isSun ? "text-[#c2185b]" : ""} ${isSat ? "text-[#1976d2]" : ""}`}
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold sm:h-7 sm:w-7 sm:text-sm ${
                        isToday
                          ? "bg-[#c2185b] text-white"
                          : cell.isCurrentMonth
                            ? "text-[#333]"
                            : "text-[#999]"
                      }`}
                    >
                      {cell.day}
                    </div>
                    <div className="mt-0.5 space-y-0.5">
                      {dayEvents.slice(0, 3).map((ev, i) => (
                        <div
                          key={`${ev.date}-${ev.title}-${i}`}
                          className="truncate rounded bg-[#e8d46a]/40 px-1 py-0.5 text-[10px] text-[#333] sm:text-xs"
                          title={ev.title}
                        >
                          {ev.title}
                        </div>
                      ))}
                      {dayEvents.length > 3 && (
                        <div className="text-[10px] text-[#666]">
                          +{dayEvents.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-2 text-center text-xs text-[#c2185b]">{error}</p>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-[#666]">
        ※ 予定は Google カレンダーの公開 iCal から取得しています。Cookie
        を許可していない環境でも表示されます。
      </p>
    </section>
  );
}
