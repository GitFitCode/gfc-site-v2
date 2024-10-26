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


export default function LandingPage() {
	const { isDesktop } = useNavigationContext();
	return (

		<div className={`flex flex-col items-center relative bg-defaultwhite ${!isDesktop?'':''}`}>
		
			{/* <HeroSection /> */}
			<StatsSection />
			<SolutionsSection />
			{/* <div className="flex flex-col w-full h-[883px] items-center gap-[54px] p-20 relative bg-defaultwhite">
				<div className="flex flex-col w-[1280px] items-start gap-12 relative flex-[0_0_auto]">
					<div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
						<p className="relative self-stretch mt-[-1.00px] font-other-caption font-[number:var(--other-caption-font-weight)] text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)]">
							THE RIGHT FIT FOR ANY SOFTWARE SOLUTION
						</p>

						<p className="relative self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
							We Develop Solutions for Every Need
						</p>
					</div>
				</div>

				<div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
					<div className="flex flex-col items-center gap-4 px-4 py-0 relative flex-1 grow bg-[#f8f9fb] rounded-[13px]">
						<img
							className="relative w-[210px] h-[213px] object-cover"
							alt="Application design"
							src="https://c.animaapp.com/rDitUAdQ/img/application-design-and-development-preview-1@2x.png"
						/>

						<div className="relative w-fit  font-bold text-[#21272a] text-[22px] text-center tracking-[0] leading-[30.8px] whitespace-nowrap">
							Mobile Apps for Growth
						</div>

						<p className="relative self-stretch  font-normal text-[#21272acc] text-base text-center tracking-[0] leading-[22.4px]">
							We build intuitive, scalable mobile apps for iOS and Android that
							focus on user engagement and performance. Whether you&#39;re
							launching a consumer app or a B2B solution, our apps are designed
							to grow with your business.
						</p>
					</div>

					<div className="flex flex-col h-[393px] items-center gap-4 px-4 py-0 relative flex-1 grow bg-[#f8f9fb] rounded-[13px]">
						<img
							className="relative self-stretch w-full h-[206px] object-cover"
							alt="Web design and"
							src="https://c.animaapp.com/rDitUAdQ/img/web-design-and-development-preview-1@2x.png"
						/>

						<div className="relative w-fit ml-[-17.50px] mr-[-17.50px]  font-bold text-[#21272a] text-[22px] text-center tracking-[0] leading-[30.8px] whitespace-nowrap">
							High Performance Web Apps
						</div>

						<p className="relative self-stretch mb-[-29.00px]  font-normal text-[#21272acc] text-base text-center tracking-[0] leading-[22.4px]">
							Our web apps deliver seamless experiences across all devices. From
							e-commerce to SaaS platforms, we focus on speed, security, and
							scalability, ensuring your web app adapts as your business grows.
						</p>
					</div>

					<div className="flex flex-col h-[393px] items-center gap-4 px-4 py-0 relative flex-1 grow bg-[#f8f9fb] rounded-[13px]">
						<img
							className="relative self-stretch w-full h-[207px]"
							alt="Untitled design"
							src="https://c.animaapp.com/rDitUAdQ/img/untitled-design--1--1@2x.png"
						/>

						<div className="relative w-fit  font-bold text-[#21272a] text-[22px] text-center tracking-[0] leading-[30.8px] whitespace-nowrap">
							Interactive Dashboards
						</div>

						<p className="relative self-stretch mb-[-8.00px]  font-normal text-[#21272acc] text-base text-center tracking-[0] leading-[22.4px]">
							Make smarter decisions with custom dashboards that track and
							visualize your key metrics in real time. Our dashboards provide
							the insights you need to scale your business more efficiently.
						</p>
					</div>

					<div className="flex flex-col h-[393px] items-center gap-4 px-4 py-0 relative flex-1 grow bg-[#f8f9fb] rounded-[13px]">
						<img
							className="relative self-stretch w-full h-[220px] object-cover"
							alt="Custom software"
							src="https://c.animaapp.com/rDitUAdQ/img/custom-software-development-preview-1@2x.png"
						/>

						<div className="relative w-[308px] ml-[-16.00px] mr-[-16.00px]  font-bold text-[#21272a] text-[22px] text-center tracking-[0] leading-[30.8px]">
							Custom Tailored Solutions
						</div>

						<p className="relative self-stretch mb-[-21.00px]  font-normal text-[#21272acc] text-base text-center tracking-[0] leading-[22.4px]">
							We create custom software solutions for businesses with unique
							needs. Whether it&#39;s a CRM or a specialized platform, our
							solutions streamline operations and are built to scale with your
							company.
						</p>
					</div>
				</div>

				<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 relative bg-[#00c2c6] text-white rounded-lg">
					<div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] font-button-l font-[number:var(--button-l-font-weight)] text-defaultwhite text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] whitespace-nowrap [font-style:var(--button-l-font-style)]">
							Start Building
						</div>
					</div>
				</button>
			</div> */}

			{/* <div className="my-[10rem] relative items-center h-[1019px] bg-white w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-around ">
				<div className="w-full gap-12 top-20 flex flex-col items-start absolute left-20">
					<div className="flex-col items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
						<div className="relative self-stretch mt-[-1.00px] font-other-caption font-[number:var(--other-caption-font-weight)] text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)]">
							FROM CONCEPT TO CREATION
						</div>

						<div className="relative self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
							We Develop the Perfect Solution.
						</div>
					</div>
				</div>

				<img
					className="absolute w-[1124px] h-[795px] top-[183px] left-[158px] object-cover"
					alt="Capture"
					src="https://c.animaapp.com/rDitUAdQ/img/capture-1.png"
				/>
			</div> */}

			{/* <div className="w-full flex flex-col items-center relative h-[861px] bg-defaultwhite">
				<div className="w-full gap-12 top-[120px] flex flex-col items-start absolute left-20">
					<div className="flex-col items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
						<div className="relative self-stretch mt-[-1.00px] font-other-caption font-[number:var(--other-caption-font-weight)] text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)]">
							A HISTORY OF SUCCESS
						</div>

						<div className="relative self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
							Stories of Our Success
						</div>
					</div>
				</div>

				<div className="absolute w-[828px] h-[414px] top-[269px] left-[283px] bg-[url(https://c.animaapp.com/rDitUAdQ/img/your-paragraph-text-1.png)] bg-cover bg-[50%_50%]">
					<div className="absolute top-[85px] left-[638px]  font-bold text-[#21272a] text-[22px] text-center tracking-[0] leading-[30.8px] whitespace-nowrap">
						Foster Buddy
					</div>

					<p className="absolute w-[276px] top-40 left-[505px]  font-normal text-[#21272acc] text-base text-right tracking-[0] leading-[22.4px]">
						Our web apps deliver seamless experiences across all devices. From
						e-commerce to SaaS platforms, we focus on speed, security, and
						scalability, ensuring your web app adapts as your business grows.
					</p>
				</div>

				<img
					className="left-[1134px] absolute w-[21px] h-[37px] top-[458px]"
					alt="Arrow"
					src="https://c.animaapp.com/rDitUAdQ/img/arrow-1.svg"
				/>

				<img
					className="left-60 absolute w-[21px] h-[37px] top-[458px]"
					alt="Arrow"
					src="https://c.animaapp.com/rDitUAdQ/img/arrow-2.svg"
				/>
			</div> */}

			{/* <div className="relative h-[364px] [background:linear-gradient(180deg,rgb(0,195,199)_0%,rgb(8.37,155.99,159.02)_19.45%,rgb(13.32,132.92,135.38)_34.95%,rgb(20.02,101.72,103.4)_48.95%,rgb(26.2,72.92,73.88)_60.95%,rgb(34.46,34.46,34.46)_75.95%)]">
				<div className="w-[482px] h-[277px] gap-[35px] top-[41px] flex flex-col items-start absolute left-20">
					<p className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
						Ready to Start your Project?
					</p>

					<p className="relative w-[482px]  font-normal text-[#ffffffc9] text-lg tracking-[0] leading-[25.2px]">
						Let’s collaborate to bring your vision to life. Contact us today for
						a free consultation.
					</p>

					<button className="all-[unset] box-border relative w-[215px] h-14 bg-[#121212] rounded-lg">
						<div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative top-4 left-4">
							<div className="relative w-fit mt-[-1.00px] font-button-l font-[number:var(--button-l-font-weight)] text-defaultwhite text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] whitespace-nowrap [font-style:var(--button-l-font-style)]">
								Contact Us Now
							</div>
						</div>
					</button>
				</div>

				<div className="absolute w-[830px] h-[378px] top-[98px] left-[752px]">
					<div className="absolute w-[513px] h-[309px] top-0 left-0">
						<div className="relative h-[309px]">
							<div className="absolute w-[513px] h-[21px] top-72 left-0">
								<div className="absolute w-[34px] h-[3px] top-[18px] left-[452px] bg-[url(https://c.animaapp.com/rDitUAdQ/img/right-foot-base.svg)] bg-[100%_100%]">
									<img
										className="absolute w-[31px] h-px top-px left-px"
										alt="Rubber base"
										src="https://c.animaapp.com/rDitUAdQ/img/rubber-base.svg"
									/>
								</div>

								<div className="absolute w-[34px] h-[3px] top-[18px] left-7 bg-[url(https://c.animaapp.com/rDitUAdQ/img/left-foot-base.svg)] bg-[100%_100%]">
									<img
										className="absolute w-[31px] h-px top-px left-px"
										alt="Rubber base"
										src="https://c.animaapp.com/rDitUAdQ/img/rubber-base-1.svg"
									/>
								</div>

								<div className="absolute w-[513px] h-[18px] top-0 left-0 bg-[url(https://c.animaapp.com/rDitUAdQ/img/macbook-pro-bottom.png)] bg-[100%_100%]">
									<img
										className="absolute w-[89px] h-[7px] top-0 left-[212px]"
										alt="Trackpad"
										src="https://c.animaapp.com/rDitUAdQ/img/trackpad.svg"
									/>
								</div>
							</div>

							<div className="absolute w-[422px] h-72 top-0 left-[46px] bg-[url(https://c.animaapp.com/rDitUAdQ/img/screen-wrapper@2x.png)] bg-[100%_100%]">
								<div className="relative w-[414px] h-[264px] top-2 left-[7px] bg-[url(https://c.animaapp.com/rDitUAdQ/img/screen@2x.png)] bg-[100%_100%]">
									<div className="relative w-[49px] h-[7px] left-[180px] bg-[url(https://c.animaapp.com/rDitUAdQ/img/notch-background.svg)] bg-[100%_100%]">
										<div className="relative w-[3px] h-[3px] left-[23px] bg-[#131315] rounded-[1.74px] blur-[0.31px]">
											<div className="relative w-px h-px top-px left-px bg-[#1c4682] rounded-[0.35px] blur-[0.16px]" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute w-[621px] h-[337px] top-7 left-[202px] rotate-[2.44deg]">
						<div className="relative w-[650px] h-[390px] top-[-26px] -left-3.5">
							<img
								className="absolute w-[635px] h-[363px] top-[13px] left-[7px] rotate-[-2.44deg] object-cover"
								alt="Change color here"
								src="https://c.animaapp.com/rDitUAdQ/img/---change-color-here.png"
							/>

							<img
								className="absolute w-[635px] h-[363px] top-3.5 left-[7px] rotate-[-2.44deg]"
								alt="Screen"
								src="https://c.animaapp.com/rDitUAdQ/img/screen-1.png"
							/>

							<img
								className="absolute w-[635px] h-[363px] top-3.5 left-[7px] rotate-[-2.44deg] object-cover"
								alt="Display frame"
								src="https://c.animaapp.com/rDitUAdQ/img/display-frame.png"
							/>
						</div>
					</div>
				</div>
			</div> */}

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