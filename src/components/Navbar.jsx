"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import LucideIcon from "./LucideIcon";
import Tooltip from "./Tooltip";

const NavBar = () => {
  return (
    <nav>
      <ul
        id="navbar"
        className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 gap-3 border-t border-cborder bg-cbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col"
      >
        <Button href="/" icon="CircleUser"></Button>
        <Button href="/notes" icon="NotebookText"></Button>
        <Button href="/thoughts" icon="PenLine"></Button>
        <Button href="/stack" icon="Layers"></Button>
      </ul>
    </nav>
  );
};

const Button = ({ href, icon }) => {
  const activeColor = "#EDEDED";
  const inactiveColor = "#707070";
  const location = usePathname();
  const isActive = location === href || location.startsWith(href + "/");
  const [isHovered, setIsHovered] = useState(false);
  const { isNotGoingSamePage, pageAnimate, togglePageAnimate, handleSetHRef } =
    useAppContext();

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
      onClick={() => {
        if (
          (isNotGoingSamePage(href) && pageAnimate) ||
          !isNotGoingSamePage(href)
        ) {
          // prevents double animation
          handleSetHRef(href);
          togglePageAnimate();
        }
      }}
    >
      <LucideIcon
        name={icon}
        size="1.5rem"
        color={isActive ? activeColor : inactiveColor}
      />
      <Tooltip hoveredState={isHovered} text={href} direction="left" />
    </li>
  );
};

export default NavBar;
