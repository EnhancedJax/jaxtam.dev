"use client";

import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { THEMES } from "../utils/constants";
const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [pageAnimate, setPageAnimate] = useState(false);
  const [href, setHRef] = useState(null);
  const [isFunnyToggle, setIsFunnyToggle] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    console.log(theme);
    const currentThemeIndex = THEMES.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextThemeIndex];
    console.log("Switching theme to", nextTheme);
    setTheme(nextTheme);
  };

  const togglePageAnimate = () => {
    setPageAnimate(!pageAnimate); // PageWrapper will then call handlePageChange after animation
  };

  const router = useRouter();
  const pathName = usePathname();

  const isSameRoute = (thisHref) => {
    const isGoingSamePage =
      pathName === thisHref ||
      (pathName !== "/" && pathName?.match(/^\/[A-Za-z]+/)?.[0] === thisHref);
    return isGoingSamePage;
  };

  const handlePageChange = () => {
    if (href !== null && !isSameRoute(href)) {
      router.push(href);
    }
  };
  const handleSetHRef = (href) => {
    setIsFunnyToggle(isSameRoute(href));
    setHRef(href);
  };

  return (
    <AppContext.Provider
      value={{
        pageAnimate,
        isFunnyToggle,
        isSameRoute,
        togglePageAnimate,
        handleSetHRef,
        handlePageChange,
        handleToggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
