"use client";

import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const SectionPointer = ({ children, showWhenSmall = true }) => {
  return (
    <motion.h2
      variants={slideUp}
      className={`lg:absolute lg:block ${showWhenSmall ? "" : "hidden"}`}
    >
      <p className="mb-4 text-base font-light lg:mb-0 lg:text-right lg:absolute text-cgray lg:right-10">
        {children}
      </p>
    </motion.h2>
  );
};

export default SectionPointer;
