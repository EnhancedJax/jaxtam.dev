"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { slideUp } from "../../../utils/animations";
import {
  DM_MONO_FAMILY,
  STATUS_TEXT,
  TITLE_TEXT,
} from "../../../utils/constants";
import ActionButtons from "./ActionButtons";
import SocialIcons from "./SocialIcons";

export default function Head() {
  const { theme } = useTheme();

  return (
    <div className="relative flex flex-col items-center self-stretch gap-4">
      {theme === "tailwind" && (
        <div className="absolute flex justify-center flex-none w-screen overflow-hidden h-max -top-10 -z-10">
          <img
            src="/images/tailwindbg.png"
            alt="bg"
            className="w-[90rem] flex-none max-w-none"
          />
        </div>
      )}
      <motion.div
        className="flex flex-col items-center self-stretch gap-4"
        variants={slideUp}
      >
        <div
          className={`${DM_MONO_FAMILY.className} text-sm h-7  text-darkgray `}
        >
          12 / 30 / 2005
        </div>
        <Image
          className="w-[72px] h-[72px] rounded-full"
          src="/images/headericon.jpg"
          priority
          width="72"
          height="72"
          alt="Avatar"
        />
      </motion.div>
      <div className="flex flex-col items-center self-stretch justify-start gap-5">
        <motion.div
          className="flex flex-col items-center self-stretch justify-center gap-1"
          variants={slideUp}
        >
          <div className="text-xl font-light text-cpg ">Jax Tam</div>
          <div className="text-lg font-light text-gray ">{TITLE_TEXT}</div>
        </motion.div>
        <motion.div
          className="flex items-center justify-start gap-4"
          variants={slideUp}
        >
          <div className="w-2 h-2 rounded-full bg-green animate-ping"></div>
          <div className="absolute w-2 h-2 rounded-full bg-green "></div>
          <div className="text-base font-light text-gray ">{STATUS_TEXT}</div>
        </motion.div>
      </div>
      <SocialIcons />
      <ActionButtons />
      <motion.div
        className={`${DM_MONO_FAMILY.className} text-sm text-center  text-darkgray `}
        variants={slideUp}
      >
        NT, HK ⋅ 22.2849° N, 114.1376° W
      </motion.div>
    </div>
  );
}
