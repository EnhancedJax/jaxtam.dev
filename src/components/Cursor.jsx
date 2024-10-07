"use client";
import gsap from "gsap";
import { icons } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const [cursorIcon, setCursorIcon] = useState(null);
  const [cursorColor, setCursorColor] = useState("pg");
  const [cursorIconColor, setCursorIconColor] = useState("white");
  const cursorWrapperRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastMousePositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastRotationRef = useRef(0);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursorWrapper = cursorWrapperRef.current;
    const cursorCircle = cursorCircleRef.current;
    if (isTouchDevice || !cursorWrapper || !cursorCircle) {
      console.log(isTouchDevice, cursorWrapper, cursorCircle);
      return;
    }

    const updateCursorPosition = () => {
      const { x, y } = mousePositionRef.current;
      const { x: lastX, y: lastY } = lastMousePositionRef.current;

      // Calculate velocity
      const dX = x - lastX;
      const dY = y - lastY;
      velocityRef.current = { x: dX, y: dY };

      // Update last position
      lastMousePositionRef.current = { x, y };

      // Calculate scale and rotation based on velocity
      const maxVelocity = 50; // Adjust this value to change sensitivity
      const velocityMagnitude = Math.sqrt(dX ** 2 + dY ** 2);
      const scaleX = 1 + Math.min(velocityMagnitude / maxVelocity, 1) * 1;
      const r = (Math.atan2(dY, dX) * 180) / Math.PI;

      // Calculate the difference between the new angle and the last rotation
      let dR = r - (lastRotationRef.current % 360);

      // Adjust the difference to ensure the shortest rotation path
      if (dR > 180) {
        dR -= 360;
      } else if (dR < -180) {
        dR += 360;
      }

      // Calculate the new continuous rotation
      const rotation = lastRotationRef.current + dR;

      // Update the last rotation reference
      lastRotationRef.current = rotation;

      gsap.to(cursorWrapper, {
        x: x - 10,
        y: y - 10,
        duration: 0.3,
        rotation: rotation,
        scaleX: scaleX,
        ease: "power2.out",
      });
    };

    const animationFrame = gsap.ticker.add(updateCursorPosition);

    window.addEventListener("mousemove", (e) => {
      const { target, clientX, clientY } = e;
      mousePositionRef.current = { x: clientX, y: clientY };

      // check if the mouse cursor is over some link or button
      const toExpand =
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[data-cursor-icon]");

      gsap.to(cursorCircle, {
        opacity: toExpand ? 0.5 : 0.7,
        transform: `scale(${toExpand ? 3.5 : 1})`,
        duration: 0.5,
        ease: "power2.out",
      });

      const targetCursorIcon = target?.closest("[data-cursor-icon]");
      const targetCursorIconColor = target?.closest("[data-cursor-icon-color]");
      const targetCursorColor = target?.closest("[data-cursor-color]");
      if (targetCursorIcon) {
        setCursorIcon(targetCursorIcon.dataset.cursorIcon);
      } else {
        setCursorIcon(null);
      }
      if (targetCursorColor) {
        setCursorColor(targetCursorColor.dataset.cursorColor);
      } else {
        setCursorColor("pg");
      }
      if (targetCursorIconColor) {
        setCursorIconColor(targetCursorIconColor.dataset.cursorIconColor);
      } else {
        setCursorIconColor("white");
      }
    });

    document.addEventListener("mouseleave", () => {
      gsap.to(cursorCircle, {
        duration: 0.7,
        opacity: 0,
      });
    });

    // Add mousedown and mouseup event listeners
    window.addEventListener("mousedown", () => {
      gsap.to(cursorWrapper, {
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    window.addEventListener("mouseup", () => {
      gsap.to(cursorWrapper, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      gsap.ticker.remove(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          zIndex: 10000,
          userSelect: "none",
          pointerEvents: "none",
        }}
        ref={cursorWrapperRef}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            opacity: 0,
            borderRadius: "100%",
          }}
          ref={cursorCircleRef}
          className={`bg-${cursorColor}`}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LucideIcon icon={cursorIcon} color={cursorIconColor} />
        </div>
      </div>
    </>
  );
}

function LucideIcon({ icon, color }) {
  const Icon = icons[icon];
  return <>{icon && <Icon className={`text-${color}`} size={28} />}</>;
}
