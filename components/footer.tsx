import React from "react";
import { lexend } from "@/app/fonts";

const Footer = () => {
  return (
    <footer
      className={`w-full text-center my-10 ${lexend.className} font-light`}
    >
      <p className="text-zinc-700/40 dark:text-zinc-600 text-sm sm:text-md">
        © {new Date().getFullYear()} Ali Ait Rahou. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
