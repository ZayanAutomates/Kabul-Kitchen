'use client';

import { motion } from 'framer-motion';
import Particles from './Particles';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-base"
    >
      {/* Ambient gold glows */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-gold/5 blur-[130px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Particles count={28} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold"
        >
          Edmonton, AB • Custom Craftsmanship
        </motion.p>

        <motion.h1
          variants={item}
          className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Your Space Into{' '}
          <span className="text-gradient-gold">Something Extraordinary</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl"
        >
          Premium Custom Kitchens &amp; Closets in Edmonton, AB
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative w-full overflow-hidden rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold text-[#111111] shadow-gold transition-all duration-300 hover:shadow-gold-lg sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-light to-gold transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">Book Your Free In-Home Estimate</span>
          </a>
          <a
            href="#work"
            className="w-full rounded-full border border-gold px-8 py-4 text-center text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/10 hover:shadow-gold sm:w-auto"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold/40 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
