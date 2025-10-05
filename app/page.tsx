'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Target,
  Sparkles,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { TextParallaxContentExample } from './ProjectsTest/ProjectsTest';
import Image from 'next/image';

export default function HomePage() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b py-24 md:py-32 lg:py-40">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Large floating gradient orbs */}
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <div className="container">
          <motion.div
            className="mx-auto max-w-5xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                  className="inline-block"
                >
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                </motion.div>
                Trusted by 10,000+ teams worldwide
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Project management that{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              >
                actually works
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              KLEX helps teams collaborate seamlessly, track progress
              effortlessly, and deliver projects on time. Stop juggling tools
              and start getting things done.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="h-12 px-8 text-base">
                  Get Started Free
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-2 inline-block"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base bg-transparent"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm text-muted-foreground"
            >
              No credit card required • Free 14-day trial • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground tracking-widest">
            TRUSTED BY LEADING TEAMS
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { name: 'Acme Corp', logo: '/Facebook-partener.png' },
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

      <TextParallaxContentExample />
      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to manage projects
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Powerful features designed to help your team collaborate better
              and ship faster.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Team Collaboration
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Work together in real-time with comments, mentions, and file
                  sharing. Keep everyone on the same page.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Lightning Fast</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Built for speed. Navigate projects, update tasks, and find
                  information instantly without any lag.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Powerful Analytics
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Track progress with detailed reports and insights. Make
                  data-driven decisions to improve productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Time Tracking</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Monitor time spent on tasks and projects. Stay on budget and
                  optimize team efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Enterprise Security
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Bank-level encryption, SSO, and advanced permissions. Your
                  data is always safe and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Goal Setting</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Set clear objectives and track progress toward goals. Align
                  your team around what matters most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-y bg-muted/30 py-24 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Choose the plan that's right for your team. All plans include a
              14-day free trial.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <Card className="relative flex flex-col border-2">
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Starter</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for small teams
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$12</span>
                    <span className="ml-2 text-muted-foreground">
                      /user/month
                    </span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Up to 10 team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Unlimited projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative flex flex-col border-2 border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary px-4 py-1 text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Professional</h3>
                  <p className="text-sm text-muted-foreground">
                    For growing teams
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$24</span>
                    <span className="ml-2 text-muted-foreground">
                      /user/month
                    </span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Unlimited team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Time tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative flex flex-col border-2">
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    For large organizations
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">SSO & advanced security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Custom onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">24/7 phone support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl border-2 bg-card p-12 text-center shadow-lg md:p-16">
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Ready to transform how your team works?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Join thousands of teams already using KLEX to collaborate better,
              ship faster, and achieve more together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="h-12 px-8 text-base">
                  Start Free Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-2 inline-block"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
