import { TrustedBy } from "@/components/trusted-by"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Handshake, Rocket, Target } from "lucide-react"
import Link from "next/link"

export default function BusinessDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Business Development
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Partner with KLEX to unlock new growth opportunities. We help businesses expand their reach, enter new
              markets, and build strategic partnerships that drive sustainable success.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Explore Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            How We Drive Business Growth
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Market Expansion</h3>
                <p className="text-muted-foreground">
                  Strategic planning and execution to help you enter new markets and reach new customer segments with
                  confidence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  Identify and establish partnerships that create mutual value and accelerate your business growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Develop comprehensive growth strategies aligned with your vision, resources, and market opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sales Enablement</h3>
                <p className="text-muted-foreground">
                  Equip your sales team with the tools, content, and strategies they need to close more deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Partnership Opportunities</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're always looking for strategic partners who share our commitment to excellence and innovation. Whether
              you're a technology provider, agency, or complementary service, let's explore how we can work together.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold">Technology Partners</h3>
                <p className="text-muted-foreground">
                  Integrate your solutions with our platform to deliver enhanced value to our mutual clients.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold">Agency Partners</h3>
                <p className="text-muted-foreground">
                  Collaborate on projects, share resources, and expand your service offerings through partnership.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold">Reseller Partners</h3>
                <p className="text-muted-foreground">
                  Offer KLEX services to your clients and earn competitive commissions on every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Let's Grow Together</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Contact our business development team to discuss partnership opportunities and growth strategies.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start the Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
