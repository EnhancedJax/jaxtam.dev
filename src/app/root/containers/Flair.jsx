"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Flair({ ...props }) {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const [baseDistance, setBaseDistance] = useState(350);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 1024) {
        setBaseDistance(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative w-full" {...props}>
      {[
        "react",
        "javascript",
        "nodejs",
        "tailwindcss",
        "supabase",
        "nextjs",
        "figma",
        "storybook",
        "postman",
        "vscode",
      ].map((item, index, array) => (
        <FlairItem
          key={item}
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
          alt="React icon"
          index={index}
          total={array.length}
          inView={inView}
          baseDistance={baseDistance}
        />
      ))}
    </div>
  );
}

const FlairItem = ({ index, total, inView, baseDistance, ...props }) => {
  const randomRotation = useMemo(() => Math.random() * 360, []);
  const randomDuration = useMemo(() => 0.6 + Math.random() * 0.5, []);
  const angle = useMemo(() => {
    const start = 100;
    const end = 30;
    const halfTotal = Math.ceil(total / 2);
    const range1 = Array.from(
      { length: halfTotal },
      (_, i) => -start + (i * (start - end)) / halfTotal
    );
    const range2 = Array.from(
      { length: total - halfTotal },
      (_, i) => start + (total - i * (start - end)) / (total - halfTotal)
    );
    return [...range1, ...range2][index];
  }, [index, total]); // Evenly split into {total} parts where each item will take
  const randomDistance = useMemo(() => {
    const angleFactor = Math.abs(Math.abs(angle) - 90) / 90;
    return (
      baseDistance +
      angleFactor * (100 + Math.random() * 100) +
      Math.random() * 150
    );
  }, [angle, baseDistance]);
  const randomX = useMemo(
    () => randomDistance * -Math.sin((-angle * Math.PI) / 180),
    [angle, randomDistance]
  );
  const randomY = useMemo(
    () => -randomDistance * Math.cos((angle * Math.PI) / 180),
    [angle, randomDistance]
  );

  return (
    <motion.div
      drag
      className="absolute cursor-pointer drop-shadow-md"
      style={{
        rotate: `${randomRotation}deg`,
        top: `0`,
        left: `calc(50% - 26px)`,
        width: "52px",
        height: "52px",
      }}
      animate={
        inView
          ? {
              x: [0, randomX],
              y: [0, randomY],
              opacity: [0, 1],
              transition: {
                duration: randomDuration,
                ease: "easeOut",
                delay: index * 0.05,
              },
            }
          : {}
      }
      whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
    >
      <img className="pointer-events-none" {...props} />
    </motion.div>
  );
};
