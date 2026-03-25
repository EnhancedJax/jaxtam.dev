"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function docBottom(el) {
  if (!el) return 0;
  const r = el.getBoundingClientRect();
  return r.bottom + window.scrollY;
}

/** Scroll distance after the slide-in completes that equals one full turn. */
const PX_PER_360 = 200;

/**
 * Decorative “Hire me” pair: slide in from off-screen left/right once the hero
 * has left the viewport; after that, each side rotates from its center — 360°
 * per 200px scrolled (left clockwise, right counter-clockwise).
 */
export default function HireMeScroll({ heroRef }) {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return 0;
    const heroEnd = docBottom(el);
    const vh = window.innerHeight;
    const slideEnd = heroEnd + vh * 0.38;
    if (y <= heroEnd) return 0;
    if (y >= slideEnd) return 1;
    return (y - heroEnd) / (slideEnd - heroEnd);
  });

  const slideLeftX = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return "-60vw";
    const heroEnd = docBottom(el);
    const vh = window.innerHeight;
    const slideEnd = heroEnd + vh * 0.38;
    if (y <= heroEnd) return "-60vw";
    if (y >= slideEnd) return "0vw";
    const t = (y - heroEnd) / (slideEnd - heroEnd);
    return `${-60 * (1 - t)}vw`;
  });

  const slideRightX = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return "60vw";
    const heroEnd = docBottom(el);
    const vh = window.innerHeight;
    const slideEnd = heroEnd + vh * 0.38;
    if (y <= heroEnd) return "60vw";
    if (y >= slideEnd) return "0vw";
    const t = (y - heroEnd) / (slideEnd - heroEnd);
    return `${60 * (1 - t)}vw`;
  });

  const rotateLeft = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return 0;
    const heroEnd = docBottom(el);
    const vh = window.innerHeight;
    const slideEnd = heroEnd + vh * 0.38;
    if (y <= slideEnd) return 0;
    return ((y - slideEnd) / PX_PER_360) * 360;
  });

  const rotateRight = useTransform(scrollY, (y) => {
    const el = heroRef.current;
    if (!el) return 0;
    const heroEnd = docBottom(el);
    const vh = window.innerHeight;
    const slideEnd = heroEnd + vh * 0.38;
    if (y <= slideEnd) return 0;
    return -((y - slideEnd) / PX_PER_360) * 360;
  });

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-[42%] -translate-y-1/2 pl-2 md:pl-4 origin-center"
        style={{ x: slideLeftX, rotate: rotateLeft, opacity }}
      >
        <span className="block text-3xl font-light md:text-5xl text-pg/[0.11] whitespace-nowrap select-none">
          Hire me
        </span>
      </motion.div>
      <motion.div
        className="absolute right-0 top-[42%] -translate-y-1/2 pr-2 md:pr-4 origin-center"
        style={{ x: slideRightX, rotate: rotateRight, opacity }}
      >
        <span className="block text-3xl font-light md:text-5xl text-pg/[0.11] whitespace-nowrap select-none">
          Hire me
        </span>
      </motion.div>
    </div>
  );
}
