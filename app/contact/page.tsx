import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社十文字総合開発へのお問い合わせは、フォームまたはお電話にて承ります。",
};

export default function ContactPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-xl font-bold text-[#333] sm:text-2xl">
          お問い合わせ
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-[#666]">
          保険のご相談・各種お問い合わせは、下記フォームまたはお電話にて承っております。お気軽にご連絡ください。
        </p>

        <div className="space-y-8">
          {/* フォーム */}
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="mb-4 text-sm font-bold text-[#c2185b]">
              フォームでのお問い合わせ
            </h2>
            <ContactForm />
          </section>

          {/* 電話 */}
          <div className="rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-bold text-[#c2185b]">お電話でのお問い合わせ</h2>
            <p className="mb-3 text-sm text-[#333]">十文字総合開発本社</p>
            <a
              href="tel:0195-23-7141"
              className="inline-flex items-center gap-2 text-lg font-bold text-[#c2185b] hover:underline"
            >
              <span aria-hidden>📞</span>
              0195-23-7141
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-[#666]">
          ※ 事故・故障のご連絡は、ページトップの「事故・故障の24時間365日受付対応」の電話番号をご利用ください。
        </p>
      </div>
    </main>
  );
}
