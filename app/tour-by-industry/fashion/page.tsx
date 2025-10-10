'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TrustedByC from '@/components/trusted-by/TrustedBy';
import QouteAndGoToPrice from '@/components/QouteAndGoToPrice/QouteAndGoToPrice';
import CTA from '@/components/CTA/CTA';

const industries = [
  {
    title: 'Le Voile',
    image: '/industry/f1.jpg',
    description:
      "Meet Le Voile, our esteemed client in the fashion industry. Through expert website management, strategic social media strategies, dynamic media production, and precise media buying, we've enhanced Le Voile's digital presence. Our partnership has empowered Le Voile to captivate fashion enthusiasts with a compelling online experience.",
  },
  {
    title: 'Velda',
    image: '/industry/f2.jpg',
    description:
      'Velda is a fashion and scarves brand that stands out for its elegant designs and high-quality products. The brand combines style and sophistication, offering a range of fashion items that cater to modern tastes and trends.',
  },
  {
    title: 'DND Design',
    image: '/industry/f3.jpg',
    description:
      'DND is a fashion brand led by sisters Dina and Rasha, known for bold designs and high-quality fabrics. With a focus on originality and craftsmanship, DND creates unique pieces that showcase individuality and refined detail.',
  },
  {
    title: 'Marwa Aly',
    image: '/industry/f4.jpg',
    description:
      'Marwa Aly is a fashion brand celebrating femininity through stylish and elegant collections for women. Known for its refined designs and timeless appeal, the brand offers pieces that empower women to express their unique style with confidence.',
  },
  {
    title: 'Slip&Go',
    image: '/industry/f5.jpg',
    description:
      'Slip&Go is a fashion-forward brand known for its stylish and comfortable slippers. Blending trendy designs with everyday comfort, the brand offers versatile pieces that bring a fun, relaxed vibe to any look.',
  },
  {
    title: 'Fashion Avenue',
    image: '/industry/f6.jpg',
    description:
      'Fashion Avenue, founded by Mai Mostafa, is a distinctive fashion brand offering exclusive designs by Mai herself alongside carefully curated collections from diverse brands and designers.',
  },
  {
    title: 'LonganZy',
    image: '/industry/f7.jpg',
    description:
      'LonganZy is a women’s fashion brand full of boldness, creativity, and character. Celebrating individuality, LonganZy designs versatile collections that combine style, comfort, and a fearless spirit.',
  },
  {
    title: 'Mom’s Care',
    image: '/industry/f8.jpg',
    description:
      "Introducing Mom's Care, a prominent fashion brand based in Kuwait. Our comprehensive services revitalized their digital strategy, encompassing website development, social media management, media production, and media buying.",
  },
  {
    title: 'Glow Modest',
    image: '/industry/f9.jpg',
    description:
      "Introducing Glow Modest, a fashion brand whose online presence has been completely transformed by our comprehensive services. We expanded Glow Modest's impact and exposure within the fashion sector.",
  },
  {
    title: 'Turath',
    image: '/industry/f10.jpg',
    description:
      'Managing media buying, social media presence, and media production for fashion brand Turath has enhanced their engagement and exposure, showcasing their elegant designs and commitment to quality.',
  },
  {
    title: 'Tie Shop',
    image: '/industry/f11.jpg',
    description:
      'Introducing Tie Shop, a leading name in fashion. We drove business development, optimized indoor sales, and executed impactful online and offline marketing strategies for their brand.',
  },
  {
    title: 'Jessy',
    image: '/industry/f12.jpg',
    description:
      'Introducing Jessy Scarfs, where elegance and grace intertwine. We handled social media, media production, media buying, and website design to ensure a strong digital presence and impactful marketing.',
  },
  {
    title: 'Hashbag',
    image: '/industry/f13.jpg',
    description:
      'In partnership with Hashbag, we transformed their digital strategy through qualified social media management and strategic media buying to elevate their fashion identity.',
  },
  {
    title: 'Suslu',
    image: '/industry/f14.jpg',
    description:
      "Presenting Suslu, a fashion brand in Egypt. From crafting a visually compelling website to engaging social media content, we enhanced Suslu's online presence and connected them with local fashion lovers.",
  },
  {
    title: 'Outfit',
    image: '/industry/f15.jpg',
    description:
      'Outfit collaborates with us for social media management, website development, and media production. We highlight their latest collections through strategic campaigns and stunning visuals.',
  },
  {
    title: 'Spice Girls',
    image: '/industry/f16.jpg',
    description:
      'We collaborated with Spice Girls using media production, web development, social media management, and media buying to reinvent their digital role in the fashion industry.',
  },
  {
    title: 'Nada Hassaan',
    image: '/industry/f17.jpg',
    description:
      'Introducing Nada Hassaan. We crafted her full online presence — from media buying tactics to powerful website development and reliable management systems.',
  },
  {
    title: 'Eldo',
    image: '/industry/f18.jpg',
    description:
      'Eldo recognized the power of digital platforms in fashion. We helped them enhance their image an/industry/.jpgd broaden their reach through expert social media management and advertising.',
  },
  {
    title: 'Still Rise',
    image: '/industry/f19.jpg',
    description:
      'Introducing Still Rise, where fashion meets digital expertise. We specialize in social media, website management, media production, and media buying to elevate their visibility.',
  },
  {
    title: 'Pistage',
    image: '/industry/f20.jpg',
    description:
      'Step into Pistage, where elegance meets innovation across Egypt and the UAE. We redefined their digital presence with social media, website development, media production, and targeted media buying.',
  },
  {
    title: 'Ashya',
    image: '/industry/f21.jpg',
    description:
      'Meet Ashya, where we designed a sophisticated website and optimized systems to enhance their operations and digital presence in the fashion landscape.',
  },
  {
    title: 'Alwisam',
    image: '/industry/f22.jpg',
    description:
      'Collaborating with Alwisam in the USA, we optimized social media presence and executed strategic media buying campaigns to boost visibility and engagement.',
  },
  {
    title: 'Bezravoga',
    image: '/industry/f23.jpg',
    description:
      'Introducing Bezravoga, where our expertise in web development, social media management, and media buying has elevated their digital narrative within fashion.',
  },
  {
    title: 'Zap Store',
    image: '/industry/f24.jpg',
    description:
      'Partnering with Zap Store, we elevated their brand through creative social media management, media production, and strategic media buying.',
  },
  {
    title: 'SVG',
    image: '/industry/f25.jpg',
    description:
      'SVG, where fashion meets digital innovation. Through social media management and media buying, we’ve enhanced their visibility and positioned them as trendsetters.',
  },
];

export default function FashionPage() {
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
            See How Klex Works for Your Industry
          </motion.h1>

          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={industry.title}
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
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={industry.image}
                    alt={industry.title}
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
