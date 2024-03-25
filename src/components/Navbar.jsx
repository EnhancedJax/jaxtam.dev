"use client";

import { useState } from "react";
import LucideIcon from "./LucideIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Tooltip from "./Tooltip";

const NavBar = () => {
  return (
    <nav>
      <ul
        id="navbar"
        className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 gap-6 border-t border-cborder bg-cbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col"
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={href}
      className="relative p-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LucideIcon
        name={icon}
        size="1.5rem"
        color={isActive ? activeColor : inactiveColor}
      />
      <Tooltip hoveredState={isHovered} text={href} direction="left"/>
    </Link>
  );
};

export default NavBar;
