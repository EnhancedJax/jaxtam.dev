"use client";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useContext } from "react";
import { slideUp } from "../../../../utils/animations";
import { Context } from "../viewModel";

export default function Main({ noteDetails }) {
  const { selectedNote } = useContext(Context);

  const noteToUse = selectedNote || noteDetails;

  return (
    <span className="flex flex-col justify-center gap-2 pl-3">
      <motion.h1
        variants={slideUp}
        className="text-xl font-light text-pg lg:text-base"
      >
        {noteToUse ? noteToUse.title : "HKU Notes by Jax"}
      </motion.h1>
      <motion.h2
        variants={slideUp}
        className="text-lg font-light text-gray lg:text-base"
      >
        {noteToUse
          ? ` ${noteToUse.code} notes for the semester ${
              noteToUse.semester
            }. Last updated on ${format(
              parseISO(noteToUse.pdf.updatedAt),
              "MMM dd"
            )}`
          : "Composed with ❤️ & LaTeX"}
      </motion.h2>
    </span>
  );
}
