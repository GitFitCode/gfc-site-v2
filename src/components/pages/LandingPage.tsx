import { useNavigationContext } from "../../contexts/navigation.context";
import StatsSection from "../LandingPage/StatsSection";
import SolutionsSection from "../LandingPage/SolutionsSection";
import PhaseTimeline from "../LandingPage/PhasesTimeline";
import SuccessStoriesSection from "../LandingPage/SuccessStoriesSection";
import Footer from "../Footer";
import StartProject from "../LandingPage/StartProject";
import GitFitCodeIntroSection from "../LandingPage/GitFitCodeIntroSection";

export default function LandingPage() {
  const { isDesktop } = useNavigationContext();
  return (
    <div
      className={`flex flex-col items-center relative bg-defaultwhite ${
        !isDesktop ? "" : ""
      }`}
    >
      <GitFitCodeIntroSection />
      <StatsSection />
      <SolutionsSection />
      <PhaseTimeline />
      <SuccessStoriesSection />
      <StartProject />
      <Footer />
    </div>
  );
}
