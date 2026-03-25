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
  const [alertStack, setAlertStack] = useState([]);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const currentThemeIndex = THEMES.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    setTheme(THEMES[nextThemeIndex]);
  };

  const togglePageAnimate = () => {
    setPageAnimate(!pageAnimate);
  };

  const isSameRoute = (thisHref, currentRoute = pathName) =>
    currentRoute === thisHref ||
    (currentRoute !== "/" &&
      currentRoute?.match(/^\/[A-Za-z]+/)?.[0] === thisHref);

  const handlePageChange = (immediateHref) => {
    const toHref = immediateHref;
    if (toHref != null && !isSameRoute(toHref)) {
      router.push(toHref);
    }
  };

  const clearAlert = (id) => {
    setAlertStack((prev) => prev.filter((alert) => alert.id !== id));
  };

  const newAlert = ({ type, text, message }) => {
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
        togglePageAnimate,
        alertStack,
        newAlert,
        clearAlert,
        handlePageChange,
        handleToggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
