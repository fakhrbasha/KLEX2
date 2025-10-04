import { ServiceLayout } from "@/components/service-layout"
import { TrustedBy } from "@/components/trusted-by"
import { ServicesNavigation } from "@/components/services-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SocialMediaPage() {
  const subServices = [
    {
      title: "Social Media Analysis",
      description: "Comprehensive audit and analysis of your current social media presence and performance.",
    },
    {
      title: "Moderation",
      description: "Professional community management and content moderation across all platforms.",
    },
    {
      title: "Content Plan",
      description: "Strategic content calendars aligned with your brand and business objectives.",
    },
    {
      title: "Social Media Campaigns",
      description: "Targeted campaigns designed to achieve specific marketing goals and KPIs.",
    },
    {
      title: "Copywriting",
      description: "Engaging, on-brand copy that resonates with your audience and drives action.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Social Media Management
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Build and engage your community across all social platforms. From content creation to community
                management, we help you connect with your audience authentically.
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
              <Image src="/social-media-hero.jpg" alt="Social Media Management" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      <ServicesNavigation currentService="Social Media Management" />

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
        title="Social Media Management"
        description="Build and engage your community across all social platforms. From content creation to community management, we help you connect with your audience authentically."
        icon={<Share2 className="h-8 w-8 text-primary" />}
        benefits={[
          "Consistent, engaging presence across all platforms",
          "Increased brand awareness and reach",
          "Stronger community engagement and loyalty",
          "Professional content that reflects your brand",
          "Data-driven strategy and optimization",
          "Crisis management and reputation protection",
        ]}
        features={[
          {
            title: "Content Strategy",
            description: "Develop comprehensive content plans aligned with your brand and business objectives.",
          },
          {
            title: "Content Creation",
            description: "Professional posts, graphics, videos, and stories that engage your audience.",
          },
          {
            title: "Community Management",
            description: "Active monitoring, responding, and engaging with your community across all platforms.",
          },
          {
            title: "Social Advertising",
            description: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and other platforms.",
          },
          {
            title: "Influencer Partnerships",
            description: "Identify and collaborate with influencers to expand your reach and credibility.",
          },
          {
            title: "Analytics & Reporting",
            description: "Track performance metrics and provide insights for continuous improvement.",
          },
        ]}
        caseStudy={{
          title: "B2B Social Media Growth",
          description:
            "Transformed a B2B company's social presence from minimal activity to industry thought leadership.",
          results: [
            "300% increase in LinkedIn followers in 6 months",
            "150% growth in engagement rate",
            "Generated 200+ qualified leads through social channels",
            "Established CEO as industry thought leader",
          ],
        }}
      />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with social media management.
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
