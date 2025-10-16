# HAIR&MAKE peace STUDIO移行ガイド（2025年最新版）

このドキュメントでは、現在のReact/Tailwindプロジェクトを**STUDIO**へ移行するための手順とコードを提供します。

> 💡 **注意**: STUDIOへの移行は手動作業が多く、時間がかかります。  
> より簡単な公開方法（Vercel/Netlify）は **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** をご覧ください。

---

## 📋 移行の概要

### STUDIOで実現する構成
1. **カスタムCSS** - ブラウンベースのDesign Tokensとスタイルを統合
2. **HTMLセクション** - 各セクションを個別のボックス/埋め込みとして配置
3. **外部画像** - Unsplash URLをそのまま使用（または独自にアップロード）
4. **カスタムコード** - スムーススクロールとCTAリンク用JavaScript

### 移行手順
1. STUDIOで新規プロジェクト作成
2. カスタムCSS全体をプロジェクト設定に追加
3. 各セクションをボックス要素として配置し、カスタムHTMLを埋め込み
4. カスタムコード（JavaScript）を追加
5. 画像URLを確認・調整

---

## 🎨 STEP 1: カスタムCSS（プロジェクト設定に追加）

以下のCSSをSTUDIOの**プロジェクト設定 > カスタムCSS**に全て貼り付けてください。

```css
/* ===== Design Tokens（ブラウンベース 2025年版） ===== */
:root {
  /* Brand Colors (ナチュラルブラウン) */
  --color-brand-50:  #FAF8F5;
  --color-brand-100: #F5F0E8;
  --color-brand-200: #E8DBC8;
  --color-brand-300: #D4BC9A;
  --color-brand-400: #C4A878;
  --color-brand-500: #A67C52;
  --color-brand-600: #8B6A45;
  --color-brand-700: #6F5538;
  --color-brand-800: #54402B;
  --color-brand-900: #3A2C1F;

  /* Text Colors */
  --color-text-base:    #3A2C1F;
  --color-text-muted:   #7A6651;
  --color-text-inverse: #FFFFFF;

  /* Background Colors */
  --color-bg-base:    #FFFFFF;
  --color-bg-soft:    #FAF8F5;
  --color-bg-section: #F5F0E8;

  /* Spacing */
  --space-section: 96px;
  --space-block: 28px;
  --space-card: 24px;

  /* Typography */
  --font-heading-h1: 34px;
  --font-heading-h2: 26px;
  --font-heading-h3: 20px;
  --font-body-base:  16px;
  --font-body-sm:    14px;
  
  --line-height-heading: 1.4;
  --line-height-body:    1.6;
}

/* ===== Base Styles ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans JP", sans-serif;
  color: var(--color-text-base);
  background: var(--color-bg-base);
  line-height: var(--line-height-body);
}

/* ===== Typography ===== */
h1 {
  font-size: var(--font-heading-h1);
  font-weight: 500;
  line-height: var(--line-height-heading);
  color: var(--color-text-base);
}

h2 {
  font-size: var(--font-heading-h2);
  font-weight: 500;
  line-height: var(--line-height-heading);
  color: var(--color-text-base);
}

h3 {
  font-size: var(--font-heading-h3);
  font-weight: 500;
  line-height: var(--line-height-heading);
  color: var(--color-text-base);
}

p {
  font-size: var(--font-body-base);
  line-height: var(--line-height-body);
  color: var(--color-text-base);
}

/* ===== Responsive Typography ===== */
@media (max-width: 768px) {
  :root {
    --font-heading-h1: 28px;
    --font-heading-h2: 22px;
    --font-heading-h3: 18px;
    --space-section: 64px;
    --space-block: 20px;
  }
}

/* ===== Section Styles ===== */
.section {
  padding: var(--space-section) 24px;
}

.section-soft {
  background: var(--color-bg-soft);
}

.section-alt {
  background: var(--color-bg-section);
}

.section-primary {
  background: linear-gradient(135deg, var(--color-brand-500) 0%, var(--color-brand-600) 100%);
  color: var(--color-text-inverse);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container-sm {
  max-width: 800px;
  margin: 0 auto;
}

/* ===== Button Styles ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  gap: 8px;
}

.btn-primary {
  background: var(--color-brand-500);
  color: var(--color-text-inverse);
  box-shadow: 0 4px 12px rgba(166, 124, 82, 0.25);
}

.btn-primary:hover {
  background: var(--color-brand-600);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(166, 124, 82, 0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--color-brand-500);
  border: 2px solid var(--color-brand-500);
}

.btn-secondary:hover {
  background: var(--color-brand-500);
  color: var(--color-text-inverse);
}

.btn-white {
  background: white;
  color: var(--color-brand-500);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* ===== Card Styles ===== */
.card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--color-brand-300);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.10);
}

.card-icon {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: rgba(166, 124, 82, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 9999px;
  background: rgba(166, 124, 82, 0.1);
  color: var(--color-brand-700);
  font-weight: 500;
}

/* ===== Grid Layouts ===== */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
}

@media (max-width: 768px) {
  .grid-3, .grid-2 {
    grid-template-columns: 1fr;
  }
}

/* ===== Text Utilities ===== */
.text-center {
  text-align: center;
}

.text-muted {
  color: var(--color-text-muted);
}

.text-white {
  color: var(--color-text-inverse);
}

.mb-4 { margin-bottom: 16px; }
.mb-6 { margin-bottom: 24px; }
.mb-8 { margin-bottom: 32px; }
.mb-12 { margin-bottom: 48px; }
.mb-16 { margin-bottom: 64px; }

.mt-4 { margin-top: 16px; }
.mt-6 { margin-top: 24px; }
.mt-8 { margin-top: 32px; }
.mt-12 { margin-top: 48px; }

/* ===== Image Styles ===== */
.img-responsive {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== Before/After Layout ===== */
.before-after-item {
  background: var(--color-bg-section);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 48px;
}

.before-after-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.before-after-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.before-after-label {
  position: absolute;
  top: 16px;
  left: 16px;
  background: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.before-after-label.after {
  background: var(--color-brand-500);
  color: white;
}

@media (max-width: 768px) {
  .before-after-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== FAQ Accordion ===== */
.faq-item {
  background: var(--color-bg-section);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-brand-300);
}

.faq-question {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
}

.faq-answer {
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* ===== Footer ===== */
.footer {
  background: var(--color-text-base);
  color: var(--color-text-inverse);
  padding: 64px 24px 32px;
}

.footer a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: white;
}

/* ===== Smooth Scroll ===== */
html {
  scroll-behavior: smooth;
}
```

