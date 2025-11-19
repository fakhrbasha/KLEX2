import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function EventsPage() {
  const subServices = [
    {
      title: 'Planning and Managing the Event',
      description:
        'Comprehensive event planning and management from concept to execution.',
      description2:
        'From initial concept to the final execution, we handle every aspect of event planning with precision and creativity. Our team ensures each detail — from venue selection and design to logistics and guest experience — aligns perfectly with your brand’s vision and objectives. Whether it’s a corporate conference, product launch, or private celebration, we deliver seamless, memorable events that leave a lasting impression.',
      imageUrl: '/subservice/event-1.jpg',
    },
    {
      title: 'Roadshows, Ushers, Cars, Booths, Conferences, Concerts and More',
      description:
        'Full-service event production including logistics, staffing, and equipment.',
      description2:
        'We provide full-service event production to ensure every detail is flawlessly executed. From logistics coordination and technical setup to professional staffing and high-quality equipment, our team manages every element with precision. Whether you’re hosting a corporate gala, live performance, or brand activation, we deliver seamless production that brings your vision to life and leaves a lasting impact.',
      imageUrl: '/subservice/event-2.jpg',
    },
    {
      title: 'Design and Production',
      description:
        'Creative event design and production services for memorable experiences.',
      description2:
        'We create unforgettable experiences through innovative event design and production. From concept to execution, our team blends creativity and precision to craft immersive atmospheres that reflect your brand and captivate your audience',
      imageUrl: '/subservice/event-3.jpg',
    },
    {
      title: 'Giveaways',
      description:
        'Branded promotional items and giveaways for event attendees.',
      description2:
        'We design and produce branded promotional items and giveaways that leave a lasting impression on your event attendees. From custom merchandise to creative gift sets, every item is crafted to reflect your brand identity and enhance engagement. These thoughtful touches help extend your brand’s presence long after the event ends.',
      imageUrl: '/subservice/event-4.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Events Planning & Production
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Create memorable experiences with professional event planning
                and production. From intimate gatherings to large-scale
                conferences, we handle every detail.
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
                src="/events-hero.jpg"
                alt="Events Planning & Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <TrustedByC />

      <ServicesNavigation currentService="Events Planning & Production" />

      <SybService subServices={subServices} />

      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with events
              planning and production.
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
