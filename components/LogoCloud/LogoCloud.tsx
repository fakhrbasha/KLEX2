'use client';

import Image from 'next/image';
import { InfiniteSlider } from '../ui/infinite-slider';
import { ProgressiveBlur } from '../ui/progressive-blur';

export default function LogoCloud() {
  const logos = [
    '/Company/01.png',
    '/Company/02.png',
    '/Company/03.png',
    '/Company/04.png',
    '/Company/05.png',
    '/Company/06.png',
  ];

  return (
    <section className="relative bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">
            Trusted by leading brands
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-3">
            Powering <span className="text-primary">Top Performing Teams</span>
          </h3>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <InfiniteSlider speed={40} speedOnHover={20} gap={140}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-10"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={300}
                  height={140}
                  className="h-28 w-auto dark:invert opacity-80 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-24"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-24"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}
