import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, Coffee } from "lucide-react";

const menuItems = [
  {
    title: "METEO美髪矯正 + カット",
    price: "¥22,000",
    duration: "約3時間",
    description: "METEO酸熱融合技術により、94%のダメージ削減を実現。補修成分を同時浸透させながら矯正するため、硬くならず驚くほど柔らかな艶髪に。ブリーチ毛やエイジング毛にも対応可能です。",
    features: ["頭皮保護", "高濃度トステア", "エルカラクトンなどの髪質改善成分を標準使用", "オーガニックティー付"],
    popular: true
  },
  {
    title: "カット + METEOカラー + トリートメント",
    price: "¥15,000〜",
    duration: "約2時間",
    description: "髪質改善しながら染める、次世代のMETEOカラー。酸熱融合技術により、カラーのダメージを感じさせない艶やかな発色と滑らかな手触りに。髪質に合わせた最適な薬剤選定で、理想の色と美髪を同時に叶えます。",
    features: ["頭皮保護", "高濃度トステア", "エルカラクトンなどの髪質改善成分を標準使用", "オーガニックティー付"],
    popular: false
  },
  {
    title: "カット + 頭浸浴 + プチスパ",
    price: "¥7,290",
    duration: "約1.5時間",
    description: "頭浸浴でデトックス＆リラクゼーション。頭皮環境を整えながら、心身ともにリフレッシュできる人気メニューです。",
    features: ["頭皮ケア", "プチスパ", "オーガニックティー付"],
    popular: false
  }
];

export default function PopularMenu() {
  return (
    <section id="menu" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">人気メニュー</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様のお悩みとライフスタイルに合わせた、最適なプランをご提案します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {menuItems.map((menu, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                menu.popular ? 'border-2 border-primary shadow-lg md:scale-105' : 'border border-border'
              }`}
            >
              {menu.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 md:px-4 py-1 rounded-bl-lg">
                  <span className="text-xs md:text-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    人気No.1
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4 px-4 md:px-6">
                <CardTitle className="mb-2 leading-tight break-words text-base md:text-lg">{menu.title}</CardTitle>
                <div className="flex items-baseline gap-2 mb-2">
                  <CardDescription className="text-2xl md:text-3xl text-foreground">
                    {menu.price}
                  </CardDescription>
                  <span className="text-xs md:text-sm text-muted-foreground">税込</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{menu.duration}</p>
              </CardHeader>

              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm text-muted-foreground leading-relaxed break-words">
                  {menu.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">含まれるサービス</p>
                  <div className="flex flex-wrap gap-2">
                    {menu.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs break-words">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Coffee className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="mb-2">ご来店時のおもてなし</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                全メニューにオーガニックティーをご用意。施術中は高密度ミストで髪を保護しながら、リラックスしてお過ごしいただけます。初回のお客様には、カウンセリング時に髪質診断を無料で実施いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
