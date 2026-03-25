"use client";

import { useEffect, useState } from "react";

const DEFAULT_CHAR_MS = 70;
const BLINK_MS = 520;

export default function TypingHeading({
  text,
  className = "",
  charDelayMs = DEFAULT_CHAR_MS,
  as: Tag = "h1",
}) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [blinkOn, setBlinkOn] = useState(true);

  useEffect(() => {
    if (!text || visibleLength >= text.length) return;
    const id = window.setTimeout(() => {
      setVisibleLength((n) => n + 1);
    }, charDelayMs);
    return () => window.clearTimeout(id);
  }, [visibleLength, text.length, charDelayMs, text]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBlinkOn((v) => !v);
    }, BLINK_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setVisibleLength(0);
  }, [text]);

  if (!text) {
    return <Tag className={className} />;
  }

  const complete = visibleLength >= text.length;
  const beforeLast = text.slice(0, -1);
  const lastChar = text.charAt(text.length - 1);
  const displayed = text.slice(0, visibleLength);

  return (
    <Tag className={className}>
      {complete ? (
        <>
          {beforeLast}
          <span
            className="inline-block min-w-[1ch]"
            style={{ opacity: blinkOn ? 1 : 0.3 }}
          >
            {lastChar}
          </span>
        </>
      ) : (
        <>
          {displayed}
          <span
            aria-hidden="true"
            className="inline-block w-[0.5ch] shrink-0 translate-y-[-0.05em] font-light"
            style={{ opacity: blinkOn ? 1 : 0 }}
          >
            |
          </span>
        </>
      )}
    </Tag>
  );
}
