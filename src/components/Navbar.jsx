"use client";

import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppContext } from "../app/provider";
import ROUTES from "../app/routes";
import Tooltip from "./Tooltip";

const NavBar = () => {
  const { isSameRoute, pageAnimate, togglePageAnimate, handleSetHRef } =
    useAppContext();
  const { theme, setTheme } = useTheme();
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

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="relative">
      <ul
        id="navbar"
        className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 gap-3 py-0 border-t border-clborder dark:border-cdborder bg-clbg dark:bg-cdbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4"
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
                className="box-border absolute top-0 w-px h-full bg-clpg dark:bg-cdpg -right-2"
                layoutId="line"
              />
            )}
          </IconButton>
        ))}
        <ul className="absolute lg:bottom-4 right-4 lg:right-auto">
          <IconButton
            tooltip="Toggle dark mode"
            icon={Sun}
            iconSize="1.2rem"
            handleClick={handleToggleTheme}
          />
        </ul>
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
        <IconComponent size={iconSize} />
      </div>
      {children}
      <Tooltip hoveredState={isHovered} text={tooltip} direction="left" />
    </li>
  );
};

export default NavBar;
