"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  keyword: string;
}

const PageTitle: React.FC<Props> = ({ title, keyword }) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center w-full sm:w-[55%]">
      <div className="uppercase text-sm sm:text-md mb-1 dark:text-white/70 text-zinc-800">
        {keyword}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          className="w-full text-2xl xs:text-3xl sm:text-4xl font-mplus font-medium text-center dark:text-white text-zinc-800/80"
        >
          {title}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTitle;
