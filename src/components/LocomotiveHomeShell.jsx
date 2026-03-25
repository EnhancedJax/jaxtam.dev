"use client";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/locomotive-scroll.css";
import { useEffect, useRef } from "react";

/**
 * Initializes Locomotive Scroll (Lenis) only while the home route is mounted.
 * Subroutes use native document scrolling.
 */
export default function LocomotiveHomeShell({ children }) {
  const instanceRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    instanceRef.current = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.2,
      },
    });

    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return <>{children}</>;
}
