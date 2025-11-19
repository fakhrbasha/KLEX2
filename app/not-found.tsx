'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-muted/30 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="p-4 bg-primary/10 rounded-full"
          >
            <Frown className="w-14 h-14 text-primary" />
          </motion.div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-foreground">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button size="lg" className="px-8">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
