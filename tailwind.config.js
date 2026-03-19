module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0B0B0B',
        'luxury-gold': '#D4AF37',
        'luxury-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
};