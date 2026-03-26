export function formatJaDate(s: string | undefined): string {
  if (!s) return "";
  const d = new Date(s);
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

