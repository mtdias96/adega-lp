"use client"

import { Button } from "@/components/ui/button"
import { Menu, User, X } from "lucide-react"
import { useState } from "react"
import AdegaLogo from "./AdegaLogo"
import MainNav from "./MainNav"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <AdegaLogo />

        <div className="hidden md:flex items-center space-x-8">
          <MainNav />
          <Button className="bg-[#E9BE7C] hover:bg-[#D4A574] text-[#0F1C2E] font-semibold px-6 shadow-lg transition-all hover:shadow-xl">
              <User className="w-4 h-4 mr-2" />
              Começar
            </Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-600">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MainNav mobile />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg py-3">
              Começar Grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
