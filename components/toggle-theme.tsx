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
      className="p-[9px] rounded-full bg-orange-500 hover:bg-orange-600 dark:bg-favColor dark:hover:bg-favColorglow focus:outline-none"
      onClick={toggleLocalStorageValue}
    >
      {t === "light" ? (
        <FiMoon className="text-white" />
      ) : (
        <FiSun color="black" />
      )}
    </button>
  );
};

export default ToggleTheme;
