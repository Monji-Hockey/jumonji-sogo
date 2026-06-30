import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026年 業務運営方針（お客様本位の業務運営に関する宣言）",
  description: "株式会社十文字総合開発の2026年度版 お客様本位の業務運営方針（FD宣言）です。",
};

export default function FdDeclarationPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
          2026年 業務運営方針（お客様本位の業務運営に関する宣言）
        </h1>

        <div className="space-y-8 text-[#333]">
          <p className="leading-relaxed">
            株式会社十文字総合開発（以下、「当代理店」）は、お客様に最適な保険商品と質の高いサービスを提供するため、以下の通り「お客様本位の業務運営方針（FD宣言）」を定め、その定着度を測る指標（KPI）を公表いたします。
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
              方針1．お客様の最善の利益の追求
            </h2>
            <p className="leading-relaxed">
              当代理店は、お客さまニーズや意向を的確に踏まえ、質の高いサービスを提供することでお客様満足度を向上させます。また「お客様の声」を積極的に収集しお客さまの信頼の維持・向上に努めます。
            </p>
            <p className="mt-2 font-medium">【KPI（重要業績評価指標）】</p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>お客様アンケートの回収件数：年間35件以上（2025年度実績：11件）</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
              方針2．利益相反の適切な管理
            </h2>
            <p className="leading-relaxed">
              当代理店は、販売手数料に捉われることなく、お客様の意向を丁寧に確認し、不適切な保険募集が行われないよう管理体制を徹底します。
            </p>
            <p className="mt-2 font-medium">【KPI（重要業績評価指標）】</p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>募集品質および利益相反管理に関する社内研修の実施：年間10回以上（2025年度実績：8回）</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
              方針3．重要な情報のわかりやすい提供
            </h2>
            <p className="leading-relaxed">
              当代理店は、お客様に商品の内容を正しくご理解いただけるよう、丁寧で分かりやすい説明を行います。特に75歳以上のお客様に対しては、ご家族の同席をお願いするなど、よりきめ細やかな対応を実施します。
            </p>
            <p className="mt-2 font-medium">【KPI（重要業績評価指標）】</p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>高齢者（75歳以上）募集時における社内ルール遵守率：100%の維持（2025年度実績：対応記録全件実施30件）</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
              方針4．お客様にふさわしいサービスの提供
            </h2>
            <p className="leading-relaxed">
              当代理店は、お客様を取り巻くリスクやライフ状況に沿った最適な保険商品・サービスを提供します。また、日々の業務を通じて「お客様の声」を積極的に収集し、サービスの改善に努めます。
            </p>
            <p className="mt-2 font-medium">【KPI（重要業績評価指標）】</p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>「お客様の声」（お褒め・ご要望・お申し出等）の収集および社内登録件数：年間50件以上（2025年度実績：23件）</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
              方針5．従業員への適切な動機付け
            </h2>
            <p className="leading-relaxed">
              当代理店は、すべての従業員が保険のエキスパートとして成長し、常にお客様本位の行動がとれるよう、継続的な教育・研修を実施し、適切な動機付けを行います。
            </p>
            <p className="mt-2 font-medium">【KPI（重要業績評価指標）】</p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>全従業員を対象としたeラーニング研修の修了：年間15項目以上（2025年度実績：8項目）</li>
            </ul>
          </section>

          <p className="text-sm text-[#666]">
            ※注記：当代理店は投資性商品の取り扱いがないため、金融庁「顧客本位の業務運営に関する原則」における「原則4」「原則5（注2、注4）」「原則6（注1、注4）」については本方針の対象外としております。
          </p>

          <p className="text-right text-sm">2026年4月1日　株式会社　十文字総合開発</p>
        </div>
      </div>
    </main>
  );
}
