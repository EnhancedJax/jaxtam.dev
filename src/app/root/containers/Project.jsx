"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Project({ key, proj }) {
  return (
    <motion.div
      onClick={() => window.open(proj.link)}
      key={key}
      className="w-full mb-4 flex border-[1px] rounded-lg p-6 border-border hover:bg-bordero hover:border-darkgray bg-fgo backdrop-blur-md cursor-pointer flex-col md:flex-row relative overflow-clip"
      whileHover={{ scale: 1.02, translateY: -4 }}
      whileTap={{ scale: 0.98, translateY: -2 }}
    >
      <div className="absolute top-0 left-0 w-full h-full mr-6 rounded-md blur-sm opacity-10 overflow-clip md:relative md:min-w-48 md:w-auto md:h-36 md:blur-none md:opacity-100">
        <Image
          className="object-cover"
          src={proj.image.url}
          fill={true}
          key={proj.image.url}
          alt={proj.name}
        />
      </div>
      <div className="relative flex flex-col justify-between">
        <div>
          <p className="text-base font-light ">
            {proj.name}
            <Link
              className="inline-block ml-2 -mt-1 text-gray"
              strokeWidth={2}
              size={12}
            />
          </p>
          <p className="text-base font-light text-gray ">{proj.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {proj.techs.map((tech, index) => (
            <div
              key={index}
              className="px-3 overflow-hidden text-sm bg-opacity-30 rounded-full  bg-green  text-green text-nowrap text-ellipsis max-w-[90%]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
