'use client';

import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal i={1}>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal i={2}>
        <div className={`mt-5 gold-divider ${center ? 'mx-auto' : ''}`} />
      </Reveal>
      {subtitle && (
        <Reveal i={3}>
          <p className="mt-5 text-base text-white/60 sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
