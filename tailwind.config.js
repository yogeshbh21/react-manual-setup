/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        smackdown: ["Smackdown2016"],
      },
    },
  },
  plugins: [],
};
