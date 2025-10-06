import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Briefcase, Heart, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Brand Strategist',
      department: 'Branding',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Social Media Manager',
      department: 'Social Media',
      location: 'Los Angeles, CA',
      type: 'Full-time',
    },
    {
      title: 'Performance Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Video Producer',
      department: 'Media Production',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Account Manager',
      department: 'Client Services',
      location: 'Chicago, IL',
      type: 'Full-time',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Be part of a dynamic team that's shaping the future of digital
              marketing and business growth. We're always looking for talented
              individuals who are passionate about making an impact.
            </p>
            <Button size="lg" asChild>
              <Link href="#openings">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustedByC />

      {/* Why Join KLEX */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Why Join KLEX?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Work with cutting-edge technologies and creative approaches to
                  solve real business challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Great Team</h3>
                <p className="text-muted-foreground">
                  Collaborate with talented professionals who are passionate
                  about their craft and supportive of each other.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Work-Life Balance
                </h3>
                <p className="text-muted-foreground">
                  Flexible schedules, remote work options, and generous PTO to
                  maintain a healthy work-life balance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Growth</h3>
                <p className="text-muted-foreground">
                  Continuous learning opportunities, mentorship programs, and
                  clear career advancement paths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="border-y bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Open Positions
          </h2>
          <div className="mx-auto max-w-4xl space-y-4">
            {openings.map((job, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Don't See the Right Role?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              We're always interested in meeting talented people. Send us your
              resume and let us know how you'd like to contribute to KLEX.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
