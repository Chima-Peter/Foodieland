// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   fontFamily: {
      'logo': ['Lobster'],
      'main': ['Raleway']
   },
    extend: {},
  },
  plugins: [],
}
