import { TrustedBy } from "@/components/trusted-by"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      category: "Development & Branding",
      description: "Complete platform overhaul resulting in 70% faster load times and 35% increase in conversions.",
      image: "/modern-ecommerce-website.png",
    },
    {
      title: "Tech Startup Brand Launch",
      category: "Branding & Marketing",
      description: "Full brand identity and go-to-market strategy for a SaaS startup, leading to successful Series A.",
      image: "/tech-startup-branding.png",
    },
    {
      title: "Corporate Video Series",
      category: "Media Production",
      description: "6-episode documentary series showcasing company impact, generating 2M+ views.",
      image: "/corporate-video-production.png",
    },
    {
      title: "Social Media Transformation",
      category: "Social Media Management",
      description: "Grew B2B company's LinkedIn following by 300% and generated 200+ qualified leads.",
      image: "/social-media-marketing.png",
    },
    {
      title: "Annual Conference Production",
      category: "Events Planning",
      description: "3-day conference with 1,000+ attendees, achieving 98% satisfaction rating.",
      image: "/conference-event.png",
    },
    {
      title: "Performance Marketing Campaign",
      category: "Performance Marketing",
      description: "Multi-channel campaign delivering 5x ROAS and scaling budget from $10K to $100K monthly.",
      image: "/digital-marketing-campaign.png",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Explore our portfolio of successful projects across industries. Each project represents our commitment to
              excellence and delivering measurable results for our clients.
            </p>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Start Your Success Story</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Ready to create something amazing? Let's discuss your project and how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
