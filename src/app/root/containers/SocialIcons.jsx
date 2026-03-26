"use client";

import { ThreadsLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { motion } from "framer-motion";
import { useState } from "react";
import ExpandingA from "../../../components/ExpandingA";
import Tooltip from "../../../components/Tooltip";
import { slideUp } from "../../../utils/animations";

export default function SocialIcons() {
  return (
    <motion.div
      variants={slideUp}
      className="flex items-center self-stretch justify-center gap-6"
    >
      <Button text="Github" open="https://github.com/EnhancedJax">
        <GithubLogoIcon size={24} />
      </Button>
      <Button text="Threads" open="https://www.threads.net/@enhancedjax">
        <ThreadsLogoIcon size={24} />
      </Button>
      <Button
        text="LinkedIn"
        open="https://www.linkedin.com/in/jax-tam-9536832b9/"
      >
        <LinkedinLogoIcon size={24} />
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
