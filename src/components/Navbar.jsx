"use client";

import { motion } from "framer-motion";
import { SwatchBook } from "lucide-react";
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
    setNavbarRouteState,
    navbarRouteState,
  } = useAppContext();

  const handleClick = (href) => {
    if ((!isSameRoute(href) && pageAnimate) || isSameRoute(href)) {
      // prevents double animation
      setNavbarRouteState(href);
      handleSetHRef(href);
      togglePageAnimate();
    }
  };

  return (
    <header className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 py-0 border-t border-border bg-bg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4">
      <nav>
        <ul className="flex items-center justify-center w-full h-full gap-2 lg:flex-col ">
          {ROUTES.map((route, index) => (
            <IconButton
              isActive={isSameRoute(route.href)}
              tooltip={route.href}
              icon={route.icon}
              handleClick={() => handleClick(route.href)}
              key={route.href}
            >
              {isSameRoute(route.href, navbarRouteState) && (
                <motion.div
                  className="absolute top-0 w-full h-full lg:w-px bg-pg lg:-right-2 !opacity-10 lg:!opacity-100 right-0 rounded-lg"
                  layoutId="line"
                />
              )}
            </IconButton>
          ))}
        </ul>
      </nav>
      <ul className="absolute lg:bottom-4 right-4 lg:right-auto">
        <IconButton
          tooltip="Switch themes"
          icon={SwatchBook}
          iconSize="1.2rem"
          handleClick={handleToggleTheme}
        />
      </ul>
    </header>
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
  const [isHovered, setNavbarRouteState] = useState(false);
  const handleMouseEnter = () => {
    setNavbarRouteState(true);
  };

  const handleMouseLeave = () => {
    setNavbarRouteState(false);
  };

  return (
    <li>
      <button
        className={`relative p-3 cursor-pointer ${
          isActive ? "text-pg " : "text-gray "
        } rounded-md`}
        aria-label={tooltip}
        id={tooltip}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconComponent size={iconSize} strokeWidth={1.5} />
        {children}
        <Tooltip
          hoveredState={isHovered}
          text={tooltip}
          direction="left"
          isHiddenResponsive
        />
      </button>
    </li>
  );
};

export default NavBar;
