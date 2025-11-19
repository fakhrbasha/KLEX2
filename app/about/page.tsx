import TimelineDemo from '@/components/History/History';
import MissionVisionSection from '@/components/missionandvision/MissionAndVision';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Globe, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              About KLEX
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              We're dedicated to helping teams work better together. Our mission
              is to provide intuitive project management tools that empower
              teams to collaborate seamlessly and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}

      <MissionVisionSection />
      {/* TimeLine */}
      <TimelineDemo />

      {/* Values */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe powerful tools should be easy to use. Complexity is
                  the enemy of productivity.
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
                  We maintain the highest standards in everything we build, from
                  features to support.
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
                  Great work happens when teams work together. We build tools
                  that bring people closer.
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
                  We're open about our roadmap, pricing, and decisions. Trust is
                  built through honesty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            {/* Left Side */}
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Growth Years
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Our journey of impact through the years
              </h2>
              <p className="mt-4 text-muted-foreground">
                Discover how our strategic milestones shaped our growth and
                helped businesses thrive.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex justify-center md:justify-end">
              <Link href="/business-development">
                <Button size="lg" className="rounded-2xl bg-[#3be6c4]">
                  See Business Development
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* trust */}
      <TrustedByC />
      {/* CTA */}
      <QouteAndGoToPrice />
    </div>
  );
}
