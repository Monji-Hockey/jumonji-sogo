import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{
        background: "linear-gradient(135deg, #f5e6a6 0%, #fce4ec 100%)",
      }}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-0 sm:[min-height:4.5rem] lg:px-12 xl:px-20">
        {/* ロゴ＋30周年（中央配置・やや大きめ） */}
        <div className="flex min-w-0 flex-shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="株式会社十文字総合開発 トップページ"
          >
            <Image
              src="/images/十文字総合開発_ロゴ%26名前.svg"
              alt="株式会社十文字総合開発"
              width={200}
              height={56}
              className="h-11 w-auto sm:h-14"
              priority
            />
          </Link>
          <span
            className="flex shrink-0 flex-col items-center border-l border-[#c2185b]/30 py-0.5 pl-2 sm:items-start sm:border-l-2 sm:border-[#c2185b]/40 sm:pl-4"
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
      </div>
    </header>
  );
}
