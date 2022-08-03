/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile1': {'raw': '(max-height: 1234px)'},
        // => @media (max-height: 1234px) { ... }
      }
    },
  },
  plugins: [],
}
