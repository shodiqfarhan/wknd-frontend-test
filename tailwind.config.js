/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        pink: "#eebece",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/img/BG_1.png')",
      },
    },
  },
  plugins: [],
};
