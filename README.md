# Portfolio Gallery - Y-Aoyama

作品ギャラリーサイト（ポートフォリオ）

## 概要

自身の制作実績を一覧化し、視覚的に訴求するオンラインポートフォリオサイトです。

## 機能

- **カード型ギャラリー**: 作品をタイル状に表示
- **カテゴリフィルタ**: Webサイト/資料(PDF)/その他で絞り込み
- **ライトボックス表示**: 作品詳細をモーダルで表示
- **PDF閲覧リンク**: 資料を別タブで開く
- **外部リンク連携**: Webサイトを別タブで開く
- **レスポンシブ対応**: スマホ・タブレット・PC対応

## 使用技術

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## フォルダ構成

```
Galleryサイト/
├── index.html          # メインHTML
├── css/
│   └── style.css       # スタイルシート
├── js/
│   └── main.js         # メインJavaScript
├── images/
│   ├── thumbnails/     # サムネイル画像 (400x250px推奨)
│   └── full/           # 詳細画像 (800x500px以上推奨)
├── pdf/                # PDFファイル
├── docs/
│   ├── 要件定義書.md
│   └── 実装手順書.md
└── README.md
```

## セットアップ

1. 画像ファイルを `images/thumbnails/` と `images/full/` に配置
2. PDFファイルを `pdf/` に配置
3. `js/main.js` の `portfolioData` 配列を編集して作品情報を更新
4. ブラウザで `index.html` を開いて確認

## 作品の追加方法

`js/main.js` の `portfolioData` 配列に以下の形式でオブジェクトを追加:

```javascript
{
  id: 7,                                    // 一意のID
  title: "作品名",                          // 作品タイトル
  category: "website",                      // カテゴリ (website/pdf/other)
  categoryLabel: "Webサイト",               // 表示用カテゴリ名
  thumbnail: "images/thumbnails/work7.jpg", // サムネイル画像パス
  image: "images/full/work7.jpg",           // 詳細画像パス
  description: "作品の説明文",              // 説明文
  url: "https://example.com",               // 外部URL (なければnull)
  pdf: "pdf/document.pdf",                  // PDFパス (なければnull)
  date: "2026年2月"                         // 制作日
}
```

## ブラウザ対応

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## ライセンス

© 2026 Y-Aoyama. All rights reserved.
