"use client";

import { motion } from "framer-motion";
import { Archive } from "lucide-react";
import { useAppContext } from "../../provider";

export default function Writing({ writing }) {
  const { handleDirectPageChange } = useAppContext();

  const handleClick = (href) => {
    handleDirectPageChange(href);
  };

  return (
    <motion.button
      className="w-full mb-4 border-[1px] rounded-lg p-2  border-border hover:bg-border hover:hover:border-darkgray hover: bg-fg "
      whileHover={{ scale: 1.02, translateY: -4 }}
      whileTap={{ scale: 0.98, translateY: -2 }}
      onClick={() => handleClick(`/thoughts/${writing.slug}`)}
    >
      <div className="flex items-center gap-2 pt-1 pb-3 ml-1">
        <Archive size={20} strokeWidth={1.75} className=" text-gray" />
        <p className="text-base font-light">{writing.title}</p>
      </div>
      <img
        src={writing.heroImage.url}
        className="object-cover w-full h-64 rounded-md"
        alt={`Hero image of "${writing.title}"`}
      />
    </motion.button>
  );
}
