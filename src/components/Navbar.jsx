"use client";

import { motion } from "framer-motion";
import { SwatchBook } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import ROUTES from "../app/routes";
import Tooltip from "./Tooltip";

const NavBar = () => {
  const {
    isSameRoute,
    pageAnimate,
    togglePageAnimate,
    handleSetHRef,
    handleToggleTheme,
  } = useAppContext();
  const pathName = usePathname();
  const [localRoute, setLocalRoute] = useState(pathName);

  const handleClick = (href) => {
    if ((!isSameRoute(href) && pageAnimate) || isSameRoute(href)) {
      // prevents double animation
      setLocalRoute(href);
      handleSetHRef(href);
      togglePageAnimate();
    }
  };

  return (
    <nav className="relative">
      <ul
        id="navbar"
        className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 gap-2 py-0 border-t border-border bg-bg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4"
      >
        {ROUTES.map((route, index) => (
          <IconButton
            isActive={isSameRoute(route.href)}
            tooltip={route.href}
            icon={route.icon}
            handleClick={() => handleClick(route.href)}
            key={route.href}
          >
            {localRoute === route.href && (
              <motion.div
                className="absolute top-0 w-full h-full lg:w-px bg-pg lg:-right-2 !opacity-10 lg:!opacity-100 right-0 rounded-lg"
                layoutId="line"
              />
            )}
          </IconButton>
        ))}
        <span className="absolute lg:bottom-4 right-4 lg:right-auto">
          <IconButton
            tooltip="Switch themes"
            icon={SwatchBook}
            iconSize="1.2rem"
            handleClick={handleToggleTheme}
          />
        </span>
      </ul>
    </nav>
  );
};

const IconButton = ({
  isActive,
  tooltip,
  handleClick,
  icon: IconComponent,
  iconSize = "1.5rem",
  children,
}) => {
  const [isHovered, setLocalRoute] = useState(false);
  const handleMouseEnter = () => {
    setLocalRoute(true);
  };

  const handleMouseLeave = () => {
    setLocalRoute(false);
  };

  return (
    <li
      className="relative w-12 h-12 p-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className={isActive ? "text-pg " : "text-gray "} onClick={handleClick}>
        <IconComponent size={iconSize} strokeWidth={1.5} />
      </a>
      {children}
      <Tooltip
        hoveredState={isHovered}
        text={tooltip}
        direction="left"
        isHiddenResponsive
      />
    </li>
  );
};

export default NavBar;
