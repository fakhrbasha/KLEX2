import { ServiceLayout } from "@/components/service-layout"
import { TrustedBy } from "@/components/trusted-by"
import { ServicesNavigation } from "@/components/services-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Printer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrintingPage() {
  const subServices = [
    {
      title: "Indoor",
      description: "Indoor branding solutions including wall graphics, signage, and office branding.",
    },
    {
      title: "Outdoor",
      description: "Outdoor branding including banners, billboards, and exterior signage.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Printing & Internal Branding
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Bring your brand to life in physical spaces with professional printing and internal branding solutions.
                From business cards to office environments, we create cohesive brand experiences.
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
              <Image src="/printing-hero.jpg" alt="Printing & Internal Branding" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      <ServicesNavigation currentService="Printing & Internal Branding" />

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

      <ServiceLayout
        title="Printing & Internal Branding"
        description="Bring your brand to life in physical spaces with professional printing and internal branding solutions. From business cards to office environments, we create cohesive brand experiences."
        icon={<Printer className="h-8 w-8 text-primary" />}
        benefits={[
          "High-quality printing with attention to detail",
          "Consistent brand experience in physical spaces",
          "Professional materials that build credibility",
          "Improved employee engagement and pride",
          "Memorable customer experiences",
          "End-to-end service from design to installation",
        ]}
        features={[
          {
            title: "Business Stationery",
            description: "Business cards, letterheads, envelopes, and other corporate stationery.",
          },
          {
            title: "Marketing Collateral",
            description: "Brochures, flyers, catalogs, and promotional materials.",
          },
          {
            title: "Large Format Printing",
            description: "Banners, posters, signage, and trade show displays.",
          },
          {
            title: "Office Branding",
            description: "Wall graphics, wayfinding signage, and branded office environments.",
          },
          {
            title: "Promotional Products",
            description: "Branded merchandise, gifts, and promotional items.",
          },
          {
            title: "Packaging & Labels",
            description: "Custom packaging, product labels, and shipping materials.",
          },
        ]}
        caseStudy={{
          title: "Office Rebranding Project",
          description: "Transformed a 50,000 sq ft office space with comprehensive internal branding.",
          results: [
            "Branded 3 floors with wall graphics and signage",
            "Created cohesive environment across all spaces",
            "85% employee satisfaction with new environment",
            "Featured in office design publications",
          ],
        }}
      />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with printing and internal branding.
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
