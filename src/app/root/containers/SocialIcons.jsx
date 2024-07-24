"use client";

import { motion } from "framer-motion";
import { Figma, Github, Instagram } from "lucide-react";
import { useState } from "react";
import Threads from "../../../components/Icons/Threads";
import Tooltip from "../../../components/Tooltip";
import { slideUp } from "../../../utils/animations";

export default function SocialIcons() {
  return (
    <motion.div
      variants={slideUp}
      className="flex items-center self-stretch justify-center h-12 gap-6"
    >
      <Button text="Github" open="https://github.com/EnhancedJax">
        <Github />
      </Button>
      <Button text="Instagram" open="https://www.instagram.com/enhancedjax/">
        <Instagram />
      </Button>
      <Button text="Threads" open="https://www.threads.net/@enhancedjax">
        <Threads width={24} height={24} />
      </Button>
      <Button
        text="Figma design"
        open="https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1"
      >
        <Figma />
      </Button>
    </motion.div>
  );
}

const Button = ({ open, text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -2 }}
      className="relative cursor-pointer text-darkgray hover:text-pg"
      onClick={() => window.open(open)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Tooltip hoveredState={isHovered} text={text} direction="down" />
    </motion.div>
  );
};
