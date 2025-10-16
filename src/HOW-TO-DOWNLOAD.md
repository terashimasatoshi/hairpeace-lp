# 📥 Figma Makeからプロジェクトをダウンロードする方法

このガイドでは、Figma Make環境から現在のプロジェクトをダウンロードして、独自ドメインで公開する方法を説明します。

---

## 🎯 Figma Makeでのダウンロード方法

### 方法1: ブラウザの開発者ツールを使用（上級者向け）

Figma Make環境では、直接的な「ダウンロードボタン」がない場合があります。
以下の手順でプロジェクトファイルを取得できます：

#### ステップ1: ソースコードの確認
1. ブラウザで **F12キー** を押して開発者ツールを開く
2. **Sources（ソース）タブ** を開く
3. 左側のファイルツリーからプロジェクトファイルを確認

#### ステップ2: 各ファイルのコピー
以下のファイルを1つずつコピーして、ローカルに保存：

**必須ファイル：**
- `/App.tsx`
- `/index.html`
- `/package.json`
- `/vite.config.ts`
- `/tsconfig.json`
- `/styles/globals.css`

**コンポーネントファイル（/componentsフォルダ）：**
- `Hero.tsx`
- `ReasonsSection.tsx`
- `PopularMenu.tsx`
- `BeforeAfter.tsx`
- `CTASection.tsx`
- `ReviewsSection.tsx`
- `FlowSection.tsx`
- `AwardsSection.tsx`
- `FAQ.tsx`
- `Access.tsx`
- `Footer.tsx`

**UIコンポーネント（/components/uiフォルダ）：**
- すべての `.tsx` ファイル

---

## 🚀 より簡単な方法：手動での再構築

プロジェクトのダウンロードが難しい場合、以下の方法で新規に構築できます：

### ステップ1: ローカル環境でViteプロジェクトを作成

```bash
# Node.jsがインストールされていることを確認
node -v

# 新規Viteプロジェクトを作成
npm create vite@latest hairpeace-lp -- --template react-ts

# プロジェクトフォルダに移動
cd hairpeace-lp

# 依存関係をインストール
npm install

# Tailwind CSSとその他の必要なパッケージをインストール
npm install -D tailwindcss@next @tailwindcss/vite@next
npm install lucide-react
npm install clsx tailwind-merge
```

### ステップ2: プロジェクト設定ファイルを作成

#### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### ステップ3: Figma Makeのコードをコピー

Figma Makeの画面から、以下のファイルの内容をコピーして、ローカルプロジェクトに貼り付けます：

1. **グローバルCSS**
   - Figma Makeの `/styles/globals.css` → ローカルの `src/styles/globals.css`

2. **メインアプリケーション**
   - Figma Makeの `/App.tsx` → ローカルの `src/App.tsx`

3. **各コンポーネント**
   - `/components/` 内のすべてのファイルを `src/components/` にコピー

4. **画像ファイル**
   - Unsplash URLを使用している場合、そのまま使用可能
   - Figmaからインポートした画像は、別途ダウンロードして `/public/images/` に配置

### ステップ4: ローカルで実行

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 を開く
```

### ステップ5: ビルドしてデプロイ

```bash
# プロダクションビルド
npm run build

# distフォルダが生成される
```

この `dist` フォルダをVercel、Netlify、またはその他のホスティングサービスにアップロードできます。

---

## 📦 完全なファイル構成

ローカルプロジェクトの最終的なフォルダ構成：

```
hairpeace-lp/
├── public/
│   └── images/          # 画像ファイル
├── src/
│   ├── components/
│   │   ├── ui/         # ShadCN UIコンポーネント
│   │   ├── Hero.tsx
│   │   ├── ReasonsSection.tsx
│   │   ├── PopularMenu.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── CTASection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── FlowSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── FAQ.tsx
│   │   ├── Access.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🌐 次のステップ：デプロイ

プロジェクトをローカルに構築したら、以下のガイドを参照してデプロイしてください：

→ **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** を参照

**推奨デプロイ先：**
1. **Vercel**（最も簡単）
2. **Netlify**
3. **STUDIO**（日本語サポート）

---

## 💡 便利なTips

### package.jsonの内容

```json
{
  "name": "hairpeace-lp",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^4.0.0-alpha.35",
    "@tailwindcss/vite": "^4.0.0-alpha.35"
  }
}
```

### 画像の取り扱い

Figma Makeで `figma:asset/...` を使用している画像は、以下のいずれかの方法で対応：

1. **Unsplashに置き換え**
   ```tsx
   // 変更前
   import heroImage from "figma:asset/xxxxx.png";
   
   // 変更後
   const heroImage = "https://images.unsplash.com/photo-1560066984-138dadb4c035";
   ```

2. **ローカルに保存**
   - Figma Makeから画像をダウンロード
   - `/public/images/` フォルダに配置
   ```tsx
   import heroImage from "/images/hero.jpg";
   ```

---

## 🆘 トラブルシューティング

### Q: Figma Makeの画面からコードをコピーできない

**A:** 以下を試してください：
1. ブラウザの開発者ツール（F12）を開く
2. Elementsタブでコードを確認
3. 右クリック → Copy → Copy outerHTML

### Q: 画像が表示されない

**A:** 以下を確認：
1. 画像URLが正しいか
2. `figma:asset/...` の画像はUnsplashに置き換える
3. CORS エラーがないか確認

### Q: ビルドエラーが出る

**A:** 以下を実行：
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 サポート

このプロジェクトを独自ドメインで公開したい場合：

1. **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** - Vercel/Netlifyでの公開方法
2. **[STUDIO-MIGRATION.md](./STUDIO-MIGRATION.md)** - STUDIOへの移行方法

どちらも詳しく解説していますので、ご参照ください！

---

## ✨ まとめ

最も簡単な公開方法：

1. **ローカル環境でViteプロジェクトを作成**
2. **Figma Makeのコードをコピー**
3. **GitHubにプッシュ**
4. **Vercelで自動デプロイ** ← 最も簡単！

所要時間：約30分〜1時間

頑張ってください！🚀
