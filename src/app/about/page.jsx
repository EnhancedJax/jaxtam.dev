"use client";

import { motion } from "framer-motion";
import RegularLayout from "@comp/RegularLayout";
import { fadeInStagger, fadeIn, slideLeft } from "@comp/variants";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <RegularLayout>
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        variants={fadeInStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
          <motion.div
            className="text-base font-light text-white "
            variants={fadeIn}
          >
            Work in progress...
          </motion.div>
          <motion.div
            className="text-base font-light text-center text-cgray "
            variants={fadeIn}
          >
            Stay tuned
          </motion.div>
          <Link href="/">
            <motion.div
              className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-white rounded-lg justify-center items-center gap-2.5 flex"
              variants={slideLeft}
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95, translateY: -2 }}
            >
              <motion.div
                className="text-base font-light text-cbg"
                variants={fadeIn}
              >
                Return to home page
              </motion.div>
              <Undo2 className="w-5 h-5 text-cdarkgray" />
            </motion.div>
          </Link>
      </motion.div>
    </RegularLayout>
  );
}
