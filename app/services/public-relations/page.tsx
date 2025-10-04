import { ServiceLayout } from "@/components/service-layout"
import { TrustedBy } from "@/components/trusted-by"
import { ServicesNavigation } from "@/components/services-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Megaphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PublicRelationsPage() {
  const subServices = [
    {
      title: "Influencer Campaign",
      description: "Strategic influencer partnerships to amplify your brand message and reach.",
    },
    {
      title: "Models",
      description: "Professional model booking and management for campaigns and events.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Megaphone className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Public Relations
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Build and protect your reputation with strategic PR campaigns. From media relations to crisis
                management, we help you tell your story to the world.
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
              <Image src="/pr-hero.jpg" alt="Public Relations Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      <ServicesNavigation currentService="Public Relations" />

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

      {/* Existing code */}
      <ServiceLayout
        title="Public Relations"
        description="Build and protect your reputation with strategic PR campaigns. From media relations to crisis management, we help you tell your story to the world."
        icon={<Megaphone className="h-8 w-8 text-primary" />}
        benefits={[
          "Enhanced brand credibility and trust",
          "Increased media coverage and visibility",
          "Stronger relationships with key stakeholders",
          "Effective crisis management and reputation protection",
          "Thought leadership positioning",
          "Positive public perception and sentiment",
        ]}
        features={[
          {
            title: "Media Relations",
            description: "Build relationships with journalists and secure coverage in top-tier publications.",
          },
          {
            title: "Press Release Writing",
            description: "Craft compelling press releases that get noticed and generate media interest.",
          },
          {
            title: "Crisis Management",
            description: "Protect your reputation with strategic crisis communication and response plans.",
          },
          {
            title: "Thought Leadership",
            description: "Position executives as industry experts through speaking engagements and articles.",
          },
          {
            title: "Event PR",
            description: "Generate buzz and media coverage for product launches, events, and announcements.",
          },
          {
            title: "Media Training",
            description: "Prepare spokespeople for interviews and public appearances with professional coaching.",
          },
        ]}
        caseStudy={{
          title: "Product Launch PR Campaign",
          description: "Orchestrated a comprehensive PR campaign for a tech company's flagship product launch.",
          results: [
            "Coverage in 50+ major publications including TechCrunch and Forbes",
            "10M+ media impressions in first month",
            "CEO featured on 3 major podcast interviews",
            "Contributed to 200% increase in product pre-orders",
          ],
        }}
      />

      {/* Ready to Get Started section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with public relations.
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
