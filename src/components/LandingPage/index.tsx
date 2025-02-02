import { useNavigationContext } from "../../contexts/navigation.context";
import StatsSection, { Model } from "./StatsSection";
import SolutionsSection from "./SolutionsSection";
import PhaseTimeline from "./PhasesTimeline";
import SuccessStoriesSection from "./SuccessStoriesSection";
import StartProject from "./StartProject";
import GitFitCodeIntroSection from "./GitFitCodeIntroSection";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Footer from "../Footer";
import TimelineSection from "./TimelineSection";
import GoogleCalendarButton from "../GoogleCalendarButton";

export default function LandingPage() {
  const { isDesktop, isTablet } = useNavigationContext();

  // Optionally, you can uncomment and use Lenis for smooth scrolling:
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <div
        id="gfc-intro-section"
        className="flex flex-col items-center relative bg-white z-[50] shadow-md"
      >
        <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <GitFitCodeIntroSection />
        </AnimatedSection>

        <AnimatedSection className="w-full flex items-center justify-center mb-[6em] md:mb-[8em]">
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <SolutionsSection />
        </AnimatedSection>

        <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
          <TimelineSection />
        </AnimatedSection>

        {/*
          Uncomment the section below if you want to include Success Stories:
          <AnimatedSection className="w-full mb-[6em] md:mb-[8em]">
            <SuccessStoriesSection />
          </AnimatedSection>
        */}

        {/*
          Uncomment if you want to include the Start Project section:
          <AnimatedSection>
            <StartProject />
          </AnimatedSection>
        */}
      </div>

      <Footer />
    </>
  );
}
