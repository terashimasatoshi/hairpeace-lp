import { Sparkles, RefreshCw, Gem } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "低刺激",
    description: "敏感肌の方も安心。オーガニック成分を中心とした優しい施術で、頭皮と髪に負担をかけません。"
  },
  {
    icon: RefreshCw,
    title: "再現性",
    description: "ご自宅でも簡単にサロン仕上げを再現できる技術。毎朝のスタイリングが驚くほど楽になります。"
  },
  {
    icon: Gem,
    title: "艶持続",
    description: "特別な美髪矯正技術により、美しい艶と滑らかさが長期間持続。年齢を重ねた髪も輝きを取り戻します。"
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">peaceのこだわり</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様一人ひとりの髪質とライフスタイルに寄り添い、最適なケアを提供します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-center mb-4">{feature.title}</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
