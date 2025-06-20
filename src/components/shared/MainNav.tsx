import { navigationItems } from "@/constants/navigation"
import Link from "next/link"

interface MainNavProps {
  mobile?: boolean
}

export default function MainNav({ mobile }: MainNavProps) {
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className=" lg:flex space-x-8 text-white/90 hover:text-[#E9BE7C] transition-colors font-medium"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="hidden lg:flex space-x-8 text-white/90 hover:text-[#E9BE7C] transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
