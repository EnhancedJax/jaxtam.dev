"use client";
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
      <div className="w-full">
        <span className="flex flex-col justify-center gap-2 pl-3 mb-10">
          <motion.h1
            variants={slideUp}
            className="text-base font-light text-pg"
          >
            {selectedNote ? selectedNote.title + " Notes" : "HKU Notes by Jax"}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="text-base font-light text-gray"
          >
            {selectedNote
              ? `You're viewing ${selectedNote.code} notes for The University of Hong Kong.`
              : "Composed with ❤️ & LaTeX"}
          </motion.p>
        </span>
        <p className="pl-3 mb-4 text-sm font-light text-gray">
          View my other notes
        </p>
        <NotesSelect setIsPanelOpen={setIsPanelOpen} />
      </div>
    </SidebarPanel>
  );
}
