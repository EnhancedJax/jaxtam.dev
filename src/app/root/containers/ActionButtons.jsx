"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ExpandingA from "../../../components/ExpandingA";
import { slideLeft, slideRight, slideUp } from "../../../utils/animations";

const ActionButtons = () => {
  const [slide, setSlide] = useState(false);
  return (
    <motion.div
      className="flex flex-row gap-2 justify-center items-center w-full px-10 md:w-[640px]"
      variants={slideUp}
      onUpdate={(latest) => {
        if (latest.opacity === 1) {
          setSlide(true);
        } else if (latest.opacity !== 0 && slide) {
          setSlide(false);
        }
      }}
    >
      <motion.a
        variants={slideLeft}
        initial="hidden"
        animate={slide ? "visible" : "hidden"}
        className="flex min-w-0 flex-1 self-stretch h-[38px] py-2 cursor-pointer bg-pg rounded-full justify-center items-center gap-2.5 border border-border "
        whileHover={{ scale: 1.05, translateY: -4 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        href="mailto:jax.lytam@gmail.com"
      >
        <p className="text-base font-light text-bg">Hire me</p>
      </motion.a>
      {/* <div className="hidden font-light text-gray md:block">or</div> */}
      <ExpandingA
        variants={slideRight}
        initial="hidden"
        animate={slide ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        href="/applications/Resume.pdf"
        expandClassName="bg-fg rounded-none"
        className="flex min-w-0 flex-1 self-stretch h-[38px] py-2 cursor-pointer bg-fg rounded-full border border-border justify-center items-center gap-2.5"
      >
        <p className="text-base font-light text-pg" variants={slideUp}>
          Get full resume
        </p>
      </ExpandingA>
    </motion.div>
  );
};

export default ActionButtons;
