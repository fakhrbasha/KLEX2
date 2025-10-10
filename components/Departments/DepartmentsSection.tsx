'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, Code, ShoppingCart, Users, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function DepartmentsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const departments = [
    {
      id: 1,
      title: 'Digital Marketing',
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      short:
        'Crafting strategic online campaigns to boost brand visibility and engagement.',
      details: {
        subtitle: 'Transforming Brands Through Digital Excellence',
        services: [
          'Social Media Marketing',
          'Content Creation',
          'Media Buying',
          'Influencer Marketing',
          'SEO',
        ],
        description: `Our Digital Marketing Department is dedicated to propelling your brand to online success. 
Through innovative strategies and meticulous techniques, we elevate brand awareness, engage your target audience, and drive tangible growth.
Our seasoned teams collaborate closely to deliver tailored solutions across SEO, content marketing, social media management, and media buying, optimizing every facet of your online presence.
With a steadfast commitment to excellence and data-driven strategies, we ensure your brand remains competitive in the digital Klex.
We've transformed our clients' digital landscapes through effective social media campaigns and targeted media purchasing methods.`,
        examples: ['Le Voile', 'Jessy', 'Belal Jewelry', 'Scarf Sale'],
        image: '/departments/1.jpg',
      },
    },
    {
      id: 2,
      title: 'Web Development',
      icon: <Code className="w-8 h-8 text-primary" />,
      short:
        'We craft dynamic, responsive websites that engage users and provide seamless online experiences.',
      details: {
        subtitle: 'Empowering Brands with Cutting-Edge Web Development',
        services: [
          'Frontend Development',
          'Backend Development',
          'Full-Stack Development',
          'UI/UX Design',
        ],
        description: `Web development involves creating visually appealing and functional websites.
It includes expertise such as coding, programming, layout, and user experience.
Frontend developers use HTML, CSS, and JavaScript to build the visible interfaces.
Backend developers manage server-side logic, databases, and integrations.
Full-stack developers handle both ends, ensuring cohesive functionality.
UI/UX designers focus on intuitive interfaces that enhance user satisfaction.`,
        examples: ['Tie Shop', 'Cris Elmasry', 'Edris Online'],
        image: '/departments/2.jpg',
      },
    },
    {
      id: 3,
      title: 'Sales Department',
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      short:
        'Plays a key role in driving revenue growth and maintaining high standards of service excellence.',
      details: {
        subtitle: 'Tailored Solutions and Lasting Partnerships',
        description: `Our client engagement strategy relies on the expertise of our Sales Operations, which is critical to driving growth and creating successful partnerships.
With deep market insights and a proactive mentality, our professionals design solutions tailored to each client's specific needs, combining substantial industry expertise and a strong network to build long-term, trusting relationships.
They work together with marketing and customer service teams to create a consistent approach that increases client satisfaction and business success.
Beyond their primary responsibilities, our sales staff assists HR by providing specialized training programs to improve team capabilities.
They regularly exceed client expectations by using strategic analysis and personalized consultations to create measurable results that demonstrate our dedication to excellence.`,
        examples: ['El-Anan Tourism', 'Belal Jewelry'],
        image: '/departments/3.jpg',
      },
    },
    {
      id: 4,
      title: 'Human Resources',
      icon: <Users className="w-8 h-8 text-primary" />,
      short:
        "Ensuring our team's growth and well-being while aligning talent with our company's vision and goals.",
      details: {
        subtitle: 'Tailored Solutions and Lasting Partnerships',
        description: `Our client engagement strategy relies on the expertise of our Sales Operations, which is critical to driving growth and creating successful partnerships.
With deep market insights and a proactive mentality, our professionals design solutions to each client's specific needs, combining substantial industry expertise and a strong network to build long-term, trusting relationships.
They work together with marketing and customer service teams to create a consistent approach that increases client happiness and business success.
Beyond their primary responsibilities, our sales staff assists HR by providing specialised training programmes to improve team capabilities.
They regularly exceed client expectations by using strategic analysis and personalised consultations to create measurable results that demonstrate our dedication to excellence.`,
        examples: ['El-Anan Tourism', 'Belal Jewelry'],
        image: '/departments/4.jpg',
      },
    },
    {
      id: 5,
      title: 'Internal Partnership',
      icon: <Handshake className="w-8 h-8 text-primary" />,
      short:
        'Our approach fosters internal partnerships to benefit clients with interconnected strategies, enhancing both operational efficiency and market impact.',
      details: {
        subtitle: 'Driving Growth Through Strategic Collaborations',
        description: `Joining Klex Business Development promises more than just basic services; it signifies a commitment to comprehensive company growth.
We are dedicated to enhancing your market presence and refining your services tailored to your audience.
One of our key strategies involves fostering internal partnerships among our clients, facilitating mutual benefits and organizational efficiencies.
For instance, a fashion brand specializing in scarves started with us from inception, and through a robust marketing approach, we crafted their distinctive identity.
When they needed reliable order delivery services, we seamlessly connected them with a shipping company that also happens to be our client.
This synergy exemplifies our approach: creating strategic alliances to drive administrative and operational success, ensuring every client achieves their goals effectively.`,
        examples: ['Best CO', 'Jessy'],
        image: '/departments/5.jpg',
      },
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Explore Our Departments
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Card
              key={dept.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() =>
                setActiveCard(activeCard === dept.id ? null : dept.id)
              }
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                {dept.icon}
                <h3 className="mt-4 text-xl font-semibold">{dept.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {dept.short}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expanded Details */}
        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-background rounded-2xl shadow-xl p-8"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {departments.find((d) => d.id === activeCard)?.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-3">
                    {
                      departments.find((d) => d.id === activeCard)?.details
                        ?.subtitle
                    }
                  </p>

                  {/* Services List */}
                  {departments.find((d) => d.id === activeCard)?.details
                    ?.services && (
                    <ul className="mb-4 list-disc pl-5 text-muted-foreground">
                      {departments
                        .find((d) => d.id === activeCard)
                        ?.details?.services?.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                    </ul>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground whitespace-pre-line">
                    {
                      departments.find((d) => d.id === activeCard)?.details
                        ?.description
                    }
                  </p>

                  {/* Examples */}
                  {departments.find((d) => d.id === activeCard)?.details
                    ?.examples && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">
                        Noteworthy Examples:
                      </h4>
                      <ul className="flex flex-wrap gap-3 text-sm text-primary">
                        {departments
                          .find((d) => d.id === activeCard)
                          ?.details?.examples?.map((ex, i) => (
                            <li
                              key={i}
                              className="bg-primary/10 px-3 py-1 rounded-full"
                            >
                              {ex}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={
                      departments.find((d) => d.id === activeCard)?.details
                        ?.image || ''
                    }
                    alt={
                      departments.find((d) => d.id === activeCard)?.title || ''
                    }
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
