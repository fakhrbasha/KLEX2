'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative  bg-gradient-to-b from-muted/30 to-transparent py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#0b4554/10,transparent_70%)] blur-2xl"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-[#3be6c4] bg-clip-text text-transparent">
            Need Custom Solutions?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 text-lg text-muted-foreground leading-relaxed"
          >
            Can’t find what you’re looking for? Our team can craft custom
            digital solutions tailored exactly to your needs.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-[#3be6c4] text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      ></motion.div>
    </section>
  );
}
