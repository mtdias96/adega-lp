import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/ui/FeatureCard"
import PhoneMockup from "@/components/ui/PhoneMockup"
import { features } from "@/constants/features"
import { ArrowRight, Search } from "lucide-react"

export default function Features() {
  const mockupContent = (
    <>
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-bold mb-2">Nova Venda</h3>
        <div className="text-[#E9BE7C] text-xs sm:text-sm font-medium">Cliente: Balcão</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6">
        <div className="flex items-center space-x-2">
          <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          <span className="text-gray-400 text-xs sm:text-sm">Buscar produto...</span>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-xs sm:text-sm">Coca-Cola 2L</div>
              <div className="text-gray-600 text-xs">2x R$ 8,50</div>
            </div>
            <div className="text-[#E9BE7C] font-bold text-sm sm:text-base">R$ 17,00</div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-xs sm:text-sm">Pão de Açúcar</div>
              <div className="text-gray-600 text-xs">1x R$ 4,50</div>
            </div>
            <div className="text-[#E9BE7C] font-bold text-sm sm:text-base">R$ 4,50</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#E9BE7C] to-[#D4A574] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-[#0F1C2E]">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm sm:text-base">Total</span>
          <span className="text-xl sm:text-2xl font-bold">R$ 21,50</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="bg-[#0F1C2E] text-white rounded-lg p-2 sm:p-3 text-xs sm:text-sm font-bold">PIX</button>
        <button className="bg-gray-100 text-[#0F1C2E] rounded-lg p-2 sm:p-3 text-xs sm:text-sm font-medium">Cartão</button>
      </div>
    </>
  )

  return (
    <section id="funcionalidades" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-[#E9BE7C]/10 text-[#D4A574] border-[#E9BE7C]/20">PDV COMPLETO</Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1C2E] leading-tight">
                Realize vendas
                <span className="block text-[#E9BE7C]">direto do seu</span>
                <span className="block">celular</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transforme seu smartphone em um PDV profissional com busca rápida de produtos, múltiplas formas de
                pagamento e suporte completo a NFC.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradientFrom="from-[#E9BE7C]"
                  gradientTo="to-[#D4A574]"
                  iconColor="text-[#0F1C2E]"
                />
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#E9BE7C] to-[#D4A574] hover:from-[#D4A574] hover:to-[#E9BE7C] text-[#0F1C2E] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Testar PDV Grátis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <PhoneMockup>{mockupContent}</PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  )
}
