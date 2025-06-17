import { Button } from "@/components/ui/button"
import AdegaLogo from "../logo/AdegaLogo"
import MainNav from "./MainNav"



export default function Header() {
  return (
    <header
      className=" border-b border-neutral-300 sticky top-0 z-50 backdrop-blur-sm bg-gold"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <AdegaLogo />
        <MainNav />
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg p-5">Começar Grátis</Button>
      </div>
    </header>
  )
}
