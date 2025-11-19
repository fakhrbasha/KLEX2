import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface SubService {
  title: string;
  description: string;
  imageUrl: string;
}

interface SybServiceProps {
  subServices: SubService[];
}
export default function SybService({ subServices }: SybServiceProps) {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              rewrite ya fakhr hna
            </p>
          </div>

          <div className="space-y-12">
            {subServices.map((solution: any, index: any) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <Image
                      src={solution.imageUrl}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description2}
                    </p>

                    <div className="flex gap-4">
                      <Button className="bg-[#3be6c4]">
                        <Link href={'/contact'}>Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
