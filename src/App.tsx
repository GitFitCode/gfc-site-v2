import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavigationProvider, useNavigationContext } from './contexts/navigation.context'
import NavigationLoader from "./components/pages/navigation-loader";
import LandingPage from "./components/pages/LandingPage";
import MainNav from "./components/Header/main-nav";
import './App.css';
import PageHeader from "./components/Header/page-header";


const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <NavigationWrapper>
          <NavigationLoader />
          <PageHeader />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </NavigationWrapper>
      </NavigationProvider>
    </Router>
  );
};

// This component listens to route changes and manages navigation state
const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { setIsNavigating } = useNavigationContext();

  useEffect(() => {
    setIsNavigating(true);

    const timeoutId = setTimeout(() => {
      setIsNavigating(false); // Clear the navigation state after a brief delay
    }, 500); // Simulate a delay; adjust this based on your actual loading logic

    return () => {
      clearTimeout(timeoutId);
      setIsNavigating(false);
    };
  }, [location, setIsNavigating]);

  return <>{children}</>;
};

export default App;