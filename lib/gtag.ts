/**
 * Google Analytics (GA4) 用ヘルパー
 * 本番環境かつ NEXT_PUBLIC_GA_ID が設定されている場合のみ動作します。
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isProduction = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

function isGtagAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    !!GA_ID &&
    isProduction
  );
}

/**
 * ページビューを送信します。
 * @param url - ページのURL（例: pathname + search）。省略時は location.pathname + location.search
 */
export function pageview(url?: string): void {
  if (!isGtagAvailable() || !GA_ID) return;
  const path = url ?? (typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/");
  window.gtag!("config", GA_ID, {
    page_path: path,
  });
}

/**
 * カスタムイベント（ボタンクリック等）を送信します。
 * @param action - イベント名（例: 'click_button'）
 * @param params - 任意のパラメータ（例: { button_name: 'お問い合わせ' }）
 */
export function event(
  action: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!isGtagAvailable() || !GA_ID) return;
  window.gtag!("event", action, params);
}
