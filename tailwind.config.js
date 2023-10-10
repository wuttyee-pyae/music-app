/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

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
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",




  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      
  },

  plugins: [require("flowbite/plugin"),
  require('@tailwindcss/forms'),
],

darkMode: "class",
plugins: [nextui()],
  
};
