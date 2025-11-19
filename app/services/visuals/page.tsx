import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Palette } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function VisualsPage() {
  const subServices = [
    {
      title: 'Design',
      description:
        'Professional graphic design for all your marketing and branding needs.',
      description2:
        'Our professional graphic design services cover all your marketing and branding needs with creativity and precision. From logos and brochures to social media visuals and advertising materials, we craft cohesive designs that communicate your message effectively. Every detail is tailored to strengthen your brand identity, attract attention, and leave a lasting impression on your audience.',
      imageUrl: '/subservice/Visuals-1.jpg',
    },
    {
      title: 'Motion Graphic',
      description: 'Engaging animated graphics that bring your brand to life.',
      description2:
        'We create engaging animated graphics that capture attention and bring your brand to life. Through motion, storytelling, and design, we transform static visuals into dynamic experiences that enhance your digital presence. Perfect for social media, websites, and presentations, our animations help convey your message in a memorable and visually impactful way.',
      imageUrl: '/subservice/Visuals-2.jpg',
    },
    {
      title: 'Animation',
      description:
        'Custom 2D and 3D animations for storytelling and brand communication.',
      description2:
        'We craft custom 2D and 3D animations that elevate storytelling and brand communication. Our team combines creativity, technical expertise, and strategic insight to produce animations that engage audiences and simplify complex ideas. Whether for promotional videos, product demos, or brand campaigns, our animations deliver a visually compelling narrative that enhances your message and strengthens brand impact.',
      imageUrl: '/subservice/Visuals-3.jpg',
    },
    {
      title: 'Digital Art',
      description:
        'Unique digital artwork and illustrations that capture your brand essence.',
      description2:
        'We create unique digital artwork and illustrations that capture the true essence of your brand. Each piece is thoughtfully designed to reflect your identity, values, and vision, helping you stand out with originality and style. Whether for marketing campaigns, packaging, or digital platforms, our custom illustrations add a distinctive visual touch that enhances your brand storytelling and audience connection.',
      imageUrl: '/subservice/Visuals-4.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Visuals
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Create stunning visual content that captures attention and
                communicates your message. From graphic design to illustration,
                we bring your ideas to life.
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
                src="/visuals-hero.jpg"
                alt="Visual Design Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Visuals" />

      <SybService subServices={subServices} />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with visual
              design.
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
