"use client";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import SidebarPanel from "../../../../components/SidebarPanel";
import { slideUp } from "../../../../utils/animations";
import { Context } from "../viewModel";
import NotesSelect from "./NotesSelect";

export default function Panel() {
  const { selectedNote, slugCode } = useContext(Context);
  const [isPanelOpen, setIsPanelOpen] = useState(
    slugCode === undefined && window.innerWidth < 1024
  );

  return (
    <SidebarPanel
      title={`${selectedNote?.code} HKU Notes`}
      isOpen={isPanelOpen}
      setIsOpen={setIsPanelOpen}
    >
      <div className="flex flex-col w-full gap-10">
        <span className="flex flex-col justify-center gap-2 pl-3">
          <motion.h1
            variants={slideUp}
            className="text-xl font-light text-pg lg:text-base"
          >
            {selectedNote ? selectedNote.title : "HKU Notes by Jax"}
          </motion.h1>
          <motion.h2
            variants={slideUp}
            className="text-lg font-light text-gray lg:text-base"
          >
            {selectedNote
              ? ` ${selectedNote.code} notes for the semester ${
                  selectedNote.semester
                }. Last updated on ${format(
                  parseISO(selectedNote.pdf.updatedAt),
                  "MMM dd"
                )}`
              : "Composed with ❤️ & LaTeX"}
          </motion.h2>
        </span>
        <NotesSelect setIsPanelOpen={setIsPanelOpen} />
      </div>
    </SidebarPanel>
  );
}
