'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'By Nourhan Gado',
    img: '/StorySuccess/1.jpg',
    link: '',
    desc: `From fabric to feeling; Arena helped Nourhan Gado turn her fashion vision into storytelling art. Through emotional campaigns, social media, media production, and unforgettable event strategies, we built a brand that speaks to the heart.`,
  },
  {
    title: 'Tie Shop',
    img: '/StorySuccess/2.jpg',
    link: '',

    desc: `Embark on Tie Shop's transformative journey, where we revitalized both their online presence and physical stores, resulting in an impressive 150% increase in sales.`,
  },
  {
    title: 'DND Design',
    img: '/StorySuccess/3.jpg',
    link: '',

    desc: `With Arena, DND’s bold spirit came to life online. From standout campaigns to engaging content and energetic bazaar activations, we shaped a brand that’s modern, fearless, and proudly Egyptian.`,
  },
  {
    title: 'El-Anan Tourism',
    img: '/StorySuccess/4.jpg',
    link: '',

    desc: `Explore the journey of crafting a robust online presence with El-Anan Tourism to expand its reach to the target audience more quickly and easily.`,
  },
  {
    title: 'Best Co',
    img: '/StorySuccess/5.jpg',
    link: '',

    desc: `From A to Z, where we began the journey with Best Express and helped them create a strong visual identity and manage successful social media platforms!`,
  },
  {
    title: 'Bsohula',
    img: '/StorySuccess/6.jpg',
    link: '',

    desc: `From research to launch, Arena helped build Bsohula from the ground up — a smart, all-in-one app that simplifies daily life in Sadat City. Through tech, strategy, and targeted campaigns, we turned local needs into digital solutions.`,
  },
];

export default function AchievementsCard() {
  return (
    <section className="bg-neutral-200 dark:bg-neutral-950 dark:text-white py-20 px-6">
      <div className="flex items-center justify-between mb-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight">
          Our Success Stories
        </h2>
        <Link href={'/projects'}>
          <Button className="flex items-center gap-2 dark:text-neutral-950 dark:bg-[#3be6c4] bg-[#0b4554] text-white hover:bg-neutral-200 transition">
            See All
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl dark:bg-neutral-900 shadow-lg border dark:border-neutral-800 dark:hover:border-neutral-600 transition flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-3 dark:group-hover:text-white transition">
                {project.title}
              </h3>
              <p className="dark:text-neutral-400 text-black text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Button fixed at bottom */}
              <div className="mt-auto pt-4">
                <Link href={project.link}>
                  <Button
                    variant="outline"
                    className="group/button w-full dark:text-[#3be6c4] text-[#0b4554] border-[#0b4554] hover:bg-white hover:text-neutral-950 transition"
                  >
                    See More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
