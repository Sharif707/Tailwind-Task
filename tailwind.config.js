/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'open-sans':[ "Open Sans", "sans-serif"],

    },
    
    extend: {
      maxWidth: {
        'custom': '50%',
      },
      colors: {
        'bg-custom': '#F7F7F5',
      }
      
    },
  },
  plugins: [],
}

