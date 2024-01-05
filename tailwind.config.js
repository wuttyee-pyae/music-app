/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  important: true,
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",


    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    

     // single component styles
     "./node_modules/@nextui-org/theme/dist/components/button.js", 
     // or you can use a glob pattern (multiple component styles)
     './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

     "./index.html",
     "./*.{js,ts,jsx,tsx}",
     "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        default:'#3f3f46',
        primary:'#006FEE',
        secondary:'#9353d3',
        success:'#17c964',
        warning: '#f5a524',
        danger:'#f31260',

        'red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },

      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
      
  },

  plugins: [require("flowbite/plugin"),
  require('@tailwindcss/forms'),
],

darkMode: "class",
plugins: [nextui()],
};
