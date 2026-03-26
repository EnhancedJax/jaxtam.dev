"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "../i18n/I18nProvider";

/** Scroll distance after the slide-in completes that equals one full turn. */
const PX_PER_360 = 500;

function heroDocBottom(el) {
  if (!el) return 0;
  const r = el.getBoundingClientRect();
  return r.bottom + window.scrollY;
}

/**
 * Decorative “Hire me” pair: slide in from off-screen left/right as the user
 * scrolls from the top; fully in place once the hero has left the viewport
 * (`useScroll` target offsets: start aligned with top → end aligned with top).
 * After that, each side rotates from its center — 360° per PX_PER_360 scrolled.
 */
export default function HireMeScroll({ heroRef }) {
  const t = useT();
  const { scrollY, scrollYProgress: heroSlideProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const slideLeftX = useTransform(heroSlideProgress, [0, 1], ["-26ch", "0rem"]);
  const slideRightX = useTransform(heroSlideProgress, [0, 1], ["26ch", "0rem"]);

  const rotateLeft = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return 0;
    const end = heroDocBottom(el);
    if (y <= end) return 0;
    return ((y - end) / PX_PER_360) * 360;
  });

  const rotateRight = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return 0;
    const end = heroDocBottom(el);
    if (y <= end) return 0;
    return -((y - end) / PX_PER_360) * 360;
  });

  return (
    <div
      className="overflow-hidden fixed inset-0 z-10 pointer-events-none"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-[42%] -translate-y-1/2 pl-2 md:pl-4 origin-center"
        style={{ x: slideLeftX, rotate: rotateLeft }}
      >
        <span className="block text-3xl font-black md:text-5xl text-pg/[0.11] whitespace-nowrap select-none">
          {t("hireMeScroll")}
        </span>
      </motion.div>
      <motion.div
        className="absolute right-0 top-[42%] -translate-y-1/2 pr-2 md:pr-4 origin-center"
        style={{ x: slideRightX, rotate: rotateRight }}
      >
        <span className="block text-3xl font-black md:text-5xl text-pg/[0.11] whitespace-nowrap select-none">
          {t("hireMeScroll")}
        </span>
      </motion.div>
    </div>
  );
}
