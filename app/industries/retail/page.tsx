import { TrustedBy } from "@/components/trusted-by"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RetailPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Retail Industry Solutions
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Drive foot traffic and online sales with integrated marketing solutions for retail brands, e-commerce, and
              omnichannel businesses.
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
      <TrustedBy />
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">Retail Marketing Expertise</h2>
            <p className="text-lg text-muted-foreground">
              From seasonal campaigns to loyalty programs, we help retailers connect with customers across all channels
              and drive measurable sales growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
