"use client";

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
}

const MobileMenu: React.FC<Props> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 border-[1px] rounded-full border-zinc-500 dark:border-zinc-500 focus:outline-none"
        aria-label="Options"
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
      >
        <IoMenu className="text-gray-500 dark:text-zinc-500" />
      </button>
      {openMenu && (
        <div
          className={`absolute right-0 mt-2 border border-gray-300 bg-gray-200  dark:border-zinc-600 dark:bg-zinc-700 rounded-md `}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
