import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        container: "calc((100vw - (100vw - 1180px)))",
      },
      colors: {
        purple: "#7465D4",
        footerBg:"rgba(32, 32, 36, 0.9)",
        gray: {
          900: "#121214",
          800: "#202024",
          300: "#c4c4cc",
          100: "#e1e1e6",
        },
        green: {
          500: "#008757",
          300: "#00b37e",
          400: "#1EA483",
        },
        linearbg: "linear-gradient(180deg,#1ea483 0%, #7465d4 100%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
