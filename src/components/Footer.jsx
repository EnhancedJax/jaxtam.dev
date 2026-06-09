"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WIND_STREAKS = 15;
const DUST_COUNT = 18;

const windStreaks = Array.from({ length: WIND_STREAKS }, (_, i) => ({
  id: i,
  top: 8 + (i / (WIND_STREAKS - 1)) * 84,
  width: 28 + (i % 4) * 14,
  delay: (i * 0.35) % 2.4,
  duration: 1.4 + (i % 3) * 0.45,
}));

const dustParticles = Array.from({ length: DUST_COUNT }, (_, i) => ({
  id: i,
  size: 4 + (i % 4),
  bottom: (i % 6) * 2,
  left: (i % 5) * 4,
  delay: (i * 0.09) % 1.4,
  duration: 0.7 + (i % 4) * 0.2,
  driftX: -40 - (i % 6) * 10,
  driftY: -10 - (i % 5) * 3,
}));

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const effectsOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full h-[150px] md:h-[250px] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 pointer-events-none footer-wind"
        style={{ opacity: effectsOpacity }}
      >
        {windStreaks.map((streak) => (
          <span
            key={streak.id}
            className="footer-wind-streak"
            style={{
              top: `${streak.top}%`,
              width: `${streak.width}%`,
              animationDelay: `${streak.delay}s`,
              animationDuration: `${streak.duration}s`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute top-0 h-[150px] md:h-[250px]"
        style={{ left, x, opacity }}
      >
        <motion.div
          className="absolute bottom-0 left-8 z-0 pointer-events-none footer-dust"
          style={{ opacity: effectsOpacity, width: 0 }}
        >
          {dustParticles.map((particle) => (
            <span
              key={particle.id}
              className="footer-dust-particle"
              style={{
                width: particle.size,
                height: particle.size,
                bottom: particle.bottom,
                left: -8 - particle.left,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                "--dust-drift-x": `${particle.driftX}px`,
                "--dust-drift-y": `${particle.driftY}px`,
              }}
            />
          ))}
        </motion.div>

        <img
          src="/bike.png"
          alt=""
          className="relative z-10 block h-[150px] md:h-[250px]"
          draggable={false}
        />
      </motion.div>
    </footer>
  );
}
