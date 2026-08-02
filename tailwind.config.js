/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        panel: '#12161F',
        gold: {
          DEFAULT: '#C9A15C',
          light: '#E4C989',
          dark: '#8A6D33',
        },
        crimson: '#8A2A22',
        bone: '#F3EFE4',
        slate: {
          soft: '#8B92A5',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'nest-radial': 'radial-gradient(ellipse at top, rgba(201,161,92,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
};
