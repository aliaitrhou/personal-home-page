"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  keyword: string;
}

const PageTitle: React.FC<Props> = ({ title, keyword }) => {
  return (
    <div className="relative flex flex-col ml-[5%] sm:ml-[20%] justify-center items-center text-center sm:w-[55%]">
      <div className="uppercase text-sm sm:text-md mb-1">{keyword}</div>

      <div className="relative h-12 sm:h-16 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={title}
            initial={{ rotateX: 90, opacity: 0, y: 20 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: -90, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-full text-2xl xs:text-3xl sm:text-4xl font-mplus font-medium"
          >
            {title}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PageTitle;
