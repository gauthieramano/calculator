/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        thin: { min: "440px", max: "639px" },
        mid: { raw: "(min-height: 700px)" },
        tall: { raw: "(min-height: 800px)" },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};
