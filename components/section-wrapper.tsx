"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay: number;
}

const SectionWrapper: React.FC<Props> = ({ children, delay }) => {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="p-2"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
