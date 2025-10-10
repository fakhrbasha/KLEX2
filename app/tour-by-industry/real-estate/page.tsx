'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

export default function RealEstatePage() {
  return (
    <>
      <section className="min-h-screen bg-background text-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real Estate Industry
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Perfect Home</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Perfect Home is a real estate company aiming to establish a
                unique presence on social media platforms, engage with clients,
                and tailor its services to their needs. We assisted them in
                crafting a distinctive image to guide their success in capturing
                market share.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/industry/r1.jpg"
                alt="Perfect Home"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
