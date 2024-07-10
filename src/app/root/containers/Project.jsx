"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({ key, proj }) {
  const projectRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.scrollY === 0 && projectRef.current) {
      const elementPosition = projectRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 20; // 20px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      onClick={() => window.open(proj.link)}
      key={key}
      onMouseEnter={handleMouseEnter}
      ref={projectRef}
      className="w-full mb-4 flex border-[1px] rounded-lg p-6 border-border hover:bg-border hover:hover:border-darkgray hover: bg-fg cursor-pointer flex-col md:flex-row relative overflow-ip"
      whileHover={{ scale: 1.02, translateY: -4 }}
      whileTap={{ scale: 0.98, translateY: -2 }}
    >
      <div className="absolute top-0 left-0 w-full h-full mr-6 rounded-md blur-sm opacity-10 overflow-ip md:relative md:min-w-48 md:w-auto md:h-36 md:blur-none md:opacity-100">
        <Image
          // className="object-cover"

          src={proj.image.url}
          fill={true}
          key={proj.image.url}
          alt={proj.name}
        />
      </div>
      <div className="relative flex flex-col justify-between">
        <div>
          <p className="text-base font-light">{proj.name}</p>
          <p className="text-base font-light text-gray ">{proj.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {proj.techs.map((tech, index) => (
            <div
              key={index}
              className="px-3 overflow-hidden text-sm bg-opacity-50 rounded-full  bg-green  text-green text-nowrap text-ellipsis max-w-[90%]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
