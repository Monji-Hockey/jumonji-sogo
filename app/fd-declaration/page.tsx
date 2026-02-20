import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客さま本位の業務運営方針（FD宣言）",
  description: "株式会社十文字総合開発のお客さま本位の業務運営方針（FD宣言）です。",
};

export default function FdDeclarationPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 border-b border-[#e8d46a]/50 pb-4 text-2xl font-bold text-[#333]">
        お客さま本位の業務運営方針（FD宣言）
      </h1>

      <div className="space-y-8 text-[#333]">
        <p className="leading-relaxed">
          株式会社十文字総合開発（以下、「当社」）は、保険代理店として健全な経営に徹するとともに高い倫理観と市民意識を持ち、業務運営において、常にお客さま視点で考え行動するため、以下の方針を定めます。
        </p>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            取組方針1　お客さまの最善の利益の追求（金融庁「顧客本位の業務運営に関する原則」原則2）
          </h2>
          <p className="leading-relaxed">
            当社は、お客さまニーズや意向を的確に踏まえ、質の高いサービスを提供することを通じ、お客様満足度を向上させていきます。また「お客様の声」を受け止め誠実、迅速かつ適切に対応し業務の品質向上に生かし、お客さま満足度の向上に努めます。
          </p>
          <p className="mt-2 font-medium">具体的取組</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>お客さまのご意向を把握・確認を十分に行い、丁寧なご説明で最適な保険商品・プランを提案します。</li>
            <li>車両入替後・内容変更・解約などのお申し出やご相談に対して迅速に行動し、お客様の最善の利益にそぐわない行動を慎みます。</li>
            <li>お客さまの最善の利益を追求する上で、継続的に社員教育・研修を実施します。</li>
          </ul>
          <p className="mt-2 text-sm"><strong>KPI：</strong>お客さまの声：収集件数２０件（２０２４年度実績：１０）／お客さまアンケート回答件数：年間５０件（２０２４年度実績：８件）</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            取組方針２　利益相反の適切な管理（金融庁「顧客本位の業務運営に関する原則」原則３）
          </h2>
          <p className="leading-relaxed">
            当社は、お客さまの利益が不当に害されることが無いようご契約を適切に管理する体制を構築し、不適切な募集が行われないよう教育・指導・管理を徹底します。
          </p>
          <p className="mt-2 font-medium">具体的取組</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>保険会社から代理店として手数料を受領しますが、その手数料に捉われず比較推奨販売を厳守します。</li>
            <li>コンプライアンス・募集人品質向上を維持するために、毎月の商品・周辺知識・コンプライアンス研修を実施します。</li>
          </ul>
          <p className="mt-2 text-sm"><strong>KPI：</strong>年間最低８回の研修を行い保険会社指定の研修は必須（２０２４年度実績：８回）</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            取組方針３　重要な情報のわかりやすい提供（金融庁「顧客本位の業務運営に関する原則」原則５）
          </h2>
          <p className="leading-relaxed">
            当社はお客さまに金融商品・サービスの必要な情報を分かりやすく適切に情報提供を行います。特にお客さまの判断に影響を及ぼすような重要な事項については丁寧に説明を行います。
          </p>
          <p className="mt-2 font-medium">具体的取組</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>タブレット端末を用いて、商品パンフレット・チラシ・重要事項説明書をお客さまの知識・経験・契約目的に応じて分かりやすい説明を行います。</li>
            <li>７５歳以上のお客さまには親族等の同席お願い、複数人での募集、訪問を複数数回に分けて提案する等、ご家族へも安心していただける丁寧な対応を行います。</li>
          </ul>
          <p className="mt-2 text-sm"><strong>KPI：</strong>７５歳以上を「ご高齢なお客様」と位置づけ、年齢対象者全件対応記録を実施（２０２４年度実績：４件）</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            取組方針４　顧客にふさわしいサービスの提供（金融庁「顧客本位の業務運営に関する原則」原則６）
          </h2>
          <p className="leading-relaxed">
            当社はお客さまに最適な商品・サービスを選択いただけるよう、必要な情報提供を行った上で、お客さまのご意向や状況に沿った適切な保険商品やサービスを提供します。
          </p>
          <p className="mt-2 font-medium">具体的取組</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>高齢者・障害をお持ちのお客さまには、しっかり配慮とお心配りをもって丁寧な対応をいたします。</li>
            <li>対面を希望されないお客さまへのオンライン・電話・郵送対応時の十分な説明をいたします。</li>
            <li>お客さまから「お客さまの声」を積極に収集し、苦情、要望、お褒めの言葉を社内で共有し改善に努めます。</li>
          </ul>
          <p className="mt-2 text-sm"><strong>KPI：</strong>「お客さまの声」収集記録の実施３５件（２０２４年度実績：７件）</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">
            取組方針５　従業員に対する適切な動機付けの枠組み等（金融庁「顧客本位の業務運営に関する原則」原則７）
          </h2>
          <p className="leading-relaxed">
            当社は、従業員に対する教育及び研修を継続的に実施していきます。
          </p>
          <p className="mt-2 font-medium">具体的取組</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>教育・研修について、コンプライアンス研修、商品研修、その他ルール等の教育研修を行います。</li>
          </ul>
          <p className="mt-2 text-sm"><strong>KPI：</strong>e-ラーニングにて商品・事故対応・コンプライアンス等の研修実施年間８項目（２０２４年度実績：５項目）</p>
        </section>

        <p className="text-sm text-[#666]">
          ＊金融庁「顧客本位の業務運営に関する原則」原則４、原則５（注２）（注４）、原則６（注１）（注４）は、当社取引形態上、及び投資性商品の取り扱いがないため、方針の対象としておりません。
        </p>

        <p className="text-right text-sm">2025年4月1日　株式会社　十文字総合開発</p>
      </div>
      </div>
    </main>
  );
}
