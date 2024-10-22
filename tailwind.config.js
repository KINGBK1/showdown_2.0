const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        primaryPink: "#F32283",
        secondaryPink: "#F30775",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} 

