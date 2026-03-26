import Image from "next/image";
import VoicesSection from "@/components/VoicesSection";

const STRENGTHS = [
  {
    icon: "🌿",
    title: "地域に根ざした相談",
    description:
      "岩手県二戸・久慈を中心に、地域の皆様の生活に寄り添い、お一人おひとりのご事情に合わせた保険のご提案を心がけております。",
  },
  {
    icon: "💬",
    title: "わかりやすい説明",
    description:
      "専門用語をできるだけ使わず、お客様にご納得いただけるまで丁寧にご説明いたします。ご不明な点は何でもお気軽にお尋ねください。",
  },
  {
    icon: "🤝",
    title: "契約後のアフターフォロー",
    description:
      "ご契約後も、内容変更やご質問などがあればいつでもご相談いただけます。長くお付き合いいただけるよう、きめ細かくサポートいたします。",
  },
  {
    icon: "🌸",
    title: "お客様第一の姿勢",
    description:
      "「保険を通じて、お客様と社員の幸せを守ること」を理念に、お客様の安心と満足を第一に考えた業務運営に努めております。",
  },
];

export default function CompanySection() {
  return (
    <section id="company" className="scroll-mt-20 bg-[#fefdfb] px-3 py-12 sm:px-4 sm:py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-xl font-bold text-[#333] sm:text-2xl">
          会社概要
        </h2>
        <p className="mb-2 text-center text-sm leading-relaxed text-[#666]">
          <b className="font-bold text-[#333]">損害保険</b>と<b className="font-bold text-[#333]">生命保険</b>を扱う保険代理店です。
        </p>
        <p className="mb-6 text-center text-sm leading-relaxed text-[#666] sm:mb-4">
          岩手県二戸市に本社を構え、久慈市に営業所を置いております。地域の皆様に安心と信頼をお届けできるよう、スタッフ一同努めてまいります。
        </p>

        {/* 会社画像（デスクトップでは幅を抑えめに） */}
        <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-xl shadow-md sm:mb-12 md:max-w-xl">
          <Image
            src="/images/十文字総合開発_会社画像.jpg"
            alt="株式会社十文字総合開発の会社の様子"
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 576px"
          />
          <div className="bg-white px-4 py-3 text-center">
            <a
              href="/company"
              className="text-sm font-bold text-[#c2185b] underline hover:no-underline"
            >
              詳しい会社情報ページへ
            </a>
          </div>
        </div>

        {/* 取扱保険会社（ロゴボタン） */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-4 w-full text-center text-sm font-bold text-[#333]">取扱保険会社</p>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* 損保ジャパン */}
            <li className="flex h-[96px] items-center justify-center rounded-xl border border-[#e8d46a]/50 bg-white p-4 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:h-[104px]">
              <a
                href="https://www.sompo-japan.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src="/images/損保ジャパン_ロゴ.png"
                  alt="損保ジャパン"
                  width={160}
                  height={80}
                  className="block max-h-[52px] w-auto max-w-full object-contain sm:max-h-[60px]"
                />
              </a>
            </li>
            {/* 共栄火災 */}
            <li className="flex h-[96px] items-center justify-center rounded-xl border border-[#e8d46a]/50 bg-white p-4 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:h-[104px]">
              <a
                href="https://www.kyoeikasai.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src="/images/共栄火災ロゴ.gif"
                  alt="共栄火災"
                  width={160}
                  height={80}
                  className="block max-h-[36px] w-auto max-w-full object-contain sm:max-h-[44px]"
                />
              </a>
            </li>
            {/* SOMPOひまわり生命 */}
            <li className="flex h-[96px] items-center justify-center rounded-xl border border-[#e8d46a]/50 bg-white p-4 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:h-[104px]">
              <a
                href="https://www.himawari-life.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src="/images/SOMPOひまわり生命ロゴ.jpg"
                  alt="SOMPOひまわり生命"
                  width={160}
                  height={80}
                  className="block max-h-[52px] w-auto max-w-full object-contain sm:max-h-[60px]"
                />
              </a>
            </li>
            {/* アフラック */}
            <li className="flex h-[96px] items-center justify-center rounded-xl border border-[#e8d46a]/50 bg-white p-4 shadow-sm transition hover:border-[#c2185b]/40 hover:shadow-md sm:h-[104px]">
              <a
                href="https://www.aflac.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src="/images/Aflacロゴ.jpg"
                  alt="アフラック"
                  width={160}
                  height={80}
                  className="block max-h-[40px] w-auto max-w-full object-contain sm:max-h-[48px]"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* 損保ジャパン提供情報（リンクサービス） */}
        <div className="mb-8 rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm sm:mb-10 sm:p-6">
          <h3 className="mb-2 border-b border-[#c2185b]/30 pb-2 text-base font-bold text-[#c2185b]">
            損保ジャパン提供情報
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-[#666]">
            損保ジャパンの代理店ホームページリンクサービスです。以下のリンクは当社ホームページからご利用ください。ほかのサイトから直接開いた場合、つながらないことがあります。
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://agency-linkservice.sompo-japan.co.jp/AgencyCheck?agentno=0000728530&servicecd=01&serviceno=01"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between gap-2 rounded-lg border border-[#e8d46a]/50 bg-[#fefdfb] px-4 py-3 text-left text-sm font-medium text-[#333] transition hover:border-[#c2185b]/40 hover:bg-[#fce4ec]/30"
              >
                <span>インターネット海外旅行保険契約サービス</span>
                <span className="shrink-0 text-[#c2185b]" aria-hidden>→</span>
              </a>
            </li>
            <li>
              <a
                href="https://agency-linkservice.sompo-japan.co.jp/AgencyCheck?agentno=0000728530&servicecd=02&serviceno=01"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between gap-2 rounded-lg border border-[#e8d46a]/50 bg-[#fefdfb] px-4 py-3 text-left text-sm font-medium text-[#333] transition hover:border-[#c2185b]/40 hover:bg-[#fce4ec]/30"
              >
                <span>自動車保険　保険料お見積りサービス</span>
                <span className="shrink-0 text-[#c2185b]" aria-hidden>→</span>
              </a>
            </li>
            <li>
              <a
                href="https://agency-linkservice.sompo-japan.co.jp/AgencyCheck?agentno=0000728530&servicecd=02&serviceno=01&servicecdSub=01"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between gap-2 rounded-lg border border-[#e8d46a]/50 bg-[#fefdfb] px-4 py-3 text-left text-sm font-medium text-[#333] transition hover:border-[#c2185b]/40 hover:bg-[#fce4ec]/30"
              >
                <span>自動車保険　サクっと見積りサービス</span>
                <span className="shrink-0 text-[#c2185b]" aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* お客様の声（抜粋） */}
        <VoicesSection variant="embedded" />

        {/* 私たちが大切にしていること（4つのポイント） */}
        <div className="mb-12">
          <h3 className="mb-2 text-center text-lg font-bold text-[#333] sm:text-xl">
            私たちが大切にしていること
          </h3>
          <p className="mb-8 text-center text-sm text-[#666]">
            お客様に安心と満足をご提供するため、以下の4つを特に大切にしております。
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((item, i) => (
              <li
                key={i}
                className="flex flex-col rounded-xl border border-[#e8d46a]/40 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h4 className="mb-2 font-bold text-[#c2185b]">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[#555]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 営業所：本社・久慈（地図プレースホルダー付き横並び） */}
        <div>
          <h3 className="mb-2 text-center text-lg font-bold text-[#333] sm:text-xl">
            営業所のご案内
          </h3>
          <p className="mb-8 text-center text-sm text-[#666]">
            本社（二戸市）と久慈営業所の2拠点で、地域の皆様のご来店をお待ちしております。お気軽にお立ち寄りください。
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* 二戸本社 */}
            <div className="overflow-hidden rounded-xl border border-[#e8d46a]/40 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <iframe
                  title="二戸本社の地図"
                  src="https://www.google.com/maps?q=%E5%B2%A9%E6%89%8B%E7%9C%8C%E4%BA%8C%E6%88%B8%E5%B8%82%E7%9F%B3%E5%88%87%E6%89%80%E5%AD%97%E7%A9%B4%E7%89%9B33-3&output=embed"
                  className="absolute left-0 top-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5">
                <h4 className="mb-1 text-base font-bold text-[#c2185b]">二戸本社</h4>
                <p className="mb-2 text-sm leading-relaxed text-[#333]">
                  〒028-6103<br />
                  岩手県二戸市石切所字穴牛33-3
                </p>
                <p className="text-sm text-[#555]">
                  TEL: <a href="tel:0195-23-7141" className="text-[#c2185b] underline">0195-23-7141</a>
                  <br />
                  FAX: 0195-22-1124
                </p>
              </div>
            </div>
            {/* 久慈営業所 */}
            <div className="overflow-hidden rounded-xl border border-[#e8d46a]/40 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <iframe
                  title="久慈営業所の地図（岩手県久慈市天神堂第36地割118-A）"
                  src="https://www.google.com/maps?q=%E5%B2%A9%E6%89%8B%E7%9C%8C%E4%B9%85%E6%85%88%E5%B8%82%E5%A4%A9%E7%A5%9E%E5%A0%82%E7%AC%AC36%E5%9C%B0%E5%89%B2118&output=embed"
                  className="absolute left-0 top-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5">
                <h4 className="mb-1 text-base font-bold text-[#c2185b]">久慈営業所</h4>
                <p className="mb-2 text-sm leading-relaxed text-[#333]">
                  〒028-0041<br />
                  岩手県久慈市天神堂第36地割118-A
                </p>
                <p className="text-sm text-[#555]">
                  TEL: <a href="tel:0194-61-3211" className="text-[#c2185b] underline">0194-61-3211</a>
                  <br />
                  FAX: 0194-61-3212
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
