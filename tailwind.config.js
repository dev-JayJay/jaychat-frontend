/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      bgSidebar: {
        'custom-gradient': 'linear-gradient(57%, #11468F 3%, #11468F 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
