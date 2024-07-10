"use client";

import { motion } from "framer-motion";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import LogoLoader from "../components/LogoLoader";
import { slideLeft, slideUp, slideUpStagger } from "../utils/animations";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full gap-4"
      variants={slideUpStagger}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <LogoLoader />
      <motion.div
        className="text-base font-light text-clpg dark:text-cdpg "
        variants={slideUp}
      >
        404 Not Found
      </motion.div>
      <motion.div
        className="text-base font-light text-center text-clgray dark:text-cdgray "
        variants={slideUp}
      >
        The page you're looking for doesn't exist.
      </motion.div>
      <Link href="/">
        <motion.div
          className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-clpg dark:bg-cdpg rounded-lg justify-center items-center gap-2.5 flex"
          variants={slideLeft}
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.95, translateY: -2 }}
        >
          <motion.div
            className="text-base font-light text-clbg dark:text-cdbg"
            variants={slideUp}
          >
            Return to home page
          </motion.div>
          <Undo2 className="w-5 h-5 text-clpg dark:text-cdgray" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
