import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const stories = [
    {
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge:
        'Struggling to gain market traction and differentiate from competitors in a crowded market.',
      solution:
        'Comprehensive rebranding, market positioning strategy, and performance marketing campaign.',
      results: [
        '250% increase in qualified leads',
        'Successful $5M Series A funding',
        '40% reduction in CAC',
      ],
      testimonial:
        "KLEX transformed our business. Their strategic approach and execution excellence helped us achieve in 6 months what we couldn't in 2 years.",
      author: 'Sarah Chen, CEO',
    },
    {
      company: 'GreenEarth Retail',
      industry: 'Retail',
      challenge:
        'Outdated brand image failing to attract younger demographics while maintaining existing customers.',
      solution:
        'Brand refresh, omnichannel marketing strategy, and social media transformation.',
      results: [
        '40% increase in brand awareness',
        '25% growth in new customers',
        'Successful 50+ location rollout',
      ],
      testimonial:
        'The team at KLEX understood our unique challenge and delivered a solution that honored our heritage while appealing to new audiences.',
      author: 'Michael Rodriguez, CMO',
    },
    {
      company: 'HealthFirst Medical',
      industry: 'Healthcare',
      challenge:
        'Need to establish thought leadership and generate qualified leads in competitive healthcare market.',
      solution:
        'Content marketing strategy, PR campaign, and LinkedIn thought leadership program.',
      results: [
        '300% increase in LinkedIn engagement',
        'Featured in 20+ major publications',
        'Generated 500+ qualified leads',
      ],
      testimonial:
        'KLEX helped us become the go-to voice in our industry. The results speak for themselves.',
      author: 'Dr. Emily Watson, Chief Medical Officer',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Success Stories
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Real results from real clients. Discover how we've helped
              businesses across industries achieve their goals and drive
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <TrustedByC />

      {/* Success Stories */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">{story.company}</h2>
                      <p className="text-muted-foreground">{story.industry}</p>
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-2 font-semibold">The Challenge</h3>
                        <p className="text-muted-foreground">
                          {story.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">Our Solution</h3>
                        <p className="text-muted-foreground">
                          {story.solution}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 font-semibold">The Results</h3>
                        <ul className="space-y-2">
                          {story.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-lg bg-muted/50 p-6">
                      <Quote className="mb-4 h-8 w-8 text-primary" />
                      <p className="mb-4 text-lg italic">{story.testimonial}</p>
                      <p className="font-semibold">{story.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {story.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Write Your Success Story
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Join the growing list of businesses that have transformed their
              results with KLEX.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
