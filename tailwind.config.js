const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: "#F32283",
        secondaryPink: "#F30775",
      },
      screens: {
        md: "960px",
      },
      fontSize: {
        md: "0.875rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
