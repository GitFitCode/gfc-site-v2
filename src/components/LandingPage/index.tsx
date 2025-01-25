import { useNavigationContext } from "../../contexts/navigation.context";
import StatsSection from "./StatsSection";
import SolutionsSection from "./SolutionsSection";
import PhaseTimeline from "./PhasesTimeline";
import SuccessStoriesSection from "./SuccessStoriesSection";
import StartProject from "./StartProject";
import GitFitCodeIntroSection from "./GitFitCodeIntroSection";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Footer from "../Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LandingPage() {
  const { isDesktop } = useNavigationContext();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <motion.div className="flex flex-col items-center relative bg-neutral-50 z-[50] shadow-md">
        <AnimatedSection>
          <GitFitCodeIntroSection />
        </AnimatedSection>

        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection>
          <SolutionsSection />
        </AnimatedSection>

        <AnimatedSection>
          <PhaseTimeline />
        </AnimatedSection>

        {/* Uncomment when needed */}
        <AnimatedSection>
        <SuccessStoriesSection />
      </AnimatedSection>

        {/* <AnimatedSection>
          <StartProject />
        </AnimatedSection> */}
      </motion.div>

      <Footer />
    </div>
  );
}
