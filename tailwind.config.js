/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "images/**/*.{png,jpg,jpeg,gif,webp,avif,svg}",
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
        "mb-sm": "320px",
        "mb-md": "375px",
        "mb-lg": "425px",
        tablet: "768px",
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
        "4k": "2560px",
      },
      colors: {
        "gfc-accent": "#3cb5b8",
        "gfc-dark": "#231E21",
        "gfc-darker": "#181918",
        "gfc-light": "#E6F7F8", // new light color
        "gfc-primary-100": "rgba(0, 201, 205, 0.2)",
        "gfc-primary": "#048c8f",
        "gfc-secondary": "#048c8f",
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
      animation: {
<<<<<<< HEAD
        "scroll": "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 3s linear infinite", // slower spin
        "bounce-slow": "bounce 2s infinite", // slower bounce
        "bg-shine": "bg-shine 2.1s linear infinite",
=======
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 3s linear infinite', // slower spin
        'bounce-slow': 'bounce 2s infinite', // slower bounce
        "bg-shine": "bg-shine 2.1s linear infinite"
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
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
        "bg-shine": {
          from: {
<<<<<<< HEAD
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "scroll": {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
=======
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
      },
      backgroundColor: {
<<<<<<< HEAD
<<<<<<< HEAD
        "gfc-accent": "#00C9CD",
=======
        "gfc-accent": "#3cb5b8",
>>>>>>> 8ce7ed9 (fix: HeroSection ui changes)
        "gfc-dark": "#231E21",
        "gfc-darker": "#181918",
        "gfc-teal": "rgba(0,200,204,1)",
        "gfc-primary-100": "rgba(0, 201, 205, 0.2)",
        "gfc-primary": "#00C9CD",
=======
        'gfc-accent': '#00C9CD',
        'gfc-dark': '#231E21',
        'gfc-darker': '#181918',
        'gfc-teal': 'rgba(0,200,204,1)',
        'gfc-primary-100': 'rgba(0, 201, 205, 0.2)',
        'gfc-primary': '#00C9CD',
>>>>>>> f1d5d1b (fix: minor nav code fixes)
      },
      height: {
        21: "21.5rem",
        "screen-90": "90vh", // for near full-screen sections
      },
      minWidth: {
        sm: "220px",
        md: "300px", // extended min-width options
      },
      spacing: {
        18: "4.5rem", // custom spacing units
        22: "5.5rem",
        30: "7.5rem",
        36: "9rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // custom font family
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "4xl": "3rem",
      },
      boxShadow: {
<<<<<<< HEAD
        soft: "0 2px 8px rgba(0, 0, 0, 0.15)", // custom soft shadow
        hard: "0 4px 16px rgba(0, 0, 0, 0.2)", // for strong shadow
=======
        'soft': '0 2px 8px rgba(0, 0, 0, 0.15)', // custom soft shadow
        'hard': '0 4px 16px rgba(0, 0, 0, 0.2)', // for strong shadow
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

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
