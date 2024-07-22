/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        simpleAnimation: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
      },
      animation: {
        "mainText-animation": "simpleAnimation 0.5s linear ",
      },
      colors: {
        mainColor: "#2960f7",
      },
    },
  },
  plugins: [],
};
