import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    age: "40代女性",
    rating: 5,
    comment: "長年のうねりと広がりに悩んでいましたが、METEO美髪矯正で本当に変わりました。硬くならず自然な仕上がりで、朝のスタイリングが劇的に楽に。頭皮保護もしっかりしていて安心です。",
    service: "METEO美髪矯正 + カット"
  },
  {
    age: "50代女性",
    rating: 5,
    comment: "敏感肌で他店では頭皮が荒れることが多かったのですが、peaceさんは全員に頭皮保護をしてくださるので安心。La castaの香りも心地よく、リラックスして施術を受けられます。8年通っています。",
    service: "カラー + トリートメント"
  },
  {
    age: "30代女性",
    rating: 5,
    comment: "頭浸浴が想像以上に気持ち良く、頭がすっきり軽くなりました。その後のスパも丁寧で、頭皮が柔らかくなったのを実感。肩までほぐしていただき、凝り固まっていた首周りも楽に。オーガニックの香りに包まれながらの施術は本当に癒されます。カットの仕上がりも良かったですが、定期的に通いたくなるのはこのスパ体験があるからです。",
    service: "カット + 頭浸浴 + スパ"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">お客様の声</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            実際にpeaceをご利用いただいたお客様からのリアルな評価をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 px-4 md:px-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="mb-4 leading-relaxed text-muted-foreground text-sm break-words">
                  {review.comment}
                </p>

                {/* Service & Age */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary mb-1 break-words">{review.service}</p>
                  <p className="text-xs text-muted-foreground">{review.age}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white rounded-xl p-6 md:p-8 border-2 border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-primary text-primary" />
            <p className="text-2xl md:text-3xl">4.8</p>
            <span className="text-sm md:text-base text-muted-foreground">/ 5.0</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            Hot Pepper Beauty 総合評価
          </p>
          <p className="text-xs text-muted-foreground break-words">
            ※2024年12月時点
          </p>
        </div>
      </div>
    </section>
  );
}
