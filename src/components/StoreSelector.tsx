import { MapPin } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface StoreSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const stores = [
  {
    id: "takayanagi",
    name: "高柳本店",
    address: "福井県福井市高柳１丁目８０２",
    url: "https://beauty.hotpepper.jp/slnH000281422/?hl=ja-JP&gei=IGjvaNiiOKrh2roPkPezyQQ"
  },
  {
    id: "hanado",
    name: "花堂店",
    address: "福井県福井市花堂北１丁目１６０",
    url: "https://beauty.hotpepper.jp/slnH000381011/?hl=ja-JP&gei=kGrvaLGtK6-O2roPuPqAuQE"
  }
];

export default function StoreSelector({ isOpen, onClose }: StoreSelectorProps) {
  const handleStoreSelect = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>店舗を選択してください</AlertDialogTitle>
          <AlertDialogDescription>
            ご予約されたい店舗を選択すると、Hot Pepper Beautyの予約ページが開きます。
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-3 my-4">
          {stores.map((store) => (
            <button
              key={store.id}
              onClick={() => handleStoreSelect(store.url)}
              className="w-full text-left p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 group-hover:text-primary transition-colors">
                    {store.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {store.address}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
