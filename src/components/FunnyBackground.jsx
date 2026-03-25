"use client";

import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../app/provider";
import LogoLoader from "./LogoLoader";

export default function FunnyBackground() {
  const { pageAnimate } = useAppContext();
  const [delayedPageAnimate, setDelayedPageAnimate] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = timerRef.current;
    if (pageAnimate) {
      if (timer) clearTimeout(timer);
      setDelayedPageAnimate(false);
    } else {
      timerRef.current = setTimeout(() => {
        setDelayedPageAnimate(true);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [pageAnimate]);

  return (
    <div
      className={`absolute top-0 object-cover w-full h-full overflow-hidden -z-10 flex items-center justify-center`}
    >
      {delayedPageAnimate && (
        <div>
          <LogoLoader />
        </div>
      )}
    </div>
  );
}
