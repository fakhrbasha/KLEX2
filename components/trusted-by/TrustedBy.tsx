import Image from 'next/image';
import React from 'react';

export default function TrustedByC() {
  return (
    <div>
      <section className="border-b bg-muted/30 py-12">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground tracking-widest">
            TRUSTED BY LEADING TEAMS
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { name: 'FaceBook', logo: '/Facebook-partener.png' },
              { name: 'TechStart', logo: '/partener-2.png' },
              { name: 'Innovate', logo: '/partener3.png' },
              { name: 'DesignHub', logo: '/partener4.png' },
            ].map(({ name, logo }) => (
              <div key={name} className="flex items-center justify-center">
                <Image
                  width={160}
                  height={160}
                  src={logo}
                  alt={name}
                  className="h-[200px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
