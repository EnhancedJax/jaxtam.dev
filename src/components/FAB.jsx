"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Tooltip from "./Tooltip";

export default function FAB({ tooltip, onClick, children }) {
  const [hoveredState, setHoveredState] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => {
        setHoveredState(true);
      }}
      onHoverEnd={() => {
        setHoveredState(false);
      }}
      className="fixed right-0 z-20 flex items-center justify-center w-16 h-16 m-4 border rounded-full shadow-xl cursor-pointer bottom-16 bg-fg border-border lg:bottom-0 xl:m-10"
    >
      <Tooltip text={tooltip} hoveredState={hoveredState} direction="right" />
      {children}
    </motion.button>
  );
}
