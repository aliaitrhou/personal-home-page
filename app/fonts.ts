import {
  Lexend,
  Saira,
  Crimson_Pro,
  Great_Vibes,
  Tangerine,
} from "next/font/google";

export const saira = Saira({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-crimson",
});

export const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});
