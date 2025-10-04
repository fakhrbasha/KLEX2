import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Sparkles,
  Code,
  Share2,
  TrendingUp,
  Megaphone,
  Video,
  Calendar,
  Palette,
  ShoppingCart,
  Printer,
  Lightbulb,
} from "lucide-react"

const services = [
  {
    title: "Market Research & Planning",
    href: "/services/market-research",
    icon: Target,
  },
  {
    title: "Branding",
    href: "/services/branding",
    icon: Sparkles,
  },
  {
    title: "Development",
    href: "/services/development",
    icon: Code,
  },
  {
    title: "Social Media Management",
    href: "/services/social-media",
    icon: Share2,
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    icon: TrendingUp,
  },
  {
    title: "Public Relations",
    href: "/services/public-relations",
    icon: Megaphone,
  },
  {
    title: "Media Production",
    href: "/services/media-production",
    icon: Video,
  },
  {
    title: "Events Planning & Production",
    href: "/services/events",
    icon: Calendar,
  },
  {
    title: "Visuals",
    href: "/services/visuals",
    icon: Palette,
  },
  {
    title: "Media Buying",
    href: "/services/media-buying",
    icon: ShoppingCart,
  },
  {
    title: "Printing & Internal Branding",
    href: "/services/printing",
    icon: Printer,
  },
  {
    title: "Consultation",
    href: "/services/consultation",
    icon: Lightbulb,
  },
]

interface ServicesNavigationProps {
  currentService?: string
}

export function ServicesNavigation({ currentService }: ServicesNavigationProps) {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Explore Our Platform Services
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            const isCurrent = currentService === service.title
            return (
              <Link key={service.href} href={service.href}>
                <Card
                  className={`transition-all hover:shadow-lg ${
                    isCurrent ? "border-primary bg-primary/5" : "hover:border-primary/50"
                  }`}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <Icon className={`h-5 w-5 shrink-0 ${isCurrent ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`text-sm font-medium ${isCurrent ? "text-primary" : ""}`}>{service.title}</span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
