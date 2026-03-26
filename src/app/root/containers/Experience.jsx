"use client";

import { LinkSimpleIcon } from "@phosphor-icons/react/ssr";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useT } from "../../../i18n/I18nProvider";

export default function Experience({ key, exp }) {
  const t = useT();
  const expRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.scrollY === 0 && expRef.current) {
      const elementPosition = expRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 20; // 20px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      onClick={() => exp?.link && window.open(exp?.link)}
      key={key}
      onMouseEnter={handleMouseEnter}
      ref={expRef}
      className="w-full mb-4 flex border-[1px] rounded-lg p-6 border-border hover:bg-border hover:hover:border-darkgray hover: bg-fg cursor-pointer flex-col md:flex-row relative overflow-clip"
      whileHover={{ scale: 1.02, translateY: -4 }}
      whileTap={{ scale: 0.98, translateY: -2 }}
    >
      <div className="relative flex flex-col justify-between">
        <div>
          <p className=" font-light ">
            {exp.position}
            {t("experienceAt")}
            {exp.company}
            {exp?.link && (
              <LinkSimpleIcon
                className="inline-block ml-2 -mt-1 text-gray"
                weight="bold"
                size={12}
              />
            )}
          </p>
          <p className=" font-light text-gray ">{exp.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {exp.tags.map((tech, index) => (
            <div
              key={index}
              className="px-3 overflow-hidden text-sm bg-opacity-20 rounded-full  bg-teal-400  text-teal-400 text-nowrap text-ellipsis max-w-[90%]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
