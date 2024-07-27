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
        secondaryColor: "#3760d1",
        hoverBtn: "#0511f2",
        aboutSec: "#1f1d36",
        educationSec: "#191919",
        darkFont: "#C4C4C4",
        skillsSec: "#3a3959",
        darkBorder: "#1F1E1E",
        lightBorder: "#FFFFFF",
        projects: "#363636",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        projectsXS: "1fr",
        projectsSM: "1fr 1fr",
        projectsMD: "1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
