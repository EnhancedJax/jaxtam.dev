"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LogoLoader from "../components/LogoLoader";
import { slideLeft, slideUp, staggerParent } from "../utils/animations";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full gap-4"
      variants={staggerParent()}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <LogoLoader />
      <motion.div className="text-base font-light text-pg " variants={slideUp}>
        404 Not Found
      </motion.div>
      <motion.div
        className="text-base font-light text-center text-gray "
        variants={slideUp}
      >
        The page you're looking for doesn't exist.
      </motion.div>
      <Link href="/">
        <motion.div
          className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-pg rounded-lg justify-center items-center gap-2.5 flex"
          variants={slideLeft}
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.95, translateY: -2 }}
        >
          <motion.div
            className="text-base font-light text-bg "
            variants={slideUp}
          >
            Return to home page
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
