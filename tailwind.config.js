/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        200: "#4ea8de",
        100: "#1e6f9f",
      },
      purple: {
        200: "#5e60ce",
        100: "#8284fa",
      },
      black: {
        400: "#0d0d0d",
        300: "#1a1a1a",
        200: "#262626",
        100: "#333",
      },
      gray: {
        300: "#808080",
        200: "#d9d9d9",
        100: "#f2f2f2",
      },
      danger: "#e25858",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
