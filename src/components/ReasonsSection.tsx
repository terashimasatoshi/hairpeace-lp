import { Sparkles, Leaf, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reasons = [
  {
    icon: Sparkles,
    title: "METEO美髪矯正",
    subtitle: "酸熱融合×補修で実現する「異次元のやわらか艶」",
    description: "従来の縮毛矯正とは一線を画すMETEO技術により、94%のダメージ削減を実現。髪質改善成分を同時に浸透させながら矯正するため、施術直後から驚くほど柔らかく、艶やかな手触りに。ブリーチ毛やエイジング毛にも対応可能な、次世代の美髪矯正です。",
    badge: "科学的アプローチ"
  },
  {
    icon: Leaf,
    title: "オーガニック施術",
    subtitle: "全てのお客様に頭皮保護",
    description: "La castaをはじめとする厳選オーガニック製品を使用。施術前の頭皮保護は全員必須としており、敏感肌の方も安心してお任せいただけます。高密度ミストと髪質改善エキス配合のトリートメントで、髪と頭皮に優しいケアを提供します。",
    badge: "頭皮ケア重視"
  },
  {
    icon: Shield,
    title: "徹底した衛生管理",
    subtitle: "器具殺菌・タオル個別管理",
    description: "すべての施術器具は使用後に専用機器で殺菌処理を実施。タオル・クロスは一度の使用ごとに交換し、お客様ごとに個別管理しています。清潔で安心できる空間づくりを最優先に、プロフェッショナルレベルの衛生管理を徹底しています。",
    badge: "衛生管理の徹底"
  }
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">peaceが選ばれる3つの理由</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            科学的根拠に基づいた施術と、お客様の安心を第一に考えた環境づくり
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="text-center pb-4 px-4 md:px-6">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs mb-3 break-words">
                    {reason.badge}
                  </span>
                </div>
                
                <CardTitle className="mb-2 text-base md:text-lg break-words">{reason.title}</CardTitle>
                <CardDescription className="text-primary text-sm md:text-base break-words">
                  {reason.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 md:px-6">
                <p className="text-sm text-muted-foreground leading-relaxed break-words">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
