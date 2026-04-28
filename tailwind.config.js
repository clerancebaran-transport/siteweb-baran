/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2742',
        'navy-deep': '#0A1E36',
        'navy-light': '#1a3d5c',
        steel: '#2E5B7A',
        iceblue: '#DCEAF4',
        offwhite: '#F8FAFC',
        anthracite: '#2B3137',
        gold: '#C5A46D',
        'gold-light': '#e8c98e',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.25em',
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
