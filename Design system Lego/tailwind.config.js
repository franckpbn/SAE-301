/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff',
        'black': '#000000',
        'grey': '#2D2D2D',
        'grey-border': '#AFAFAF',

        'yellow': '#FFCF00',
        'yellow-600': '#D4AC00',

        'red': '#D8383A',
        'red-500': '#D01013',

        'blue': '#006DB7',
        'blue-600': '#005B98',
      },
      backgroundImage: {
        'background': "url('../asset/background.png')",
      }
    },
  },
  plugins: [],
}

