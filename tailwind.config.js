/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        foreground: colors.slate,
        background: colors.slate,
        foregroundAccent: colors.red,
        backgroundAccent: colors.amber,
      },
    },
  },
  plugins: [],
};
