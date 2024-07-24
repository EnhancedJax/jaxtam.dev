"use client";

import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { ALERT_TIMEOUT, THEMES } from "../utils/constants";
const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  const [pageAnimate, setPageAnimate] = useState(false);
  const [href, setHRef] = useState(null);
  const [isFunnyToggle, setIsFunnyToggle] = useState(false);
  const [alertStack, setAlertStack] = useState([]);
  const [navbarRouteState, setNavbarRouteState] = useState(pathName);
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

  const isSameRoute = (thisHref, route = null) => {
    const currentRoute = route || pathName;
    const is =
      currentRoute === thisHref ||
      (currentRoute !== "/" &&
        currentRoute?.match(/^\/[A-Za-z]+/)?.[0] === thisHref);
    return is;
  };

  const handlePageChange = (immediateHref) => {
    const toHref = immediateHref || href;
    console.log("handlePageChange", toHref, isSameRoute(toHref));
    if (toHref !== null && !isSameRoute(toHref)) {
      router.push(toHref);
    }
  };
  const handleSetHRef = (href) => {
    setIsFunnyToggle(isSameRoute(href));
    setHRef(href);
  };
  const handleDirectPageChange = (href) => {
    setNavbarRouteState(href);
    handleSetHRef(href);
    handlePageChange(href);
  };

  const clearAlert = (id) => {
    setAlertStack((prev) => prev.filter((alert) => alert.id !== id));
  };

  const newAlert = (type, text, message) => {
    const newAlertId = Date.now();

    setAlertStack((prev) => [...prev, { id: newAlertId, type, text, message }]);

    setTimeout(() => {
      clearAlert(newAlertId);
    }, ALERT_TIMEOUT);
  };

  return (
    <AppContext.Provider
      value={{
        pageAnimate,
        isFunnyToggle,
        isSameRoute,
        togglePageAnimate,
        alertStack,
        newAlert,
        clearAlert,
        navbarRouteState,
        setNavbarRouteState,
        handleSetHRef,
        handlePageChange,
        handleToggleTheme,
        handleDirectPageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
