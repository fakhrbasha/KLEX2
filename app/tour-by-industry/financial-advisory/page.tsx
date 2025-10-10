'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

const financialCompanies = [
  {
    title: 'AG',
    image: '/industry/fa1.jpg',
    description:
      "AG is a financial advisory company we collaborated with to build an image that suits the brand's personality and target audience, creating a strong visual identity and successful social media management that enhances the value and service it provides to its clients.",
  },
  {
    title: 'MG',
    image: '/industry/fa2.jpg',
    description:
      'MG is a financial advisory company in the UAE market that we collaborated with to showcase its services uniquely to its clients, engage with them, and present it as a leading company in the field by building a visual identity that aligns with their goals and market. Additionally, we worked on managing their social media presence to enhance their online digital footprint.',
  },
];

export default function FinancialPage() {
  return (
    <>
      <section className="min-h-screen bg-background text-foreground py-20">
        <div className="container mx-auto px-4 space-y-28">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Financial Industry
          </motion.h1>

          {financialCompanies.map((company, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={company.title}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Text Section */}
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-semibold mb-4">
                    {company.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {company.description}
                  </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={company.image}
                    alt={company.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
