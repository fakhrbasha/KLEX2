'use client';

import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function BrandingPage() {
  const subServices = [
    {
      title: 'Concept Creation',
      description:
        'Develop unique brand concepts that capture your essence and resonate with your audience.',
      description2:
        'Crafting a distinctive brand concept begins with understanding your core values and audience expectations. By blending creativity with strategy, we develop brand ideas that authentically represent your identity, evoke emotion, and build lasting connections with your target market—ensuring your brand stands out in a crowded landscape.',
      imageUrl: '/Concept-Creation.jpg',
    },
    {
      title: 'Logo and Full Identity',
      description:
        'Create memorable logos and comprehensive visual identity systems.',
      description2:
        'A powerful logo and cohesive visual identity form the foundation of your brand’s recognition. Through thoughtful design and consistency across all touchpoints, we create visuals that not only capture attention but also communicate your brand’s story, values, and professionalism—leaving a lasting impression on your audience.',
      imageUrl: '/subservice/Logo-and-Full-Identity.jpg',
    },
    {
      title: 'Digital Brand Strategy',
      description:
        'Build cohesive digital brand experiences across all online touchpoints.',
      description2:
        'We design unified digital experiences that bring your brand to life across every online platform. From your website to social media and digital advertising, each element works together to deliver a consistent, engaging, and memorable presence that strengthens brand loyalty and drives meaningful connections with your audience.',
      imageUrl: '/subservice/Digital-Brand-Strategy.jpg',
    },
    {
      title: 'Brand Collaterals',
      description:
        'Design professional marketing materials that reinforce your brand identity.',
      description2:
        'Every piece of marketing material should reflect your brand’s personality and professionalism. We create brochures, presentations, and digital assets that communicate your message clearly while maintaining visual consistency—helping you build credibility, attract attention, and leave a lasting impression on your audience.',
      imageUrl: '/subservice/Brand-Collaterals.jpg',
    },
    {
      title: 'Re-branding',
      description:
        'Refresh and modernize existing brands to stay relevant and competitive.',
      description2:
        'As markets evolve, brands must adapt to remain impactful and relevant. We revitalize existing identities through modern design, refined messaging, and updated visuals—preserving your brand’s essence while giving it a fresh, contemporary edge that resonates with today’s audience and keeps you ahead of competitors.',
      imageUrl: '/subservice/Re-branding.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Branding
              </h1>

              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Create a memorable brand identity that resonates with your
                audience and stands out in the marketplace. From logo design to
                brand guidelines, we craft cohesive brand experiences.
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

            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/branding-hero.jpg"
                alt="Branding Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedByC />

      {/* Navigation Section */}
      <ServicesNavigation currentService="Branding" />

      {/* System Solutions Section */}
      <SybService subServices={subServices} />

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with
              branding.
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
