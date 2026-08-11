'use client';

import Reveal from './Reveal';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-[#0d0d0d] pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <Reveal>
            <div>
              <h3 className="font-heading text-xl font-bold text-gold">
                Kabul Custom Kitchens &amp; Closets
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                Premium custom kitchens, closets, wardrobes and cabinetry, crafted
                with care for homeowners across Edmonton, AB. A local, family-run
                business you can trust.
              </p>
            </div>
          </Reveal>

          {/* Links */}
          <Reveal i={1}>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Explore
              </h4>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/55 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal i={2}>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Get In Touch
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="tel:+18257771028"
                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 text-gold">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
                    </svg>
                    +1-825-777-1028
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 text-gold">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Edmonton, AB, Canada
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#111111] shadow-gold transition-all duration-300 hover:bg-gold-light hover:shadow-gold-lg"
              >
                Book Free Estimate
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-white/10 py-7 text-center">
          <p className="text-xs text-white/45">
            Copyright &copy; 2025 Kabul Custom Kitchens and Closets. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
