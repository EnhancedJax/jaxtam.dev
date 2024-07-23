"use client";

import { AnimatePresence, motion } from "framer-motion";
import { slideSpring } from "../utils/animations";

// PARENT MUST BE RELATIVE

const Tooltip = ({
  direction = "up",
  hoveredState = false,
  text = "",
  isHiddenResponsive = false,
}) => {
  const offset = {
    left: {
      top: "25%",
      left: "4rem",
    },
    right: {
      top: "25%",
      right: "calc(100% + 1rem)",
    },
    up: {
      bottom: "calc(100% + 1rem)",
      left: `-${text.length / 3}ch`,
    },
    down: {
      top: "2rem",
      left: `-${text.length / 3}ch`,
    },
  };

  return (
    <AnimatePresence>
      {hoveredState && (
        <motion.div
          variants={slideSpring[direction]}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={offset[direction]}
          className={`absolute z-10 p-1 text-xs font-light border rounded-lg text-pg border-border bg-fg ${
            isHiddenResponsive ? "hidden lg:block" : ""
          }`}
        >
          <span className=" text-nowrap">{text}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
