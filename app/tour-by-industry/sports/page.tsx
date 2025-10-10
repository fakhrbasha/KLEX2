'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

export default function SportsPage() {
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
            V-Fit Club
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
                src="/industry/s.jpg"
                alt="V-Fit Club"
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
            Presenting{' '}
            <span className="font-semibold text-foreground">V Fit Club</span>,
            whose online presence has been transformed by our partnership.
            Through tailored media production and strategic social media
            management, we've amplified V Fit Club's message of fitness and
            well-being. Through our cooperation, their facilities, programmes,
            and community involvement are highlighted — increasing their online
            presence and fostering stronger engagement with fitness enthusiasts.
          </motion.p>
        </div>
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
