'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'BASIC',
      price: '30K EGP',
      period: 'per month',
      head: 'Marketplace Sales',
      features: [
        'Project Manager',
        'Content Creation',
        'Social Media Management',
        'Video Editing',
        'Web Admin',
        '2 Moderators',
        '3% for Media Buying (Upon Request)',
      ],
      button: 'Get Started',
      highlight: false,
    },
    {
      name: 'PREMIUM',
      price: '10% of Total Sales',
      head: 'Marketplace Sales',

      features: [
        'Project Manager',
        'Content Creation',
        'Social Media Management',
        'Video Editing',
        'Web Admin',
        '2 Moderators',
        'Media Buying',
      ],
      button: 'Start Now',
      highlight: true,
    },
    {
      name: 'MEDIA BUYING',
      price: '5% of Total Sales',
      head: 'Marketplace Sales',

      features: ['Media Buying Only'],
      button: 'Contact Us',
      highlight: false,
    },
  ];

  return (
    <section className="border-y bg-gradient-to-b from-muted/40 to-muted/20 py-24 md:py-32 relative overflow-hidden">
      {/* Animated background glow */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(11,69,84,0.25),transparent_70%)]"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-rgba(11,69,84,0.25) bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your business goals. Flexible and
            performance-driven.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                className={`relative flex flex-col border-2 ${
                  plan.highlight
                    ? 'border-primary shadow-xl shadow-primary/20'
                    : 'border-muted-foreground/20'
                } rounded-2xl backdrop-blur-md transition-all`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-sm text-primary-foreground font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex justify-center items-baseline gap-2 mt-3">
                      <span className="text-4xl font-extrabold">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="pt-5">{plan.head}</p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlight
                        ? ''
                        : 'bg-transparent border border-primary text-primary'
                    }`}
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    {plan.button}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
