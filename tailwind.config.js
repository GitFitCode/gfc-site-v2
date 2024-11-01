/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}"
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
        'gfc-light': '#E6F7F8', // new light color
        'gfc-primary-100': 'rgba(0, 201, 205, 0.2)',
        'gfc-primary': '#00C9CD',
      },
      backgroundColor: {
        'gfc-accent': '#00C9CD',
        'gfc-dark': '#231E21',
        'gfc-darker': '#181918',
        'gfc-teal': 'rgba(0,200,204,1) !important',
        'gfc-primary-100': 'rgba(0, 201, 205, 0.2)',
        'gfc-primary': '#00C9CD',
      },
      height: {
        '21': '21.5rem',
        'screen-90': '90vh', // for near full-screen sections
      },
      minWidth: {
        'sm': '220px',
        'md': '300px', // extended min-width options
      },
      spacing: {
        '18': '4.5rem', // custom spacing units
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // custom font family
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '4xl': '3rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.15)', // custom soft shadow
        'hard': '0 4px 16px rgba(0, 0, 0, 0.2)', // for strong shadow
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // slower spin
        'bounce-slow': 'bounce 2s infinite', // slower bounce
      },
    },
  },
  plugins: [],
}