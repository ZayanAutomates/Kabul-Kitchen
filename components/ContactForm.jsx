'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mljrbora';

const projectTypes = [
  'Custom Kitchen',
  'Custom Closet',
  'Wardrobe',
  'Cabinet Installation',
  'Other',
];

const initial = {
  name: '',
  phone: '',
  email: '',
  city: '',
  projectType: '',
  visitDate: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Full Name': form.name,
          'Phone Number': form.phone,
          'Email Address': form.email,
          'City / Area': form.city,
          'Project Type': form.projectType,
          'Preferred Visit Date': form.visitDate,
          Message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initial);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const field =
    'w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold';
  const label = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60';

  return (
    <section id="contact" className="relative bg-base py-24 md:py-32">
      {/* glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-[130px]" />

      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Get Started"
          title="Book Your Free In-Home Estimate"
          subtitle="We come to you. No obligation, completely free."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-9"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>Full Name *</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                placeholder="Your full name" className={field}
              />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone Number *</label>
              <input
                id="phone" name="phone" type="tel" required
                value={form.phone} onChange={handleChange}
                placeholder="+1 (825) 000-0000" className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className={label}>Email Address *</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                placeholder="you@email.com" className={field}
              />
            </div>
            <div>
              <label htmlFor="city" className={label}>City / Area in Edmonton *</label>
              <input
                id="city" name="city" type="text" required
                value={form.city} onChange={handleChange}
                placeholder="e.g. Windermere, Sherwood Park" className={field}
              />
            </div>
            <div>
              <label htmlFor="projectType" className={label}>Project Type *</label>
              <select
                id="projectType" name="projectType" required
                value={form.projectType} onChange={handleChange}
                className={`${field} ${form.projectType ? '' : 'text-white/35'}`}
              >
                <option value="" disabled>Select a project type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-panel text-white">{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="visitDate" className={label}>Preferred Visit Date</label>
              <input
                id="visitDate" name="visitDate" type="date"
                value={form.visitDate} onChange={handleChange}
                className={`${field} [color-scheme:dark]`}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className={label}>Message (optional)</label>
            <textarea
              id="message" name="message" rows={4}
              value={form.message} onChange={handleChange}
              placeholder="Tell us about your project..."
              className={`${field} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group relative mt-7 w-full overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#111111] shadow-gold transition-all duration-300 hover:shadow-gold-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="relative z-10">
              {status === 'loading' ? 'Sending...' : 'Book My Free Estimate'}
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-light to-gold transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-center text-sm text-gold"
            >
              Thank you! Your request has been received. We&apos;ll contact you shortly to
              schedule your free in-home estimate.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300"
            >
              Something went wrong. Please try again, or call us directly at{' '}
              <a href="tel:+18257771028" className="font-semibold underline">+1-825-777-1028</a>.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
