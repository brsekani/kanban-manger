/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans"],
      },
      colors: {
        "board-background-blue": "#20212C",
        "nav-background-blue": "#2B2C37",
      },
    },
  },
  plugins: [],
};
