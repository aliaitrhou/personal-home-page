import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        favColor: "#b2ff12",
        favColorglow: "#b2df11",
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
