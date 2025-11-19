'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

export default function GeneralConstruction() {
  const projects = [
    {
      title: 'Spor Tech',
      text: 'Spor Tech is a leading Egyptian brand specializing in sports flooring solutions, including artificial grass, acrylic courts, padel courts, clay tennis courts, and rubber surfaces. The brand is recognized for its expertise in sports infrastructure.',
      image: '/industry/g1.jpg',
    },
    {
      title: 'Nukhbat Al Mal3ab (نخبة الملاعب)',
      text: 'Nukhbat Al Malaeb is a Saudi-based brand specializing in professional sports flooring solutions, including artificial grass, acrylic courts, padel courts, clay tennis courts, and rubber flooring. The brand is trusted for its expertise in sports construction.',
      image: '/industry/g2.jpg',
    },
    {
      title: 'aعrab',
      text: 'aعrab is a construction company that has embarked on its journey with us by establishing a strong visual identity and creating a website that encompasses all its services, thereby enhancing its presence on social media platforms. This initiative is aimed at establishing a significant online presence in the digital marketing arena.',
      image: '/industry/g3.jpg',
    },
    {
      title: 'Grand Gate',
      text: 'Grand Gate is a construction company that aimed to dominate search engines and leverage its digital market position to expand its market share. We helped them build a robust website focusing on SEO to achieve their goals through a precise marketing strategy.',
      image: '/industry/g4.jpg',
    },
  ];

  return (
    <>
      <div className="bg-background text-foreground">
        {/* ✅ Animated Header */}
        <motion.section
          className="pt-24 pb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Construction
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our projects in the general construction sector — from
            sports flooring and architectural design to full-scale
            infrastructure and finishing solutions.
          </p>
        </motion.section>

        {/* ✅ Animated Cards */}
        <section className="py-20">
          <div className="container space-y-24">
            {projects.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg object-cover w-full h-[400px] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
