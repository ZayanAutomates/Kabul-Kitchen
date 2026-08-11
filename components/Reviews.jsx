'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const reviews = [
  {
    name: 'Maiuddin Khidri',
    stars: 5,
    text: 'Kabul Custom Kitchens and Closets did an amazing job with my kitchen design—stylish, functional, and exactly what I wanted. The team was professional, friendly, and very detail-oriented. Their service was excellent from start to finish, making the whole process smooth and stress-free.',
  },
  {
    name: 'Chloris Fernandez',
    stars: 5,
    text: "We are so really impressed with the work. The quality is outstanding, and the price was very reasonable. They're honest, reliable, and clearly take pride in what they do. I got a quotation from 5 companies — I saved 5,000 to 10,000 dollars on the project. We highly recommend them.",
  },
  {
    name: 'Appolo Appolo',
    stars: 5,
    text: 'Very professional and proficient. Always replies to calls. Great customer service. Kitchen cabinets, vanity and counter top were done on schedule. Good quality product. Definitely would recommend Kabul Custom Kitchen.',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${i < count ? 'fill-gold text-gold' : 'fill-white/10 text-white/10'}`}
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from Edmonton homeowners who trusted us with their space."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="relative flex flex-col rounded-2xl border border-white/5 bg-panel p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-gold"
            >
              {/* quote mark */}
              <span className="font-heading absolute right-6 top-4 select-none text-6xl leading-none text-gold/15">
                &rdquo;
              </span>

              <Stars count={r.stars} />

              <blockquote className="mt-5 grow text-sm leading-relaxed text-white/75">
                {r.text}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-lg font-bold text-gold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-gold">Verified Client</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
