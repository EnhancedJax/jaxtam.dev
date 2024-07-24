"use client";
import { motion } from "framer-motion";
import { slideUp } from "../../../utils/animations";

export default function Main() {
  return (
    <span className="flex flex-col justify-center gap-2 pl-3">
      <motion.h1
        variants={slideUp}
        className="text-xl font-light text-pg lg:text-base"
      >
        My University Notes
      </motion.h1>
      <motion.h2
        variants={slideUp}
        className="text-lg font-light text-gray lg:text-base"
      >
        Typed with LaTeX.
      </motion.h2>
    </span>
  );
}
