"use client";

import { motion } from "framer-motion";
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
  return (
    <div className="flex flex-col items-center self-stretch gap-4">
      <motion.div
        className="flex flex-col items-center self-stretch gap-4"
        variants={slideUp}
      >
        <div
          className={`${DM_MONO_FAMILY.className} text-sm h-7 text-cdarkgray`}
        >
          12 / 30 / 2005
        </div>
        <Image
          className="w-[72px] h-[72px] rounded-full"
          src="/images/headericon.jpg"
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
          <div className="text-xl font-light text-white ">Jax Tam</div>
          <div className="text-lg font-light text-cgray ">{TITLE_TEXT}</div>
        </motion.div>
        <motion.div
          className="flex items-center justify-start gap-4"
          variants={slideUp}
        >
          <div className="w-2 h-2 rounded-full bg-cgreen animate-ping"></div>
          <div className="absolute w-2 h-2 rounded-full bg-cgreen"></div>
          <div className="text-base font-light text-cgray">{STATUS_TEXT}</div>
        </motion.div>
      </div>
      <SocialIcons />
      <ActionButtons />
      <motion.div
        className={`${DM_MONO_FAMILY.className} text-sm text-center text-cdarkgray`}
        variants={slideUp}
      >
        NT, HK ⋅ 22.2849° N, 114.1376° W
      </motion.div>
    </div>
  );
}
