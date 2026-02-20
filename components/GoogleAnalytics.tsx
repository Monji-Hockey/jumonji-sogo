"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isProduction = process.env.NODE_ENV === "production";

/**
 * GA4 トラッキングコードを読み込む Client Component。
 * NEXT_PUBLIC_GA_ID が設定され、本番環境の場合のみレンダリングします。
 */
export default function GoogleAnalytics() {
  if (!GA_ID || !isProduction) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
