import ical from "node-ical";
import { NextRequest, NextResponse } from "next/server";

const calendarId =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || process.env.GOOGLE_CALENDAR_ID;
const PUBLIC_ICAL_URL = calendarId
  ? `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`
  : null;

export type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  isAllDay: boolean;
  start?: string; // ISO for timed events
  end?: string;
};

function toDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getMonthRange(year: number, month: number): { from: Date; to: Date } {
  const from = new Date(year, month - 1, 1, 0, 0, 0, 0);
  const to = new Date(year, month, 0, 23, 59, 59, 999);
  return { from, to };
}

function eventInRange(
  start: Date,
  end: Date,
  rangeFrom: Date,
  rangeTo: Date
): boolean {
  return start <= rangeTo && end >= rangeFrom;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year") ?? "", 10);
  const month = parseInt(searchParams.get("month") ?? "", 10);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12
  ) {
    return NextResponse.json(
      { error: "Invalid year or month" },
      { status: 400 }
    );
  }

  if (!PUBLIC_ICAL_URL || !calendarId) {
    return NextResponse.json(
      { events: [] as CalendarEvent[], message: "Calendar ID not configured" },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" } }
    );
  }

  try {
    const { from: rangeFrom, to: rangeTo } = getMonthRange(year, month);
    const res = await fetch(PUBLIC_ICAL_URL, {
      headers: { "User-Agent": "JujimonSogoCalendar/1.0" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`iCal fetch failed: ${res.status}`);
    const icsText = await res.text();
    const data = ical.sync.parseICS(icsText) as Record<string, unknown>;

    const events: CalendarEvent[] = [];
    const seen = new Set<string>();

    type ParsedEvent = {
      type?: string;
      start?: Date;
      end?: Date;
      summary?: string;
      rrule?: unknown;
      isFullDay?: boolean;
    } & Record<string, unknown>;

    for (const key of Object.keys(data)) {
      const ev = data[key] as ParsedEvent | undefined;
      if (!ev || ev.type !== "VEVENT" || !ev.start) continue;

      const addEvent = (start: Date, end: Date, summary: string, allDay: boolean) => {
        if (!eventInRange(start, end, rangeFrom, rangeTo)) return;
        const dateKey = toDateKey(start);
        const title = summary || "(予定)";
        const id = `${dateKey}-${title}-${start.getTime()}`;
        if (seen.has(id)) return;
        seen.add(id);
        events.push({
          date: dateKey,
          title,
          isAllDay: allDay,
          start: start.toISOString(),
          end: end.toISOString(),
        });
      };

      if (ev.rrule) {
        const instances = ical.expandRecurringEvent(ev as Parameters<typeof ical.expandRecurringEvent>[0], {
          from: rangeFrom,
          to: rangeTo,
        });
        for (const inst of instances) {
          const s = inst.start instanceof Date ? inst.start : new Date(inst.start);
          const e = inst.end instanceof Date ? inst.end : new Date(inst.end);
          const allDay = !!inst.isFullDay;
          const evSummary = typeof ev.summary === "string" ? ev.summary : (ev.summary as unknown as { val?: string })?.val ?? "";
          const summaryStr = typeof inst.summary === "string" ? inst.summary : (inst.summary as unknown as { val?: string })?.val ?? evSummary ?? "";
          addEvent(s, e, summaryStr, allDay);
        }
      } else {
        const start = ev.start instanceof Date ? ev.start : new Date(ev.start);
        const endRaw = ev.end ?? ev.start;
        const end = endRaw instanceof Date ? endRaw : new Date(endRaw);
        const allDay = Boolean(
          (ev as { isFullDay?: boolean }).isFullDay ??
            (ev.start as { dateOnly?: boolean })?.dateOnly
        );
        const summaryStr2 = typeof ev.summary === "string" ? ev.summary : (ev.summary as unknown as { val?: string })?.val ?? "";
        addEvent(start, end, summaryStr2, allDay);
      }
    }

    events.sort((a, b) => a.date.localeCompare(b.date) || (a.start ?? "").localeCompare(b.start ?? ""));

    return NextResponse.json(
      { events },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
        },
      }
    );
  } catch (err) {
    console.error("[calendar] Failed to fetch or parse iCal:", err);
    return NextResponse.json(
      { events: [] as CalendarEvent[], error: "Failed to load calendar" },
      { status: 502 }
    );
  }
}
