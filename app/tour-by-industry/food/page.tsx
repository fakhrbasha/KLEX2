'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';

export default function FoodIndustryPage() {
  return (
    <>
      <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
        {/* ===== HERO SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-6xl py-20 grid md:grid-cols-2 items-center gap-12"
        >
          {/* ===== LEFT: TEXT ===== */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-[#3be6c4] bg-clip-text text-transparent">
              Mimi’s Kitchen
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mimi’s Kitchen is a beloved homemade food brand that brings
              authentic, comforting flavors straight from the heart to the
              table. With a focus on quality ingredients and traditional
              recipes, Mimi’s Kitchen offers a warm taste of home in every bite.
            </p>

            <Button asChild size="lg">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          {/* ===== RIGHT: IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/industry/food.jpg"
              alt="Mimi's Kitchen"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* ===== FLOATING BACKGROUND EFFECT ===== */}
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#3be6c4]/10 blur-3xl rounded-full"
        />
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />

      <CTA />
    </>
  );
}
