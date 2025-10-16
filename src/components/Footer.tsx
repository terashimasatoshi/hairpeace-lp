import { Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl">HAIR&MAKE peace</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              福井市のオーガニック＆美髪矯正サロン。科学的根拠に基づいた施術で、あなた本来の美しさを引き出します。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">メニュー</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
                  トップ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reasons')} className="hover:text-white transition-colors">
                  選ばれる理由
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors">
                  人気メニュー
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('bna')} className="hover:text-white transition-colors">
                  施術事例
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  よくある質問
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">店舗情報</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="text-white mb-2">高柳本店</p>
                <p>〒910-0837<br />福井県福井市高柳１丁目８０２</p>
                <p className="mt-1">TEL: 0776-97-5512</p>
                <p className="mt-1">定休日：第２月曜日</p>
              </div>
              <div>
                <p className="text-white mb-2">花堂店</p>
                <p>〒918-8012<br />福井県福井市花堂北１丁目１６０</p>
                <p className="mt-1">TEL: 0776-97-9516</p>
                <p className="mt-1">定休日：毎週月曜・火曜</p>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p>営業時間：10:00 - 19:00（最終受付 18:00）</p>
                <p className="mt-1">駐車場：専用駐車場6台完備</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/50 text-sm">
            © 2025 HAIR&MAKE peace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
