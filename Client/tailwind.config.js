/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-text": "#ffcc00",
        "gray-background": "#2a323c",
      },
      fontFamily: {
        Almarai: ["Almarai", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
