"use client";
import React, { useState } from "react";

interface chunkProps {
  text: string;
  toggleLabel: string;
  children?: React.ReactNode;
}

const BlurTextChunk: React.FC<chunkProps> = ({
  text,
  toggleLabel,
  children,
}) => {
  const [blur, setBlur] = useState(true);

  return (
    <span className="text-xs sm:text-sm">
      <button
        onClick={() => setBlur((prev) => !prev)}
        className={`peer border text-xs sm:text-sm font-thin tracking-wide uppercase border-black dark:border-white    rounded-full px-2 focus:outline-none  focus:bg-orange-500 dark:focus:bg-favColor dark:focus:text-black focus:border-orange-500 dark:focus:border-favColor cursor-help`}
        // ${noHover ? "" : "hover:bg-orange-500 hover:border-orange-500 hover:text-black dark:hover:bg-favColor dark:hover:border-favColor"}
      >
        {toggleLabel}
      </button>
      <span
        className={`text-sm sm:text-md  md:text-lg ${blur ? "blur-[4px]" : "blur-none peer-hover:text-orange-500 dark:peer-hover:text-favColor"}`}
      >
        {text}
        {children && (
          <span
            className={`text-sm sm:text-md  md:text-lg ${blur ? `blur-[2px] ` : "blur-none"}`}
            // ${noHover ? "peer-hover:bg-yellow-500 dark:peer-hover:bg-black" : ""}
          >
            {children}
          </span>
        )}
      </span>
    </span>
  );
};

export default BlurTextChunk;
