'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CTA from '@/components/CTA/CTA';
import PricingSection from '@/components/Price/Price';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';

// const industries = [
//   { name: 'Food', img: '/imgs/industries/food.jpg' },
//   { name: 'Educational', img: '/imgs/industries/education.jpg' },
//   { name: 'Entertainment', img: '/imgs/industries/entertainment.jpg' },
//   { name: 'Sports', img: '/imgs/industries/sports.jpg' },
//   { name: 'Fashion', img: '/imgs/industries/fashion.jpg' },
//   { name: 'Financial Advisory', img: '/imgs/industries/finance.jpg' },
//   { name: 'Real Estate', img: '/imgs/industries/realestate.jpg' },
//   { name: 'General Constructions', img: '/imgs/industries/construction.jpg' },
//   { name: 'Lawyer', img: '/imgs/industries/law.jpg' },
//   { name: 'Interior Design', img: '/imgs/industries/interior.jpg' },
//   { name: 'Packaging', img: '/imgs/industries/packaging.jpg' },
//   { name: 'Digital & Startup Studio', img: '/imgs/industries/startup.jpg' },
//   { name: 'Courier', img: '/imgs/industries/courier.jpg' },
//   { name: 'Tourism', img: '/imgs/industries/tourism.jpg' },
//   { name: 'Banking', img: '/imgs/industries/banking.jpg' },
//   { name: 'Conferences', img: '/imgs/industries/conference.jpg' },
//   { name: 'Accessories', img: '/imgs/industries/accessories.jpg' },
//   { name: 'E-commerce', img: '/imgs/industries/ecommerce.jpg' },
//   { name: 'Cosmetics', img: '/imgs/industries/cosmetics.jpg' },
//   { name: 'Medical', img: '/imgs/industries/medical.jpg' },
// ];

const industries = [
  'Food',
  'Educational',
  'Entertainment',
  'Sports',
  'Fashion',
  'Financial Advisory',
  'Real Estate',
  'General Constructions',
  'Lawyer',
  'Interior Design',
  'Packaging',
  'Digital & Startup Studio',
  'Courier',
  'Tourism',
  'Banking',
  'Conferences',
  'Accessories',
  'E-commerce',
  'Cosmetics',
  'Medical',
];
export default function IndustriesPage() {
  return (
    <>
      {
        <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
          {/* ===== HEADER ===== */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto max-w-5xl py-20 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-[#3be6c4] bg-clip-text text-transparent">
              See how Klex works for your industry.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every industry tells a different story — and Klex brings each to
              life through strategy, creativity, and technology.
            </p>
          </motion.div>

          {/* ===== GRID ===== */}
          <div className="container mx-auto max-w-7xl grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-24">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-muted bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-8"
              >
                <div>
                  <motion.h3
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-2xl font-semibold mb-3"
                  >
                    {industry}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">
                    Explore how Klex helps the {industry.toLowerCase()} industry
                    grow through branding, campaigns, and digital experiences.
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-[#3be6c4] transition-transform duration-300 group-hover:translate-y-[-3px]"
                  >
                    <Link
                      href={`/tour-by-industry/${industry
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      Explore
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== FLOATING GRADIENT ===== */}
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 blur-3xl rounded-full"
          />
        </section>
      }
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
