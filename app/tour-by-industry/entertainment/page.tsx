'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

export default function EntertainmentPage() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cris Elmasry
          </motion.h1>

          {/* Image */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-3xl h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/industry/en1.jpg"
                alt="Cris Elmasry"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Introducing{' '}
            <span className="font-semibold text-foreground">Cris Elmasry</span>,
            where our social media management services have elevated his
            presence to new levels. Through strategic planning and engaging
            content creation, we&apos;ve crafted a captivating online persona
            that showcases Cris Elmasry&apos;s unique talents and fascinating
            performances. Our partnership focuses on expanding his reach and
            connecting with audiences worldwide, making his magic and
            entertainment accessible to all.
          </motion.p>
        </div>
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
