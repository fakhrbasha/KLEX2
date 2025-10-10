'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

export const TextParallaxContenT = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <TextParallaxContent
        imgUrl="./market-research-info.jpg"
        subheading="Market Research and Planning"
        heading="Drive success with insights and strategy."
      >
        <ExampleContent
          title="Market Research and Planning"
          desc1="Make informed decisions with comprehensive market insights, competitive analysis, and strategic planning that position your brand for success."
          link="/services/market-research"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./Branding-info.jpg"
        subheading="Branding"
        heading="Build a standout brand that connects with your audience."
      >
        <ExampleContent
          title="Branding"
          desc1="Create a memorable brand identity that resonates with your audience and stands out in the marketplace. From logo design to brand guidelines, we craft cohesive brand experiences."
          link="/services/branding"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./development-info.jpg"
        subheading="Development"
        heading="Create powerful, scalable websites and apps that deliver results."
      >
        <ExampleContent
          title="Development"
          desc1="Build powerful, scalable digital solutions with cutting-edge technology. From websites to mobile apps, we create custom solutions that drive business growth."
          link="/services/development"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./social-media-info.jpg"
        subheading="Social Media Management"
        heading="Grow and engage your community with authentic connections."
      >
        <ExampleContent
          title="Social Media Management"
          desc1="Build and engage your community across all social platforms. From content creation to community management, we help you connect with your audience authentically."
          link="/services/social-media"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./performance.jpg"
        subheading="Performance Marketing"
        heading="Drive results with data-driven marketing focused on ROI and growth."
      >
        <ExampleContent
          title="Performance Marketing"
          desc1="Drive measurable results with data-driven marketing campaigns. From PPC to conversion optimization, we focus on ROI and sustainable growth."
          link="/services/performance-marketing"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./public-info.jpg"
        subheading="Public Relations"
        heading="Build and protect your brand with strategic PR that tells your story."
      >
        <ExampleContent
          title="Public Relations"
          desc1="Build and protect your reputation with strategic PR campaigns. From media relations to crisis management, we help you tell your story to the world."
          link="/services/public-relations"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./media-production.info.jpg"
        subheading="Media Production"
        heading="Create compelling visual stories that engage and convert."
      >
        <ExampleContent
          title="Media Production"
          desc1="Tell your story with professional video, photography, and multimedia content. From concept to final delivery, we create compelling visual content that engages and converts."
          link="/services/media-production"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./planning-info.jpg"
        subheading="Events Planning & Production"
        heading="Create unforgettable experiences with expert event planning."
      >
        <ExampleContent
          title="Events Planning & Production"
          desc1="Create memorable experiences with professional event planning and production. From intimate gatherings to large-scale conferences, we handle every detail."
          link="/services/events"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./Visuals-info.jpg"
        subheading="Visuals"
        heading="Create impactful visuals that capture attention and bring ideas to life."
      >
        <ExampleContent
          title="Visuals"
          desc1="Create stunning visual content that captures attention and communicates your message. From graphic design to illustration, we bring your ideas to life."
          link="/services/visuals"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./Media-Buying.jpg"
        subheading="Media Buying"
        heading="Maximize your reach with strategic media buying and smart ad placements."
      >
        <ExampleContent
          title="Media Buying"
          desc1="Maximize your advertising budget with strategic media buying. We negotiate the best rates and placements across traditional and digital channels."
          link="/services/media-buying"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="./printing-info.jpg"
        subheading="Printing & Internal Branding"
        heading="Bring your brand to life with cohesive printing and interior branding."
      >
        <ExampleContent
          title="Printing & Internal Branding"
          desc1="Bring your brand to life in physical spaces with professional printing and internal branding solutions. From business cards to office environments, we create cohesive brand experiences."
          link="/services/printing"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxProps) => {
  return (
    <section
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="relative"
    >
      <div className="relative font-bold  h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <div className="relative  z-10">{children}</div>
    </section>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl shadow-2xl"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-center"
    >
      <motion.p className="mb-3 text-lg md:text-2xl text-neutral-200 tracking-wide">
        {subheading}
      </motion.p>
      <motion.h2 className="max-w-3xl text-4xl font-extrabold md:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-md">
        {heading}
      </motion.h2>
    </motion.div>
  );
};

const ExampleContent = ({
  title,
  desc1,
  link,
}: {
  title: string;
  desc1: string;
  link: string;
}) => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 text-neutral-800 dark:text-neutral-200">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
    <p className="mb-10 text-lg md:text-2xl leading-relaxed opacity-90">
      {desc1}
    </p>
    <Link href={link}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-2xl bg-neutral-900 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-neutral-700 dark:bg-[#3be6c4] dark:text-black dark:hover:text-white dark:hover:bg-[#0b4554]"
      >
        Learn more <FiArrowUpRight />
      </motion.button>
    </Link>
  </div>
);
