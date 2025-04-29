"use client";

import React from "react";
import Logo from "./logo";
import LinkBox from "./linkbox";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobileMenu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  const showDetailPageSlug = projectSlug && isActiveProjectDetail;

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
          <LinkBox
            url={url}
            href="/projects"
            classNames={showDetailPageSlug ? "py-2 pr-[2px]" : " "}
          >
            Projects
          </LinkBox>
          <AnimatePresence mode="wait">
            {showDetailPageSlug && (
              <motion.div
                className="flex items-center"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }, // slight delay between icon & slug
                }}
                key={projectSlug}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowRoundForward />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 }} // delay slug after icon
                  className="whitespace-nowrap break-keep ml-1 py-2 text-xs mr-1 font-light text-orange-500 dark:text-NeonLime-500"
                >
                  {decodeURIComponent(projectSlug)}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
