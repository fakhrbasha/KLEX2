import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function MarketResearchPage() {
  const subServices = [
    {
      title: 'Digital Market Research',
      description:
        'Comprehensive online market analysis using advanced digital tools and methodologies.',
      description2:
        'Our approach combines cutting-edge analytics with real-time consumer data to uncover trends, opportunities, and potential risks. By integrating both qualitative and quantitative insights, we help businesses make confident, data-driven decisions that enhance their competitive advantage and ensure long-term market success.',
      imageUrl: '/subservice/digital-market-research.jpg',
    },
    {
      title: 'Set Objective and Strategy',
      description:
        'Define clear, measurable objectives aligned with your business goals.',
      description2:
        'Setting clear and measurable objectives ensures every marketing effort drives tangible results. By aligning these goals with your broader business strategy, you create a focused roadmap that guides decision-making, optimizes resources, and tracks progress toward sustainable growth.',
      imageUrl: '/subservice/Set-Objective-and-Strategy.jpg',
    },
    {
      title: 'Situation Analysis',
      description:
        'Evaluate current market conditions, opportunities, and challenges.',
      description2:
        'Understanding the current market landscape allows you to identify emerging opportunities and anticipate potential challenges. Through detailed situation analysis, you can assess economic trends, consumer behavior, and industry dynamics—providing a solid foundation for strategic planning and informed decision-making.',
      imageUrl: '/subservice/Situation-Analysis.jpg',
    },
    {
      title: 'Competitors Analysis',
      description:
        'In-depth analysis of competitor strategies, strengths, and weaknesses.',
      description2:
        'A thorough competitor analysis reveals what drives success in your industry and where gaps exist in the market. By studying competitors’ strategies, strengths, and weaknesses, you can identify opportunities for differentiation, refine your positioning, and develop more effective strategies to gain a competitive edge.',
      imageUrl: '/subservice/Competitors-Analysis.jpg',
    },
    {
      title: 'Data Analysis',
      description:
        'Transform raw data into actionable insights using statistical methods.',
      description2:
        'Turning complex data into clear, actionable insights is key to making informed business decisions. By applying advanced statistical methods and data visualization techniques, patterns and trends become easier to understand—helping you optimize performance, forecast outcomes, and implement strategies backed by solid evidence.',
      imageUrl: '/subservice/Data-Analysis.jpg',
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
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Market Research and Planning
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Make informed decisions with comprehensive market insights,
                competitive analysis, and strategic planning that positions your
                brand for success.
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
                src="/market-research-hero.jpg"
                alt="Market Research and Planning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Market Research & Planning" />

      {/* Sub-Services Section */}
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

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your goals with market
              research and planning.
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
