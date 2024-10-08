"use client";

import { motion } from "framer-motion";
import { Figma, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import ExpandingA from "../../../components/ExpandingA";
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
      <Button text="Threads" open="https://www.threads.net/@enhancedjax">
        <Threads width={24} height={24} />
      </Button>
      <Button
        text="LinkedIn"
        open="https://www.linkedin.com/in/jax-tam-9536832b9/"
      >
        <Linkedin />
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
    <ExpandingA
      whileHover={{ scale: 1.05, translateY: -2 }}
      className="relative block cursor-pointer text-darkgray hover:text-pg"
      expandClassName="bg-pg"
      animateFromCircle={true}
      href={open}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Tooltip hoveredState={isHovered} text={text} direction="down" />
    </ExpandingA>
  );
};
