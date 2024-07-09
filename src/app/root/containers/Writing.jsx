"use client";

import { motion } from "framer-motion";
import { Archive } from "lucide-react";
import Link from "next/link";

export default function Writing({ writing }) {
  return (
    <Link href={`/thoughts/${writing.slug}`} draggable={false}>
      <motion.div
        className="w-full mb-4 border-[1px] rounded-lg p-2 border-cborder hover:bg-cborder hover:border-cdarkgray bg-cfg"
        whileHover={{ scale: 1.02, translateY: -4 }}
        whileTap={{ scale: 0.98, translateY: -2 }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className="flex items-center gap-2 pt-1 pb-3 ml-1">
          <Archive size={20} className="text-cgray" />
          <p className="text-base font-light">{writing.title}</p>
        </div>
        <img
          src={writing.heroImage.url}
          className="object-cover w-full h-64 rounded-md"
        />
      </motion.div>
    </Link>
  );
}
