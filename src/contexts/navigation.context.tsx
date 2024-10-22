import React, { createContext, useState, useContext, useEffect } from "react";

const NavigationContext = createContext({
  isNavigating: false,
  setIsNavigating: (value: boolean) => {},
  isDesktop: false,
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const isDesktop = windowWidth >= 1024;

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
	}

  return (
    <NavigationContext.Provider value={values}>
      {children}
    </NavigationContext.Provider>
  );
};