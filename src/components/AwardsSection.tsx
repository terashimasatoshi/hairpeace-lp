import { Award, TrendingUp, Users, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const stats = [
  {
    icon: Award,
    label: "Hot Pepper Beauty AWARD",
    value: "8年連続",
    description: "お客様満足度評価"
  },
  {
    icon: Users,
    label: "女性のお客様",
    value: "83%",
    description: "2024年度実績"
  },
  {
    icon: TrendingUp,
    label: "40代の方に",
    value: "最多選択",
    description: "年代別利用率"
  },
  {
    icon: Heart,
    label: "リピート率",
    value: "92%",
    description: "お客様継続率"
  }
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">peaceの実績</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様からの信頼と、長年の実績が私たちの誇りです
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-3xl mb-2 text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary/20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <Award className="w-16 h-16 text-primary" />
            </div>
            
            <h3 className="mb-4">福井市で選ばれ続けて8年</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              peaceは2016年の開業以来、お客様一人ひとりの髪質とお悩みに真摯に向き合い、科学的根拠に基づいた施術を提供してまいりました。Hot Pepper Beauty AWARDを8年連続で受賞できたのは、お客様からの信頼と、日々の技術向上への取り組みの結果です。
            </p>
            
            <p className="text-sm text-muted-foreground">
              これからもお客様の「美しくありたい」という想いに応え続けます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
