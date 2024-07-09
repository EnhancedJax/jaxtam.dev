"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animations";

export default function Head() {
  return (
    <div className="flex flex-col justify-center gap-2 pl-3">
      <motion.h1
        variants={fadeIn}
        className="text-xl font-light text-white lg:text-base"
      >
        My University Notes
      </motion.h1>
      <motion.div
        variants={fadeIn}
        className="text-lg font-light text-cgray lg:text-base"
      >
        Typed with LaTeX.
      </motion.div>
    </div>
  );
}
