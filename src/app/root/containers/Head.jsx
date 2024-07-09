"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animations";
import {
  DM_MONO_FAMILY,
  STATUS_TEXT,
  TITLE_TEXT,
} from "../../../utils/constants";
import ActionButtons from "./ActionButtons";
import SocialIcons from "./SocialIcons";

export default function Head() {
  return (
    <motion.div className="flex flex-col items-center self-stretch justify-start gap-4">
      <div
        className={`${DM_MONO_FAMILY.className} text-sm h-7 text-cdarkgray`}
        variants={fadeIn}
      >
        12 / 30 / 2005
      </div>
      <img
        className="w-[72px] h-[72px] rounded-full"
        src="/images/headericon.jpg"
        variants={fadeIn}
      />
      <div className="flex flex-col items-center self-stretch justify-start gap-5">
        <div
          className="flex flex-col items-center self-stretch justify-center gap-2"
          variants={fadeIn}
        >
          <div className="text-xl font-light text-white " variants={fadeIn}>
            Jax Tam
          </div>
          <div className="text-lg font-light text-cgray " variants={fadeIn}>
            {TITLE_TEXT}
          </div>
        </div>
        <div
          className="flex items-center justify-start gap-4"
          variants={fadeIn}
        >
          <div className="w-2 h-2 rounded-full bg-cgreen animate-ping"></div>
          <div className="absolute w-2 h-2 rounded-full bg-cgreen"></div>
          <div className="text-base font-light text-cgray">{STATUS_TEXT}</div>
        </div>
      </div>
      <SocialIcons />
      <ActionButtons />
      <div className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex">
        <div
          className={`${DM_MONO_FAMILY.className} text-sm text-center text-cdarkgray`}
          variants={fadeIn}
        >
          NT, HK ⋅ 22.2849° N, 114.1376° W
        </div>
      </div>
    </motion.div>
  );
}
