"use client";

import { Star } from "lucide-react";
import { useContext } from "react";
import FAB from "../../../../components/FAB";
import { Context } from "../viewModel";

export default function ActionButton() {
  const { selectedNote } = useContext(Context);

  const handleClick = () => {
    window.open("https://notes.jaxtam.dev", "_blank");
  };

  return (
    <FAB tooltip="Check out the new website!" onClick={handleClick}>
      {/* <span className="mr text-[28px]">📲</span> */}
      <Star size="32" strokeWidth={2} />
    </FAB>
  );
}
