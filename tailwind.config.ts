import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef6f7",
          100: "#d7e9ec",
          200: "#b3d5da",
          300: "#82b9c1",
          400: "#4b949f",
          500: "#2e7884",
          600: "#27616e",
          700: "#234f5b",
          800: "#1d414c",
          900: "#0d2f3a",
          950: "#071f28",
        },
        teal: {
          50: "#edfbf9",
          100: "#d2f5f0",
          200: "#a9eae3",
          300: "#71d8d0",
          400: "#3bbfb9",
          500: "#20a39f",
          600: "#178380",
          700: "#176969",
          800: "#175455",
          900: "#174647",
          950: "#072a2c",
        },
        sand: {
          50: "#fbf9f4",
          100: "#f4efe4",
          200: "#e9dfc9",
          300: "#dcc9a2",
          400: "#cdae76",
          500: "#c39a57",
          600: "#b58449",
          700: "#97693d",
          800: "#7b5436",
          900: "#65462f",
        },
        gold: "#c6a15b",
        cream: "#fbf9f4",
        ink: "#142a33",
      },
      fontFamily: {
        sans: ["Manrope Variable", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Playfair Display Variable",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 50px -22px rgba(7, 31, 40, 0.24)",
        lift: "0 26px 60px -26px rgba(7, 31, 40, 0.34)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        18: "0.18",
        35: "0.35",
        45: "0.45",
        48: "0.48",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        65: "0.65",
        68: "0.68",
        72: "0.72",
        78: "0.78",
        85: "0.85",
      },
    },
  },
  plugins: [],
};

export default config;
