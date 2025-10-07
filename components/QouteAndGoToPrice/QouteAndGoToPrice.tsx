'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function QouteAndGoToPrice() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground"
        >
          Get everything you need to{' '}
          <span className="text-primary">manage and grow</span> your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg"
        >
          Explore flexible plans designed to help teams of any size scale
          efficiently — from startups to enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/marketplace">
            <Button size="lg" className="text-base px-8">
              View Plans & Pricing
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
