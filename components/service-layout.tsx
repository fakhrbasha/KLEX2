import { TrustedBy } from "@/components/trusted-by"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceLayoutProps {
  title: string
  description: string
  icon: ReactNode
  benefits: string[]
  features: { title: string; description: string }[]
  caseStudy?: {
    title: string
    description: string
    results: string[]
  }
}

export function ServiceLayout({ title, description, icon, benefits, features, caseStudy }: ServiceLayoutProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              {icon}
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">{description}</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Key Benefits</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Success Story</h2>
              <Card>
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold">{caseStudy.title}</h3>
                  <p className="mb-6 text-lg text-muted-foreground">{caseStudy.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Results:</h4>
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <p>{result}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with {title.toLowerCase()}.
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
