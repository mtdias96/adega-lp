import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  iconColor: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  iconColor,
}: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}
          >
            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
          </div>
          <div>
            <h3 className="font-bold text-[#0F1C2E] text-base sm:text-lg mb-1 sm:mb-2">{title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
