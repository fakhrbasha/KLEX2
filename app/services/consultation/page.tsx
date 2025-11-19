import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function ConsultationPage() {
  const subServices = [
    {
      title: 'Business Development',
      description: 'Growth strategies and partnership development.',
      description2:
        'We craft tailored growth strategies and foster strategic partnerships that accelerate business expansion. By identifying new market opportunities and building meaningful collaborations, we help your brand strengthen its position, increase reach, and achieve sustainable long-term success.',
      imageUrl: '/subservice/C-1.jpg',
    },
    {
      title: 'Business Plans',
      description: 'Comprehensive business planning and financial modeling.',
      description2:
        'We provide comprehensive business planning and financial modeling services to guide informed decision-making and sustainable growth. Our approach combines strategic insight with data-driven analysis to help you forecast performance, allocate resources effectively, and achieve your business objectives with confidence.',
      imageUrl: '/subservice/C-2.jpg',
    },
    {
      title: 'Management Plan',
      description: 'Operational planning and management frameworks.',
      description2:
        'We develop effective operational planning and management frameworks that optimize efficiency and performance. Our structured approach ensures smooth day-to-day operations, clear accountability, and alignment with your organization’s strategic goals.',
      imageUrl: '/subservice/C-3.jpg',
    },
    {
      title: 'Company Structure',
      description: 'Organizational design and structure optimization.',
      description2:
        'We create and refine organizational designs that enhance efficiency, communication, and collaboration. By optimizing your company’s structure, we ensure roles, responsibilities, and workflows align seamlessly with your strategic objectives and promote long-term growth.',
      imageUrl: '/subservice/C-4.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Consultation
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Expert business consulting to help you navigate challenges,
                seize opportunities, and achieve sustainable growth.
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
                src="/consultation-hero.jpg"
                alt="Business Consultation Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Consultation" />

      {/* Sub-Services Section */}
      <SybService subServices={subServices} />

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with business
              consultation.
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
