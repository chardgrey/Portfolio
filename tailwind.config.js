/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incognito: ['Silkscreen', 'sans-serif'],
      },
      colors:{
        'lightgr3y': '#062840',
        'gr3y': '#031C30',
        'darkgr3y': '#011320',
        'blu3': '#78B7D0',
        'gr33n': '#227B94',
        'bg': '#031c30',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
};
