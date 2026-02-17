import {
  M_PLUS_Rounded_1c,
  Lexend,
  Saira,
} from "next/font/google";

export const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mplus",
});

export const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-lexend",
});
