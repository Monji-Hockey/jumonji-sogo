import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";

export const metadata: Metadata = {
  title: {
    default: "株式会社十文字総合開発 | 保険代理店 岩手県二戸市・久慈市",
    template: "%s | 十文字総合開発",
  },
  description:
    "保険を通じて、お客様と社員の幸せを守ること。お陰様で30周年。岩手県二戸市・久慈市の保険代理店です。",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
