"use client";

import { motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import { fadeIn, slideLeft, slideRight } from "../../../utils/animations";

const ActionButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-4">
      <motion.div
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-white rounded-lg justify-center items-center gap-2.5 flex"
        variants={slideLeft}
        whileHover={{ scale: 1.05, translateY: -4 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => window.open("mailto:jax.lytam@gmail.com")}
      >
        <motion.div className="text-base font-light text-cbg" variants={fadeIn}>
          Contact me
        </motion.div>
        <Mail className="w-5 h-5 text-cdarkgray" />
      </motion.div>
      <motion.div
        className="hidden font-light text-cgray md:block"
        variants={fadeIn}
      >
        or
      </motion.div>
      <motion.div
        className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-cfg rounded-lg border border-cborder justify-center items-center gap-2.5 hidden md:flex"
        variants={slideRight}
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95, translateY: -2 }}
        onClick={() => navigator.clipboard.writeText("jax.lytam@gmail.com")}
      >
        <motion.div
          className="text-base font-light text-white"
          variants={fadeIn}
        >
          Copy email
        </motion.div>
        <Copy className="w-5 h-5 text-cdarkgray" />
      </motion.div>
    </div>
  );
};

export default ActionButtons;
