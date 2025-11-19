'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-300 overflow-hidden">
      {/* subtle animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container py-16"
      >
        {/* ====== TOP GRID ====== */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white tracking-wide">
              KLEX
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your trusted partner for comprehensive digital solutions and
              business growth.
            </p>
          </motion.div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Market Research',
                'Branding',
                'Development',
                'Social Media',
                'Performance Marketing',
                'Public Relations',
                'Media Production',
                'Events',
                'Visuals',
                'Media Buying',
                'Printing & Internal Branding',
                'Consultation',
              ].map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 + 4 wrapped together */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Company</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: 'About', href: '/about' },
                    { name: 'Our Projects', href: '/projects' },
                    { name: 'Careers', href: '/careers' },
                    { name: 'Contact Us', href: '/contact' },
                  ].map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Connect</h4>
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Facebook, label: 'Facebook' },
                  ].map(({ icon: Icon, label }, i) => (
                    <motion.li
                      key={label}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4 text-neutral-400 group-hover:text-white" />
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* KLEX logo centered below */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex justify-center"
            >
              <Image
                src="/KLEX.png"
                width={240}
                height={240}
                alt="KLEX Logo"
                className="opacity-90 hover:opacity-100 transition"
              />
            </motion.div>
          </div>
        </div>

        {/* ====== COPYRIGHT ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500"
        >
          <p>&copy; {new Date().getFullYear()} KLEX. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
