/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#1c1c1c",
          200: "#252525",
          300: "#f9f9f9",
          400: "#24d6aa",
        },
      },
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [],
};
