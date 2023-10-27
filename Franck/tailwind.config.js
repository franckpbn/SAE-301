/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter","sans-serif"],
      },
      backgroundImage:{
        'baniere': "url('../asset/baniere.png')",
        'backconnecter': "url('../asset/connecter.png')",
      }
    },
  },
  plugins: [],
}

