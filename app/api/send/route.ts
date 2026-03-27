import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactSchema";

const DEFAULT_FROM_EMAIL = "no-reply@jumonji-sogo.com";
const DEFAULT_TO_EMAIL = "htakamura@festa.ocn.ne.jp";

function buildEmailHtml(body: ContactFormValues): string {
  return `
    <h2>お問い合わせ（ホームページ）</h2>
    <table style="border-collapse: collapse; margin-top: 1rem;">
      <tr><td style="padding: 0.5rem; border: 1px solid #eee;">名前</td><td style="padding: 0.5rem; border: 1px solid #eee;">${escapeHtml(body.name)}</td></tr>
      <tr><td style="padding: 0.5rem; border: 1px solid #eee;">フリガナ</td><td style="padding: 0.5rem; border: 1px solid #eee;">${escapeHtml(body.furigana)}</td></tr>
      <tr><td style="padding: 0.5rem; border: 1px solid #eee;">電話番号</td><td style="padding: 0.5rem; border: 1px solid #eee;">${escapeHtml(body.phone)}</td></tr>
      <tr><td style="padding: 0.5rem; border: 1px solid #eee;">メールアドレス</td><td style="padding: 0.5rem; border: 1px solid #eee;">${escapeHtml(body.email)}</td></tr>
      <tr><td style="padding: 0.5rem; border: 1px solid #eee;">お問い合わせ内容</td><td style="padding: 0.5rem; border: 1px solid #eee; white-space: pre-wrap;">${escapeHtml(body.message)}</td></tr>
    </table>
  `.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信の設定がありません" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません" },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message = Object.values(first).flat().join(" ") || "入力内容を確認してください";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  // ハニーポットに値が入っている場合はbotとみなして成功扱いで早期終了
  if (parsed.data.botField && parsed.data.botField.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: `十文字総合開発お問い合わせ <${fromEmail}>`,
    to: [toEmail],
    replyTo: parsed.data.email,
    subject: `【お問い合わせ】${parsed.data.name} 様`,
    html: buildEmailHtml(parsed.data),
  });

  if (error) {
    console.error("[send] Resend error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。しばらく経ってからお試しください。" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
