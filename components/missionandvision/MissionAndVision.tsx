'use client';

import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="relative py-24 bg-muted/30 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Empowering teams with tools that simplify collaboration and inspire
            progress.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-background p-10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="mb-4 text-2xl font-semibold flex items-center gap-2">
              Our Mission
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed relative z-10">
              To empower teams worldwide with intuitive project management tools
              that remove complexity and foster collaboration. Great software
              should let you focus on what matters most—delivering exceptional
              work.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-primary/10 p-10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="mb-4 text-2xl font-semibold flex items-center gap-2">
              Our Vision
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed relative z-10">
              To become the most trusted project management platform for all
              teams, recognized for our simplicity, reliability, and dedication
              to helping people achieve their goals effortlessly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient line */}
    </section>
  );
}
