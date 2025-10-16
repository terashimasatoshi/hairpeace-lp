import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import StoreSelector from "./StoreSelector";

export default function DownloadButton() {
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);

  const handleReservation = () => {
    setIsStoreSelectorOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleReservation}
          className="bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 rounded-full animate-pulse hover:animate-none"
          title="ご予約はこちら"
        >
          <Calendar className="w-5 h-5 mr-2" />
          予約する
        </Button>
      </div>

      {/* Store Selector Dialog */}
      <StoreSelector 
        isOpen={isStoreSelectorOpen} 
        onClose={() => setIsStoreSelectorOpen(false)} 
      />
    </>
  );
}
