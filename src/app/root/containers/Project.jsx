"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Project({ proj }) {
  return (
    <a href={proj.link} draggable={false}>
      <motion.div
        className="w-full mb-4 flex border-[1px] rounded-lg p-4 border-cborder hover:bg-cborder hover:border-cdarkgray bg-cfg"
        whileHover={{ scale: 1.02, translateY: -4 }}
        whileTap={{ scale: 0.98, translateY: -2 }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className="relative mr-8 rounded-md min-w-48 h-36 overflow-clip">
          <Image src={proj.image.url} fill={true} key={proj.image.url} />
        </div>
        <div className="relative flex flex-col justify-between">
          <div>
            <p className="text-base font-light">{proj.name}</p>
            <p className="text-base font-light text-cgray">
              {proj.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {proj.techs.map((tech, index) => (
              <div
                key={index}
                className="px-3 overflow-hidden text-sm bg-opacity-50 rounded-full bg-cgreen text-cgreen text-nowrap text-ellipsis max-w-[90%]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  );
}