---

## 📝 STEP 2: 各セクションのHTML

以下、各セクションごとにSTUDIOで使用できるHTMLコードを記載します。
STUDIO上で「カスタムコード」または「埋め込み」ボックスとして各セクションを追加してください。

### ①Hero Section (id="hero")

```html
<section id="hero" class="section section-soft" style="min-height: 85vh; display: flex; align-items: center; position: relative;">
  <div class="container text-center" style="position: relative; z-index: 10;">
    <div class="mb-6">
      <span class="badge mb-6" style="display: inline-block;">Hot Pepper Beauty AWARD 8年連続受賞</span>
    </div>
    
    <h1 class="mb-6">METEO美髪矯正で叶える<br>やわらか艶髪</h1>
    
    <p class="text-muted mb-4" style="font-size: 18px; max-width: 700px; margin-left: auto; margin-right: auto;">
      福井市で選ばれ続ける、METEO酸熱融合×補修の科学的アプローチ。94%のダメージ削減を実現し、従来の縮毛矯正では叶わなかった、驚くほど柔らかな艶髪へ。
    </p>
    
    <p class="text-muted mb-8" style="font-size: 14px;">
      女性のお客様83% ／ 40代の方に最も選ばれています
    </p>
    
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
      <a href="https://beauty.hotpepper.jp/" target="_blank" class="btn btn-primary">
        📅 空き状況を確認
      </a>
      <a href="#menu" class="btn btn-secondary">
        🏷️ 初回クーポンを見る
      </a>
    </div>
  </div>
</section>
```

### ②Reasons Section (id="reasons")

