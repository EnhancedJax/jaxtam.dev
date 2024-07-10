"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { slideSpring, slideUp } from "../utils/animations";

const SidebarPanel = ({ title, children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-20 flex items-center justify-between w-screen h-16 px-4 border-b lg:hidden border-clborder dark:border-cdborder bg-clbg dark:bg-cdbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col">
        <h1 className="text-base font-light text-clpg dark:text-cdpg">
          {title}
        </h1>
        <Menu
          size="20"
          className="cursor-pointer text-clgray dark:text-cdgray"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        />
      </div>
      <div className="hidden fixed top-0 left-[64px] lg:block px-3 pt-10 pb-20 w-[340px] border-r border-r-clborder dark:border-r-cdborder h-screen overflow-auto">
        {children}
      </div>
      <AnimatePresence>
        {sideBarOpen && (
          <>
            <motion.div
              variants={slideSpring["left"]}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 px-5 pt-10 pb-20 w-[340px] z-40 h-screen overflow-auto bg-clbg dark:bg-cdbg"
            >
              {children}
            </motion.div>
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-20"
              onClick={() => setSideBarOpen(!sideBarOpen)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarPanel;
