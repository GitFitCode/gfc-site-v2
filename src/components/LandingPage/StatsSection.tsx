import React from "react";

export default function StatisticsSection() {
	return (
		<div className="flex flex-col my-[10rem] items-center gap-[60px] bg-defaultwhite">
			<div className="flex flex-col items-start gap-12 relative flex-[0_0_auto]">
				<div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
					<p className="relative self-stretch mt-[-1.00px] font-other-caption font-[number:var(--other-caption-font-weight)] text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)]">
						OUR INDUSTRY EXPERIENCE
					</p>

					<p className="relative self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
						We Develop Solutions for Every Need
					</p>
				</div>
			</div>

			<div className="flex w-[80%] justify-around flex-col md:flex-row gap-10 md:gap-0">
				<div className="flex flex-col items-center">
					<p className="font-black text-transparent text-[84.2px] tracking-[1.40px] leading-[normal]">
						<span className="text-[#00c2c6] tracking-[1.18px]">150</span>

						<span className="text-[#303030] tracking-[1.18px]">+</span>
					</p>
					<div className=" opacity-70 font-bold text-[#6a6a6a] text-[15.3px] tracking-[2.55px] leading-[26.6px] whitespace-nowrap">
						PROJECTS LAUNCHED
					</div>
				</div>

				<div className="flex flex-col items-center">
					<p className="  font-black text-transparent text-[84.2px] tracking-[1.40px] leading-[normal]">
						<span className="text-[#00c2c6] tracking-[1.18px] font-black">7</span>

						<span className="text-[#303030] tracking-[1.18px]">+</span>
					</p>

					<div className="opacity-70 font-bold text-[#6a6a6a] text-[15.3px] tracking-[2.55px] leading-[26.6px] whitespace-nowrap">
						INDUSTRIES SERVED
					</div>
				</div>

				<div className="flex flex-col items-center">
					<p className="font-black text-transparent text-[84.2px] tracking-[1.40px] leading-[normal]">
						<span className="text-[#00c2c6] tracking-[1.18px]">10</span>

						<span className="text-[#303030] tracking-[1.18px]">+</span>
					</p>

					<div className="opacity-70 font-bold text-[#6a6a6a] text-[15.3px] tracking-[2.55px] leading-[26.6px] whitespace-nowrap">
						YEARS OF EXPERIENCE
					</div>
				</div>

			</div>

			<div className="w-[70%]">
				<div className="">
					<p className="font-normal text-transparent text-[22px] text-center tracking-[0] leading-[28.2px]">
						<span className="text-black">
							At GFC we specialize in delivering custom software
							solutions that drive business success. Our team of experienced
							developers and designers is passionate about turning complex
							challenges into simple, user-friendly applications.
						</span>
					</p>
				</div>
			</div>

			<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 relative mb-[-8.25px] bg-[#00c2c6] text-white rounded-lg hover:bg-black">
				<div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
					<div className="w-fit mt-[-1.00px] font-button-l text-defaultwhite text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] whitespace-nowrap [font-style:var(--button-l-font-style)] font-bold ">
						Start Building
					</div>
				</div>
			</button>
		</div>
	)
}