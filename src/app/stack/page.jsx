"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import RegularLayout from "../../components/RegularLayout";
import SectionPointer from "../../components/SectionPointer";
import { slideUp } from "../../utils/animations";
import { SoftwareItem } from "./containers/StackItem";

export default function Stack() {
  return (
    <PageWrapper>
      <RegularLayout>
        <PageWrapper className="flex flex-col w-full gap-10">
          <div className="flex flex-col items-start justify-center gap-2 pl-3">
            <motion.h1
              variants={slideUp}
              className="text-xl font-light text-white"
            >
              Stack
            </motion.h1>
            <motion.div
              variants={slideUp}
              className="text-lg font-light text-cgray"
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
        </PageWrapper>
      </RegularLayout>
    </PageWrapper>
  );
}
