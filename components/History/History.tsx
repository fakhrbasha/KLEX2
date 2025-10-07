'use client';

import React from 'react';
import { Timeline } from '../ui/timeline';
import { motion } from 'framer-motion';

export default function TimelineDemo() {
  const data = [
    {
      title: '2012 - 2017',
      content: (
        <div>
          <h3 className="text-2xl font-bold  text-primary mb-2">
            A Strong Beginning
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            KLEX Marketing Agency’s success story began in 2012, offering a wide
            range of marketing and advertising services. Our journey started
            with a focus on delivering innovative solutions and building lasting
            client relationships.
          </p>
        </div>
      ),
    },
    {
      title: '2018 - 2021',
      content: (
        <div>
          <h3 className="text-2xl font-bold  text-primary mb-2">
            The Technological Expansion
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            During this period, we expanded into professional web development
            and strengthened our presence in the American and Gulf markets,
            delivering world-class solutions and broadening our global
            footprint.
          </p>
        </div>
      ),
    },
    {
      title: '2022 - 2023',
      content: (
        <div>
          <h3 className="text-2xl font-bold  text-primary mb-2">
            Excellence in Egypt
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            We entered the Egyptian market with high-quality social media
            marketing and outdoor advertising services. Our expert team became
            the key driver of continued excellence and innovation.
          </p>
        </div>
      ),
    },
    {
      title: '2024 - 2025',
      content: (
        <div>
          <h3 className="text-2xl font-bold  text-primary mb-2">
            Continuous Growth
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our steps toward success grow stronger every year. In 2024, we
            expanded our development services, welcomed new creative talents,
            and built lasting partnerships with clients across industries.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 bg-transparent">
      <div className="container bg-transparent mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From our humble beginnings to a globally recognized marketing agency
            — here’s how we’ve grown and evolved.
          </p>
        </motion.div>

        <Timeline data={data} />
      </div>
    </section>
  );
}
