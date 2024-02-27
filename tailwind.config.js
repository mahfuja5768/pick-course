/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#0d2129",
        secondary: "#0f5257",
      },
    },
  },
  plugins: [],
};
