'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import KlexLoader from '@/components/LoaderHero';
import HomePage from '@/components/HomePage/HomePage';

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <KlexLoader onFinish={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HomePage />
        </motion.div>
      )}
    </>
  );
}
