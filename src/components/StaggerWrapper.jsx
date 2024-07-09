"use client";

import { motion } from "framer-motion";
import { fadeInStagger } from "../utils/animations";

export default function StaggerWrapper({ children, ...props }) {
  return (
    <motion.div
      variants={fadeInStagger}
      initial="hidden"
      animate="visible"
      exit="hidden"
      {...props}
    >
      {children}
    </motion.div>
  );
}
