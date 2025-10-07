'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    text: 'KLEX helped us speak to parents not just with words, but with feeling. They understood the warmth and wonder behind Marshmallow and helped us reflect that in everything we do; from events that leave a mark to printed pieces full of heart.',
    author: 'Nehal Fahmy',
    company: 'Marshmallow',
  },
  {
    text: 'We needed a partner who could handle more than content; we needed someone who understood performance and credibility. KLEX delivered both. From our website to every post, they’ve helped us build trust and attract serious clients.',
    author: 'Ahmed Fayz',
    company: 'Sportech',
  },
  {
    text: 'Working with KLEX has been a turning point for my brand. They truly understand my vision and have helped me express it across every platform. From social media to media production, their team brings creativity, consistency, and strategy that elevate everything I do. I finally feel like my brand has a voice that matches its soul.',
    author: 'Nourhan Gado',
    company: 'BY Nourhan Gado',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial
    return () => clearInterval(intervalId);
  }, []);

  const { text, author, company } = testimonials[currentIndex];

  // Animation Variants
  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const dotVariants = {
    active: { scale: 1.2, backgroundColor: '#0f172a' },
    inactive: { scale: 1, backgroundColor: '#cbd5e1' },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-6">
        <h5 className="uppercase text-sm font-semibold tracking-widest text-primary mb-2">
          What Our Clients Say
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Trusted by <span className="text-primary">Brands That Inspire</span>
        </h2>

        <div className="relative max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                “{text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-lg text-foreground">
                  {author}
                </p>
                <p className="text-sm text-muted-foreground">{company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-10 flex justify-center space-x-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="h-3 w-3 rounded-full cursor-pointer"
                variants={dotVariants}
                animate={i === currentIndex ? 'active' : 'inactive'}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
