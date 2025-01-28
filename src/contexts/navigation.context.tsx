import { nav_items } from "../components/Header/MainNav";
import React, { createContext, useState, useContext, useEffect } from "react";

const NavigationContext = createContext({
  isNavigating: false,
  setIsNavigating: (value: boolean) => {},
  isDesktop: false,
  isTablet: false,
  currentNavItem: nav_items[0].name,
  setCurrentNavItem: (value: string) => {}
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentNavItem, setCurrentNavItem] = useState(nav_items[0].name);
	const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768;

	// Listen to window resizing to adjust layout
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

	const values = {
		isNavigating,
		setIsNavigating,
		isDesktop,
    isTablet,
    currentNavItem, 
    setCurrentNavItem
	}

  return (
    <NavigationContext.Provider value={values}>
      {children}
    </NavigationContext.Provider>
  );
};