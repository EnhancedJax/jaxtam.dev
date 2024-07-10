"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [pageAnimate, setPageAnimate] = useState(false);
  const [href, setHRef] = useState(null);
  const [isFunnyToggle, setIsFunnyToggle] = useState(false);

  const togglePageAnimate = () => {
    setPageAnimate(!pageAnimate); // PageWrapper will then call handlePageChange after animation
  };

  const router = useRouter();
  const pathName = usePathname();

  const isNotGoingSamePage = (thisHref) => {
    const bool =
      thisHref !== null &&
      pathName !== thisHref &&
      ((!pathName.slice(1).startsWith(thisHref.slice(1)) && thisHref !== "/") ||
        thisHref === "/");
    return bool;
  };

  const handlePageChange = () => {
    if (isNotGoingSamePage(href)) {
      router.push(href);
    }
  };
  const handleSetHRef = (href) => {
    setIsFunnyToggle(!isNotGoingSamePage(href));
    setHRef(href);
  };

  return (
    <AppContext.Provider
      value={{
        pageAnimate,
        isFunnyToggle,
        togglePageAnimate,
        handleSetHRef,
        handlePageChange,
        isNotGoingSamePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
