/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "images/**/*.{png,jpg,jpeg,gif,webp,avif,svg}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        'gfc-primary': '#048c8f',
        'gfc-secondary': '#048c8f',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 8px)`,
      //   sm: "calc(var(--radius) - 14px)",
      // },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,  
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}