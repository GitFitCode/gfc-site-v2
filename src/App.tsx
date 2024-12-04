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
import NavigationLoader from "./components/pages/navigation-loader";
import LandingPage from "./components/pages/LandingPage";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import PageHeader from "./components/Header/page-header";
import ContactSection from "./components/ContactSection";
import PageTransition from "./components/pages/page-transition";


const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <NavigationWrapper>

          <NavigationLoader />
          <PageHeader />

          {/* <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactSection />} />
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
            <PageTransition children={<ContactSection />} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;

