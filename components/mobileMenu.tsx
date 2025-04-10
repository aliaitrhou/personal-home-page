"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import LinkBox from "./linkbox";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ path }: { path: string }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<null | HTMLDivElement>(null);

  // clicking outside of the menu should close it
  useEffect(() => {
    const handleClickElseWhere = (e: MouseEvent) => {
      // here i check if the dom element that got clicked is contained by the menu
      // if not close it.
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickElseWhere);
    return () => {
      document.addEventListener("mousedown", handleClickElseWhere);
    };
  });

  const mobileMenuItemsStyles =
    "w-full hover:bg-gray-200 dark:hover:bg-zinc-600 px-4 py-1 text-start text-sm";

  return (
    <div ref={menuRef} className="relative">
      <button
        className="p-2 border-[1px] rounded-full border-zinc-500 dark:border-zinc-500 focus:outline-none"
        aria-label="Options"
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
      >
        <IoMenu className="text-gray-500 dark:text-zinc-500" />
      </button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="mobile-menu"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: 20,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              x: 20,
              y: -20,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className={`absolute z-30 right-0 mt-2 border border-gray-300 bg-white  dark:border-zinc-600 dark:bg-zinc-700 rounded-md`}
          >
            <ul className="py-1 flex flex-col w-full items-center ">
              <LinkBox
                url={path}
                classNames={mobileMenuItemsStyles}
                href="/"
                onClick={() => setOpenMenu(false)}
              >
                About
              </LinkBox>
              <LinkBox
                url={path}
                classNames={mobileMenuItemsStyles}
                href="/projects"
                onClick={() => setOpenMenu(false)}
              >
                Projects
              </LinkBox>
              <LinkBox
                url={path}
                href="/certificates"
                classNames={mobileMenuItemsStyles}
                onClick={() => setOpenMenu(false)}
              >
                Certificates
              </LinkBox>
              <LinkBox
                url={path}
                href="/contact"
                classNames={mobileMenuItemsStyles}
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </LinkBox>
              <LinkBox
                url={"github"}
                href="https://github.com/aliaitrhou/personal_home_page"
                classNames={mobileMenuItemsStyles}
                onClick={() => setOpenMenu(false)}
              >
                Source
              </LinkBox>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
