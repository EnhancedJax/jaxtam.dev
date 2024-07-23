"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Tooltip from "./Tooltip";

export default function FAB() {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoveredState, setHoveredState] = useState(false);
  const handleClick = async () => {
    if (clicked || isLoading) return;
    setIsLoading(true);
    const { data, error } = await supabase
      .from("Waves")
      .insert([{ created_at: new Date().toISOString() }])
      .select();

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
    setClicked(true);
    setIsLoading(false);
    setTimeout(() => {
      setClicked(false);
    }, 60000);
  };

  return (
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
        text={clicked ? "You already said hi!" : "Click to say hello!"}
        hoveredState={hoveredState}
        direction="right"
      />
      <span
        className={`w-full mr-1 text-center text-[28px] ${
          clicked ? "grayscale" : ""
        }`}
      >
        {isLoading ? "..." : "👋🏻"}
      </span>
    </motion.button>
  );
}
