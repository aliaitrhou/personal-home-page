"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState<string>(() => {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("currentTheme")
    ) {
      return localStorage.getItem("currentTheme") as string;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }
    return "dark";
  });

  const isOn = t === "light";

  function toggleLocalStorageValue() {
    const currentTheme = t === "light" ? "dark" : "light";
    localStorage.setItem("currentTheme", currentTheme);
    setT(currentTheme);
  }

  useEffect(() => {
    if (t === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [t]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label={
        isOn ? "Turn the lamp off (dark mode)" : "Turn the lamp on (light mode)"
      }
      onClick={toggleLocalStorageValue}
      className="relative flex h-[42px] w-[40px] cursor-pointer items-end justify-center bg-transparent focus:outline-none"
      style={{ cursor: "grab" }}
      onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
      onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[30px] -translate-x-1/2 w-[80px] sm:w-[130px]"
        style={{
          height: 150,
          opacity: isOn ? 0.5 : 0,
          transition: "opacity 0.8s ease",
          background:
            "radial-gradient(ellipse at top, rgba(255,214,130,0.5), rgba(255,214,130,0) 70%)",
          filter: "blur(4px)",
          clipPath: "polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <motion.div
        className="relative flex flex-col items-center focus:outline-none"
        style={{ transformOrigin: "top center" }}
        whileTap={{ y: 6 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div
          className="h-[16px] sm:h-[19px] w-[1.5px]"
          style={{ background: "linear-gradient(180deg, #5a5a5a, #9a9a9a)" }}
        />

        <div
          className="h-[4px] w-[10px] rounded-[1px] transition-colors duration-700"
          style={{
            background: isOn
              ? "linear-gradient(180deg, #d8d8d8, #8a8a8a)"
              : "linear-gradient(180deg, #4a4a4a, #262626)",
          }}
        />
        <div className="relative">
          <svg width="35" height="22" viewBox="0 0 44 24" className=" block">
            <defs>
              <linearGradient id="shadeLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f4f4f4" />
                <stop offset="45%" stopColor="#cccccc" />
                <stop offset="100%" stopColor="#8a8a8a" />
              </linearGradient>
              <linearGradient id="shadeDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a1a1aa" /> {/* zinc-400 */}
                <stop offset="45%" stopColor="#71717a" /> {/* zinc-500 */}
                <stop offset="100%" stopColor="#3f3f46" /> {/* zinc-700 */}
              </linearGradient>
            </defs>
            <path
              d="M 16 0 L 28 0 L 44 22 Q 22 28 0 22 Z"
              fill={isOn ? "url(#shadeLight)" : "url(#shadeDark)"}
              style={{ transition: "opacity 0.5s ease" }}
            />
            <path
              d="M 16 0 L 28 0 L 30 4 L 14 4 Z"
              fill={isOn ? "#ffffff" : "#5a5a5a"}
              opacity={0.35}
            />
            <ellipse
              cx="22"
              cy="22"
              rx="22"
              ry="2.5"
              fill={isOn ? "#6f6f6f" : "#101010c8"}
            />
          </svg>

          <div
            className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[4px] rounded-b-[7px] transition-all duration-700 ease-out"
            style={{
              top: "20px",
              background: isOn ? "#fff3c4" : "#585858",
              boxShadow: isOn
                ? "0 3px 8px 1px #ffe9a8, 0 6px 20px 6px rgba(255,213,107,0.5), 0 10px 40px 14px rgba(255,213,107,0.25)"
                : "none",
            }}
          />
        </div>
      </motion.div>
    </button>
  );
};

export default ToggleTheme;
