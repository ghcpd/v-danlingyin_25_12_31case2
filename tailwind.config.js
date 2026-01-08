/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a5cd7',
          teal: '#0ea5e9',
          charcoal: '#0f172a',
          sand: '#f1f5f9',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
};
