import TrustedByC from '@/components/trusted-by/TrustedBy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Star } from 'lucide-react';
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
