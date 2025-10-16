import { MapPin, Clock, Car, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

const stores = [
  {
    id: "takayanagi",
    name: "高柳本店",
    address: "〒910-0837 福井県福井市高柳１丁目８０２",
    phone: "0776-97-5512",
    hours: "10:00 - 19:00（最終受付 18:00）",
    holiday: "定休日：第２月曜日",
    parking: "専用駐車場6台完備",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.038525074134!2d136.2419071!3d36.09254889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8bfd221a909a3%3A0x6151a937a2bd3ffa!2sHAIR%26MAKE%20peace!5e0!3m2!1sja!2sjp!4v1760519840491!5m2!1sja!2sjp",
    reservationUrl: "https://beauty.hotpepper.jp/slnH000281422/?hl=ja-JP&gei=IGjvaNiiOKrh2roPkPezyQQ"
  },
  {
    id: "hanado",
    name: "花堂店",
    address: "〒918-8012 福井県福井市花堂北１丁目１６０",
    phone: "0776-97-9516",
    hours: "10:00 - 19:00（最終受付 18:00）",
    holiday: "定休日：毎週月曜・火曜",
    parking: "専用駐車場6台完備",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.0456650839797!2d136.2154424!3d36.0435914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8beabb932862d%3A0xd09fecac37ca46e4!2zSFlCUklEIFNBTE9OIHBlYWNlIOmrquizquaUueWWhOeJueWMlg!5e0!3m2!1sja!2sjp!4v1760520103747!5m2!1sja!2sjp",
    reservationUrl: "https://beauty.hotpepper.jp/slnH000381011/?hl=ja-JP&gei=kGrvaLGtK6-O2roPuPqAuQE"
  }
];

export default function Access() {
  return (
    <section id="access" className="py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">アクセス・店舗情報</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            福井市内2店舗でお待ちしております
          </p>
        </div>

        <Tabs defaultValue="takayanagi" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="takayanagi">高柳本店</TabsTrigger>
            <TabsTrigger value="hanado">花堂店</TabsTrigger>
          </TabsList>

          {stores.map((store) => (
            <TabsContent key={store.id} value={store.id} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-border">
                  <div className="w-full h-[400px]">
                    <iframe
                      src={store.mapUrl}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${store.name}の地図`}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Store Info */}
                <div className="space-y-4">
                  <Card className="border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-sm text-muted-foreground">住所</h4>
                          <p className="mb-1">{store.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-sm text-muted-foreground">営業時間</h4>
                          <p className="mb-1">{store.hours}</p>
                          <p className="text-sm text-muted-foreground">{store.holiday}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Car className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-sm text-muted-foreground">駐車場</h4>
                          <p className="mb-1">{store.parking}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-sm text-muted-foreground">電話予約</h4>
                          <p className="mb-1 text-2xl text-primary">{store.phone}</p>
                          <p className="text-sm text-muted-foreground">営業時間内にお気軽にお電話ください</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Web Reservation Button */}
                  <Button
                    onClick={() => window.open(store.reservationUrl, '_blank')}
                    className="w-full bg-primary hover:bg-primary/90 px-6 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {store.name}をWEB予約
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="mb-2">お電話でのご予約</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  営業時間内にお気軽にお電話ください。施術中は電話に出られない場合がございますので、予めご了承ください。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="mb-2">WEBでのご予約</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hot Pepper Beautyから24時間いつでもご予約可能です。空き状況を確認の上、ご都合の良い日時をお選びください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
