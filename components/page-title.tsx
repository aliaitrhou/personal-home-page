"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {lexend} from '@/app/fonts'

interface Props {
  title: string;
  keyword: string;
}

const PageTitle: React.FC<Props> = ({ title, keyword }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
        className="w-full mb-8">
        <div className={`flex justify-center items-center gap-4 border border-neutral-200/70 dark:border-neutral-600/40 rounded-2xl py-2 w-full mx-auto bg-white dark:bg-neutral-700/60 ${lexend.className}`}>
          <div className="uppercase text-center text-sm sm:text-md dark:text-white/70 text-zinc-800">
            {keyword}
          </div>
            <div
              className="text-lg xs:text-xl sm:text-2xl  font-medium text-center dark:text-white text-zinc-800/80"
            >
              {title}
            </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTitle;
