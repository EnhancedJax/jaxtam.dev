"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Info, TriangleAlert } from "lucide-react";
import { useAppContext } from "../app/provider";
import { ALERT_TIMEOUT } from "../utils/constants";

export default function Alert() {
  const { alertStack } = useAppContext();

  return (
    <ul className="fixed bottom-0 z-50 pointer-events-none left-1/2">
      <AnimatePresence>
        {alertStack.map((alert) => (
          <motion.li
            key={alert.id}
            className="mb-4 border rounded-md shadow-md pointer-events-auto bg-fg border-border"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{
              opacity: 0,
              x: "100%",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-center gap-4 p-3">
              {alert.type && (
                <span className={alert.type === "error" ? "text-red-500" : ""}>
                  {alert.type === "success" ? (
                    <Check />
                  ) : alert.type === "info" ? (
                    <Info />
                  ) : alert.type === "warning" ? (
                    <TriangleAlert />
                  ) : null}
                </span>
              )}
              <div>
                <p>{alert.text}</p>
                <p className="text-sm text-gray">{alert.message}</p>
              </div>
            </div>
            <div
              className="h-px rounded-b-md bg-pg"
              style={{
                animation: `timerAnimation ${ALERT_TIMEOUT / 1000}s linear`,
              }}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
