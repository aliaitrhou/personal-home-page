"use client";

import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const ToggleTheme = () => {
  const [t, setT] = useState(() => {
    // in the first render this condition won't accour (currentTheme) doesn't exist yet
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("currentTheme")
    ) {
      return localStorage.getItem("currentTheme");
    }

    // checking for system current theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  function toggleLocalStorageValue() {
    const currentTheme = t == "light" ? "dark" : "light";
    localStorage.setItem("currentTheme", currentTheme);
    setT(currentTheme);
  }

  // changing the 't' well triger reRun this useEffect
  useEffect(() => {
    if (t === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [t]);

  return (
    <button
      className="group z-10 p-[9px] rounded-full bg-orange-500 hover:bg-orange-600 group-hover:bg-orange-600 dark:bg-NeonLime-500 dark:hover:bg-NeonLime-600 focus:outline-none"
      onClick={toggleLocalStorageValue}
    >
      {t === "light" ? (
        <FiMoon className="text-white" />
      ) : (
        <FiSun color="black" />
      )}
      <div className="absolute -z-10 top-0 right-[23.5px] hidden sm:inline-block w-1 h-[50%]  bg-orange-500 group-hover:bg-orange-600 dark:bg-NeonLime-500 dark:group-hover:bg-NeonLime-600" />
    </button>
  );
};

export default ToggleTheme;
