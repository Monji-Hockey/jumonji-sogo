import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人情報保護に関する基本方針",
  description: "株式会社十文字総合開発の個人情報保護に関する基本方針（プライバシーポリシー）です。",
};

export default function PrivacyPage() {
  return (
    <main className="min-w-0 break-words px-3 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-xl font-bold text-[#333] sm:text-2xl">
        個人情報保護に関する基本方針
      </h1>
      <p className="mb-8 text-sm text-[#666]">（プライバシー・ポリシー）</p>

      <div className="space-y-8 text-[#333]">
        <p className="leading-relaxed">
          株式会社　十文字総合開発
          <br />
          弊社は、個人情報保護の重要性に鑑み、お客様の個人情報を適正に取扱うことを宣言いたします。
        </p>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（1）法令等の遵守</h2>
          <p className="leading-relaxed">
            弊社は、個人情報の保護に関する法律（個人情報保護法）その他の関連法令および関係官庁のガイドラインなどを遵守します。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（2）従業者教育</h2>
          <p className="leading-relaxed">
            弊社は、個人情報の取扱いが適正に行われるよう従業者への教育・指導を徹底します。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（3）個人情報の利用目的</h2>
          <p className="leading-relaxed">
            弊社は、保険代理業とガソリンスタンド業を営んでおり、保険会社から保険募集業務の委託を受けて取得した個人情報とガソリンスタンド業を通じて取得した個人情報（個人番号および特定個人情報については、下記（８）を参照ください。）を、下記業務の遂行に必要な範囲内で、かつ適法、公正に利用します。また、弊社は複数の保険会社と取引があり、取得した個人情報を取引のある他の保険会社の商品・サービスをご提案するために利用させていただくことがあります。なお、その他の目的に利用することはありません。
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>損害保険、生命保険およびこれらに付帯・関連するサービスの提供等の保険会社の業務</li>
            <li>ガソリンスタンドおよびこれらに付帯・関連するサービスの提供</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            上記の利用目的を変更する場合には、相当の関連性を有すると合理的に認められる範囲においてのみ行い、その内容をご本人に対し、原則として書面等（電磁的記録を含む。以下同じ。）により通知し、または弊社のホームページなどにより公表します。
            弊社に対し保険募集業務の委託を行う保険会社の利用目的は、それぞれの会社のホームページ（下記）に記載してあります。
          </p>
          <p className="mt-2 font-medium">＜弊社と取引のある保険会社＞</p>
          <ul className="mt-1 space-y-1 break-all text-sm">
            <li>損害保険ジャパン株式会社（<a href="https://www.sompo-japan.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#c2185b] underline break-all">https://www.sompo-japan.co.jp/</a>）</li>
            <li>共栄火災海上保険株式会社（<a href="https://www.kyoeikasai.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#c2185b] underline break-all">https://www.kyoeikasai.co.jp/</a>）</li>
            <li>SOMPOひまわり生命保険株式会社（<a href="https://www.himawari-life.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#c2185b] underline break-all">https://www.himawari-life.co.jp/</a>）</li>
            <li>アフラック生命保険株式会社（<a href="https://www.aflac.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#c2185b] underline break-all">https://www.aflac.co.jp/</a>）</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（4）個人情報の取得</h2>
          <p className="leading-relaxed">
            弊社は、業務上必要な範囲で、かつ、適法で公正な手段により個人情報（個人番号および特定個人情報については、下記（８）を参照ください。）を取得します。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（5）個人データの安全管理措置</h2>
          <p className="leading-relaxed">
            弊社は、取扱う個人データ（下記（８）の個人番号および特定個人情報を含みます。）の漏えい、滅失またはき損の防止その他の個人データの安全管理のため、安全管理に関する取扱規程などの整備および実施体制の整備など、十分なセキュリティ対策を講じるとともに、利用目的の達成に必要とされる正確性・最新性を確保するために適切な措置を講じています。
            弊社は、個人データの安全管理措置に関する社内規程を別途定めており、その具体的内容は主として以下のとおりです。安全管理措置に関するご質問については、下記のお問い合わせ窓口までお寄せください。
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>基本方針の整備：個人データの適正な取扱いの確保のため、「関係法令・ガイドライン等の遵守」、「安全管理措置に関する事項」、「質問および苦情処理の窓口」等について本基本方針を策定し、必要に応じて見直しています。</li>
            <li>個人データの安全管理に係る取扱規程の整備：取得、利用、保存、提供、削除・廃棄等の段階ごとに、取扱方法、責任者・担当者およびその任務等についての規程を整備し、必要に応じて見直しています。</li>
            <li>組織的安全管理措置（個人データの管理責任者等の設置、就業規則等における安全管理措置の整備、取扱規程に従った運用、点検及び監査体制、漏えい等事案への対応体制など）</li>
            <li>人的安全管理措置（従業者との非開示契約等、役割・責任の明確化、教育及び訓練など）</li>
            <li>物理的安全管理措置（取扱区域等の管理、機器・電子媒体等の盗難防止、廃棄時の措置など）</li>
            <li>技術的安全管理措置（利用者の識別・認証、アクセス制御、アクセス記録・分析、システムの監視・監査など）</li>
            <li>委託先の監督：個人データの取扱いを委託する場合には、適正に取り扱っている者を選定し、委託先における安全管理措置の実施を確保するため、外部委託に係る取扱規程を整備し、定期的に見直しています。</li>
            <li>外的環境の把握：個人データを取り扱う国における個人情報の保護に関する制度を把握した上で安全管理措置を実施しています。</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（6）個人データの第三者への提供および第三者からの取得</h2>
          <p className="leading-relaxed">
            弊社は、次の場合を除き、ご本人の同意なく第三者に個人データ（個人番号および特定個人情報については、下記（８）を参照ください。）を提供しません。
          </p>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
            <li>当該第三者が学術研究機関等である場合であって、当該第三者が当該個人データを学術研究目的で取り扱う必要があるとき（当該個人データを取り扱う目的の一部が学術研究目的である場合を含み、個人の権利利益を不当に侵害するおそれがある場合を除く。）</li>
          </ol>
          <p className="mt-2 leading-relaxed">
            また、個人データを第三者に提供したとき、あるいは第三者から取得したとき（個人関連情報を個人データとして取得する場合を含みます。）、提供先・提供者の氏名等、法令で定める事項を確認し、記録したうえ、保管します。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（7）センシティブ情報のお取扱い</h2>
          <p className="leading-relaxed">
            弊社は、要配慮個人情報（人種、信条、社会的身分、病歴、前科・前歴、犯罪被害情報などをいいます。）ならびに労働組合への加盟、門地および本籍地、保健医療および性生活に関する情報（以下、「センシティブ情報」といいます。）については、次に掲げる場合を除くほか、取得、利用または第三者提供を行いません。
          </p>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
            <li>法令等に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のため特に必要がある場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            <li>保険料収納事務等の遂行上必要な範囲において、政治・宗教等の団体もしくは労働組合への所属もしくは加盟に関する従業員等のセンシティブ情報を取得、利用または第三者提供する場合</li>
            <li>相続手続を伴う保険金支払事務等の遂行に必要な限りにおいて、センシティブ情報を取得、利用または第三者提供する場合</li>
            <li>保険業の適切な業務運営を確保する必要性から、本人の同意に基づき業務遂行上必要な範囲でセンシティブ情報を取得、利用または第三者提供する場合</li>
          </ol>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（8）個人番号および特定個人情報の取扱い</h2>
          <p className="leading-relaxed">
            弊社は、個人番号および特定個人情報について、取得・利用・第三者提供を行いません。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（9）見直し・改善</h2>
          <p className="leading-relaxed">
            弊社の個人情報の取扱いおよび安全管理に係る適切な措置については、適宜見直し、改善いたします。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（10）個人情報保護法に基づく保有個人データの開示、訂正等、利用停止など</h2>
          <p className="leading-relaxed">
            個人情報保護法に基づく保有個人データに関する開示（確認・記録の開示を含む）、訂正等または利用停止などに関するご請求については、ご請求者がご本人であることを確認させていただいたうえで手続きを行います。保険会社の保有個人データに関しては当該会社に対してお取次ぎいたします。弊社の保有個人データに関し、必要な調査を行った結果、ご本人に関する情報が不正確である場合は、その結果に基づいて正確なものに変更させていただきます。
            なお、上記開示などの手続きについては所定の手数料をいただきます。手続きを希望される方は、下記お問い合わせ先までお申し付けください。
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-[#c2185b]">（11）お問い合わせ・ご相談・苦情へのご対応</h2>
          <p className="leading-relaxed">
            弊社は、個人情報の取扱いに関する苦情・ご相談に適切・迅速にご対応いたします。
            ご連絡先は下記のお問い合わせ窓口となります。また保険事故に関する照会については下記お問い合わせ窓口のほか、保険証券記載の保険会社の事故相談窓口にもお問い合わせいただくことができます。
            なお、ご照会者がご本人であることをご確認させていただいたうえで、ご対応させていただきますので、あらかじめご了承願います。
          </p>
          <div className="mt-4 rounded-lg bg-[#faf5e8] p-4 text-sm">
            <p className="font-bold text-[#333]">＜お問い合わせ先＞</p>
            <p>（代理店）株式会社　十文字総合開発</p>
            <p>（代表者氏名）代表取締役　十文字直子</p>
            <p>（住所）本社　岩手県二戸市石切所字穴牛３３－３</p>
            <p className="pl-4">久慈　岩手県久慈市天神堂３６－１１８－Ａ</p>
            <p>（電話番号）本社　０１９５－２３－７１４１</p>
            <p className="pl-4">久慈　０１９４－６１－３２１１</p>
            <p>（受付時間）８：００～１７：００</p>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}