```html
<section id="reasons" class="section">
  <div class="container">
    <div class="text-center mb-16">
      <h2 class="mb-4">peaceが選ばれる3つの理由</h2>
      <p class="text-muted">科学的根拠に基づいた施術と、お客様の安心を第一に考えた環境づくり</p>
    </div>

    <div class="grid-3">
      <!-- カード1 -->
      <div class="card">
        <div class="card-icon">
          <span style="font-size: 40px;">✨</span>
        </div>
        <div class="badge mb-4" style="display: block; text-align: center;">科学的アプローチ</div>
        <h3 class="text-center mb-4">METEO美髪矯正</h3>
        <p class="text-center text-muted mb-4" style="color: var(--color-brand-500); font-weight: 500;">
          酸熱融合×補修で実現する「異次元のやわらか艶」
        </p>
        <p class="text-muted" style="font-size: 14px;">
          従来の縮毛矯正とは一線を画すMETEO技術により、94%のダメージ削減を実現。髪質改善成分を同時に浸透させながら矯正するため、施術直後から驚くほど柔らかく、艶やかな手触りに。ブリーチ毛やエイジング毛にも対応可能な、次世代の美髪矯正です。
        </p>
      </div>

      <!-- カード2 -->
      <div class="card">
        <div class="card-icon">
          <span style="font-size: 40px;">🌿</span>
        </div>
        <div class="badge mb-4" style="display: block; text-align: center;">頭皮ケア重視</div>
        <h3 class="text-center mb-4">オーガニック施術</h3>
        <p class="text-center text-muted mb-4" style="color: var(--color-brand-500); font-weight: 500;">
          全てのお客様に頭皮保護
        </p>
        <p class="text-muted" style="font-size: 14px;">
          La castaをはじめとする厳選オーガニック製品を使用。施術前の頭皮保護は全員必須としており、敏感肌の方も安心してお任せいただけます。高密度ミストと髪質改善エキス配合のトリートメントで、髪と頭皮に優しいケアを提供します。
        </p>
      </div>

      <!-- カード3 -->
      <div class="card">
        <div class="card-icon">
          <span style="font-size: 40px;">🛡️</span>
        </div>
        <div class="badge mb-4" style="display: block; text-align: center;">衛生管理の徹底</div>
        <h3 class="text-center mb-4">徹底した衛生管理</h3>
        <p class="text-center text-muted mb-4" style="color: var(--color-brand-500); font-weight: 500;">
          器具殺菌・タオル個別管理
        </p>
        <p class="text-muted" style="font-size: 14px;">
          すべての施術器具は使用後に専用機器で殺菌処理を実施。タオル・クロスは一度の使用ごとに交換し、お客様ごとに個別管理しています。清潔で安心できる空間づくりを最優先に、プロフェッショナルレベルの衛生管理を徹底しています。
        </p>
      </div>
    </div>
  </div>
</section>
```

### ③Popular Menu Section (id="menu")

```html
<section id="menu" class="section section-alt">
  <div class="container">
    <div class="text-center mb-16">
      <h2 class="mb-4">人気メニュー</h2>
      <p class="text-muted">お客様のお悩みとライフスタイルに合わせた、最適なプランをご提案します</p>
    </div>

    <div class="grid-3">
      <!-- メニュー1 -->
      <div class="card">
        <div style="background: var(--color-brand-500); color: white; padding: 4px 12px; border-radius: 0 0 8px 8px; position: absolute; top: 0; right: 16px; font-size: 14px;">
          ✨ 人気No.1
        </div>
        <h3 class="mb-4" style="margin-top: 16px;">METEO美髪矯正 + カット</h3>
        <div class="mb-2">
          <span style="font-size: 32px; color: var(--color-text-base);">¥22,000</span>
          <span class="text-muted" style="font-size: 14px; margin-left: 8px;">税込</span>
        </div>
        <p class="text-muted mb-4" style="font-size: 14px;">約3〜4時間</p>
        <p class="text-muted mb-6" style="font-size: 14px; line-height: 1.6;">
          次世代METEO技術による酸熱融合で、94%のダメージ削減を実現。施術するほど髪が美しくなる新感覚の美髪矯正。従来の縮毛矯正では叶わなかった、自然で柔らかな仕上がりを体感してください。
        </p>
        <div style="padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.08);">
          <p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">含まれるサービス</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="badge">頭皮保護</span>
            <span class="badge">高密度ミスト</span>
            <span class="badge">オーガニックティー付</span>
          </div>
        </div>
      </div>

      <!-- メニュー2 -->
      <div class="card">
        <h3 class="mb-4">カラー + カット + トリートメント</h3>
        <div class="mb-2">
          <span style="font-size: 32px; color: var(--color-text-base);">¥12,430</span>
          <span class="text-muted" style="font-size: 14px; margin-left: 8px;">税込</span>
        </div>
        <p class="text-muted mb-4" style="font-size: 14px;">約2.5〜3時間</p>
        <p class="text-muted mb-6" style="font-size: 14px; line-height: 1.6;">
          La casta使用のオーガニックカラーと高濃度トリートメント。頭皮保護を徹底し、髪質改善エキス配合で艶やかな発色と柔らかな手触りを同時に実現します。
        </p>
        <div style="padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.08);">
          <p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">含まれるサービス</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="badge">頭皮保護</span>
            <span class="badge">髪質改善TR</span>
            <span class="badge">オーガニックティー付</span>
          </div>
        </div>
      </div>

      <!-- メニュー3 -->
      <div class="card">
        <h3 class="mb-4">カット + 頭浸浴 + スパ</h3>
        <div class="mb-2">
          <span style="font-size: 32px; color: var(--color-text-base);">¥8,030</span>
          <span class="text-muted" style="font-size: 14px; margin-left: 8px;">税込</span>
        </div>
        <p class="text-muted mb-4" style="font-size: 14px;">約1.5〜2時間</p>
        <p class="text-muted mb-6" style="font-size: 14px; line-height: 1.6;">
          頭浸浴で頭皮デトックス＆極上リラクゼーション。首・肩までほぐす本格スパで、凝り固まった疲れを癒します。オーガニックの香りに包まれながら、心身ともに深くリフレッシュできる至福のひとときを。
        </p>
        <div style="padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.08);">
          <p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">含まれるサービス</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="badge">頭皮ケア</span>
            <span class="badge">プチスパ</span>
            <span class="badge">オーガニックティー付</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### ④CTA Section (中間)

```html
<section class="section section-primary">
  <div class="container-sm text-center">
    <h3 class="mb-6 text-white">ご予約はこちらから</h3>
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
      <a href="https://beauty.hotpepper.jp/" target="_blank" class="btn btn-white">
        📅 空き状況を確認
      </a>
      <a href="#menu" class="btn btn-secondary" style="border-color: white; color: white;">
        🏷️ 初回クーポンを見る
      </a>
    </div>
  </div>
