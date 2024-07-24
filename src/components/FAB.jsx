"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import { slideSpring } from "../utils/animations";
import { supabase } from "../utils/supabaseClient";
import Tooltip from "./Tooltip";

export default function FAB() {
  const { newAlert } = useAppContext();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoveredState, setHoveredState] = useState(false);
  const [modalClosed, setModalClosed] = useState(false);

  const handleSend = async () => {
    if (isLoading) return;
    setModalClosed(true);
    setIsLoading(true);
    const { error } = await supabase
      .from("Waves")
      .insert([{ created_at: new Date().toISOString(), message }]);

    if (error) {
      newAlert("error", "Error!", error);
    } else {
      newAlert("success", "Sent successfully!", "");
    }
    setIsLoading(false);
  };

  const handleClick = () => {
    if (isClicked) {
      newAlert("info", "Hey! You already said hi!", "");
      return;
    }
    setIsClicked(true);
    setModalClosed(false);
    setMessage("");
    setTimeout(() => {
      setIsClicked(false);
    }, 60000);
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
          text={isClicked ? "Hey! You already said hi!" : "Click to say hello!"}
          hoveredState={hoveredState}
          direction="right"
        />
        <span
          className={`w-full mr-1 text-center text-[28px] ${
            isClicked ? "grayscale" : ""
          } ${hoveredState ? "wave" : ""}`}
        >
          {isLoading ? "⋅⋅⋅" : "👋🏻"}
        </span>
      </motion.button>
      <AnimatePresence>
        {isClicked && !modalClosed && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full p-4 bg-opacity-50 backdrop-blur-md bg-fgo"
            variants={slideSpring["up"]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                handleSend();
              }
            }}
          >
            <p className="text-3xl wave">👋🏻</p>
            <motion.div
              className="flex flex-col items-center w-full p-5 rounded-3xl lg:min-w-96 lg:w-auto"
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl">Hello! Hi!</p>
              <motion.input
                placeholder="💭  Leave a message?"
                className="w-full p-4 bg-bordero mt-4 rounded-lg border border-border flex-col justify-start items-start gap-2.5 flex text-pg text-base font-light placeholder-darkgray focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />
              <p className="px-4 py-2 mt-4 text-sm rounded-full text-darkgray bg-fgo">
                Click anywhere to send!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
