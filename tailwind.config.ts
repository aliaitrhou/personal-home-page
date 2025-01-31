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
      xs: "480px", // Custom small breakpoint
      sm: "640px", // Default sm breakpoint
      md: "768px", // Default md breakpoint
      lg: "1024px", // Default lg breakpoint
      xl: "1280px", // Default xl breakpoint
      "2xl": "1536px", // Default 2xl breakpoint
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
        Playfair: ["Playfair Display", "serif"],
        Nunito: ["Nunito", "serif"],
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("tailwindcss-motion")],
} satisfies Config;
