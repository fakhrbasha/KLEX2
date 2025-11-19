'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function OurLatestProject() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="uppercase text-sm font-semibold tracking-widest text-primary">
            Our Latest Projects
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Showcasing Our{' '}
            <span className="text-primary">Successful Projects</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We proudly present <strong>El Anan Travel</strong>, one of our
            standout success stories. Our collaboration covered everything from
            crafting impactful landing pages and managing social media campaigns
            to executing targeted paid ads. We also developed customized
            training programs that empowered their sales and call center teams
            to perform at their best.
          </p>
          <Link href="/projects">
            <Button size="lg" className="mt-4 bg-[#3be6c4]">
              View All Projects
            </Button>
          </Link>
        </motion.div>

        {/* Image / Visual Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/elanan.jpg"
              alt="El Anan Travel project showcase"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
