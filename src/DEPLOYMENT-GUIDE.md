# 🚀 HAIR&MAKE peace LP 公開ガイド

このLPページを独自ドメインで公開する方法を3つご紹介します。

---

## 📊 公開方法の比較

| 方法 | 難易度 | 費用 | おすすめ度 | 備考 |
|------|--------|------|------------|------|
| **Vercel** | ★☆☆ 簡単 | 無料 | ⭐⭐⭐ | 最もおすすめ。5分で公開可能 |
| **Netlify** | ★☆☆ 簡単 | 無料 | ⭐⭐⭐ | Vercelと同様に簡単 |
| **STUDIO** | ★★☆ 中級 | 無料〜 | ⭐⭐☆ | 手動での再構築が必要 |

---

## 🎯 方法1: Vercel で公開（最もおすすめ）

### ⏱️ 所要時間：約5分
### 💰 費用：無料（独自ドメイン使用可能）

### ステップ1: プロジェクトをダウンロード

1. 右上の **「Download」ボタン** をクリック
2. ダウンロードしたZIPファイルを解凍

### ステップ2: GitHubにアップロード

1. [GitHub](https://github.com/) にアカウントを作成（無料）
2. 新しいリポジトリを作成
   - リポジトリ名: `hairpeace-lp`（任意）
   - Public を選択
3. 解凍したフォルダの内容をGitHubにアップロード
   - GitHub Desktopを使うか、ウェブ上で直接アップロード可能

### ステップ3: Vercelで公開

1. [Vercel](https://vercel.com/) にアクセス
2. 「GitHubでサインアップ」を選択
3. 「New Project」をクリック
4. GitHubリポジトリ `hairpeace-lp` を選択
5. **Framework Preset**: 「Vite」を選択
6. 「Deploy」をクリック

**🎉 完了！数分で公開されます**

### ステップ4: 独自ドメインの設定

1. Vercelのプロジェクトページで「Settings」→「Domains」
2. 購入したドメイン（例: `hairpeace.com`）を入力
3. DNS設定を案内に従って設定
   - お名前.com、ムームードメインなどで購入したドメインのDNS設定画面を開く
   - VercelのDNS情報（AレコードまたはCNAMEレコード）を追加

**例：お名前.comでの設定**
```
タイプ: A
ホスト: @
値: 76.76.21.21（Vercelが指定するIP）
```

---

## 🌐 方法2: Netlify で公開

### ⏱️ 所要時間：約5分
### 💰 費用：無料（独自ドメイン使用可能）

### ステップ1〜2: 同上（GitHubにアップロード）

### ステップ3: Netlifyで公開

1. [Netlify](https://netlify.com/) にアクセス
2. 「GitHubでサインアップ」を選択
3. 「Add new site」→「Import an existing project」
4. GitHubリポジトリ `hairpeace-lp` を選択
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. 「Deploy」をクリック

### ステップ4: 独自ドメインの設定

1. Netlifyのサイト設定で「Domain settings」
2. 「Add custom domain」をクリック
3. 購入したドメインを入力
4. DNS設定を案内に従って設定

---

## 🎨 方法3: STUDIO で公開

### ⏱️ 所要時間：約2〜3時間
### 💰 費用：無料プラン〜

STUDIOは日本製のノーコードツールで、視覚的にWebサイトを構築できます。
ただし、React/Tailwindのコードを手動でHTMLに変換する必要があります。

### 詳細は別ドキュメントを参照
→ **[STUDIO-MIGRATION.md](./STUDIO-MIGRATION.md)** を参照してください

※ ブラウンベースの最新デザインに対応した更新版を用意しています

---

## 💡 どの方法を選ぶべき？

### Vercel / Netlifyをおすすめする理由

✅ **簡単**: GitHubにアップロードするだけで自動公開  
✅ **無料**: 独自ドメインも無料で使える  
✅ **高速**: 世界中のCDNから配信され、表示速度が速い  
✅ **自動更新**: GitHubにコードを更新すると自動で反映  
✅ **SSL対応**: HTTPSが自動で有効化される  
✅ **修正が簡単**: コードを直接編集できる

### STUDIOを選ぶ理由

✅ **日本語サポート**: 日本語のドキュメントとサポート  
✅ **視覚的編集**: コードを書かずに編集可能  
⚠️ **手動作業が多い**: 初期構築に時間がかかる  
⚠️ **更新が大変**: 修正するたびにHTMLを書き直す必要がある

---

## 🛠️ 公開前のチェックリスト

公開する前に、以下の情報を実際のサロン情報に更新してください：

### 📝 更新が必要な情報

#### 1. Hot Pepper Beauty の予約URL
```typescript
// components/Hero.tsx
// components/CTASection.tsx
// 現在: https://beauty.hotpepper.jp/
// → 実際のサロンページURLに変更
```

#### 2. 店舗情報（Access.tsxファイル）
```typescript
// 高柳本店
住所: 〒910-0837 福井県福井市高柳１丁目８０２
電話: 0776-97-5512

// 花堂店
住所: 〒918-8012 福井県福井市花堂北１丁目１６０
電話: 0776-97-9516
```

#### 3. Googleマップの埋め込み
Googleマップから店舗の埋め込みコードを取得して、Access.tsxに追加

#### 4. メタタグ（SEO対策）
`index.html` に以下を追加：

```html
<head>
  <title>HAIR&MAKE peace | 福井市のオーガニック美髪矯正サロン</title>
  <meta name="description" content="福井市のオーガニック美髪矯正サロン。METEO美髪矯正で94%のダメージ削減。高柳本店・花堂店の2店舗。">
  <meta name="keywords" content="福井市,美容室,縮毛矯正,美髪矯正,オーガニック,METEO,peace">
  
  <!-- OGP設定（SNSシェア用） -->
  <meta property="og:title" content="HAIR&MAKE peace | 福井市のオーガニック美髪矯正サロン">
  <meta property="og:description" content="METEO美髪矯正で94%のダメージ削減。施術するほど髪が美しくなる。">
  <meta property="og:image" content="https://your-domain.com/ogp-image.jpg">
  <meta property="og:url" content="https://your-domain.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="HAIR&MAKE peace | 福井市のオーガニック美髪矯正サロン">
  <meta name="twitter:description" content="METEO美髪矯正で94%のダメージ削減">
  <meta name="twitter:image" content="https://your-domain.com/ogp-image.jpg">
</head>
```

---

## 📱 公開後の確認事項

公開後、以下を確認してください：

- [ ] **PC・スマホの両方で表示確認**
- [ ] **全てのCTAボタンが正しくリンクしているか**
  - 「空き状況を確認」→ Hot Pepper Beautyページ
  - 「初回クーポンを見る」→ メニューセクション
- [ ] **画像が全て表示されているか**
- [ ] **電話番号リンクが機能するか**（スマホで確認）
- [ ] **スムーススクロールが動作するか**
- [ ] **Googleマップが表示されているか**
- [ ] **SSL（HTTPS）が有効か**

---

## 🔧 トラブルシューティング

### Q1: Vercelで「Build Failed」エラーが出る

**A:** `package.json` の `scripts` に以下があるか確認：
```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

### Q2: 画像が表示されない

**A:** `figma:asset/...` の画像は Figma Make 専用です。
公開時は以下の対応が必要：
1. Unsplash画像を使う（無料）
2. 画像をダウンロードしてプロジェクトに追加

### Q3: 独自ドメインが反映されない

**A:** DNS設定の反映には最大48時間かかる場合があります。
通常は数時間〜半日で反映されます。

### Q4: スマホでレイアウトが崩れる

**A:** ブラウザのキャッシュをクリアしてください。
または、シークレットモードで確認してください。

---

## 📞 サポート・相談

### 技術的な質問
- Vercel: [Vercel Documentation](https://vercel.com/docs)
- Netlify: [Netlify Documentation](https://docs.netlify.com/)
- STUDIO: [STUDIO ヘルプセンター](https://help.studio.design/)

### ドメイン取得サービス
- [お名前.com](https://www.onamae.com/) - 国内最大手
- [ムームードメイン](https://muumuu-domain.com/) - 初心者向け
- [Google Domains](https://domains.google/) - シンプル

---

## 🎉 完成イメージ

公開後のURLは以下のようになります：

```
https://hairpeace.com （独自ドメイン）
または
https://hairpeace-lp.vercel.app （Vercel無料ドメイン）
```

**所要時間**: 
- Vercel/Netlify: 約5分（ドメイン設定含めて30分）
- STUDIO: 約2〜3時間

**推奨**: まずは **Vercel** で試してみることをおすすめします！
