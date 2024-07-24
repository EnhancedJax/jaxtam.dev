"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FLAIR_ITEMS } from "../../../utils/constants";

export default function Flair({ ...props }) {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
      {FLAIR_ITEMS.map((item, index, array) => (
        <FlairItem
          key={item.name}
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.name}/${item.name}-original.svg`}
          alt={item.name}
          index={index}
          total={array.length}
          inView={inView}
          pos={item.pos}
        />
      ))}
    </div>
  );
}

const FlairItem = ({ index, total, inView, pos, ...props }) => {
  const randomDuration = useMemo(() => 0.6 + Math.random() * 0.5, []);

  return (
    <motion.div
      drag
      className="absolute cursor-pointer drop-shadow-md"
      style={{
        top: `0`,
        left: `calc(50% - 26px)`,
        width: "52px",
        height: "52px",
      }}
      animate={
        inView
          ? {
              x: [0, pos.x],
              y: [0, pos.y],
              opacity: [0, 1],
              transition: {
                duration: randomDuration,
                ease: "easeOut",
              },
            }
          : {}
      }
      whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
    >
      <img
        className="pointer-events-none flair-item"
        {...props}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      />
    </motion.div>
  );
};
