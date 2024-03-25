"use client";

import { Github, Instagram, FileDown, Figma } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideLeft, slideRight } from "@comp/variants";

const Socials = () => {
  return (
    <motion.div
      variants={fadeIn}
      className="flex items-center self-stretch justify-center h-12 gap-5"
    >
      <motion.div
        whileHover={{ scale: 1.05, translateY: -2, color: "#EDEDED" }}
        className="cursor-pointer text-cdarkgray"
      >
        <Github onClick={() => window.open("https://github.com/EnhancedJax")} />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, translateY: -2, color: "#EDEDED" }}
        className="cursor-pointer text-cdarkgray"
      >
        <Instagram
          onClick={() => window.open("https://www.instagram.com/enhancedjax/")}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, translateY: -2, color: "#EDEDED" }}
        className="cursor-pointer text-cdarkgray"
      >
        <FileDown onClick={() => window.open("/applications/Resume.pdf")} />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, translateY: -2, color: "#EDEDED" }}
        className="cursor-pointer text-cdarkgray"
      >
        <Figma
          onClick={() =>
            window.open(
              "https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1"
            )
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Socials;
