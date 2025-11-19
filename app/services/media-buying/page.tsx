import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function MediaBuyingPage() {
  const subServices = [
    {
      title: 'Outdoor Billboards And Banners',
      description:
        'Strategic placement of outdoor advertising for maximum visibility and impact.',
      description2:
        'We specialize in the strategic placement of outdoor advertising to ensure maximum visibility and impact. From billboards and banners to digital screens and transit ads, every campaign is planned with precision to reach your target audience in high-traffic locations. Our approach combines creative design with data-driven strategy to enhance brand awareness and deliver measurable results.',
      imageUrl: '/subservice/MB-1.jpg',
    },
    {
      title: 'Radio Ads',
      description:
        'Engaging radio advertising campaigns across popular stations.',
      description2:
        'We create engaging radio advertising campaigns that capture attention and connect with listeners. From scriptwriting and voice talent selection to production and placement across popular stations, we manage every detail to ensure your message is heard loud and clear. Our campaigns are designed to build brand recognition, inspire action, and reach audiences wherever they are.',
      imageUrl: '/subservice/MB-2.jpg',
    },
    {
      title: 'Newspaper/Magazine Editorials or Ads',
      description:
        'Print advertising and editorial placements in leading publications.',
      description2:
        'We offer print advertising and editorial placements in leading publications to give your brand premium exposure and credibility. Our team carefully selects the right magazines, newspapers, and journals that align with your target audience, ensuring maximum impact. Through compelling design and strategic placement, we help your message stand out, build authority, and strengthen your brand presence in both local and international markets.',
      imageUrl: '/subservice/MB-3.jpg',
    },
    {
      title: 'SMS Campaigns',
      description: 'Direct mobile marketing through targeted SMS campaigns.',
      description2:
        'We deliver direct mobile marketing solutions through targeted SMS campaigns that drive engagement and results. By reaching customers instantly on their mobile devices, we help you share promotions, updates, and personalized messages that inspire immediate action. Our data-driven approach ensures every campaign is optimized for reach, timing, and relevance, maximizing your return on investment.',
      imageUrl: '/subservice/MB-4.jpg',
    },
    {
      title: 'TV Ads',
      description:
        'Television advertising campaigns for broad reach and brand awareness.',
      description2:
        'We produce impactful television advertising campaigns that deliver broad reach and lasting brand awareness. From creative concept development and scriptwriting to production and media placement, we handle every step with precision and creativity. Our goal is to craft visually compelling stories that resonate with viewers, strengthen your brand image, and drive measurable results across regional and national audiences.',
      imageUrl: '/subservice/MB-5.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Media Buying
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Maximize your advertising budget with strategic media buying. We
                negotiate the best rates and placements across traditional and
                digital channels.
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
                src="/media-buying-hero.jpg"
                alt="Media Buying Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Media Buying" />
      {/* 
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
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
              Let's discuss how we can help you achieve your goals with media
              buying.
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
