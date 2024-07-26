"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "../app/provider";

export default function FunnyBackground() {
  const { pageAnimate, isFunnyToggle } = useAppContext();
  return (
    <motion.div
      className="absolute top-0 object-cover w-full h-full overflow-hidden -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: !pageAnimate ? 0.3 : 0 }}
      transition={{ delay: !pageAnimate ? 0.5 : 0 }}
    >
      {isFunnyToggle && (
        <Image
          className="object-cover blur-sm"
          src="https://live.staticflickr.com/6135/5978562722_ce85d95d93_h.jpg"
          alt="Hong Kong"
          fill={true}
        />
      )}
    </motion.div>
  );
}
