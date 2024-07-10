"use client";
import { motion } from "framer-motion";
import { slideUp } from "../../../utils/animations";

export default function Head() {
  return (
    <div className="flex flex-col justify-center gap-2 pl-3">
      <motion.h1
        variants={slideUp}
        className="text-xl font-light text-clpg dark:text-cdpg lg:text-base"
      >
        My University Notes
      </motion.h1>
      <motion.div
        variants={slideUp}
        className="text-lg font-light text-clgray dark:text-cdgray lg:text-base"
      >
        Typed with LaTeX.
      </motion.div>
    </div>
  );
}
