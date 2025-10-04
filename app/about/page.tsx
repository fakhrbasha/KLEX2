import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Globe, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              About TaskFlow
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              We're dedicated to helping teams work better together. Our mission is to provide intuitive project
              management tools that empower teams to collaborate seamlessly and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower teams worldwide with intuitive project management tools that eliminate complexity and foster
                collaboration. We believe that great software should get out of your way and let you focus on what
                matters most—delivering exceptional work.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become the most trusted project management platform for teams of all sizes, known for our simplicity,
                reliability, and commitment to helping teams achieve their goals. We envision a world where every team
                can work together effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe powerful tools should be easy to use. Complexity is the enemy of productivity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in everything we build, from features to support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Collaboration</h3>
                <p className="text-muted-foreground">
                  Great work happens when teams work together. We build tools that bring people closer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Transparency</h3>
                <p className="text-muted-foreground">
                  We're open about our roadmap, pricing, and decisions. Trust is built through honesty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold md:text-5xl">10,000+</div>
              <div className="text-muted-foreground">Active Teams</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold md:text-5xl">500K+</div>
              <div className="text-muted-foreground">Projects Managed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold md:text-5xl">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold md:text-5xl">4.9/5</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Join thousands of teams already using TaskFlow to work better together.
            </p>
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
