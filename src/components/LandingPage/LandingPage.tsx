import { useNavigationContext } from "../../contexts/navigation.context";
import StatsSection from "./StatsSection";
import SolutionsSection from "./SolutionsSection";
import PhaseTimeline from "./PhasesTimeline";
import StartProject from "./StartProject";
import GitFitCodeIntroSection from "./GitFitCodeIntroSection";

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
      {/* <SuccessStoriesSection /> */}
      <StartProject />
    </div>
  );
}