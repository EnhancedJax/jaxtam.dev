"use client";

import { motion } from "framer-motion";
import SectionPointer from "../../../components/SectionPointer";
import { slideUp } from "../../../utils/animations";
import { SoftwareItem } from "./StackItem";

export default function Content() {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2 pl-3">
        <motion.h1 variants={slideUp} className="text-xl font-light text-pg ">
          Stack
        </motion.h1>
        <motion.div
          variants={slideUp}
          className="text-lg font-light text-gray "
        >
          Tools and technologies I use.
        </motion.div>
      </div>
      <motion.div variants={slideUp}>
        <SectionPointer>Software</SectionPointer>
        <div className="flex flex-wrap gap-3">
          <SoftwareItem name="Arc" type="BROWSER" icon="arc" />
          <SoftwareItem name="Github Copilot" type="AI" icon="copilot" />
          <SoftwareItem name="Notion" type="MANAGEMENT" icon="notion" />
          <SoftwareItem name="VSCode" type="CODE" icon="vscode" />
          <SoftwareItem name="Raycast" type="PRODUCTIVITY" icon="raycast" />
          <SoftwareItem name="iTerm2" type="TERMINAL" icon="iterm2" />
        </div>
      </motion.div>
    </>
  );
}
