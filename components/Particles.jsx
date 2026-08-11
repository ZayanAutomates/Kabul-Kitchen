'use client';

import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Deterministic pseudo-random so server and client markup match (no hydration mismatch)
function seeded(i) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function Particles({ count = 26 }) {
  // Render only after mount so randomized positions never cause a
  // server/client hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const r = (n) => Math.round(n * 1000) / 1000;
        return {
          id: i,
          left: r(seeded(i * 2) * 100),
          top: r(seeded(i * 3) * 100),
          size: r(2 + seeded(i) * 6),
          duration: r(6 + seeded(i * 4) * 10),
          delay: r(seeded(i * 5) * 6),
          drift: r((seeded(i * 6) - 0.5) * 60),
          opacity: r(0.15 + seeded(i * 7) * 0.5),
        };
      }),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px rgba(201,168,76,0.7)',
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, d.opacity, d.opacity, 0],
            y: [-10, -90],
            x: [0, d.drift],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