</section>
```

### ⑤FAQ Section (id="faq")

```html
<section id="faq" class="section">
  <div class="container-sm">
    <div class="text-center mb-16">
      <h2 class="mb-4">よくあるご質問</h2>
      <p class="text-muted">お客様からよくいただくご質問にお答えします</p>
    </div>

    <div>
      <div class="faq-item">
        <div class="faq-question">METEO美髪矯正は従来の縮毛矯正と何が違いますか？</div>
        <div class="faq-answer">
          METEO美髪矯正は酸性領域で施術を行うため、髪のダメージを最小限に抑えることができます。従来のアルカリ性矯正は髪が硬くなりがちですが、当サロンの酸性矯正は補修成分を同時浸透させることで、柔らかく自然な仕上がりを実現します。
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">敏感肌でも施術を受けられますか？</div>
        <div class="faq-answer">
          はい、安心してお任せください。peaceでは全てのお客様に頭皮保護を施術前に必ず行っております。La casta製品を使用したオーガニック施術により、敏感肌の方も安心してご利用いただけます。
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">カラーと美髪矯正の同時施術は可能ですか？</div>
        <div class="faq-answer">
          はい、可能です。髪の状態を診断した上で、最適な施術順序と薬剤選定を行います。ただし、髪のダメージ状態によっては日を分けての施術をおすすめする場合もございます。
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">効果はどのくらい持続しますか？</div>
        <div class="faq-answer">
          個人差はございますが、METEO美髪矯正の効果は通常3〜6ヶ月程度持続します。髪質やホームケアの方法、生活習慣によっても変わってまいります。
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">初めての来店で注意することはありますか？</div>
        <div class="faq-answer">
          特別なご準備は不要です。カウンセリング時に髪質診断を行いますので、普段通りの髪の状態でお越しください。施術時間は選択メニューにより1.5〜3.5時間程度かかります。
        </div>
      </div>
    </div>
  </div>
