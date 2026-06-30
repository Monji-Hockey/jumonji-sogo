export type Voice = {
  id: string;
  subject: string;
  area: string;
  customerLabel: string;
  body: string;
};

export const VOICES: Voice[] = [
  {
    id: "voice-1",
    subject: "近所の保険代理店",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "代理店が近所にあり連絡もすぐとれるし担当者は自宅へ手続きに来てくれるのでとても助かっています。引き続き変わらない対応でよろしくお願いします。",
  },
  {
    id: "voice-2",
    subject: "自動車保険の保険内容見直し",
    area: "九戸村",
    customerLabel: "岩手県九戸村在住",
    body: "自動車保険の家族契約で各車ごと生活状況の変化に応じて補償内容をその都度細かい見直しなど相談にのってくれていつもありがとう。今後もよろしくお願いしますね。",
  },
  {
    id: "voice-3",
    subject: "退職後の相談",
    area: "九戸村",
    customerLabel: "岩手県九戸村在住",
    body: "団体扱い契約加入中で定年を迎えることが決まり退職後の自動車保険は他へ移らないので引き続き変わらずの対応でこれからもお願いします。",
  },
  {
    id: "voice-4",
    subject: "保険以外の相談",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "自動車保険や傷害保険の手続きでいつも休みの日に自宅へ手続きに来てくれて、保険の変更点や改定など詳しく説明をしてくれる他に保険以外の相談にも親身にのっていただきとても助かっています。いつもありがとうございます。",
  },
  {
    id: "voice-5",
    subject: "もし保険会社が変わった場合",
    area: "八幡平市",
    customerLabel: "岩手県八幡平市在住",
    body: "もし取扱い保険会社が変わっても自動車保険は安心して任せられるので他に移らないです。引き続きよろしく頼みます。",
  },
  {
    id: "voice-6",
    subject: "事故の対応",
    area: "八幡平市",
    customerLabel: "岩手県八幡平市在住",
    body: "自動車事故では相手と色々とありましたが相談にのっていただき落込んだ気持ちも楽になりました。その後の事故もスムーズに解決して助かりました。自動車保険で保険会社が変わっても事故の対応や、その他の保険手続き等も今まで通り安心してお任せします。",
  },
];

export function getLatestVoices(count: number): Voice[] {
  return VOICES.slice(0, Math.max(0, count));
}

export function getVoiceById(id: string): Voice | undefined {
  return VOICES.find((v) => v.id === id);
}

export function getExcerpt(text: string, maxChars = 90): string {
  const t = text.trim();
  if (t.length <= maxChars) return t;
  return `${t.slice(0, maxChars)}…`;
}
