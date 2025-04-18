"use client";

import React from "react";
import Logo from "./logo";
import LinkBox from "./linkbox";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobileMenu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavProps {
  url: string;
  classNames?: string;
}

const Navbar: React.FC<NavProps> = ({ url, classNames }) => {
  const pathname = usePathname();

  const projectSlug = pathname.startsWith("/projects/")
    ? pathname.split("/")[2]
    : null;
  const isActiveProjectDetail = /^\/projects\/[^/]+$/.test(pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-full bg-[#ffffff40] dark:bg-[#20202380] backdrop-blur-sm ${classNames}`}
    >
      <div className="relative flex p-2 max-w-4xl flex-wrap mx-auto justify-between">
        <div className="flex items-center mr-5">
          <h1 className="tracking-tight px-2">
            <Logo />
          </h1>
        </div>
        <ul className="hidden flex-grow sm:flex flex-col sm:flex-row w-full sm:w-auto items-center mt-4 sm:mt-0">
          <LinkBox url={url} href="/projects" classNames="pr-1">
            Projects
          </LinkBox>
          {isActiveProjectDetail && projectSlug && (
            <>
              <motion.div className="inline text-xs">&gt;</motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: 55,
                }}
                exit={{
                  opacity: 0,
                  width: 0,
                }}
                transition={{ duration: 1 }}
                className={`ml-1 py-2 text-sm mr-1 font-light hover:underline hover:decoration-1 hover:underline-offset-4 text-orange-500 dark:text-NeonLime-500`}
              >
                {decodeURIComponent(projectSlug)}
              </motion.div>
            </>
          )}
          <LinkBox url={url} href="/certificates">
            Certificates
          </LinkBox>
          <LinkBox url={url} href="/contact">
            Contact
          </LinkBox>
          <LinkBox
            url={"github"}
            href="https://github.com/aliaitrhou/personal_home_page"
          >
            Source
          </LinkBox>
        </ul>
        <div className="flex-1 text-end self-center">
          <ToggleTheme />
          <div className="ml-2 inline-block sm:hidden">
            <MobileMenu path={url} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
