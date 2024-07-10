/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      bgSidebar: {
        'custom-gradient': 'linear-gradient(57%, #11468F 3%, #11468F 100%)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #3b82f6, #3e81f1, #4180eb, #447fe6, #477ee1, #487ddc, #4a7cd8, #4b7bd3, #4c7ace, #4d79c8, #4e77c3, #4f76be)',
      },
      letterSpacing: {
        'extra-wide': '0.09rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
