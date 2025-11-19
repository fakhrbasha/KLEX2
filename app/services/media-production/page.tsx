import { ServiceLayout } from '@/components/service-layout';
import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Video } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function MediaProductionPage() {
  const subServices = [
    {
      title: 'Videography',
      description:
        'Expert video production services for corporate, commercial, and creative projects.',
      description2:
        'We deliver high-quality video production services tailored for corporate, commercial, and creative projects. From concept development and scripting to filming and post-production, our team ensures every video captures your message with clarity, emotion, and visual excellence—helping your brand stand out and engage audiences effectively.',
      imageUrl: '/subservice/Videography.jpg',
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing and post-production services.',
      description2:
        'We offer professional video editing and post-production services that bring your visuals to life. Our team refines every frame with precision—enhancing color, sound, and pacing to ensure a seamless and impactful final product that aligns perfectly with your brand’s vision and storytelling goals.',
      imageUrl: '/subservice/videoE.jpg',
    },
    {
      title: 'Photography',
      description:
        'High-quality photography for products, events, corporate, and lifestyle.',
      description2:
        'We provide high-quality photography services that capture your brand’s story with precision and style. From product shoots and corporate portraits to events and lifestyle imagery, our photographers ensure every shot reflects professionalism, creativity, and the essence of your brand.',
      imageUrl: '/subservice/photoGH.jpg',
    },
    {
      title: 'Photo Editing/Retouch',
      description:
        'Professional photo editing and retouching for flawless results.',
      description2:
        'Our professional photo editing and retouching services ensure every image looks sharp, balanced, and visually stunning. We perfect lighting, colors, and details with care, enhancing your photos while maintaining a natural, authentic look that reflects the quality and professionalism of your brand.',
      imageUrl: '/subservice/PHE.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Media Production
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Tell your story with professional video, photography, and
                multimedia content. From concept to final delivery, we create
                compelling visual content that engages and converts.
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
                src="/media-production-hero.jpg"
                alt="Media Production Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Media Production" />

      <SybService subServices={subServices} />

      <ServiceLayout
        title="Media Production"
        description="Tell your story with professional video, photography, and multimedia content. From concept to final delivery, we create compelling visual content that engages and converts."
        icon={<Video className="h-8 w-8 text-primary" />}
        benefits={[
          'Professional, high-quality visual content',
          'Engaging storytelling that resonates with audiences',
          'Versatile content for multiple platforms and uses',
          'Increased engagement and conversion rates',
          'Consistent brand aesthetic across all media',
          'Full-service production from concept to delivery',
        ]}
        features={[
          {
            title: 'Video Production',
            description:
              'Corporate videos, commercials, explainer videos, and documentary-style content.',
          },
          {
            title: 'Photography',
            description:
              'Product photography, corporate headshots, event coverage, and lifestyle imagery.',
          },
          {
            title: 'Animation & Motion Graphics',
            description:
              '2D and 3D animation, motion graphics, and visual effects for engaging content.',
          },
          {
            title: 'Podcast Production',
            description:
              'Full podcast production including recording, editing, and distribution.',
          },
          {
            title: 'Live Streaming',
            description:
              'Professional live streaming services for events, webinars, and product launches.',
          },
          {
            title: 'Post-Production',
            description:
              'Editing, color grading, sound design, and finishing for polished final products.',
          },
        ]}
        caseStudy={{
          title: 'Brand Documentary Series',
          description:
            "Produced a 6-episode documentary series showcasing a company's impact and customer stories.",
          results: [
            '2M+ views across all platforms',
            'Featured at 3 major industry conferences',
            '45% increase in brand sentiment scores',
            'Won 2 industry awards for branded content',
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
              Let's discuss how we can help you achieve your goals with media
              production.
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
