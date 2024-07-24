"use client";

import { motion } from "framer-motion";
import { FileDown, Mail } from "lucide-react";
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
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-pg rounded-lg justify-center items-center gap-2.5 flex border border-border "
        whileHover={{ scale: 1.05, translateY: -4 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => window.open("mailto:jax.lytam@gmail.com")}
      >
        <div className="text-base font-light text-bg ">Contact me</div>
        <Mail className="w-5 h-5 text-gray " />
      </motion.div>
      <div className="hidden font-light text-gray md:block">or</div>
      <motion.div
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer  bg-fg rounded-lg border  border-border justify-center items-center gap-2.5 hidden md:flex"
        variants={slideRight}
        initial="hidden"
        animate={slide ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => window.open("/applications/Resume.pdf")}
      >
        <div className="text-base font-light text-pg " variants={slideUp}>
          Snatch resume
        </div>
        <FileDown className="w-5 h-5 text-gray " />
      </motion.div>
    </motion.div>
  );
};

export default ActionButtons;
