import Link from "next/link"

const navigationItems = [
  { name: "Recursos", href: "#recursos" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Preços", href: "#precos" },
  { name: "Contato", href: "#contato" },
]

export default function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div
          key={item.name}
        >
          <ul className="w-full">
            <li>
              <Link href={item.href} className="text-primary-text hover:text-primary-text/80 transition-colors font-medium text-lg">
                {item.name}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </nav>
  )
}
