import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";

const menuItems = [
  {
    duration: "60分",
    price: "¥8,800〜",
    treatments: [
      { name: "睡眠スパコース", description: "頭皮の緊張をほぐし、深いリラクゼーションへ" },
      { name: "水素デトックスコース", description: "活性酸素を除去し、髪と頭皮を内側から健康に" },
      { name: "アーユル×炭酸コース", description: "古代の知恵と最新技術の融合で頭皮環境を整える" }
    ]
  },
  {
    duration: "90分",
    price: "¥12,800〜",
    treatments: [
      { name: "睡眠スパコース", description: "じっくり時間をかけて心身ともにリセット" },
      { name: "水素デトックスコース", description: "徹底的なデトックスで艶やかな美髪へ" },
      { name: "アーユル×炭酸コース", description: "深部まで浸透させ、根本から髪質改善" }
    ],
    popular: true
  },
  {
    duration: "120分",
    price: "¥16,800〜",
    treatments: [
      { name: "睡眠スパコース", description: "至福のひとときで最高のリフレッシュを" },
      { name: "水素デトックスコース", description: "プレミアムケアで極上の仕上がりを実現" },
      { name: "アーユル×炭酸コース", description: "最高峰のトリートメントで理想の美髪へ" }
    ]
  }
];

export default function MenuSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">メニューラインナップ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お悩みとご予算に合わせて、最適なコースをお選びいただけます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((menu, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                menu.popular ? 'border-2 border-primary shadow-lg' : ''
              }`}
            >
              {menu.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">人気</Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <CardTitle>{menu.duration}コース</CardTitle>
                </div>
                <CardDescription className="text-2xl text-foreground">
                  {menu.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {menu.treatments.map((treatment, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="mb-2 text-primary">{treatment.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ※カラーとの同時施術も可能です。詳しくはお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
