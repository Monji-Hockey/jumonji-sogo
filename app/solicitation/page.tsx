import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "勧誘方針",
  description: "株式会社十文字総合開発の保険商品の勧誘方針です。",
};

export default function SolicitationPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
        勧誘方針
      </h1>

      <div className="space-y-8 text-[#333]">
        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            保険商品の販売等に際して、各種法令等を遵守し、適正な勧誘に努めます。
          </h2>
          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>
              保険業法、保険法、金融サービスの提供及び利用環境の整備等に関する法律、金融商品取引法、消費者契約法、その他各種法令等を遵守し、お客様の立場に立った勧誘に努めます。
            </li>
            <li>
              保険金の不正取得を防止する観点から、お客さまの本人確認、同意確認は確実に行い、適正な保険金額を定めるよう努めます。未成年者を被保険者とする場合は、特に配慮して参ります。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            お客さまの保険商品に関する知識・経験、購入目的、資力状況等を総合的に勘案し、お客さまの意向と実情に応じた適切な勧誘に努めます。
          </h2>
          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>
              ライフサイクルの分析やコンサルティング活動等を通じて、お客さまの意向と実情に沿った勧誘に努めます。
            </li>
            <li>
              ご高齢者に対する販売等にあたっては、ご家族の同席を依頼するなど、お客さまに十分にご理解いただけるよう配慮して参ります。
            </li>
            <li>
              変額保険等の投資性商品の勧誘にあたっては、商品内容やリスク内容について十分な説明に努めます。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            お客さまへの商品説明等については、販売・勧誘形態に応じて、お客さま本位の方法等の創意工夫に努めます。
          </h2>
          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>
              わかりやすいパンフレット等を使用し、説明方法等に工夫を凝らしお客さまにご理解いただけるよう努めます。
            </li>
            <li>
              保険商品の重要事項やお客さまが不利益となる事項等を、正しくご理解いただけるよう、わかりやすい説明に努めます。
            </li>
            <li>
              お客さまに重大な不利益が生じないように、わかりやすいサポート資料等を使用して、お客さまの健康状態を正しく告知していただけるよう努めます。
            </li>
            <li>
              販売・勧誘活動にあたっては、お客さまの立場に立って、時間帯や勧誘場所等について十分に配慮して参ります。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            お客さまにご信頼・ご満足いただけるよう努めます。
          </h2>
          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>お客さまに関する情報については、適正な管理と保護に努めます。</li>
            <li>保険金・給付金等のお支払手続きにあたり、迅速・適切・丁寧に対応するよう努めます。</li>
            <li>勧誘方針に沿った適正な勧誘を行うために、勧誘ルールの整備や研修体制の充実等に努めます。</li>
            <li>
              お客さまからのご相談、ご意見等、お気づきの点がございましたら、最寄りの店舗または下記の〔お問い合わせ窓口〕までご連絡ください。
            </li>
          </ul>
        </section>

        <div className="rounded-lg bg-[#faf5e8] p-4 text-sm">
          <p className="font-bold text-[#333]">［お問い合わせ窓口］ お客様相談室</p>
          <p>［電話番号］ ０１９５－２３－７１４１</p>
          <p>［受付時間］ 月～金 ８：００～１７：００</p>
          <p className="mt-2">募集代理店　株式会社十文字総合開発</p>
        </div>
      </div>
      </div>
    </main>
  );
}
