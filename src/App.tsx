import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import {
  NavigationProvider,
  useNavigationContext,
} from "./contexts/navigation.context";
import NavigationLoader from "./components/NavigationLoader";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import PageHeader from "./components/Header/PageHeader";
import ContactPage from "./components/ContactPage";
import PageTransition from "./components/PageTransition";
import PortfolioPage from "./components/PortfolioPage";


const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <NavigationWrapper>

          <NavigationLoader />
          <PageHeader />
          {/* <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> */}
          <AnimatedRoutes />

        </NavigationWrapper>
      </NavigationProvider>
    </Router>
  );
};

// This component listens to route changes and manages navigation state
const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const { setIsNavigating } = useNavigationContext();

  useEffect(() => {
    setIsNavigating(true);

    const timeoutId = setTimeout(() => {
      setIsNavigating(false); // Clear the navigation state after a brief delay
    }, 400); // Simulate a delay; adjust this based on your actual loading logic

    return () => {
      clearTimeout(timeoutId);
      setIsNavigating(false);
    };
  }, [location, setIsNavigating]);

  return <>{children}</>;
};

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition children={<LandingPage />} />
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition children={<ContactPage />} />
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition children={<PortfolioPage />} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;

