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
import TimelineSection from "./TimelineSection";

export default function LandingPage() {
  const { isDesktop } = useNavigationContext();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d2e9fea (fix: page transitions)
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
<<<<<<< HEAD
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

=======
>>>>>>> f8cf7ef (chore: codebase cleanup comments and unused code)
  return (
<<<<<<< HEAD
    <div>
      <motion.div className="flex flex-col items-center relative bg-neutral-50 z-[50] shadow-md">
<<<<<<< HEAD
<<<<<<< HEAD
        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
=======
    <motion.div
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
=======

  return (
    <div>
>>>>>>> d2e9fea (fix: page transitions)
      <div className="flex flex-col items-center relative  bg-white z-[50] shadow-md">
        <AnimatedSection className="w-full">
>>>>>>> 8ce7ed9 (fix: HeroSection ui changes)
          <GitFitCodeIntroSection />
        </AnimatedSection>

        <AnimatedSection className="w-full flex items-center justify-center mb-[6em] md:mb-[8em]">
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <SolutionsSection />
        </AnimatedSection>

<<<<<<< HEAD
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
=======
        <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <TimelineSection />
>>>>>>> 8ce7ed9 (fix: HeroSection ui changes)
        </AnimatedSection>

        {/* <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <PhaseTimeline />
        </AnimatedSection> */}

        {/* Uncomment when needed */}
<<<<<<< HEAD
<<<<<<< HEAD
        <AnimatedSection className="w-full mb-[6em] md:mb-[4em]">
          <SuccessStoriesSection />
        </AnimatedSection>
=======
        <AnimatedSection>
        <SuccessStoriesSection />
      </AnimatedSection>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
        {/* <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <SuccessStoriesSection />
        </AnimatedSection> */}
>>>>>>> 8ce7ed9 (fix: HeroSection ui changes)

        {/* <AnimatedSection>
          <StartProject />
        </AnimatedSection> */}
      </div>

      <Footer />
    </div>
  );
}
