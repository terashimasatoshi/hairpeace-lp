import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    age: "40代",
    comment: "長年悩んでいた髪のうねりが嘘のように落ち着きました。朝のスタイリングが本当に楽になって、毎日が快適です。オーガニックな施術なので安心してお任せできました。",
    name: "M.K様"
  },
  {
    age: "50代",
    comment: "敏感肌で他のサロンでは頭皮が荒れることが多かったのですが、peaceさんでは一度もトラブルなし。艶も出て、周りから「髪がきれいになったね」と褒められるようになりました。",
    name: "Y.T様"
  },
  {
    age: "30代",
    comment: "カラーのダメージで傷んでいた髪が、まるで生まれ変わったよう。美髪矯正後も硬くならず、自然な仕上がりに大満足です。スタッフの方も親身に相談に乗ってくださいます。",
    name: "A.S様"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">お客様の声</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            実際にpeaceをご利用いただいたお客様からの嬉しいお声をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30 border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {testimonial.age}
                  </span>
                </div>
                
                <p className="mb-4 leading-relaxed text-foreground/90">
                  {testimonial.comment}
                </p>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