</section>
```

### ⑥Access Section (id="access")

```html
<section id="access" class="section section-alt">
  <div class="container">
    <div class="text-center mb-16">
      <h2 class="mb-4">アクセス・店舗情報</h2>
      <p class="text-muted">福井市中心部、アクセス便利な立地でお待ちしております</p>
    </div>

    <div class="grid-2">
      <!-- 店舗情報カード -->
      <div>
        <div class="card mb-4">
          <div style="display: flex; gap: 16px; align-items: start;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(166, 124, 82, 0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              📍
            </div>
            <div>
              <h4 class="mb-2" style="font-size: 14px; color: var(--color-text-muted);">住所（高柳本店）</h4>
              <p class="mb-1">〒910-0837 福井県福井市高柳１丁目８０２</p>
              <p class="text-muted" style="font-size: 14px;">TEL: 0776-97-5512</p>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div style="display: flex; gap: 16px; align-items: start;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(97, 178, 133, 0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ⏰
            </div>
            <div>
              <h4 class="mb-2" style="font-size: 14px; color: var(--color-text-muted);">営業時間</h4>
              <p class="mb-1">10:00 - 19:00（最終受付 18:00）</p>
              <p class="text-muted" style="font-size: 14px;">定休日：毎週月曜日・第3火曜日</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div style="display: flex; gap: 16px; align-items: start;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(97, 178, 133, 0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              📞
            </div>
            <div>
              <h4 class="mb-2" style="font-size: 14px; color: var(--color-text-muted);">花堂店</h4>
              <p class="mb-1">〒918-8012 福井県福井市花堂北１丁目１６０</p>
              <p class="text-muted" style="font-size: 14px;">TEL: 0776-97-9516</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 地図プレースホルダー -->
      <div style="background: var(--color-bg-soft); border-radius: 16px; height: 400px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(0,0,0,0.08);">
        <div class="text-center" style="padding: 32px;">
          <div style="font-size: 48px; margin-bottom: 16px;">📍</div>
          <p style="font-size: 16px; margin-bottom: 8px;">HAIR&MAKE peace</p>
          <p class="text-muted" style="font-size: 14px;">福井県福井市○○町x-x-x</p>
          <p class="text-muted" style="font-size: 12px; margin-top: 16px;">※ここにGoogleマップを埋め込み</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### ⑦Footer

```html
<footer class="footer">
  <div class="container">
    <div class="text-center">
      <div style="font-size: 24px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;">
        ✨ <span>HAIR&MAKE peace</span>
      </div>
      
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto;">
        福井市のオーガニック美髪矯正サロン。METEO酸熱融合×補修で94%のダメージ削減。科学的根拠に基づいた施術で、あなた本来の美しさを引き出します。
      </p>

      <div style="margin-bottom: 32px;">
        <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.8;">
          <strong>高柳本店</strong><br>
          〒910-0837 福井県福井市高柳１丁目８０２<br>
          TEL: 0776-97-5512<br><br>
          <strong>花堂店</strong><br>
          〒918-8012 福井県福井市花堂北１丁目１６０<br>
          TEL: 0776-97-9516<br><br>
          営業時間：10:00 - 19:00<br>
          定休日：毎週月曜日・第3火曜日
        </p>
      </div>

      <div style="padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.2);">
        <p style="color: rgba(255,255,255,0.5); font-size: 14px;">
          © 2025 HAIR&MAKE peace. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
```

---

## 🎬 STEP 3: カスタムコード（JavaScript）

STUDIOの**プロジェクト設定 > カスタムコード（</body>直前）**に以下を追加：

```html
<script>
// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// FAQ アコーディオン（オプション）
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    
    // すべて閉じる
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.style.display = 'none';
    });
    
    // クリックしたものを開く
    if (!isOpen) {
      answer.style.display = 'block';
    }
  });
});

// 初期状態：すべてのFAQ回答を非表示
document.querySelectorAll('.faq-answer').forEach(answer => {
  answer.style.display = 'none';
});
</script>
```

---

## 🖼️ STEP 4: 画像リスト

以下の画像URLをSTUDIOで使用してください（または独自にアップロード）：

1. **Hero背景:** `https://images.unsplash.com/photo-1560066984-138dadb4c035`
2. **施術例1:** `https://images.unsplash.com/photo-1522337094846-8a818192de1f`
3. **施術例2:** `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e`

---

## ✅ チェックリスト

- [ ] STUDIOプロジェクト作成
- [ ] カスタムCSSをプロジェクト設定に追加
- [ ] 各セクションHTMLを埋め込みボックスとして追加
- [ ] カスタムコード（JavaScript）を追加
- [ ] 画像URLを確認・調整
- [ ] Hot Pepper Beautyの実際の予約URLに変更
- [ ] 住所・電話番号などの実店舗情報を入力
- [ ] Googleマップ埋め込み（Accessセクション）
- [ ] モバイル表示確認
- [ ] 各CTAボタンのリンク動作確認

---

## 📞 サポート

STUDIO移行で不明点があれば、各セクションのHTMLを個別に調整可能です。
STUDIOの制約に応じて、さらなるカスタマイズをサポートいたします。
