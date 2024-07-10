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
          className="object-cover blur-md"
          src="https://www.discoverhongkong.com/content/dam/dhk/intl/explore/attractions/best-ways-to-marvel-at-iconic-victoria-harbour/best-ways-to-marvel-at-iconic-victoria-harbour-1920x1080.jpg"
          fill={true}
        />
      )}
    </motion.div>
  );
}
