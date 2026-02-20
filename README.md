# 株式会社十文字総合開発 ホームページ

Next.js (App Router) + TypeScript + Tailwind CSS で構築。Vercel へのデプロイを前提としています。

## ディレクトリ構成

```
├── app/
│   ├── layout.tsx          # 共通レイアウト（Header / Footer）
│   ├── page.tsx             # トップ（メインビジュアル・営業日カレンダー）
│   ├── globals.css
│   ├── privacy/page.tsx     # 個人情報保護に関する基本方針
│   ├── solicitation/page.tsx # 勧誘方針
│   ├── fd-declaration/page.tsx # お客さま本位の業務運営方針（FD宣言）
│   └── disclosure/page.tsx  # 権限明示・推奨方針
├── components/
│   ├── Header.tsx           # 30周年バッジ・緊急ダイヤル
│   └── Footer.tsx           # 重要文書リンク
├── public/
│   └── images/              # ロゴ等
├── docs/                     # 要件・デザイン・参考メモ
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

トップページの「営業日カレンダー」は、当月・翌月を並べて表示する枠組みです。表示するには以下を設定してください。

1. Google カレンダーで「公開設定」→「埋め込み」用のカレンダーIDを取得
2. 環境変数 `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` にそのIDを設定（Vercel の場合はダッシュボードの Environment Variables で設定）

未設定の場合は `YOUR_CALENDAR_ID` のままとなり、iframe は空になります。

## コンプライアンスページの本文について

`/privacy`・`/solicitation`・`/fd-declaration`・`/disclosure` の4ページは、現在は典型的な構成の仮テキストです。**添付の正式ドキュメント（プライバシーポリシー、勧誘方針、FD宣言、権限明示・推奨方針）のテキストに差し替えてください。** 各ページの `app/**/page.tsx` を編集し、見出し・本文を公式文書の内容に合わせて置き換えてください。
