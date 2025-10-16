# 🗺️ Googleマップの設定方法

サイトにGoogleマップを正しく表示するため、実際の店舗の埋め込みURLを取得する手順です。

---

## 📍 Googleマップ埋め込みURLの取得方法

### ステップ1: Googleマップを開く

1. https://www.google.com/maps にアクセス
2. 検索ボックスに店舗の住所を入力

**高柳本店の場合:**
```
福井県福井市高柳１丁目８０２
```

**花堂店の場合:**
```
福井県福井市花堂北１丁目１６０
```

### ステップ2: 地図を埋め込む

1. 目的地が表示されたら、左側のパネルで **「共有」** ボタンをクリック
2. **「地図を埋め込む」** タブをクリック
3. 地図のサイズを選択（推奨: **「中」** または **「大」**）
4. **「HTMLをコピー」** をクリック

### ステップ3: URLを抽出

コピーしたHTMLは以下のような形式です：

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

この中の **`src="..."`** の部分（URLのみ）をコピーしてください。

例:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.862!2d136.197!3d36.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8bde9ba9c3c3f%3A0x8e6a6c9b2f0c3f3f!2z...
```

### ステップ4: コードに反映

`/components/Access.tsx` ファイルを開き、該当する店舗の `mapUrl` を更新：

```typescript
const stores = [
  {
    id: "takayanagi",
    name: "高柳本店",
    address: "〒910-0837 福井県福井市高柳１丁目８０２",
    phone: "0776-97-5512",
    // ... 他の設定
    mapUrl: "ここにコピーしたURLを貼り付け"  // ← ここを更新
  },
  {
    id: "hanado",
    name: "花堂店",
    address: "〒918-8012 福井県福井市花堂北１丁目１６０",
    phone: "0776-97-9516",
    // ... 他の設定
    mapUrl: "ここにコピーしたURLを貼り付け"  // ← ここを更新
  }
];
```

---

## 🎯 具体的な手順（画像付き説明）

### 1. Googleマップで住所を検索

<img src="https://via.placeholder.com/800x400?text=Googleマップで住所を検索" alt="検索画面">

↓

### 2. 「共有」ボタンをクリック

<img src="https://via.placeholder.com/800x400?text=共有ボタンをクリック" alt="共有ボタン">

↓

### 3. 「地図を埋め込む」タブを選択

<img src="https://via.placeholder.com/800x400?text=地図を埋め込むタブ" alt="埋め込みタブ">

↓

### 4. 「HTMLをコピー」

<img src="https://via.placeholder.com/800x400?text=HTMLをコピー" alt="コピー">

---

## 💡 補足: より正確な位置を設定する方法

もしGoogleマップで検索しても正確な位置が出ない場合：

### 方法1: Googleマイビジネスを使用

1. https://business.google.com にアクセス
2. サロンのビジネスプロフィールを作成/確認
3. そこから正確な位置の埋め込みコードを取得

### 方法2: 手動でピンを立てる

1. Googleマップで大まかな位置を表示
2. 正確な場所を **右クリック** → **「この場所について」**
3. 緯度・経度が表示されるので、それを使って正確な位置を設定

---

## ✅ 動作確認

### ローカル環境で確認

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開き、以下を確認：

- [ ] 「アクセス・店舗情報」セクションまでスクロール
- [ ] 「高柳本店」タブをクリック → 地図が表示される
- [ ] 「花堂店」タブをクリック → 地図が表示される
- [ ] 地図上で正しい位置にピンが立っている
- [ ] 地図をドラッグ・ズームできる

### Vercelにデプロイ

```bash
git add .
git commit -m "Add Google Maps integration"
git push
```

Vercelが自動でデプロイします（約1分）。

---

## 🔧 トラブルシューティング

### Q1: 地図が表示されない

**A:** 以下を確認してください：

1. **URLが正しいか**
   - `https://www.google.com/maps/embed?pb=...` で始まっているか
   - ダブルクォート `"` で囲まれているか

2. **ブラウザのエラーを確認**
   - F12を押して開発者ツールを開く
   - Consoleタブでエラーがないか確認

3. **APIキーの問題**
   - Googleマップの埋め込みは基本的にAPIキー不要
   - もし要求された場合、Google Cloud Platformで無料のAPIキーを取得

### Q2: 地図が小さすぎる/大きすぎる

**A:** `/components/Access.tsx` の高さを調整：

```typescript
<div className="w-full h-[400px]">  // ← この数値を変更
  <iframe
    // ...
    height="400"  // ← この数値も合わせて変更
  />
</div>
```

推奨サイズ:
- **デスクトップ**: 400px〜500px
- **モバイル**: 300px〜400px

### Q3: 地図の表示位置がずれている

**A:** Googleマップ上で以下を確認：

1. 店舗名で検索してみる
   - 例: 「HAIR&MAKE peace 高柳本店」
2. より正確な住所で検索
   - ビル名や目印を追加
3. Googleマイビジネスに登録されているか確認

---

## 🎨 カスタマイズオプション

### 地図のスタイルを変更

Googleマップの埋め込みURLに以下のパラメータを追加できます：

```
&maptype=roadmap  // 通常の地図（デフォルト）
&maptype=satellite  // 航空写真
&maptype=hybrid  // 航空写真+道路名
&maptype=terrain  // 地形図
```

### ズームレベルを変更

URLの `!4f13.1` の部分がズームレベルです（数値が大きいほどズーム）：

```
!4f15.0  // よりズームイン（店舗を大きく表示）
!4f11.0  // ズームアウト（周辺エリアも表示）
```

### 表示言語を変更

URLに `&hl=ja` を追加すると日本語表示（デフォルトで日本語）：

```
https://www.google.com/maps/embed?pb=!1m18...&hl=ja
```

---

## 📱 モバイル対応

現在の実装では、モバイルでも同じ高さ（400px）で表示されます。

モバイルで高さを調整したい場合：

```typescript
<div className="w-full h-[300px] md:h-[400px]">
  {/* モバイル: 300px, デスクトップ: 400px */}
</div>
```

---

## 🚀 完成例

正しく設定されると、以下のように表示されます：

- **高柳本店タブ**: 福井県福井市高柳１丁目８０２の地図
- **花堂店タブ**: 福井県福井市花堂北１丁目１６０の地図

各地図は：
- ✅ インタラクティブ（ドラッグ、ズーム可能）
- ✅ レスポンシブ（モバイル対応）
- ✅ 読み込み最適化（lazy loading）
- ✅ アクセシビリティ対応（title属性）

---

## 📞 サポート

Googleマップの埋め込みで問題が発生した場合：

1. **Google Maps Platform サポート**
   - https://developers.google.com/maps/documentation/embed

2. **Googleマイビジネス ヘルプ**
   - https://support.google.com/business

3. **このプロジェクトの他のドキュメント**
   - [README.md](./README.md)
   - [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

---

## ✨ まとめ

1. Googleマップで店舗住所を検索
2. 「共有」→「地図を埋め込む」→「HTMLをコピー」
3. `src="..."`のURLを抽出
4. `/components/Access.tsx`の`mapUrl`に貼り付け
5. Git commitしてVercelにプッシュ

**所要時間**: 約5分（両店舗合わせて）

これで訪問者が簡単に店舗の場所を確認できるようになります！🗺️
