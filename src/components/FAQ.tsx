import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "METEO美髪矯正は従来の縮毛矯正と何が違いますか？",
    answer: "METEO美髪矯正は、髪質改善と縮毛矯正を融合させた次世代技術。従来のアルカリ性矯正による硬さやダメージとは無縁で、補修成分を髪内部に定着させながら形状記憶するため、柔らかく自然な仕上がりを実現します。94%のダメージ削減により、施術するほど髪が美しくなる。施術直後から極上の艶と滑らかな手触りをお約束します。"
  },
  {
    question: "敏感肌でも施術を受けられますか？",
    answer: "はい、安心してお任せください。peaceでは全てのお客様に頭皮保護を施術前に必ず行っております。La casta製品を使用したオーガニック施術により、敏感肌の方も安心してご利用いただけます。不安な点がございましたら、カウンセリング時に遠慮なくお申し付けください。"
  },
  {
    question: "カラーと美髪矯正の同時施術は可能ですか？",
    answer: "はい、可能です。髪の状態を診断した上で、最適な施術順序と薬剤選定を行います。ただし、髪のダメージ状態によっては日を分けての施術をおすすめする場合もございます。カウンセリング時に髪質を拝見し、最善のプランをご提案させていただきます。"
  },
  {
    question: "効果はどのくらい持続しますか？",
    answer: "個人差はございますが、METEO美髪矯正の効果は通常6ヶ月程度持続します。髪質やホームケアの方法、生活習慣によっても変わってまいります。施術後にホームケアのアドバイスもさせていただきますので、美しい状態を長く保つためにぜひ参考になさってください。"
  },
  {
    question: "初めての来店で注意することはありますか？",
    answer: "特別なご準備は不要です。カウンセリング時に髪質診断を行いますので、普段通りの髪の状態でお越しください。施術時間は選択メニューにより1.5〜3.5時間程度かかりますので、お時間に余裕を持ってご予約いただくことをおすすめいたします。ご不明点はお気軽にお問い合わせください。"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">よくあるご質問</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-secondary/30 rounded-xl px-4 md:px-6 border-2 border-border hover:border-primary/30 transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline text-left py-4 md:py-6">
                <span className="pr-4 break-words text-sm md:text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 md:pb-6 text-sm md:text-base break-words">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-accent/10 border border-accent/30 rounded-xl p-4 md:p-6">
          <p className="text-xs md:text-sm text-muted-foreground break-words">
            その他のご質問やご不明点がございましたら、お気軽にお電話またはWEBフォームよりお問い合わせください。<br className="hidden md:inline" />
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>
      </div>
    </section>
  );
}
