"use client";

import { motion } from "framer-motion";
import RegularLayout from "../../components/RegularLayout";
import SectionPointer from "../../components/SectionPointer";
import { fadeIn, fadeInStagger } from "../../utils/animations";
import { SoftwareItem } from "./containers/StackItem";

export default function Stack() {
  return (
    <>
      <RegularLayout>
        <motion.div
          className="flex flex-col w-full gap-10"
          variants={fadeInStagger}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col items-start justify-center gap-2 pl-3">
            <motion.h1
              variants={fadeIn}
              className="text-xl font-light text-white"
            >
              Stack
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="text-lg font-light text-cgray"
            >
              Tools and technologies I use.
            </motion.div>
          </div>
          <motion.div variants={fadeIn}>
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
        </motion.div>
      </RegularLayout>
    </>
  );
}
