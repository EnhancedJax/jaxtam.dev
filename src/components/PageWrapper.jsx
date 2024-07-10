"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppContext } from "../app/provider";
import { fadeInStagger } from "../utils/animations";

export default function PageWrapper({ children, ...props }) {
  const { togglePageAnimate, pageAnimate, handlePageChange, isFunnyToggle } =
    useAppContext();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!pageAnimate) togglePageAnimate();
  }, []);

  useEffect(() => {
    if (isFunnyToggle) {
      setHide(false);
    }
  }, [pageAnimate]);

  return (
    <motion.div
      className="items-center justify-center mb-16 lg:mb-0 lg:ml-16"
      style={{ display: hide ? "none" : "flex" }}
      variants={fadeInStagger}
      initial="hidden"
      animate={pageAnimate ? "visible" : "hidden"}
      exit="hidden"
      onAnimationComplete={() => {
        handlePageChange();
        if (isFunnyToggle && !pageAnimate) {
          setHide(true);
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
