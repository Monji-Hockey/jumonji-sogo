import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background: "linear-gradient(180deg, #faf5e8 0%, #f5ebe0 100%)",
      }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 xl:px-20">
        <nav className="mb-6" aria-label="サイトメニュー">
          <ul className="space-y-2">
            <li>
              <Link
                href="/voices"
                className="inline-block py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                お客様の声
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="inline-block py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                お知らせ
              </Link>
            </li>
            <li>
              <Link
                href="/dayori"
                className="inline-block py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                十文字総合開発だより
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-block py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="inline-block py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                会社概要
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mb-8" aria-label="重要事項・ポリシー">
          <h2 className="mb-3 border-b border-black/8 pb-1.5 text-sm font-bold text-[#666]">
            重要事項・ポリシー
          </h2>
          <ul className="space-y-3 sm:space-y-2">
            <li>
              <Link
                href="/privacy"
                className="inline-block break-words py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                個人情報保護に関する基本方針（プライバシーポリシー）
              </Link>
            </li>
            <li>
              <Link
                href="/solicitation"
                className="inline-block break-words py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                勧誘方針
              </Link>
            </li>
            <li>
              <Link
                href="/fd-declaration"
                className="inline-block break-words py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                お客さま本位の業務運営方針（FD宣言）
              </Link>
            </li>
            <li>
              <Link
                href="/disclosure"
                className="inline-block break-words py-1 text-sm text-[#c2185b] hover:underline sm:py-0"
              >
                権限明示・推奨方針
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-t border-black/6 pt-5 text-sm text-[#666]">
          <p className="font-bold text-[#333]">株式会社 十文字総合開発</p>
          <p className="mt-1">
            〒028-6103 岩手県二戸市石切所字穴牛33-3
            <br />
            TEL: 0195-23-7141 / FAX: 0195-22-1124
          </p>
          <div className="mt-4 inline-flex flex-col items-start gap-2 rounded-xl border border-[#f5d6a2] bg-[#fff8ed] px-3 py-2 sm:flex-row sm:items-center sm:gap-3">
            <img
              src="/images/hitotsuboshi/color/security_action_hitotsuboshi-small_color.png"
              alt="SECURITY ACTION 一つ星 ロゴ"
              className="h-10 w-auto sm:h-11"
              loading="lazy"
            />
            <p className="text-xs font-medium leading-relaxed text-[#8b4a56] sm:text-sm">
              SECURITY ACTION 一つ星を宣言しました
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-[#666]">
          &copy; 株式会社十文字総合開発 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
