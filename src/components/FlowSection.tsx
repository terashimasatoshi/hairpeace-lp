import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "ご予約・ご来店",
    description: "WEBまたはお電話でご予約後、ご来店ください。オーガニックティーでおもてなしいたします。"
  },
  {
    number: "02",
    title: "カウンセリング・髪質診断",
    description: "お悩みやご要望を丁寧にヒアリング。髪質を診断し、最適な施術プランをご提案します。"
  },
  {
    number: "03",
    title: "頭皮保護・施術準備",
    description: "全てのお客様に頭皮保護を実施。La casta製品で頭皮を守りながら施術の準備を整えます。"
  },
  {
    number: "04",
    title: "施術・トリートメント",
    description: "髪質改善成分を浸透させながら丁寧に施術。髪質改善エキス配合トリートメントで補修します。"
  },
  {
    number: "05",
    title: "仕上げ・ホームケアアドバイス",
    description: "丁寧なブロー仕上げ後、ご自宅でのケア方法をアドバイス。美しい状態を長く保つコツをお伝えします。"
  }
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">ご利用の流れ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            初めてのお客様も安心してお任せいただける、丁寧な施術プロセス
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-secondary/30 rounded-xl p-6 md:p-8 border-2 border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 flex items-center gap-2">
                    {step.title}
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-14 top-full w-0.5 h-6 bg-border -mb-6"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            施術時間は選択メニューにより異なります。カウンセリング時間は別途15〜20分程度を見込んでおります。<br />
            ご予約時間の10分前までにご来店いただけますようお願いいたします。
          </p>
        </div>
      </div>
    </section>
  );
}
