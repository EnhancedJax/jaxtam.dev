"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../app/provider";
import LogoLoader from "./LogoLoader";

export default function FunnyBackground() {
  const { pageAnimate, isFunnyToggle } = useAppContext();
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
      {isFunnyToggle ? (
        <Image
          className="object-cover blur-sm"
          src="https://live.staticflickr.com/6135/5978562722_ce85d95d93_h.jpg"
          alt="Hong Kong"
          fill={true}
          style={{
            opacity: pageAnimate ? 0 : 0.3,
            transition: `opacity ${pageAnimate ? "0s" : "0.5s"} ease-in-out`,
          }}
        />
      ) : (
        delayedPageAnimate && (
          <div>
            <LogoLoader />
          </div>
        )
      )}
    </div>
  );
}
