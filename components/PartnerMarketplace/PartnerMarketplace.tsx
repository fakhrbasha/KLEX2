'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnerMarketplace() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-muted/30 to-transparent">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,#0b4554/10,transparent_80%)] blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Partner Marketplace
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Marketing is always changing and evolving. Partner with a dedicated{' '}
          <span className="font-semibold text-foreground">
            Marketing Success Manager
          </span>{' '}
          who works as hard as you do to help you stay ahead of the curve. They
          focus on creating and executing modern digital marketing strategies to
          help you grow your business.
        </p>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Learn More
        </motion.button> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative group"
      >
        <motion.div
          className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
          layoutId="glow"
        />
        <Image
          src="/prt3.jpg"
          alt="Partner Marketplace"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
