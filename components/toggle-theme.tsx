"use client";

import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => {
    // in the first render this condition won't accour (currentTheme) doesn't exist yet
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("currentTheme")
    ) {
      return localStorage.getItem("currentTheme");
    }

    // checking for system current theme
    if (
      typeof window != "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }

    return "dark";
  });

  function toggleLocalStorageValue() {
    const currentTheme = t == "light" ? "dark" : "light";
    localStorage.setItem("currentTheme", currentTheme);
    setT(currentTheme);
  }

  // changing the 't' well triger this useEffect
  useEffect(() => {
    setMounted(true);
    if (t === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [t]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <AnimatePresence mode="wait" initial={false}>
        <button
          className="group z-10 p-[9px] w-fit rounded-full bg-orange-500 hover:bg-orange-600 group-hover:bg-orange-600 dark:bg-NeonLime-500 dark:hover:bg-NeonLime-600 focus:outline-none"
          onClick={toggleLocalStorageValue}
        >
          <motion.div
            key={t}
            initial={{ x: 8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {t === "light" ? (
              <FiMoon className="text-white" />
            ) : (
              <FiSun color="black" />
            )}
          </motion.div>
          <div className="absolute -z-10 top-0 right-[23.5px] hidden sm:inline-block w-1 h-[50%]  bg-orange-500 group-hover:bg-orange-600 dark:bg-NeonLime-500 dark:group-hover:bg-NeonLime-600" />
        </button>
      </AnimatePresence>
    )
  );
};

export default ToggleTheme;
