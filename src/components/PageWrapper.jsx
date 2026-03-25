"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppContext } from "../app/provider";
import { staggerParent } from "../utils/animations";

export default function PageWrapper({ children, ...props }) {
  const { togglePageAnimate, pageAnimate, handlePageChange } = useAppContext();

  useEffect(() => {
    if (!pageAnimate) togglePageAnimate();
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center overflow-hidden"
      variants={staggerParent(0.08)}
      initial="hidden"
      animate={pageAnimate ? "visible" : "hidden"}
      exit="hidden"
      onAnimationComplete={() => {
        handlePageChange();
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
