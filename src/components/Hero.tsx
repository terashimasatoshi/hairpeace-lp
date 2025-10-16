import { Button } from "./ui/button";
import { Calendar, Tag } from "lucide-react";
import { useState } from "react";
import heroImage from "figma:asset/15dc1346a5b2ea43e12924c729b25e2fe2000175.png";
import StoreSelector from "./StoreSelector";

export default function Hero() {
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);

  const handleCheckAvailability = () => {
    setIsStoreSelectorOpen(true);
  };

  const handleViewCoupon = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Minimal overlay for maximum visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="艶やかな美髪"
          className="w-full h-full object-cover object-center"
        />
        {/* Very subtle vignette effect only on edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
      </div>

      {/* Content with semi-transparent background for readability */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-12 md:py-20">
        <div className="mb-6 md:mb-8 bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-xs md:text-sm text-primary break-words">Hot Pepper Beauty AWARD 8年連続受賞</p>
          </div>
          
          <h1 className="mb-4 md:mb-6 leading-tight break-words">
            METEO美髪矯正で叶える<br className="hidden sm:inline" />やわらか艶髪
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed mb-3 md:mb-4 break-words">
            福井市で選ばれ続ける、METEO酸熱融合×補修の科学的アプローチ。94%のダメージ削減を実現し、従来の縮毛矯正では叶わなかった、驚くほど柔らかな艶髪へ。
          </p>
          
          <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-10 break-words">
            女性のお客様83% ／ 40代の方に最も選ばれています
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <Button 
            onClick={handleCheckAvailability}
            className="bg-primary hover:bg-primary/90 px-6 md:px-10 py-4 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span className="text-sm md:text-base">空き状況を確認</span>
          </Button>
          
          <Button 
            onClick={handleViewCoupon}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-10 py-4 md:py-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            <Tag className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span className="text-sm md:text-base">初回クーポンを見る</span>
          </Button>
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
