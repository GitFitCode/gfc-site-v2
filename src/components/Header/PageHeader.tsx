import React, { useState, useCallback, useEffect } from "react";
import MainNav from "./MainNav";
import { useNavigationContext } from "../../contexts/navigation.context";
import classNames from "classnames"; // Install this with `npm install classnames`

export default function PageHeader() {
  const [showNav, setShowNavState] = useState(false);

  const { isDesktop } = useNavigationContext();

  // Memoized callback to set the showNav state
  const setShowNav = useCallback((show: boolean) => {
    setShowNavState(show);
  }, []);

  useEffect(() => {
    setShowNav(true); // Always set showNav to true on mount
  }, [isDesktop, setShowNav]);

  return (
    <header
      className={classNames("flex", {
        "flex-col justify-between items-center": isDesktop,
        "flex-row": !isDesktop,
      })}
    >
      {/* Conditionally render MainNav based on `showNav` */}
      {showNav && <MainNav showNav={showNav} isDesktop={isDesktop} />}
    </header>
  );
}
