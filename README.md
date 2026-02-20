# 株式会社十文字総合開発 ホームページ

Next.js (App Router) + TypeScript + Tailwind CSS で構築。Vercel へのデプロイを前提としています。

## ディレクトリ構成

```
├── app/
│   ├── layout.tsx            # 共通レイアウト（Header / Footer / Analytics）
│   ├── page.tsx              # トップ（メインビジュアル・営業日カレンダー）
│   ├── globals.css
│   ├── api/calendar/route.ts # 営業日カレンダー用 API（公開 iCal 取得）
│   ├── privacy/page.tsx      # 個人情報保護に関する基本方針
│   ├── solicitation/page.tsx # 勧誘方針
│   ├── fd-declaration/page.tsx # お客さま本位の業務運営方針（FD宣言）
│   └── disclosure/page.tsx   # 権限明示・推奨方針
├── components/
│   ├── Header.tsx            # 30周年バッジ・緊急ダイヤル
│   ├── Footer.tsx            # 重要文書リンク
│   ├── GoogleAnalytics.tsx   # GA4 トラッキング（本番・ID 設定時のみ）
│   ├── CalendarSection.tsx   # 営業日カレンダー（API 取得・自前描画）
│   └── ScrollRestoration.tsx
├── lib/
│   └── gtag.ts               # GA4 用 pageview / event ヘルパー
├── public/
│   └── images/               # ロゴ等
├── docs/                      # 要件・デザイン・参考メモ
├── .env.local.example         # 環境変数の例（GA・カレンダーID）
└── package.json
```

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で表示されます。

## ビルド・デプロイ（Vercel）

- **ビルド:** `npm run build`
- **Vercel:** リポジトリを連携すると自動で Next.js を検出しビルド・デプロイされます。ドメインは後から設定可能です。

## 営業日カレンダー（Google カレンダー）

トップページの「営業日カレンダー」は、**iframe を使わず** Google カレンダーの公開 iCal フィードから予定を取得し、サイト上に直接描画しています。サードパーティ Cookie をブロックしている環境（Safari など）でも表示されます。

表示するには以下を設定してください。

1. Google カレンダーで「設定」→「アクセス権」で **「一般公開して、誰でも利用できるようにする」** をオンにする（公開 iCal 用）
2. カレンダーID（`xxx@group.calendar.google.com` 形式）を取得
3. 環境変数 `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` または `GOOGLE_CALENDAR_ID` にそのIDを設定（Vercel の場合はダッシュボードの Environment Variables で設定）

未設定の場合は予定は表示されず、カレンダー枠のみ表示されます。

## 分析・アクセス解析

- **Vercel Analytics:** デプロイ先が Vercel の場合、`layout.tsx` に組み込んだ `<Analytics />` により Web Vitals 等が自動で計測されます（本番のみ）。
- **Google Analytics (GA4):** 任意で利用できます。`NEXT_PUBLIC_GA_ID`（測定 ID: `G-XXXXXXXXXX`）を設定すると、本番環境でのみ GA4 のトラッキングコードが読み込まれます。  
  - ページビューは自動送信。ボタンクリック等は `lib/gtag.ts` の `event()` で送信可能です。
  - ローカル開発では ID が未設定・または本番以外のためスクリプトは動作せず、エラーにはなりません。

環境変数の例は `.env.local.example` を参照し、必要な値を `.env.local` にコピーして設定してください。

## コンプライアンスページの本文について

`/privacy`・`/solicitation`・`/fd-declaration`・`/disclosure` の4ページは、現在は典型的な構成の仮テキストです。**添付の正式ドキュメント（プライバシーポリシー、勧誘方針、FD宣言、権限明示・推奨方針）のテキストに差し替えてください。** 各ページの `app/**/page.tsx` を編集し、見出し・本文を公式文書の内容に合わせて置き換えてください。
