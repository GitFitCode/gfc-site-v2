/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mb-sm': '320px',
        'mb-md': '375px',
        'mb-lg': '425px',
        'tablet': '768px',
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
        '4k': '2560px',
      },
      colors: {
        'gfc-accent': '#00C9CD',
        'gfc-dark': '#231E21',
        'gfc-darker': '#181918',
      },
      backgroundColor: {
        'gfc-accent': '#00C9CD',
        'gfc-dark': '#231E21',
        'gfc-darker': '#181918',
        'gfc-teal': 'rgba(0,200,204,1)) !important',
      },
      height: {
        'h-21': '21.5rem !important',
        'h-screen': '100vh !important'
      },
      minWidth: {
        'sm': '220px'
      }
    },
  },
  plugins: [],
}