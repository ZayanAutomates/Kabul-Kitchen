'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const services = [
  {
    title: 'Custom Kitchen Design & Renovation',
    desc: 'Bespoke kitchens designed around how you live, from layout and cabinetry to countertops and finishes.',
    icon: (
      <path d="M3 21V9l9-6 9 6v12h-6v-7H9v7H3z" />
    ),
  },
  {
    title: 'Custom Closets & Wardrobes',
    desc: 'Tailored closets, wardrobes and almari designs that maximize every inch with elegant organization.',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="10" y1="11" x2="10" y2="13" />
        <line x1="14" y1="11" x2="14" y2="13" />
      </>
    ),
  },
  {
    title: 'Cabinet Installation',
    desc: 'Precise, professional cabinet installation with flawless alignment, soft-close hardware and lasting quality.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="10" y1="8" x2="10" y2="9" />
        <line x1="14" y1="8" x2="14" y2="9" />
        <line x1="10" y1="15" x2="10" y2="16" />
        <line x1="14" y1="15" x2="14" y2="16" />
      </>
    ),
  },
  {
    title: 'Full Kitchen Remodeling',
    desc: 'Complete kitchen transformations handled end-to-end: demolition, build and finishing, on time.',
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-base py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Services" title="What We Build" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-panel p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-gold"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-[#111111]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  {s.icon}
                </svg>
              </div>

              <h3 className="font-heading text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>

              <div className="mt-6 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
