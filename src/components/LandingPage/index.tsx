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

<<<<<<< HEAD
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
=======
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)

  return (
    <div>
      <motion.div className="flex flex-col items-center relative bg-neutral-50 z-[50] shadow-md">
<<<<<<< HEAD
<<<<<<< HEAD
        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
          <GitFitCodeIntroSection />
        </AnimatedSection>

        <AnimatedSection className="w-full flex items-center justify-center mb-[6em] md:mb-[4em]">
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
          <SolutionsSection />
        </AnimatedSection>

        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
=======
        <AnimatedSection>
=======
        <AnimatedSection className="w-full">
>>>>>>> f786883 (chore: redesigned hero section)
          <GitFitCodeIntroSection />
        </AnimatedSection>

        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection>
          <SolutionsSection />
        </AnimatedSection>

        <AnimatedSection>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
          <PhaseTimeline />
        </AnimatedSection>

        {/* Uncomment when needed */}
<<<<<<< HEAD
        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
          <SuccessStoriesSection />
        </AnimatedSection>
=======
        <AnimatedSection>
        <SuccessStoriesSection />
      </AnimatedSection>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)

        {/* <AnimatedSection>
          <StartProject />
        </AnimatedSection> */}
      </motion.div>

      <Footer />
    </div>
  );
}
