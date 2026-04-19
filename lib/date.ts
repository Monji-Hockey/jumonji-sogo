/** トップの「直近に公開あり」バナー用。公開日からの日数。 */
export const RECENT_PUBLISH_DAYS = 7;

/**
 * microCMS の publishedAt が直近 `days` 日以内か。
 * 比較はエポックミリ秒（UTC）。日本の「暦日」単位に厳密に揃える場合は別途 JST で切り捨て可能。
 */
export function isPublishedWithinDays(iso: string | undefined, days: number): boolean {
  if (!iso) return false;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return false;
  return Date.now() - t <= days * 24 * 60 * 60 * 1000;
}

export function formatJaDate(s: string | undefined): string {
  if (!s) return "";
  const d = new Date(s);
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

