/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#ededed",
        bgColor: "#081b29",
        secondBgColor: "#112e42",
        mainColor: "#00abf0",
      },
    },
  },
  plugins: [],
};
