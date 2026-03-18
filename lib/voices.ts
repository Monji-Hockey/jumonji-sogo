export type Voice = {
  id: string;
  area: string;
  nameLabel: string;
  body: string;
};

export const VOICES: Voice[] = [
  {
    id: "voice-1",
    area: "二戸市",
    nameLabel: "（お客さま）",
    body: "生命保険など定期的な確認や相談の時など適切に提案や見直しの対応をしていただいている。ここ数年で病気やケガで保険請求が続きわかないことが多くて色々教えていただき大変助かりました。自動車保険でも保険内容の確認や見直しなどライフスタイルに合わせて親身に対応していただきありがとうございます。",
  },
  {
    id: "voice-2",
    area: "二戸市",
    nameLabel: "（お客さま）",
    body: "先日、自動車で自損事故を起こした時に、現場へ駆けつけてもらい車の修理先への手配アドバイスなど親身に対応していただきました。接触した道路フェンスも地元業者へ手早く連携対応していただき元通り綺麗に修繕されていて助かりました。",
  },
  {
    id: "voice-3",
    area: "軽米町",
    nameLabel: "（お客さま）",
    body: "自動車保険の継続や変更手続き事故対応の時に親切に丁寧な対応をしてくれて助かっています。いつも手続きの時に長話していて嫌な顔せず付き合ってくれてありがとうございます。",
  },
  {
    id: "voice-4",
    area: "久慈市",
    nameLabel: "（お客さま）",
    body: "自動車保険3台まとめで契約していたが別々に契約にすることにしたのですが担当者の方へ相談したところ3台まとめた多数割りや変更時の日割りなどを分かりやすく丁寧に説明して下さり助かりました。いつもありがとうございます。",
  },
  {
    id: "voice-5",
    area: "久慈市",
    nameLabel: "（お客さま）",
    body: "自動車を廃車にした時に加入している自賠責保険の解約助言をしていただき保険料の返金や手続き方法など丁寧に教えていただきとても助かりました。今後もよろしくお願いします。",
  },
  {
    id: "voice-6",
    area: "久慈市",
    nameLabel: "（お客さま）",
    body: "自動車保険を1日だけ加入したく担当者へ相談した時に親身に調べていただき加入できる内容で手続きや対応をしていただきとても助かりました。今後、保険など相談したい時お願いしたいと思います。",
  },
];

export function getLatestVoices(count: number): Voice[] {
  return VOICES.slice(0, Math.max(0, count));
}

export function getExcerpt(text: string, maxChars = 90): string {
  const t = text.trim();
  if (t.length <= maxChars) return t;
  return `${t.slice(0, maxChars)}…`;
}

