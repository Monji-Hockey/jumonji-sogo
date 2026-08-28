export type Voice = {
  id: string;
  subject: string;
  area: string;
  customerLabel: string;
  body: string;
  /** ソート・12か月判定用 (YYYY-MM) */
  publishedMonth: string;
  /** 省略時は publishedMonth を「YYYY年M月」表示 */
  periodLabel?: string;
};

export type VoicePeriodGroup = {
  key: string;
  label: string;
  voices: Voice[];
};

export const VOICES: Voice[] = [
  // --- 2026年8月 ---
  {
    id: "voice-aug-1",
    subject: "見積書と都合に合わせた対応",
    area: "熊谷市",
    customerLabel: "埼玉県熊谷市在住",
    body: "見積書を送っていただきありがとうございます。返事がおそくなりました。こちらの都合に合わせて頂いてありがとうございます。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-2",
    subject: "証券探しの前の調査",
    area: "久慈市",
    customerLabel: "岩手県久慈市在住",
    body: "証券を探す前に調べてもらってありがとうございます。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-3",
    subject: "時間に合わせた対応",
    area: "久慈市",
    customerLabel: "岩手県久慈市在住",
    body: "こちらの時間に合わせてもらってありがとうございます。いつもありがとう。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-4",
    subject: "訪問への感謝",
    area: "久慈市",
    customerLabel: "岩手県久慈市在住",
    body: "忙しいだろうに、いつも来てもらってわるいね。ありがとう。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-5",
    subject: "事故担当から修理工場への連絡",
    area: "久慈市",
    customerLabel: "岩手県久慈市在住",
    body: "事故担当から修理工場へ連絡をいれてもらえて、対応がよくてありがとうございました。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-6",
    subject: "他代理店契約の補償指摘と変更",
    area: "軽米町",
    customerLabel: "岩手県軽米町在住",
    body: "夫婦ともに会って保険内容の説明をきちんと聞けてよかったです。現在加入中の他代理店加入の保険内容で今のままでは補償対象にならないことや他内容の指摘や対応アドバイスもいただき、即変更手続きをとり、スムーズに対処できました。危なく保険に入っている意味がなくなるところでご指摘とアドバイスもらい助かりました。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-7",
    subject: "ケガ請求と火災保険の継続",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "いつも自動車保険やケガの保険でお世話になっています。現在ケガ通院で請求中ですが、おかげさまでそろそろケガ治療も終わりそうです。次は火災保険の満期がくるので引き続きお願いしたいと思います。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-8",
    subject: "手続き訪問と病院情報の提供",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "いつも手続きに来ていただいてありがとうございます。保険以外で現在ケガをしている相談した病院情報提供など教えていただきありがとうございます。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-9",
    subject: "地震保険請求と自動車保険への信頼",
    area: "一戸町",
    customerLabel: "岩手県一戸町在住",
    body: "火災保険で地震保険請求の時は大変お世話になりました。大して期待していなかった保険金は思っていた金額より多く、十分に修繕することができました。本当にその時は助かりました。自動車保険でもわかりやすく、しっかりと説明してくれるので信頼しています。夫婦ともに退職したので何かと保険や保険以外でも相談したいことがあると思いますので、今後ともよろしく頼みます。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-10",
    subject: "息子の車の保険と将来の引き継ぎ",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "工場を退職して13年近く経つね。当初無保険だった息子の車に保険をかけていて月日が経つのがとても早い。まだ私が元気なうちはちゃんと払うけど何かあれば息子になるのでその時はよろしくね。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-11",
    subject: "結婚を機に自動車保険を自分で契約",
    area: "洋野町",
    customerLabel: "岩手県洋野町在住",
    body: "今まで自動車保険は親からすべてやってもらっていましたが、この度、結婚をした区切りで自動車保険を自分でやることにしました。親からよくやってくれる担当者だよと聞いていたので、引き続きお願いしました。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-12",
    subject: "家族分の変更と今後の入替・法人化",
    area: "洋野町",
    customerLabel: "岩手県洋野町在住",
    body: "家族分の車の保険で色々と保険内容の変更や手続きに来てくれてアドバイスもいただきありがとうございます。これからの車の入替や法人契約へ変更することなど予定がありますが引き続き対応をお願いします。娘も嫁ぎ、車の保険を自分でやらせることにしたので、こちらも引き続きよろしくお願いします。",
    publishedMonth: "2026-08",
  },
  {
    id: "voice-aug-13",
    subject: "満期案内のタイミング",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "自動車保険で満期案内が遅かったことを謝罪し、次回早めの対応案をしたが、契約者的には、あまり早すぎてもなんだか不安だし、今回はちょうどよく気にならなかったよ。",
    publishedMonth: "2026-08",
  },
  // --- 2026年7月 ---
  {
    id: "voice-1",
    subject: "自社ニーズに合った保険提案",
    area: "一関市",
    customerLabel: "岩手県一関市在住",
    body: "いつも自社のニーズに合った保険商品をご提案いただきありがとうございます。今後ともよろしくお願いします。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-2",
    subject: "雹被害・全損の対応",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "落下物（雹）の被害で全損。「助かりました。」",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-3",
    subject: "スキー用品の請求対応",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "いつもスキー用品の請求で迷惑をかけていてすみません。変わらずの対応もありがとうございます。保険金支払い対応までとても早くいつも助かります。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-4",
    subject: "その都度の丁寧な説明",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "自動車保険手続きの時にきちんと説明してもらっているけども年々歳をとり数日たつと忘れてしまう事が多くなってしまっていた。また聞いても忘れてしまうかもしれないけど、その都度教えて欲しいです。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-5",
    subject: "火災保険・地震を含めた提案",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "自動車保険でいつもお世話になっていて丁度良く火災保険の見直しや最近多い地震のこともあり現在加入中の保険内容に合わせた保険提案をしてくれた。他に急ぎで対応をしてくれてとても助かりました。次回他契約が満期を迎えた時は一本化にお願いする予定です。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-6",
    subject: "2台割引と車別の補償設定",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "祖母と親からのすすめでそのまま車の保険へ加入していつもお世話になっています。今回新たに夫の車を取得し保険加入を相談した流れで2台割引がある内容で補償内容や特約など車別に設定してくれてとても助かりました。今後とも変わらずな対応でよろしくお願いします。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-7",
    subject: "急な変更と保険以外の相談",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "いつも急な変更などをお願いしてすみません。いつも良くしてくれて保険以外の相談も聞いてくれてありがとうございます。親の車1台は他社契約なのですが時期をみてこちらへお願いしたいと思っています。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-8",
    subject: "丁寧な説明への感謝",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "いつも手続きの時に丁寧に説明をしてくれてありがとうございました。この時世保険料の値上げなどは仕方ないと思っています。次回車の購入を検討している最中なので引き続き対応をお願いします。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-9",
    subject: "保険料とドラレコの相談",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "自動車保険料が毎回上がるのはとても厳しいです。保険をかけないこともできないし仕方ないと思うが他のお客さんも値上がりに対して何も言っていないですか？夫のドラレコの相談をして良かったです。継続で会って聞けて良かったです。危なく機器を捨てるところでした。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-10",
    subject: "変わらない詳しい説明",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "保険対応はいつもと変わらず色々と詳しく説明してくれて助かっています。最近保険料が上がっているのは仕方がないが懐が痛いです。母も姉もお世話になっているのでこれからもお世話してください。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-11",
    subject: "保険期間の説明とJAF",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "今回の自動車保険は保険期間の違いで保険料が変わる説明やその他変更になったことなどの説明をしてくれたので1年契約で手続きします。来年も手続きにおいでください。JAF会員でロードサービス対応など詳しく教えて下さりありがとうございます。",
    publishedMonth: "2026-07",
  },
  {
    id: "voice-12",
    subject: "リース車両の保険継続",
    area: "岩手県",
    customerLabel: "岩手県在住",
    body: "昨年の継続の時は継続するかしないかで迷惑かけて申し訳なかった。リース契約車両修理が入っていた時の保険で加入していて、今はリース車両の修理は一切入らないので保険はもういいやと思っていたが他の車両も扱うし必要なことだと家族で再認識した。これからも加入した保険はよろしく頼みます。",
    publishedMonth: "2026-07",
  },
  // --- 2026年1月〜6月 ---
  {
    id: "voice-13",
    subject: "近所の保険代理店",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "代理店が近所にあり連絡もすぐとれるし担当者は自宅へ手続きに来てくれるのでとても助かっています。引き続き変わらない対応でよろしくお願いします。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
  {
    id: "voice-14",
    subject: "自動車保険の保険内容見直し",
    area: "九戸村",
    customerLabel: "岩手県九戸村在住",
    body: "自動車保険の家族契約で各車ごと生活状況の変化に応じて補償内容をその都度細かい見直しなど相談にのってくれていつもありがとう。今後もよろしくお願いしますね。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
  {
    id: "voice-15",
    subject: "退職後の相談",
    area: "九戸村",
    customerLabel: "岩手県九戸村在住",
    body: "団体扱い契約加入中で定年を迎えることが決まり退職後の自動車保険は他へ移らないので引き続き変わらずの対応でこれからもお願いします。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
  {
    id: "voice-16",
    subject: "保険以外の相談",
    area: "二戸市",
    customerLabel: "岩手県二戸市在住",
    body: "自動車保険や傷害保険の手続きでいつも休みの日に自宅へ手続きに来てくれて、保険の変更点や改定など詳しく説明をしてくれる他に保険以外の相談にも親身にのっていただきとても助かっています。いつもありがとうございます。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
  {
    id: "voice-17",
    subject: "もし保険会社が変わった場合",
    area: "八幡平市",
    customerLabel: "岩手県八幡平市在住",
    body: "もし取扱い保険会社が変わっても自動車保険は安心して任せられるので他に移らないです。引き続きよろしく頼みます。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
  {
    id: "voice-18",
    subject: "事故の対応",
    area: "八幡平市",
    customerLabel: "岩手県八幡平市在住",
    body: "自動車事故では相手と色々とありましたが相談にのっていただき落込んだ気持ちも楽になりました。その後の事故もスムーズに解決して助かりました。自動車保険で保険会社が変わっても事故の対応や、その他の保険手続き等も今まで通り安心してお任せします。",
    publishedMonth: "2026-06",
    periodLabel: "2026年1月〜6月",
  },
];

function parseYearMonth(ym: string): { year: number; month: number } {
  const [y, m] = ym.split("-").map(Number);
  return { year: y, month: m };
}

function formatYearMonth(ym: string): string {
  const { year, month } = parseYearMonth(ym);
  return `${year}年${month}月`;
}

export function formatVoicePeriod(v: Voice): string {
  return v.periodLabel ?? formatYearMonth(v.publishedMonth);
}

export function getLatestPublishedMonth(voices: Voice[] = VOICES): string | null {
  if (voices.length === 0) return null;
  return voices.reduce(
    (max, v) => (v.publishedMonth > max ? v.publishedMonth : max),
    voices[0].publishedMonth,
  );
}

export function formatLatestUpdateLabel(voices: Voice[] = VOICES): string | null {
  const latest = getLatestPublishedMonth(voices);
  return latest ? formatYearMonth(latest) : null;
}

function getCutoffMonth(referenceMonth: string, months: number): string {
  const { year, month } = parseYearMonth(referenceMonth);
  const total = year * 12 + (month - 1) - (months - 1);
  const y = Math.floor(total / 12);
  const m = (total % 12) + 1;
  return `${y}-${String(m).padStart(2, "0")}`;
}

export function getVoicesWithinMonths(
  voices: Voice[] = VOICES,
  months = 12,
): Voice[] {
  const latest = getLatestPublishedMonth(voices);
  if (!latest) return [];
  const cutoff = getCutoffMonth(latest, months);
  return voices.filter((v) => v.publishedMonth >= cutoff);
}

export function getArchivedVoices(voices: Voice[] = VOICES, months = 12): Voice[] {
  const latest = getLatestPublishedMonth(voices);
  if (!latest) return [];
  const cutoff = getCutoffMonth(latest, months);
  return voices.filter((v) => v.publishedMonth < cutoff);
}

export function getLatestVoices(count: number, voices: Voice[] = VOICES): Voice[] {
  const sorted = [...voices].sort((a, b) => {
    if (a.publishedMonth !== b.publishedMonth) {
      return a.publishedMonth < b.publishedMonth ? 1 : -1;
    }
    return voices.indexOf(a) - voices.indexOf(b);
  });
  return sorted.slice(0, Math.max(0, count));
}

export function groupVoicesByPeriod(voices: Voice[]): VoicePeriodGroup[] {
  const groups: VoicePeriodGroup[] = [];
  const indexByKey = new Map<string, number>();

  for (const v of voices) {
    const label = formatVoicePeriod(v);
    const key = v.periodLabel ?? v.publishedMonth;
    const existing = indexByKey.get(key);
    if (existing === undefined) {
      indexByKey.set(key, groups.length);
      groups.push({ key, label, voices: [v] });
    } else {
      groups[existing].voices.push(v);
    }
  }

  return groups;
}

export function getExcerpt(text: string, maxChars = 90): string {
  const t = text.trim();
  if (t.length <= maxChars) return t;
  return `${t.slice(0, maxChars)}…`;
}
