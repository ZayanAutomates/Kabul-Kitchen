'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const points = [
  {
    title: 'Premium Quality Materials',
    desc: 'We build with durable, high-grade materials and premium hardware that look stunning and last for years.',
    icon: <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2z" />,
  },
  {
    title: 'On-Time Project Delivery',
    desc: 'Your project is completed on schedule — we respect your timeline and your home.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </>
    ),
  },
  {
    title: 'Transparent Pricing, No Hidden Costs',
    desc: 'Clear, upfront quotes with no surprises. What we quote is what you pay.',
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    title: 'Free In-Home Estimate, We Come To You',
    desc: 'Book a no-obligation in-home estimate — we visit your space and measure everything for you.',
    icon: (
      <>
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-base py-24 md:py-32">
      {/* side glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Why Us" title="Why Edmonton Homeowners Choose Us" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-panel/60 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-panel"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all duration-300 group-hover:shadow-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  {p.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
