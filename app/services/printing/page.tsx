import { ServiceLayout } from '@/components/service-layout';
import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Printer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function PrintingPage() {
  const subServices = [
    {
      title: 'Indoor',
      description:
        'Indoor branding solutions including wall graphics, signage, and office branding.',
      description2:
        'We provide comprehensive indoor branding solutions that transform spaces into powerful brand experiences. From custom wall graphics and signage to full office branding, every design element is crafted to reflect your identity and inspire engagement. Our creative approach enhances aesthetics while reinforcing your brand message, ensuring your environment communicates professionalism, culture, and purpose at every touchpoint.',
      imageUrl: '/subservice/PIR-1.jpg',
    },
    {
      title: 'Outdoor',
      description:
        'Outdoor branding including banners, billboards, and exterior signage.',
      description2:
        'exterior signage, designed to capture attention and strengthen brand visibility. Our team combines creative design with strategic placement to ensure your message reaches the right audience in high-traffic areas. Whether for short-term promotions or long-term brand exposure, we create outdoor visuals that leave a strong and lasting impression.',
      imageUrl: '/subservice/PIR-2.jpg',
    },
    {
      title: 'Giveaways',
      description: 'Designing and producing promotional merchandise.',
      description2:
        'We create high-quality promotional merchandise that effectively represents your brand. From concept to production, our team ensures each item reflects your identity and engages your target audience — helping you boost brand recognition and customer loyalty.',
      imageUrl: '/subservice/PIR-3.jpg',
    },
    {
      title: 'Office Branding',
      description:
        'Enhancing workplace spaces with customized brand identity designs.',
      description2:
        'We transform workplace environments through customized brand identity designs that inspire employees and impress visitors. From wall art to signage and décor, we ensure every element reflects your company’s values and culture while creating a cohesive and motivating workspace.',
      imageUrl: '/subservice/PIR-4.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Printing & Internal Branding
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Bring your brand to life in physical spaces with professional
                printing and internal branding solutions. From business cards to
                office environments, we create cohesive brand experiences.
              </p>
              <div>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/printing-hero.jpg"
                alt="Printing & Internal Branding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Printing & Internal Branding" />

      <SybService subServices={subServices} />

      <ServiceLayout
        title="Printing & Internal Branding"
        description="Bring your brand to life in physical spaces with professional printing and internal branding solutions. From business cards to office environments, we create cohesive brand experiences."
        icon={<Printer className="h-8 w-8 text-primary" />}
        benefits={[
          'High-quality printing with attention to detail',
          'Consistent brand experience in physical spaces',
          'Professional materials that build credibility',
          'Improved employee engagement and pride',
          'Memorable customer experiences',
          'End-to-end service from design to installation',
        ]}
        features={[
          {
            title: 'Business Stationery',
            description:
              'Business cards, letterheads, envelopes, and other corporate stationery.',
          },
          {
            title: 'Marketing Collateral',
            description:
              'Brochures, flyers, catalogs, and promotional materials.',
          },
          {
            title: 'Large Format Printing',
            description: 'Banners, posters, signage, and trade show displays.',
          },
          {
            title: 'Office Branding',
            description:
              'Wall graphics, wayfinding signage, and branded office environments.',
          },
          {
            title: 'Promotional Products',
            description: 'Branded merchandise, gifts, and promotional items.',
          },
          {
            title: 'Packaging & Labels',
            description:
              'Custom packaging, product labels, and shipping materials.',
          },
        ]}
        caseStudy={{
          title: 'Office Rebranding Project',
          description:
            'Transformed a 50,000 sq ft office space with comprehensive internal branding.',
          results: [
            'Branded 3 floors with wall graphics and signage',
            'Created cohesive environment across all spaces',
            '85% employee satisfaction with new environment',
            'Featured in office design publications',
          ],
        }}
      />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with printing
              and internal branding.
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
