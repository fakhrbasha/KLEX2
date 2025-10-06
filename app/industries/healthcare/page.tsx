import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HealthcarePage() {
  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Healthcare Industry Solutions
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Compliant, effective marketing and branding solutions for
              healthcare providers, medical device companies, and health tech
              startups.
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
              Healthcare Marketing Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand HIPAA compliance, patient privacy, and the unique
              challenges of healthcare marketing. Our team has experience with
              hospitals, clinics, medical devices, pharmaceuticals, and health
              tech companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
