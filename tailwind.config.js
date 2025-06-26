/** @type {import('tailwindcss').Config} */ module.exports = {
  darkMode: "class", // enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { raw: "(max-width: 639px)" },
        "max-sm-md": { raw: "(max-width: 573px)" },
        "max-md": { raw: "(max-width: 767px)" },
        "max-lg": { raw: "(max-width: 1023px)" },
        "max-xl": { raw: "(max-width: 1279px)" },
        "min-sm-md": { raw: "(min-width: 573px)" },
        "between-sm-md": { raw: "(min-width: 574px) and (max-width: 766px)" },
      },
    },
  },
  plugins: [],
};
