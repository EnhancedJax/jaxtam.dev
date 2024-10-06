"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import Tooltip from "./Tooltip";

export default function FAB() {
  const { newAlert } = useAppContext();
  const [hoveredState, setHoveredState] = useState(false);

  const handleClick = () => {
    newAlert(
      "info",
      "Hi there!",
      "The hi button is disabled for now. Thanks for checking out my page!"
    );
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => {
          setHoveredState(true);
        }}
        onHoverEnd={() => {
          setHoveredState(false);
        }}
        className="fixed right-0 z-50 flex items-center w-16 h-16 m-4 border rounded-full shadow-xl cursor-pointer bottom-16 bg-fg border-border lg:bottom-0 xl:m-10"
      >
        <Tooltip
          text="Hi! the hi button is disabled for now. Thanks for checking out my page!"
          hoveredState={hoveredState}
          direction="right"
        />
        <span
          className={`w-full mr-1 text-center text-[28px] grayscale ${
            hoveredState ? "wave" : ""
          }`}
        >
          👋🏻
        </span>
      </motion.button>
    </>
  );
}
