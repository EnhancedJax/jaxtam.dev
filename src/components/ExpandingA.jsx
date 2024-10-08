"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ExpandingA({ expandClassName, children, ...props }) {
  const [isExpanding, setIsExpanding] = useState(false);
  const linkRef = useRef(null);
  const [linkRect, setLinkRect] = useState(null);

  const handleClick = (e) => {
    if (e.altKey) {
      // If Alt key is pressed, open in new tab without animation
      window.open(props.href, "_blank");
      return;
    }

    e.preventDefault();
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setLinkRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setIsExpanding(true);
  };

  const handleAnimationComplete = () => {
    window.location.href = props.href;
    // Reset animation after 3 seconds
    setTimeout(() => {
      setIsExpanding(false);
      setLinkRect(null);
    }, 1000);
  };

  return (
    <>
      <motion.a {...props} onClick={handleClick} ref={linkRef}>
        {children}
      </motion.a>
      <AnimatePresence>
        {isExpanding && linkRect && (
          <motion.div
            initial={{
              position: "fixed",
              top: linkRect.top,
              left: linkRect.left,
              width: linkRect.width,
              height: linkRect.height,
              opacity: 0,
              zIndex: 9999,
            }}
            animate={{
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              opacity: 1,
            }}
            className={expandClassName}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.1, ease: "linear" },
              default: { duration: 0.5, ease: "circInOut" },
            }}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>
    </>
  );
}
