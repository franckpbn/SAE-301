/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'border-grey': '#c3c3c3',
        'white': '#ffffff',
        'grey': '#2D2D2D', 

        'yellow':'#ffcf00',
        'yellow2':'#FFEFAA',
        'red' : '#d01013',
        'pink': '#FE00B7',
        'bleuf': '#4200FE',
        'bleuc': '#00DFFE',
        'vert': '#1ED800',
        'orange': '#FE8900',
        
      },
      backgroundImage:{
        'carre': "url('../asset/Component.png')",
      }, 
      textColor:{
        'blanc': '#ffffff',
      }

    },
  },
  plugins: [],
}

