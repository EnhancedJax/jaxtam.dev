"use client";

import { motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import { useState } from "react";
import { slideLeft, slideRight, slideUp } from "../../../utils/animations";

const ActionButtons = () => {
  const [slide, setSlide] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-4"
      variants={slideUp}
      onUpdate={(latest) => {
        if (latest.opacity === 1) {
          setSlide(true);
        } else if (latest.opacity !== 0 && slide) {
          setSlide(false);
        }
      }}
    >
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate={slide ? "visible" : "hidden"}
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-white rounded-lg justify-center items-center gap-2.5 flex border border-clborder dark:border-none"
        whileHover={{ scale: 1.05, translateY: -4 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => window.open("mailto:jax.lytam@gmail.com")}
      >
        <div className="text-base font-light text-clpg dark:text-cdbg">
          Contact me
        </div>
        <Mail className="w-5 h-5 text-cldarkgray dark:text-cddarkgray" />
      </motion.div>
      <div className="hidden font-light text-clgray dark:text-cdgray md:block">
        or
      </div>
      <motion.div
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer  bg-clfg dark:bg-cdfg rounded-lg border  border-clborder dark:border-cdborder justify-center items-center gap-2.5 hidden md:flex"
        variants={slideRight}
        initial="hidden"
        animate={slide ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => navigator.clipboard.writeText("jax.lytam@gmail.com")}
      >
        <div
          className="text-base font-light text-clpg dark:text-cdpg"
          variants={slideUp}
        >
          Copy email
        </div>
        <Copy className="w-5 h-5 text-clpg dark:text-cddarkgray" />
      </motion.div>
    </motion.div>
  );
};

export default ActionButtons;
