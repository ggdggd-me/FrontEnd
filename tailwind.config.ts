import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue100: "#ECF3F9",
        blue200: "#AAD1F9",
        blue300: "#3596FF",
        blue400: "#6199D1",
        blue500: "#3F4B65",
        blue600: "#242D41",

        gray100: "#F9FAFB",
        gray200: "#DDDDDD",
        gray300: "#DADADA",
        gray400: "#A6A6A6",
        gray500: "#909090",
        gray600: "#767676",
        gray700: "#484848",
        gray800: "#2D2D2D",
        gray900: "#232323",

        white: "#FFFFFF",
        black: "#222222",
      },
      keyframes: {
        modalOpen: {
          "0%": { transform: "translateY(600px)" },
          "100%": { transform: "translateY(0)" },
        },
        modalClose: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(600px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
