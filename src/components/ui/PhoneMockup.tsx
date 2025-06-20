import type { ReactNode } from "react"

interface PhoneMockupProps {
  children: ReactNode
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative">
      <div className="relative z-10 max-w-xs sm:max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
          <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 text-[#0F1C2E]">

            <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
              <div className="text-xs sm:text-sm font-medium">14:32</div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-[#0F1C2E] rounded-sm"></div>
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#0F1C2E] rounded-full"></div>
                <div className="w-4 h-2 sm:w-6 sm:h-3 bg-[#0F1C2E] rounded-sm"></div>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>

      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-32 h-32 sm:w-60 sm:h-60 bg-[#E9BE7C]/10 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-24 h-24 sm:w-40 sm:h-40 bg-[#0F1C2E]/10 rounded-full blur-2xl sm:blur-3xl"></div>
    </div>
  )
}
