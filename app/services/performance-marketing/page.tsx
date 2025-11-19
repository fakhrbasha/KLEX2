import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function PerformanceMarketingPage() {
  const subServices = [
    {
      title: 'Media Plan',
      description:
        'Strategic media planning to maximize reach and ROI across all channels.',
      description2:
        'We develop strategic media plans that ensure your campaigns reach the right audience at the right time. By analyzing channel performance, audience behavior, and budget allocation, we optimize your marketing efforts to maximize engagement, drive conversions, and deliver the highest possible return on investment.',
      imageUrl: '/subservice/media-plan.jpg',
    },
    {
      title: 'SEM (SEO – SEA)',
      description:
        'Search engine marketing including organic SEO and paid search advertising.',
      description2:
        'We offer comprehensive search engine marketing services that combine organic SEO strategies with paid search campaigns. By optimizing your website, content, and ads, we improve visibility, attract targeted traffic, and drive measurable results—helping your brand rank higher, reach the right audience, and maximize ROI.',
      imageUrl: '/subservice/sem.jpg',
    },
    {
      title: 'Social Media Ads',
      description:
        'Targeted advertising campaigns across Facebook, Instagram, LinkedIn, and more.',
      description2:
        'We design precision-targeted advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and beyond. By leveraging audience insights and advanced targeting tools, we deliver your message to the right people at the right time—maximizing engagement, conversions, and overall campaign performance.',
      imageUrl: '/subservice/social-media-ads.jpg',
    },
    {
      title: 'Google Ads',
      description:
        'Expert Google Ads management for search, display, and video campaigns.',
      description2:
        'We provide expert Google Ads management across search, display, and video campaigns. By continuously optimizing targeting, bidding, and creatives, we help you reach your ideal audience, increase clicks and conversions, and maximize the return on your advertising investment.',
      imageUrl: '/subservice/google-ads.jpg',
    },
    {
      title: 'Native Ads',
      description:
        'Non-intrusive native advertising that blends seamlessly with content.',
      description2:
        'Our native advertising solutions are designed to feel natural and unobtrusive within the content your audience already enjoys. By blending seamlessly with the user experience, these campaigns capture attention, foster engagement, and drive meaningful results without disrupting the flow of content consumption.',
      imageUrl: '/subservice/native-ads.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Performance Marketing
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Drive measurable results with data-driven marketing campaigns.
                From PPC to conversion optimization, we focus on ROI and
                sustainable growth.
              </p>
              <div>
                <Button size="lg" asChild className="bg-[#3be6c4]">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/performance-marketing-hero.jpg"
                alt="Performance Marketing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Performance Marketing" />

      {/* <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <SybService subServices={subServices} />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with
              performance marketing.
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
  );
}
