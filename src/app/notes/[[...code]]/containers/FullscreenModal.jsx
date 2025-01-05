"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { slideSpring } from "../../../../utils/animations";

export default function FullscreenModal() {
  const [isVisible, setIsVisible] = useState(true);

  const handleTakeMeThere = () => {
    window.open("https://notes.jaxtam.dev", "_blank");
    setIsVisible(false);
  };

  const handleLater = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full p-4 text-center bg-opacity-50 backdrop-blur-md bg-fgo"
          variants={slideSpring["up"]}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <p className="text-3xl wave">👋🏻</p>
          <motion.div
            className="flex flex-col items-center w-full p-5 rounded-3xl lg:min-w-96 lg:w-auto"
            transition={{ delay: 0.5 }}
          >
            <h2 className="mb-2 text-xl">
              Welcome to my new notes space - <b>Notes@HKU</b>!
            </h2>
            <p className="text-base max-w-96">
              Hi there! Thanks for checking out my notes. Starting in 2025,
              they're now available on my dedicated website - <b>Notes@HKU</b>!
              It offers a better reading experience and will be updated more
              frequently. Would you like to take a look?
            </p>
            <div className="flex gap-4 mt-8">
              <motion.button
                className="px-5 py-2 text-base font-light border rounded-lg cursor-pointer lg:py-4 lg:px-11 bg-pg border-border text-bg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTakeMeThere}
              >
                Take me there!
              </motion.button>
              <motion.button
                className="px-5 py-2 text-base font-light border rounded-lg lg:py-4 bg-bordero border-border text-pg placeholder-darkgray lg:px-11"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLater}
              >
                Maybe later
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
