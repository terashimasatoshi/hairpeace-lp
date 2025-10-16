import { Button } from "./ui/button";
import { Calendar, Tag } from "lucide-react";
import { useState } from "react";
import StoreSelector from "./StoreSelector";

interface CTASectionProps {
  variant?: "default" | "compact";
}

export default function CTASection({ variant = "default" }: CTASectionProps) {
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);

  const handleCheckAvailability = () => {
    setIsStoreSelectorOpen(true);
  };

  const handleViewCoupon = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === "compact") {
    return (
      <>
        <section className="py-16 px-6 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-6 text-white">ご予約はこちらから</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCheckAvailability}
                className="bg-white text-primary hover:bg-white/90 px-10 py-6 rounded-lg shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                空き状況を確認
              </Button>
              <Button 
                onClick={handleViewCoupon}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 rounded-lg"
              >
                <Tag className="w-5 h-5 mr-2" />
                初回クーポンを見る
              </Button>
            </div>
          </div>
        </section>
        <StoreSelector 
          isOpen={isStoreSelectorOpen} 
          onClose={() => setIsStoreSelectorOpen(false)} 
        />
      </>
    );
  }

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="mb-6 text-white">あなたの理想の美髪へ、今日から一歩を</h2>
          <p className="text-white/95 text-lg mb-2 max-w-2xl mx-auto leading-relaxed">
            科学的根拠に基づいた施術と、丁寧なカウンセリングで<br />
            お客様一人ひとりに最適なヘアケアをご提案します。
          </p>
          <p className="text-white/80 text-sm">
            まずは空き状況をご確認ください
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleCheckAvailability}
            className="bg-white text-primary hover:bg-white/90 px-12 py-7 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-2" />
            空き状況を確認
          </Button>
          <Button 
            onClick={handleViewCoupon}
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Tag className="w-5 h-5 mr-2" />
            初回クーポンを見る
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-white/90 text-sm">
            📱 Hot Pepper Beautyで24時間予約受付中
          </p>
          <p className="text-white/80 text-xs">
            ※人気のため、ご予約が取りづらい場合がございます。お早めのご予約をおすすめいたします。
          </p>
        </div>
      </div>

      {/* Store Selector Dialog */}
      <StoreSelector 
        isOpen={isStoreSelectorOpen} 
        onClose={() => setIsStoreSelectorOpen(false)} 
      />
    </section>
  );
}
