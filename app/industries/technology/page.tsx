import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Technology Industry Solutions
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Specialized digital solutions for tech companies, startups, and
              SaaS businesses. From product launches to growth marketing, we
              understand the unique challenges of the technology sector.
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
      <TrustedByC />
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">
              Our Technology Expertise
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              We've helped dozens of technology companies scale from startup to
              enterprise, launch successful products, and build strong brands in
              competitive markets.
            </p>
            <p className="text-lg text-muted-foreground">
              Our services include product positioning, developer marketing,
              technical content creation, growth hacking, and investor relations
              support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
