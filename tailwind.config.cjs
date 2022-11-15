/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a277ff",
        secondary: "#61ffca",
        tertiary: "#ffca85",
        quaternary: "#f694ff",
        quinary: "#82e2ff",
        senary: "#ff6767",
        selections: "#29263c",
        selectionsAlpha: "#3d375e7f",
        foregrounds: "#edecee",
        comments: "#6d6d6d",
        backgrounds: "#15141b",
      },
      fontFamily: {
        primary: ['Fira Code', 'ui-monospace'],
        secondary: ['Roboto', 'ui-sans-serif'],
      }
    }
  },
  plugins: []
};
