import colors from 'tailwindcss/colors';
import { nextui } from'@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: colors.neutral,
        font: colors.neutral,
        primary: colors.orange,
      },

      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
