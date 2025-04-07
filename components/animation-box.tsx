"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimationBox = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationBox;
