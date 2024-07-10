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
        togglePageAnimate,
        handleSetHRef,
        handlePageChange,
        isSameRoute,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
