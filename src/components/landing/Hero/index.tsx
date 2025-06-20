import { Button } from "@/components/ui/button"
import { BarChart3, DownloadIcon, Play, ShoppingCart, Star, Store } from "lucide-react"
import AnimatedDevices from "../animated-devices"

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0F1C2E] via-[#1A2B42] to-[#2C3E50] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Transforme seu
                <span className="block text-[#E9BE7C]">celular em um</span>
                <span className="block">PDV completo.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Controle vendas, estoque e finanças do seu estabelecimento de forma simples e eficiente. A solução
                completa para pequenos negócios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#E9BE7C] hover:bg-[#D4A574] text-[#0F1C2E] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl transition-all hover:shadow-3xl hover:scale-105"
                >
                  <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Baixar via</div>
                    <div className="text-sm font-bold">APK</div>
                  </div>
                </Button>

                <Button
                  aria-label="Baixar no Google Play"
                  title="Baixar no Google Play"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl transition-all hover:shadow-3xl hover:scale-105 backdrop-blur-sm"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Baixar no</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#E9BE7C] rounded-full border-2 border-[#0F1C2E] flex items-center justify-center">
                      <Store className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F1C2E]" />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-2 border-[#0F1C2E] flex items-center justify-center">
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F1C2E]" />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F2D7A7] rounded-full border-2 border-[#0F1C2E] flex items-center justify-center">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F1C2E]" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">+3.2k estabelecimentos</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#E9BE7C] text-[#E9BE7C]" />
                  ))}
                  <span className="text-sm font-medium ml-2">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <AnimatedDevices />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
