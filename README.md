# Kabul Custom Kitchens & Closets — Website

Premium dark-luxury marketing site for **Kabul Custom Kitchens and Closets**, Edmonton, AB.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Design

- Background `#111111`, gold accent `#C9A84C`, white text
- Headings: Playfair Display · Body: Inter (via `next/font`, self-hosted, no external requests)
- Scroll-reveal animations, floating gold particles in the hero, hover lift/glow, image zoom, lightbox gallery
- Fully mobile responsive

## Run locally

Install dependencies (first time only):

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js        Fonts, metadata, global styles
  page.js          Assembles all sections in order
  globals.css      Tailwind + theme helpers
components/
  Navbar.jsx       Fixed nav, transparent → solid on scroll, mobile menu
  Hero.jsx         Headline + particles + CTAs
  Particles.jsx    Animated floating gold particles
  Services.jsx     "What We Build" — 4 cards
  Gallery.jsx      "Our Previous Work" — masonry + lightbox
  WhyChooseUs.jsx  4 reasons
  Reviews.jsx      3 five-star reviews
  ContactForm.jsx  Estimate form → Formspree
  Footer.jsx       Contact info + copyright
  Reveal.jsx / SectionHeading.jsx  Shared animation helpers
public/images/     project-1.jpeg … project-10.jpeg (portfolio photos)
```

## Contact form

The form POSTs JSON to Formspree at `https://formspree.io/f/mljrbora`
(configured in `components/ContactForm.jsx`). Submissions are emailed to the
address registered on that Formspree endpoint.

## Notes

- All 10 portfolio photos live in `public/images/` and are optimized automatically by `next/image`.
- Phone: **+1-825-777-1028** · Edmonton, AB, Canada
