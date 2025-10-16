# 🏪 HAIR&MAKE peace 公式LP

福井市のオーガニック美髪矯正サロン「HAIR&MAKE peace」の公式ランディングページです。

## 📋 プロジェクト概要

- **ターゲット**: 30〜50代女性
- **目的**: 予約獲得
- **強み**: 
  - METEO美髪矯正（94%のダメージ削減）
  - オーガニック施術
  - プロフェッショナルレベルの衛生管理
- **店舗**: 高柳本店・花堂店の2店舗

## 🎨 デザイン

- **配色**: ナチュラルブラウン（#A67C52）基調
- **トーン**: 清潔感・科学的・安心感
- **レスポンシブ**: モバイルファースト設計

## 🚀 公開方法

このプロジェクトを独自ドメインで公開する方法は3つあります：

### 1️⃣ Vercel（最もおすすめ・約5分）

```bash
# GitHubにコードをプッシュ
git init
git add .
git commit -m "Initial commit"
git push

# Vercelと連携
# https://vercel.com でGitHubリポジトリを選択
# 自動デプロイ完了！
```

→ 詳細は **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** を参照

### 2️⃣ Netlify（Vercelと同様に簡単）

→ 詳細は **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** を参照

### 3️⃣ STUDIO（日本語サポート）

→ 詳細は **[STUDIO-MIGRATION.md](./STUDIO-MIGRATION.md)** を参照

## 📥 Figma Makeからのダウンロード

Figma Make環境からこのプロジェクトをダウンロードする方法：

→ **[HOW-TO-DOWNLOAD.md](./HOW-TO-DOWNLOAD.md)** を参照

## 🛠️ ローカル開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### セットアップ手順

```bash
# プロジェクトのクローン（またはFigma Makeからコピー）
git clone <your-repo>
cd hairpeace-lp

# 依存関係のインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 を開く
```

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 📁 プロジェクト構成

```
├── App.tsx                      # メインアプリケーション
├── components/
│   ├── Hero.tsx                 # ①Heroセクション
│   ├── ReasonsSection.tsx       # ②選ばれる理由
│   ├── PopularMenu.tsx          # ③人気メニュー
│   ├── BeforeAfter.tsx          # ④Before/After
│   ├── ReviewsSection.tsx       # ⑤お客様の声
│   ├── FlowSection.tsx          # ⑥利用の流れ
│   ├── AwardsSection.tsx        # ⑦実績
│   ├── FAQ.tsx                  # ⑧FAQ
│   ├── Access.tsx               # ⑨アクセス
│   ├── CTASection.tsx           # CTAセクション
│   ├── Footer.tsx               # フッター
│   └── ui/                      # ShadCN UIコンポーネント
├── styles/
│   └── globals.css              # グローバルスタイル（Tailwind V4）
└── public/
    └── images/                  # 画像ファイル
```

## 🎯 セクション構成

### 全9セクション + CTA + フッター

1. **Hero** - メインビジュアル、METEO美髪矯正の訴求
2. **Reasons** - 3つの選ばれる理由（METEO技術、オーガニック、衛生管理）
3. **Menu** - 人気メニュー3つ（価格・時間・内容）
4. **Before/After** - 施術前後の比較
5. **Reviews** - お客様の声（Hot Pepper Beauty 4.8/5.0）
6. **Flow** - 利用の流れ（5ステップ）
7. **Awards** - 実績・データ（8年連続受賞、リピート率87%等）
8. **FAQ** - よくある質問（5問）
9. **Access** - 店舗情報（高柳本店・花堂店）
10. **CTA** - 予約誘導（中間・最終の2箇所）
11. **Footer** - フッター情報

## 🔧 カスタマイズ方法

### 店舗情報の変更

`/components/Access.tsx` を編集：

```typescript
// 高柳本店
address: "〒910-0837 福井県福井市高柳１丁目８０２",
tel: "0776-97-5512",

// 花堂店
address: "〒918-8012 福井県福井市花堂北１丁目１６０",
tel: "0776-97-9516",
```

### Hot Pepper Beauty URLの変更

`/components/Hero.tsx` と `/components/CTASection.tsx` を編集：

```typescript
// 現在のURL
window.open('https://beauty.hotpepper.jp/', '_blank');

// 実際のサロンページURLに変更
window.open('https://beauty.hotpepper.jp/slnH000XXXXX/', '_blank');
```

### メニュー価格・時間の変更

`/components/PopularMenu.tsx` を編集：

```typescript
const menuItems = [
  {
    title: "METEO美髪矯正 + カット",
    price: "¥22,000",
    duration: "約3〜4時間",
    // ...
  },
  // ...
];
```

### 配色の変更

`/styles/globals.css` のカラートークンを編集：

```css
:root {
  --color-brand-500: #A67C52;  /* メインカラー */
  --color-brand-600: #8B6A45;  /* ホバーカラー */
  /* ... */
}
```

## 📱 レスポンシブ対応

- **デスクトップ**: 1200px以上
- **タブレット**: 768px〜1199px
- **モバイル**: 〜767px

すべてのセクションがモバイルファーストで設計されています。

## 🎨 使用技術

- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Tailwind CSS V4** - スタイリング
- **ShadCN UI** - UIコンポーネント
- **Lucide React** - アイコン

## 📊 パフォーマンス

- **Lighthouse Score**: 95+（目標）
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3.0s

## ✅ 公開前チェックリスト

- [ ] Hot Pepper Beauty URLを実際のサロンページに変更
- [ ] 店舗情報（住所・電話番号）を確認
- [ ] Googleマップを埋め込み
- [ ] メニュー価格・時間を最新版に更新
- [ ] 画像URLを確認（Unsplash または独自画像）
- [ ] モバイル・PCの両方で表示確認
- [ ] 全CTAボタンのリンク動作確認
- [ ] SSL（HTTPS）が有効か確認

## 📞 サポート・ドキュメント

- **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** - Vercel/Netlifyでの公開方法（推奨）
- **[STUDIO-MIGRATION.md](./STUDIO-MIGRATION.md)** - STUDIOへの移行方法
- **[HOW-TO-DOWNLOAD.md](./HOW-TO-DOWNLOAD.md)** - Figma Makeからのダウンロード方法

## 🏆 制作情報

- **制作**: Figma Make
- **バージョン**: 1.0.0（2025年1月）
- **ライセンス**: Proprietary

## 🎉 次のステップ

1. **ローカル環境で動作確認**
   ```bash
   npm run dev
   ```

2. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

3. **Vercelで公開** ← 最も簡単！
   - https://vercel.com でGitHub連携
   - 自動デプロイ
   - 独自ドメイン設定

4. **運用開始** 🚀

---

## 💡 よくある質問

### Q: 画像はどこから取得していますか？

A: 現在はUnsplashの無料画像を使用しています。本番環境では、実際のサロンの写真に差し替えることをおすすめします。

### Q: メニュー価格を変更したい

A: `/components/PopularMenu.tsx` を編集してください。

### Q: お客様の声を追加したい

A: `/components/ReviewsSection.tsx` の `reviews` 配列に追加してください。

### Q: STUDIOとVercel、どちらがおすすめ？

A: **Vercelを強くおすすめします**。理由：
- GitHubと連携して自動デプロイ
- 無料で独自ドメイン使用可能
- 修正が簡単（コードを更新するだけで自動反映）
- 表示速度が速い（CDN配信）

---

**Made with ❤️ by Figma Make**
