import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "権限明示・推奨方針",
  description: "株式会社十文字総合開発の取扱保険会社・権限明示および推奨方針です。",
};

export default function DisclosurePage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
        権限明示・推奨方針
      </h1>
      <p className="mb-6 text-sm text-[#666]">
        ※以下は枠組みです。添付の「権限明示」「推奨方針」ドキュメントのテキストに差し替えてください。
      </p>

      <div className="prose prose-neutral max-w-none space-y-8 text-[#333]">
        <section>
          <h2 className="text-lg font-bold text-[#c2185b]">1. 権限の明示</h2>
          <p>
            当社は、保険業法に基づき、保険の募集に関する代理権・仲介権の範囲を明示して業務を行っています。お客様にご契約いただく保険会社との間で、募集に関する契約を締結しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#c2185b]">2. 取扱保険会社</h2>
          <p>
            取扱い保険会社の一覧および各社との関係（代理・仲介の別等）は、ご契約・ご相談時にご説明いたします。お問い合わせは本社・久慈営業所までお願いいたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#c2185b]">3. 推奨方針</h2>
          <p>
            当社は、お客様のニーズ・ご事情に応じて、複数の保険会社の商品の中からご説明・ご提案を行います。推奨にあたっての考え方および手続は、<a href="/fd-declaration" className="text-[#c2185b] underline hover:no-underline">勧誘方針・FD宣言</a>と整合的に運用しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#c2185b]">4. お問い合わせ</h2>
          <p>
            権限明示・推奨方針に関するお問い合わせは、下記までご連絡ください。<br />
            株式会社十文字総合開発　本社 TEL: 0195-23-7141 / 久慈営業所 TEL: 0194-61-3211
          </p>
        </section>
      </div>
      </div>
    </main>
  );
}
