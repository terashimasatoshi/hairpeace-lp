# 🎉 HAIR&MAKE peace 公式LP - 完全版プロジェクト

福井市のオーガニック美髪矯正サロン「HAIR&MAKE peace」の公式ランディングページの完全版です。

---

## 📦 プロジェクト概要

- **目的**: 予約獲得を目的とした公式LP
- **ターゲット**: 30〜50代女性
- **技術スタック**: React + TypeScript + Tailwind CSS v4
- **デプロイ**: Vercel対応

---

## ✨ 実装された主要機能

### **1. 完全なセクション構成（全9セクション）**
- ✅ Hero（メインビジュアル + CTA）
- ✅ 選ばれる理由（3つの強み）
- ✅ 人気メニュー（3プラン）
- ✅ Before/After（実際の施術写真）
- ✅ お客様の声（レビュー3件）
- ✅ ご利用の流れ（5ステップ）
- ✅ 実績（4つのデータ）
- ✅ FAQ（5つの質問）
- ✅ アクセス（2店舗のGoogleマップ埋め込み）

### **2. 実際の施術写真**
- ✅ METEO美髪矯正 Before/After
- ✅ METEOカラー Before/After
- ✅ 頭浸浴スパ Before/After

### **3. Googleマップ埋め込み**
- ✅ 高柳本店の地図
- ✅ 花堂店の地図

### **4. Hot Pepper Beauty連携**
- ✅ 店舗選択ダイアログ
- ✅ 各店舗の予約URLに自動遷移
- 高柳本店: https://beauty.hotpepper.jp/slnH000281422/
- 花堂店: https://beauty.hotpepper.jp/slnH000381011/

### **5. レスポンシブデザイン**
- ✅ モバイルファースト設計
- ✅ タブレット・デスクトップ対応
- ✅ 全セクションでレスポンシブ最適化

### **6. アンカーリンク**
- ✅ 全9セクションにIDを設定
- ✅ スムーズスクロール対応

---

## 📂 プロジェクト構造

```
peace-salon-lp/
├── App.tsx                          # メインアプリケーション
├── styles/
│   └── globals.css                  # Tailwind V4グローバルCSS
├── components/
│   ├── Hero.tsx                     # ヒーローセクション
│   ├── ReasonsSection.tsx           # 選ばれる理由
│   ├── PopularMenu.tsx              # 人気メニュー
│   ├── BeforeAfter.tsx              # Before/After（実際の施術写真）
│   ├── CTASection.tsx               # CTAセクション
│   ├── ReviewsSection.tsx           # お客様の声
│   ├── FlowSection.tsx              # ご利用の流れ
│   ├── AwardsSection.tsx            # 実績
│   ├── FAQ.tsx                      # よくある質問
│   ├── Access.tsx                   # アクセス・店舗情報
│   ├── Footer.tsx                   # フッター
│   ├── DownloadButton.tsx           # 固定予約ボタン
│   ├── StoreSelector.tsx            # 店舗選択ダイアログ
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # 画像フォールバックコンポーネント
│   └── ui/                          # Shadcn UIコンポーネント（40+）
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── ...（その他のUIコンポーネント）
├── README.md                        # プロジェクト概要
├── DEPLOYMENT-GUIDE.md              # デプロイガイド
├── GOOGLE-MAPS-SETUP.md             # Googleマップセットアップガイド
├── GOOGLE-DRIVE-IMAGES.md           # 画像管理ガイド
└── package.json                     # 依存関係
```

---

## 🚀 セットアップ手順

### **前提条件**
- Node.js 18以上
- Git
- npm または yarn

### **ステップ1: プロジェクトをダウンロード**

#### **方法A: Figma Makeからダウンロード（推奨）**
1. 右上の **「↓ Download」** ボタンをクリック
2. ZIPファイルがダウンロードされます
3. ZIPを解凍

#### **方法B: GitHubからクローン**
```bash
git clone https://github.com/yourusername/peace-salon-lp.git
cd peace-salon-lp
```

---

### **ステップ2: 依存関係のインストール**

```bash
npm install
```

または

```bash
yarn install
```

---

### **ステップ3: 開発サーバーを起動**

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開きます。

---

### **ステップ4: ビルド**

```bash
npm run build
```

`dist/` フォルダに本番用ファイルが生成されます。

---

## 🌐 Vercelへのデプロイ

### **方法1: Vercel CLI（推奨）**

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

### **方法2: GitHubからデプロイ**

1. GitHubにリポジトリをプッシュ
2. Vercelにログイン（https://vercel.com）
3. 「New Project」をクリック
4. GitHubリポジトリを選択
5. 「Deploy」をクリック

**設定不要**：Vercelが自動的に検出してデプロイします。

---

## 📋 主要コンポーネント

### **1. Hero.tsx**
- メインビジュアル
- 主要CTA（空き状況を確認、初回クーポンを見る）
- 店舗選択ダイアログを開く

### **2. BeforeAfter.tsx**
- 実際の施術写真を表示
- 3つのメニュー（METEO美髪矯正、METEOカラー、頭浸浴）
- Before/Afterのスライダー表示

### **3. Access.tsx**
- 2店舗のタブ切り替え
- Googleマップ埋め込み
- 店舗情報（住所、電話、営業時間、駐車場）
- 各店舗のWEB予約ボタン

