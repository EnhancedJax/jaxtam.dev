"use client";

import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const SectionPointer = ({ children, showWhenSmall = true }) => {
  return (
    <motion.div
      variants={slideUp}
      className={`sticky border-b border-border -top-px z-10 mb-3 py-4 bg-bg lg:absolute lg:block lg:p-0 lg:top-auto lg:border-b-0 transition-colors ${
        showWhenSmall ? "" : "hidden"
      }`}
    >
      <h2 className="font-light tracking-widest uppercase text-gray lg:tracking-normal lg:normal-case lg:text-right lg:absolute lg:right-10">
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionPointer;
