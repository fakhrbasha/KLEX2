'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

type KlexLoaderProps = {
  onFinish: () => void;
};

export default function KlexLoader({ onFinish }: KlexLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const letters = ['K', 'L', 'E', 'X'];
  const phrase = ['The', 'Best', 'Choice'];

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center dark:bg-black dark:text-white bg-white text-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1, delay: 3, ease: 'easeInOut' }}
    >
      {/* KLEX */}
      <div className="flex space-x-4 mb-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-7xl font-extrabold tracking-widest"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.4,
              ease: 'easeOut',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* The Best Choice */}
      <motion.div className="flex space-x-2">
        {phrase.map((word, index) => (
          <motion.span
            key={index}
            className="text-lg font-medium uppercase tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.8 + index * 0.3,
              ease: 'easeOut',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
