"use client";

import { CircleUser, Layers, NotebookText, PenLine, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import Tooltip from "./Tooltip";

const NavBar = () => {
  const { isSameRoute, pageAnimate, togglePageAnimate, handleSetHRef } =
    useAppContext();
  const { theme, setTheme } = useTheme();

  const handleClick = (href) => {
    if ((!isSameRoute(href) && pageAnimate) || isSameRoute(href)) {
      // prevents double animation
      handleSetHRef(href);
      togglePageAnimate();
    }
  };

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const RouteItem = ({ href, icon }) => {
    return (
      <IconButton
        isActive={isSameRoute(href)}
        tooltip={href}
        icon={icon}
        handleClick={() => handleClick(href)}
      />
    );
  };

  return (
    <nav className="relative">
      <ul
        id="navbar"
        className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 gap-3 py-0 border-t border-clborder dark:border-cdborder bg-clbg dark:bg-cdbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4"
      >
        <RouteItem href="/" icon={<CircleUser size="1.5rem" />} />
        <RouteItem href="/notes" icon={<NotebookText size="1.5rem" />} />
        <RouteItem href="/thoughts" icon={<PenLine size="1.5rem" />} />
        <RouteItem href="/stack" icon={<Layers size="1.5rem" />} />
        <ul className="absolute lg:bottom-4 right-4 lg:right-auto">
          <IconButton
            tooltip="Toggle dark mode"
            icon={<Sun size="1.2rem" />}
            handleClick={handleToggleTheme}
          />
        </ul>
      </ul>
    </nav>
  );
};

const IconButton = ({ isActive, tooltip, handleClick, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className="relative p-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={
          isActive ? "text-clpg dark:text-cdpg" : "text-cdgray dark:text-cdgray"
        }
      >
        {icon}
      </div>
      <Tooltip hoveredState={isHovered} text={tooltip} direction="left" />
    </li>
  );
};

export default NavBar;
