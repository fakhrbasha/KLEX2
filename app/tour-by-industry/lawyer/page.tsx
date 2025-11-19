'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

export default function LawyerPage() {
  return (
    <>
      <div className="bg-background text-foreground">
        {/* ✅ Header with animation */}
        <motion.section
          className="pt-24 pb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lawyer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our collaboration in the legal sector — where we help law
            professionals build strong personal brands and reach their audiences
            effectively through digital excellence.
          </p>
        </motion.section>

        {/* ✅ Project Card */}
        <section className="py-20">
          <div className="container space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              {/* Image */}
              <div className="flex-1">
                <Image
                  src="/industry/l1.jpg"
                  alt="Elsheshtawy"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-[400px] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">Elsheshtawy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Elsheshtawy is a leading lawyer in the field of law and legal
                  practice. He aimed to establish a personal brand through
                  digital marketing, so we collaborated with him to create a
                  distinctive personal identity and market him widely and
                  effectively online. This ensures that when people think of the
                  field of law and legal practice,
                  <span className="font-semibold"> Elsheshtawy </span> is the
                  first name that comes to mind.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
