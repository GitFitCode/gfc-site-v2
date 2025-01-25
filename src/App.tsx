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
<<<<<<< HEAD
  const { isNavigating, isSiteLoading, setIsSiteLoading } =
    useNavigationContext();
  // const [isLoading, setIsLoading] = useState(true);
=======
  const { isNavigating } = useNavigationContext();
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
<<<<<<< HEAD
        setIsSiteLoading(false);
=======
        setIsLoading(false);
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <Router>
<<<<<<< HEAD
      <NavigationWrapper>
        <AnimatePresence mode="wait">
          {isSiteLoading && <Preloader />}
          {/* <Preloader /> */}
        </AnimatePresence>
        <PageHeader />
        <AnimatedRoutes />
      </NavigationWrapper>
=======
      <NavigationProvider>
        <NavigationWrapper>
          <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
          </AnimatePresence>
          <PageHeader />
          <AnimatedRoutes />
        </NavigationWrapper>
      </NavigationProvider>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
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
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          // element={<PageTransition children={<LandingPage />} />}
          element={<LandingPage />}
        />
        <Route
          path="/contact"
          // element={<PageTransition children={<ContactPage />} />}
          element={<ContactPage />}
        />
        <Route
          path="/portfolio"
          // element={<PageTransition children={<PortfolioPage />} />}
          element={<PortfolioPage />}
        />

        {/* Portfoilio Routes */}
        <Route
          path="/portfolio/mode-earn-club"
          // element={<PageTransition children={<ModeEarnClub />} />}
          element={<ModeEarnClub />}
        />
        <Route
          path="/portfolio/connectworx"
          // element={<PageTransition children={<ConnectworX />} />}
          element={<ConnectworX />}
        />
        <Route
          path="/portfolio/natura-labs"
          // element={<PageTransition children={<NaturaLabs />} />}
          element={<NaturaLabs />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
