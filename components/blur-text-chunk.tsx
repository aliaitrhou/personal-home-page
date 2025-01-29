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
    <span className="">
      <button
        onClick={() => setBlur((prev) => !prev)}
        className={`peer border text-base/3  sm:text-base/4  lg:text-base/6 font-thin  tracking-wide uppercase border-black dark:border-white  rounded-full px-2 focus:outline-none  focus:bg-orange-500 dark:focus:bg-favColor dark:focus:text-black focus:border-orange-500 dark:focus:border-favColor cursor-help`}
      >
        {toggleLabel}
      </button>
      <span
        className={`${blur ? "blur-[6px]" : "blur-none peer-hover:text-orange-500 dark:peer-hover:text-favColor"}`}
      >
        {text}
        {children && (
          <span className={`${blur ? `blur-[6px] ` : "blur-none"}`}>
            {children}
          </span>
        )}
      </span>
    </span>
  );
};

export default BlurTextChunk;
