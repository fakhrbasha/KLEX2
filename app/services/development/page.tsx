import { TrustedBy } from "@/components/trusted-by"
import { ServicesNavigation } from "@/components/services-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DevelopmentPage() {
  const subServices = [
    {
      title: "Web Design and Hosting",
      description: "Professional website design with reliable hosting solutions.",
    },
    {
      title: "Portfolio",
      description: "Stunning portfolio websites to showcase your work and achievements.",
    },
    {
      title: "Catalog",
      description: "Digital catalogs for product showcasing and online browsing.",
    },
    {
      title: "E-commerce",
      description: "Full-featured online stores with payment processing and inventory management.",
    },
    {
      title: "Personal Blog",
      description: "Custom blog platforms for content creators and thought leaders.",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "E-commerce Customized App",
      description: "Tailored e-commerce mobile applications for your business needs.",
    },
    {
      title: "Customs Software Development",
      description: "Bespoke software solutions designed specifically for your business.",
    },
    {
      title: "POS",
      description: "Point of sale systems for retail and hospitality businesses.",
    },
    {
      title: "Inventory Management",
      description: "Comprehensive inventory tracking and management systems.",
    },
    {
      title: "CRM",
      description: "Customer relationship management systems to grow your business.",
    },
    {
      title: "Customized Web App",
      description: "Tailored web applications built to your exact specifications.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Development
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Build powerful, scalable digital solutions with cutting-edge technology. From websites to mobile apps,
                we create custom solutions that drive business results.
              </p>
              <div>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-square">
              <Image src="/development-hero.jpg" alt="Development Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      <ServicesNavigation currentService="Development" />

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with development.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
