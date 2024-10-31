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
import HeroSection from "../LandingPage/HeroSection";
import StatsSection from "../LandingPage/StatsSection";
import SolutionsSection from "../LandingPage/SolutionsSection";
import PhaseTimeline from "../LandingPage/PhasesTimeline";
import SuccessStoriesSection from "../LandingPage/SuccessStoriesSection"
import Footer from "../Footer";

export default function LandingPage() {
  const { isDesktop } = useNavigationContext();
  return (
    <div
      className={`flex flex-col items-center relative bg-defaultwhite ${
        !isDesktop ? "" : ""
      }`}
    >
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <PhaseTimeline />
      <SuccessStoriesSection />
			<Footer/>

    

      {/* <div className="flex items-center gap-3 px-20 py-4 absolute top-0 left-0 bg-defaultwhite">
				<div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
					<div className="flex w-[134px] h-11 items-start gap-1 relative">
						<div className="flex flex-col w-[134px] h-11 items-start justify-center relative">
							<img
								className="relative w-[145px] h-[69.5px] mt-[-12.75px] mb-[-12.75px] mr-[-11.00px] object-cover"
								alt="Gitfitcode LOGO"
								src="https://c.animaapp.com/rDitUAdQ/img/gitfitcode-logo-assets--llc-artboard-1-copy-13-2x-1-1@2x.png"
							/>
						</div>
					</div>
				</div>

				<div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Home
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							About Us
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Services
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Portfolio
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Testimonials
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Blog
						</div>
					</div>

					<div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-coolgray-90 text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
							Contact Us
						</div>
					</div>
				</div>

				<div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto] rounded-lg">
					<button className="all-[unset] box-border inline-flex h-12 items-center justify-center px-3 py-4 relative flex-[0_0_auto] bg-[#00c2c6] text-white rounded-lg">
						<div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
							<div className="relative w-fit mt-[-1.00px] font-button-m font-[number:var(--button-m-font-weight)] text-defaultwhite text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]">
								Get A Quote
							</div>
						</div>
					</button>
				</div>

				<div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto] rounded-lg">
					<button className="all-[unset] box-border inline-flex h-12 items-center justify-center px-3 py-4 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#00c2c6]">
						<div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
							<div className="relative w-fit mt-[-1.00px] font-button-m font-[number:var(--button-m-font-weight)] text-[#00c2c6] text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]">
								Our Community
							</div>
						</div>
					</button>
				</div>
			</div> */}
    </div>
  );
}
