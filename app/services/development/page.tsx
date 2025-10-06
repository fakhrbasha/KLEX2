import { TrustedBy } from '@/components/trusted-by';
import { ServicesNavigation } from '@/components/services-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SybService from '@/app/ProjectsTest/subService/SybService';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function DevelopmentPage() {
  const subServices = [
    {
      title: 'Web Design and Hosting',
      description:
        'Professional website design with reliable hosting solutions.',
      description2:
        'As markets evolve, brands must adapt to remain impactful and relevant. We revitalize existing identities through modern design, refined messaging, and updated visuals—preserving your brand’s essence while giving it a fresh, contemporary edge that resonates with today’s audience and keeps you ahead of competitors.',
      imageUrl: '/subservice/Web-Design-and-Hosting.jpg',
    },
    {
      title: 'Portfolio',
      description:
        'Stunning portfolio websites to showcase your work and achievements.',
      description2:
        'We design visually captivating portfolio websites that highlight your creativity, expertise, and accomplishments. Each project is presented with clarity and impact, ensuring your work stands out while providing visitors with an engaging and intuitive browsing experience that reflects your unique professional identity.',
      imageUrl: '/subservice/Portfolio.jpg',
    },
    {
      title: 'Catalog',
      description:
        'Digital catalogs for product showcasing and online browsing.',
      description2:
        'We create dynamic digital catalogs that present your products with clarity and style. Designed for seamless browsing and user engagement, these catalogs make it easy for customers to explore, compare, and connect with your offerings—enhancing the shopping experience and driving online conversions.',
      imageUrl: '/subservice/catalog.jpg',
    },
    {
      title: 'E-commerce',
      description:
        'Full-featured online stores with payment processing and inventory management.',
      description2:
        'We develop complete eCommerce solutions that go beyond design—integrating secure payment gateways, efficient inventory management, and smooth user experiences. Our online stores are built for performance and scalability, empowering your business to manage operations easily while maximizing sales and customer satisfaction.',
      imageUrl: '/subservice/E-commerce.jpg',
    },
    {
      title: 'Personal Blog',
      description:
        'Custom blog platforms for content creators and thought leaders.',
      description2:
        'We build personalized blog platforms tailored to your voice and goals. Whether you’re a content creator, influencer, or thought leader, our solutions combine elegant design with powerful publishing tools—helping you share ideas, grow your audience, and establish a strong online presence that reflects your brand',
      imageUrl: '/subservice/Personal-Blog.jpg',
    },
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      description2:
        'We develop high-performance mobile applications that deliver seamless experiences on both iOS and Android. Using modern frameworks and best practices, we ensure your app is fast, intuitive, and scalable—whether it’s a native build or a cross-platform solution—helping you reach users effectively across all devices.',
      imageUrl: '/subservice/Mobile-App-Development.jpg',
    },
    {
      title: 'E-commerce Customized App',
      description:
        'Tailored e-commerce mobile applications for your business needs.',
      description2:
        'We create customized e-commerce mobile apps designed to fit your business model and customer journey. From product browsing and secure checkout to order tracking and notifications, every feature is built to enhance convenience, boost engagement, and drive more sales directly from mobile devices.',
      imageUrl: '/subservice/E-commerce-Customized-App.jpg',
    },
    {
      title: 'Customs Software Development',
      description:
        'Bespoke software solutions designed specifically for your business.',
      description2:
        'We develop custom software solutions built around your unique workflows, goals, and challenges. By understanding your business processes in depth, we design scalable and efficient systems that improve productivity, streamline operations, and give you a competitive advantage through technology tailored exactly to your needs.',
      imageUrl: '/subservice/Customs-Software-Development.jpg',
    },
    {
      title: 'POS',
      description:
        'Point of sale systems for retail and hospitality businesses.',
      description2:
        'We design reliable and easy-to-use point of sale (POS) systems that simplify daily operations for retail and hospitality businesses. From inventory tracking and sales reporting to secure payment processing, our POS solutions help you manage transactions efficiently, reduce errors, and deliver a smoother customer experience..',
      imageUrl: '/subservice/POS.jpg',
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive inventory tracking and management systems.',
      description2:
        'We build comprehensive inventory management systems that give you full control over your stock, from procurement to sales. With real-time tracking, automated updates, and insightful reporting, you can reduce waste, prevent stockouts, and ensure your operations run efficiently across all channels.',
      imageUrl: '/subservice/Inventory-Management.jpg',
    },
    {
      title: 'CRM',
      description:
        'Customer relationship management systems to grow your business.',
      description2:
        'We develop powerful customer relationship management (CRM) systems that help you build stronger connections and drive growth. By centralizing customer data, tracking interactions, and automating key processes, our CRM solutions enable you to understand your audience better, improve retention, and make smarter, data-driven decisions.',
      imageUrl: '/subservice/CRM.jpg',
    },
    {
      title: 'Customized Web App',
      description:
        'Tailored web applications built to your exact specifications.',
      description2:
        'We create custom web applications designed precisely around your business needs and objectives. From concept to deployment, every feature is tailored to deliver seamless performance, intuitive user experiences, and scalability—ensuring your solution aligns perfectly with your workflow and supports long-term growth.',
      imageUrl: '/subservice/Customized-Web-App.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Development
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Build powerful, scalable digital solutions with cutting-edge
                technology. From websites to mobile apps, we create custom
                solutions that drive business results.
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
                src="/development-hero.jpg"
                alt="Development Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedByC />

      <ServicesNavigation currentService="Development" />

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
              development.
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
