"use client";

import { SwatchBook } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import Tooltip from "./Tooltip";

const NavBar = () => {
  const { handleToggleTheme } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed bottom-4 left-4 z-20">
      <button
        type="button"
        className="relative block p-3 rounded-md cursor-pointer text-gray hover:text-pg"
        aria-label="Switch themes"
        onClick={handleToggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SwatchBook size="1.2rem" strokeWidth={1.5} />
        <Tooltip
          hoveredState={isHovered}
          text="Switch themes"
          direction="right"
        />
      </button>
    </header>
  );
};

export default NavBar;
