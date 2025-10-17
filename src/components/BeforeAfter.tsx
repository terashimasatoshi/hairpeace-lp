import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

// Google Drive画像URL（実際のサロン写真）
const meteoBeforeBefore = "https://drive.google.com/thumbnail?id=1ZjAVFb2X1IPOBx7Ui-IVVxRlbGeS4Xm-&sz=w2000";
const meteoBeforeAfter = "https://drive.google.com/thumbnail?id=19KF2iedIuPEDQkAE24omUcA4jCVsxneA&sz=w2000";
const colorBefore = "https://drive.google.com/thumbnail?id=1UjRIR9h6fJmGXItonw1utF_jNMUfy3Y1&sz=w2000";
const colorAfter = "https://drive.google.com/thumbnail?id=1uODzVHzCzbxHg2fnGyKyd-5SQInPtIHH&sz=w2000";
const spaBefore = "https://drive.google.com/thumbnail?id=1F4ttLUmLQh-s-0Y-JsvEDB2JYKXGOLrO&sz=w2000";
const spaAfter = "https://drive.google.com/thumbnail?id=1_nOnKSWY_IbECfm5MSONlWsHQdJtV7Af&sz=w2000";

const transformations = [
  {
    before: meteoBeforeBefore,
    after: meteoBeforeAfter,
    label: "METEO美髪矯正",
    description: "うねりが強かった髪も、自然な艶と柔らかさのあるストレートに"
  },
  {
    before: colorBefore,
    after: colorAfter,
    label: "METEOカラー + トリートメント",
    description: "ダメージ毛も、髪質改善TRで内部から補修。驚くほど柔らかく、艶やかな手触りへ"
  },
  {
    before: spaBefore,
    after: spaAfter,
    label: "頭浸浴 + スパ",
    description: "頭皮環境改善で、根本からハリ・コシのある髪へ"
  }
];

export default function BeforeAfter() {
  return (
    <section id="bna" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">施術事例</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様の髪質とお悩みに合わせた、確かな技術による変化をご覧ください
          </p>
        </div>
        <div className="space-y-12">
          {transformations.map((item, index) => (
            <div key={index} className="bg-secondary/30 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={item.before}
                      alt={`施術前 - ${item.label}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <span className="text-sm">Before</span>
                  </div>
                </div>
                {/* After */}
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={item.after}
                      alt={`施術後 - ${item.label}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md">
                    <span className="text-sm">After</span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6 md:p-8 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ※効果には個人差があります。写真は実際の施術結果ですが、髪質や状態により仕上がりは異なります。
          </p>
        </div>
      </div>
    </section>
  );
}
