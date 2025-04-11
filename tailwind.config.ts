import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        NeonLime: {
          100: "#e5ffbf",
          200: "#d0ff8f",
          300: "#bfff5f",
          400: "#aaff2f",
          500: "#b2ff12",
          600: "#86cc0e",
          700: "#5d990a",
          800: "#3a6606",
          900: "#1d3303",
        },
      },
      fontFamily: {
        Nunito: ["Nunito", "serif"],
        Sora: ["Sora", "serif"],
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("tailwindcss-motion")],
} satisfies Config;
