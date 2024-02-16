/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        text: ['Poppins', 'sans-serif'],
        heading: ['Playfair Display', "serif"],
      },
    },
  },
  plugins: [],
};

