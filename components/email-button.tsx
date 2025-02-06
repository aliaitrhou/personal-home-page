"use client";

import React, { useState, useEffect, useRef } from "react";
import contactDark from "@/public/imgs/contact-dark.png";
import contactLight from "@/public/imgs/contact-light.png";
import Link from "next/link";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const EmailButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [rondedPosition, setRondedPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseXPosition = e.clientX;
    setMouseX(mouseXPosition);
  };

  useEffect(() => {
    if (linkRef.current) {
      const linkBoxWidth = linkRef.current.clientWidth;
      const linkBoxLeft = linkRef.current.getBoundingClientRect().left;

      const halfBox = linkBoxWidth / 2;
      const distanceFromLeft = mouseX - linkBoxLeft;

      const maxOffset = 50;
      let offset = (distanceFromLeft - halfBox) / 2;
      offset = Math.min(Math.max(offset, -maxOffset), maxOffset);

      setRondedPosition(offset);
    }
  }, [mouseX]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex items-center justify-center mt-8">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: rondedPosition,
              y: 0,
            }}
            exit={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
            }}
            className="hidden sm:flex absolute -top-32 border-4 border-black/70 dark:border-white rounded-lg shadow-xl overflow-hidden"
          >
            <Image
              src={isDarkMode ? contactDark : contactLight}
              alt="contact page"
              width={200}
              className="aspect-video"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/contact"
        ref={linkRef}
        className="group flex items-center gap-2 sm:gap-3 py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-orange-500 text-white dark:bg-NeonLime-500 dark:text-black text-sm sm:text-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <IoMdMail className="size-4 sm:size-5" />
        <p>Send Email</p>
        <FaChevronRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default EmailButton;
