import React, { useEffect, useState } from "react";
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
import LandingPage from "./components/LandingPage";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import PageHeader from "./components/Header/PageHeader";
import ContactPage from "./components/ContactPage";
import PageTransition from "./components/PageTransition";
import PortfolioPage from "./components/PortfolioPage";
import ModeEarnClub from "./components/PortfolioPage/Cases/ModeEarnClub";
import ConnectworX from "./components/PortfolioPage/Cases/ConnectworX";
import NaturaLabs from "./components/PortfolioPage/Cases/NaturaLabs";
import Preloader from "./components/ui/Preloader";

const App = () => {
  // Use site loading state from the navigation context
  const { isNavigating, isSiteLoading, setIsSiteLoading } =
    useNavigationContext();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsSiteLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, [setIsSiteLoading]);

  return (
    <Router>
      <NavigationProvider>
        <NavigationWrapper>
          <AnimatePresence mode="wait">
            {isSiteLoading && <Preloader />}
          </AnimatePresence>
          <PageHeader />
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
    }, 400);

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
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<PageTransition children={<LandingPage />} />}
        />
        <Route
          path="/contact"
          element={<PageTransition children={<ContactPage />} />}
        />
        <Route
          path="/portfolio"
          element={<PageTransition children={<PortfolioPage />} />}
        />
        {/* Portfolio Routes */}
        <Route
          path="/portfolio/mode-earn-club"
          element={<PageTransition children={<ModeEarnClub />} />}
        />
        <Route
          path="/portfolio/connectworx"
          element={<PageTransition children={<ConnectworX />} />}
        />
        <Route
          path="/portfolio/natura-labs"
          element={<PageTransition children={<NaturaLabs />} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
