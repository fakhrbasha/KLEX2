'use client';

import CTA from '@/components/CTA/CTA';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Marshmallow',
    description:
      "Introducing Marshmallow Nursery in Egypt, we've created a thriving online community that resonates with parents. Our tailored printing services have produced publications that accurately reflect Marshmallow's values and desires. Furthermore, our expert event management has resulted in memorable experiences, strengthening Marshmallow's position as a leader in early childhood education.",
    image: '/industry/e1.jpg',
  },
  {
    title: 'Kiddieville',
    description:
      "Our collaboration has led to considerable growth for Kiddieville, a popular childcare and kindergarten in Saudi Arabia. We strategically maintained their social media presence to boost engagement and connection with parents. Our efforts have strengthened Kiddieville's image as a nurturing and educational environment for children by creating a cohesive and engaged online community.",
    image: '/industry/e2.jpg',
  },
  {
    title: 'Edris Online',
    description:
      "Collaborating with Edris Online, a cutting-edge educational platform in Egypt and Kuwait, we have developed a website and mobile application. Our partnership has enabled Edris Online to provide learners with distinctive digital experiences. Leveraging our expertise in online and mobile development, we've tailored solutions that align perfectly with Edris Online's mission of using technology to enhance education.",
    image: '/industry/e3.jpg',
  },
  {
    title: 'Mandoby',
    description:
      "Mondoby is a comprehensive online platform aimed at facilitating the application process for students worldwide who wish to study in Egypt. In pursuit of its goal to reach students globally, we have developed a mobile application that represents Mondoby and includes all its services. Additionally, we have devised a marketing plan to begin expanding Mondoby's presence worldwide through social media.",
    image: '/industry/e4.jpg',
  },
  {
    title: 'GSA',
    description:
      "Meet GSA, where our collaboration in social media management has been transformative. Through strategic planning and engaging content creation, we've enhanced GSA's online presence, connecting effectively with their community and stakeholders.",
    image: '/industry/e5.jpg',
  },
];

export default function EducationIndustryPage() {
  return (
    <>
      <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
        <div className="container mx-auto py-24 space-y-32">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#3be6c4] bg-clip-text text-transparent">
              Education Industry
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering education through strategy, design, and digital
              innovation.
            </p>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* ===== IMAGE ===== */}
              <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* ===== TEXT ===== */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {project.title}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated glowing background */}
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/10 blur-3xl rounded-full"
        />
      </section>
      <TrustedByC />
      <QouteAndGoToPrice />
      <CTA />
    </>
  );
}