### **4. StoreSelector.tsx**
- 店舗選択ダイアログ
- Hot Pepper BeautyのURLに自動遷移

---

## 🎨 デザインシステム

### **カラーパレット（ブラウンベース）**
```css
--color-brand-500: #A67C52;  /* メインカラー */
--color-brand-600: #8B6A45;  /* ホバー状態 */
--color-brand-100: #F5F0E8;  /* 背景色 */
```

### **タイポグラフィ**
- 見出し: 34px / 26px / 20px / 18px
- 本文: 16px
- 補足: 14px / 12px

### **スペーシング**
- セクション間: 96px（PC）/ 64px（SP）
- カード間: 40px
- 要素間: 8px / 12px / 16px / 24px / 32px

---

## 📸 画像の管理

### **実際の施術写真を使用している箇所**
- `BeforeAfter.tsx`: 6枚の施術写真（Before/After × 3メニュー）

### **画像の差し替え方法**

#### **オプション1: 直接画像を提供**
1. 新しい画像6枚を用意
2. Figma Makeで画像を添付
3. 自動的に `figma:asset/` パスに変換されます

#### **オプション2: Googleドライブ（詳細は GOOGLE-DRIVE-IMAGES.md を参照）**
1. Googleドライブに画像をアップロード
2. 共有設定を「リンクを知っている全員」に変更
3. URLを埋め込み形式に変換
4. `BeforeAfter.tsx` を更新

---

## 🔧 カスタマイズ

### **店舗情報の変更**

**`Access.tsx` と `StoreSelector.tsx` を編集:**

```typescript
const stores = [
  {
    id: "takayanagi",
    name: "高柳本店",
    address: "〒910-0837 福井県福井市高柳１丁目８０２",
    phone: "0776-97-5512",
    reservationUrl: "https://beauty.hotpepper.jp/slnH000281422/",
    mapUrl: "https://www.google.com/maps/embed?pb=..."
  },
  // ...
];
```

### **メニュー内容の変更**

**`PopularMenu.tsx` を編集:**

```typescript
const menuItems = [
  {
    title: "METEO美髪矯正 + カット",
    price: "¥22,000",
    duration: "約3時間",
    description: "...",
    features: ["頭皮保護", "高濃度トステア", ...],
    popular: true
  },
  // ...
];
```

### **レビューの変更**

**`ReviewsSection.tsx` を編集:**

```typescript
const reviews = [
  {
    age: "40代女性",
    rating: 5,
    comment: "...",
    service: "METEO美髪矯正 + カット"
  },
  // ...
];
```

---

## 📱 レスポンシブ対応

### **ブレークポイント**
```css
/* モバイル */
@media (max-width: 768px) { ... }

/* タブレット */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* デスクトップ */
@media (min-width: 1025px) { ... }
```

### **モバイル最適化**
- すべてのセクションでモバイルファースト設計
- タッチ操作に最適化されたボタンサイズ
- テキストの自動折り返し（`break-words`）
- 適切な余白とパディング

---

## 🐛 トラブルシューティング

### **Q1: 画像が表示されない**

**A:** 以下を確認：
1. `figma:asset/` パスが正しいか
2. Googleドライブの共有設定が「リンクを知っている全員」か
3. ブラウザのキャッシュをクリア

### **Q2: Googleマップが表示されない**

**A:** 以下を確認：
1. `mapUrl` が正しいか
2. 埋め込みURLの形式が正しいか（`/embed?pb=...`）
3. ブラウザの位置情報設定

### **Q3: Hot Pepper BeautyのURLが開かない**

**A:** 以下を確認：
1. `reservationUrl` が正しいか
2. ポップアップブロックが無効か
3. `_blank` ターゲットが設定されているか

### **Q4: ビルドエラーが発生する**

**A:** 以下を試す：
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install

# キャッシュをクリア
npm run build -- --clean
```

---

## 📚 参考ドキュメント

- **デプロイガイド**: `DEPLOYMENT-GUIDE.md`
- **Googleマップセットアップ**: `GOOGLE-MAPS-SETUP.md`
- **画像管理ガイド**: `GOOGLE-DRIVE-IMAGES.md`
- **プロジェクト概要**: `README.md`

---

## 🎯 次のステップ

### **1. ローカルで動作確認**
```bash
npm run dev
```

### **2. Vercelにデプロイ**
```bash
vercel --prod
```

### **3. 実際の施術写真に差し替え**
- `BeforeAfter.tsx` の画像URLを更新

### **4. 本番環境でテスト**
- すべての機能が正常に動作するか確認
- モバイル・タブレット・デスクトップで表示確認

---

## 📞 サポート

問題が発生した場合は、以下をお試しください：

1. **ドキュメントを確認**: 各種MDファイルに詳細な手順があります
2. **GitHub Issues**: バグ報告や機能リクエスト
3. **Vercel Docs**: https://vercel.com/docs

---

## 🎉 完成！

すべてのセットアップが完了しました。素晴らしいランディングページが完成しました！

**主要な実装内容：**
- ✅ 実際の施術写真を組み込み
- ✅ Googleマップを2店舗分埋め込み
- ✅ Hot Pepper Beauty予約連携
- ✅ レスポンシブデザイン完全対応
- ✅ 全9セクション実装完了

何か問題があれば、お気軽にお問い合わせください！

---

**更新日**: 2025年1月15日  
**バージョン**: 1.0.0 完全版  
**制作**: Figma Make
