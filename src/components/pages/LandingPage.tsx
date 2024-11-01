import React from "react";
import { IconJamIconsOutlineLogosEnvelope1 } from "../../icons/IconJamIconsOutlineLogosEnvelope1";
import { IconJamIconsOutlineLogosFacebook } from "../../icons/IconJamIconsOutlineLogosFacebook";
import { IconJamIconsOutlineLogosInstagram1 } from "../../icons/IconJamIconsOutlineLogosInstagram1";
import { IconJamIconsOutlineLogosLinkedin1 } from "../../icons/IconJamIconsOutlineLogosLinkedin1";
import { IconJamIconsOutlineLogosTwitter1 } from "../../icons/IconJamIconsOutlineLogosTwitter1";
import { IconJamIconsOutlineLogosYoutube } from "../../icons/IconJamIconsOutlineLogosYoutube";
import { useNavigationContext } from "../../contexts/navigation.context";
import { EditWrapper } from "../EditWrapper";
import { NotificationWrapper } from "../NotificationWrapper";
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
