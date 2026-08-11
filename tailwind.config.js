/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#111111',
        panel: '#1a1a1a',
        gold: '#C9A84C',
        'gold-light': '#E3C877',
        'gold-dark': '#9c7f34',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 25px rgba(201, 168, 76, 0.35)',
        'gold-lg': '0 0 40px rgba(201, 168, 76, 0.45)',
      },
    },
  },
  plugins: [],
};
