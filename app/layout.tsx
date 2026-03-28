import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollRestoration from "@/components/ScrollRestoration";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://jumonji-sogo.com").replace(
  /\/$/,
  ""
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社十文字総合開発 | 保険代理店 岩手県二戸市・久慈市",
    template: "%s | 十文字総合開発",
  },
  description:
    "保険を通じて、お客様と社員の幸せを守ること。お陰様で30周年。岩手県二戸市・久慈市の保険代理店です。",
  manifest: "/site.webmanifest",
  // Google検索のファビコンは48px以上を推奨。複数サイズを明示してクローラに拾わせやすくする
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#c2185b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col antialiased">
        <ScrollRestoration />
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics /> : null}
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
