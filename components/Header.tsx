"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";

const MENU_LINKS = [
  { href: "/news", label: "お知らせ" },
  { href: "/dayori", label: "十文字総合開発だより" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/voices", label: "お客様の声" },
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "個人情報保護に関する基本方針" },
  { href: "/solicitation", label: "勧誘方針" },
  { href: "/fd-declaration", label: "お客さま本位の業務運営方針（FD宣言）" },
  { href: "/disclosure", label: "権限明示・推奨方針" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 shadow-md md:sticky"
        style={{
          background: "linear-gradient(135deg, #f5e6a6 0%, #fce4ec 100%)",
        }}
        role="banner"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:justify-center sm:px-6 sm:py-0 sm:[min-height:4.5rem] md:justify-center lg:px-12 xl:px-20">
          {/* ロゴ＋30周年（中央 or 左） */}
          <div className="flex min-w-0 flex-1 flex-shrink-0 items-center gap-2 sm:gap-4 md:flex-initial md:justify-center">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="株式会社十文字総合開発 トップページ"
              onClick={closeMenu}
            >
              <Image
                src="/images/十文字総合開発_ロゴ%26名前.svg"
                alt="株式会社十文字総合開発"
                width={200}
                height={56}
                className="h-11 w-auto max-w-full object-contain sm:h-16"
                priority
              />
            </Link>
            <span
              className="hidden flex-shrink-0 flex-col items-center border-l border-[#c2185b]/30 py-0.5 pl-2 sm:flex sm:items-start sm:border-l-2 sm:border-[#c2185b]/40 sm:pl-4"
              aria-label="おかげさまで30周年"
            >
              <span className="text-[10px] font-medium tracking-wider text-[#c2185b] sm:text-xs">
                おかげさまで
              </span>
              <span
                className="leading-tight text-xs font-bold text-[#ad1457] sm:text-sm"
                style={{ fontFamily: "serif" }}
              >
                30周年
              </span>
            </span>
          </div>

          {/* ハンバーガーボタン（スマホのみ） */}
          <div className="flex-shrink-0 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c2185b] text-white shadow transition hover:bg-[#ad1457] focus:outline-none focus:ring-2 focus:ring-[#c2185b]/50"
              aria-expanded={menuOpen}
              aria-controls="header-nav-menu"
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`block h-0.5 w-full rounded-full bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* スマホ用メニューオーバーレイ */}
      <div
        id="header-nav-menu"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />
      <nav
        className={`fixed right-0 top-0 z-40 h-full w-[min(85vw,280px)] overflow-y-auto border-l border-[#c2185b]/20 bg-[#fefdfb] shadow-xl transition-transform duration-200 ease-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="サイトメニュー"
      >
        <div className="flex flex-col gap-1 pt-16 pb-8 pl-5 pr-4">
          {MENU_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="block rounded-lg py-3 px-2 text-sm font-medium text-[#333] hover:bg-[#fce4ec]/50 hover:text-[#c2185b]"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 固定ヘッダー分のスペーサー（スマホのみ） */}
      <div className="h-14 md:hidden" aria-hidden />
    </>
  );
}
