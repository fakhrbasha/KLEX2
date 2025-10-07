import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Badge, CheckCircle2, Download, Star } from 'lucide-react';
import Link from 'next/link';

export default function MarketplacePage() {
  const resources = [
    {
      title: 'Brand Strategy Template',
      category: 'Branding',
      description:
        'Comprehensive template for developing your brand strategy and positioning.',
      price: 'Free',
      rating: 4.8,
      downloads: '2.5K',
    },
    {
      title: 'Social Media Content Calendar',
      category: 'Social Media',
      description:
        'Plan and organize your social media content for maximum engagement.',
      price: '$29',
      rating: 4.9,
      downloads: '1.8K',
    },
    {
      title: 'Marketing ROI Calculator',
      category: 'Marketing',
      description:
        'Calculate and track the return on investment for your marketing campaigns.',
      price: 'Free',
      rating: 4.7,
      downloads: '3.2K',
    },
    {
      title: 'Website Design Checklist',
      category: 'Development',
      description:
        'Ensure your website meets all best practices for design and user experience.',
      price: '$19',
      rating: 4.6,
      downloads: '1.5K',
    },
    {
      title: 'Event Planning Workbook',
      category: 'Events',
      description:
        'Step-by-step guide to planning and executing successful events.',
      price: '$39',
      rating: 4.9,
      downloads: '980',
    },
    {
      title: 'PR Media Kit Template',
      category: 'Public Relations',
      description:
        'Professional media kit template to pitch your story to journalists.',
      price: 'Free',
      rating: 4.8,
      downloads: '2.1K',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              KLEX Marketplace
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Access premium templates, tools, and resources to accelerate your
              marketing and business growth. From free downloads to premium
              packages, find everything you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <TrustedByC />

      {/* price  */}

      <section className="border-y bg-muted/30 py-24 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Choose the plan that's right for your team. All plans include a
              14-day free trial.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <Card className="relative flex flex-col border-2">
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Starter</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for small teams
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$12</span>
                    <span className="ml-2 text-muted-foreground">
                      /user/month
                    </span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Up to 10 team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Unlimited projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative flex flex-col border-2 border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary px-4 py-1 text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Professional</h3>
                  <p className="text-sm text-muted-foreground">
                    For growing teams
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$24</span>
                    <span className="ml-2 text-muted-foreground">
                      /user/month
                    </span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Unlimited team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Time tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative flex flex-col border-2">
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    For large organizations
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">SSO & advanced security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Custom onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">24/7 phone support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Resources
            </h2>
            <div className="flex gap-2">
              <Button variant="outline">All Categories</Button>
              <Button variant="outline">Free Only</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {resource.category}
                    </div>
                    <div className="text-lg font-bold">{resource.price}</div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {resource.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{resource.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    variant={resource.price === 'Free' ? 'outline' : 'default'}
                  >
                    {resource.price === 'Free' ? 'Download Free' : 'Purchase'}
                  </Button>
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
              Need Custom Solutions?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Can't find what you're looking for? Our team can create custom
              solutions tailored to your specific needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
