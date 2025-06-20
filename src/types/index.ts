import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
  name: string
  href: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface MainNavProps {
  mobile?: boolean
}

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  iconColor: string
}

export interface PhoneMockupProps {
  children: React.ReactNode
}
