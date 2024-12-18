
export default function StatisticsSection() {

	return (
		<section id='stats-section' className="flex flex-col my-[10rem] items-center gap-[60px] bg-defaultwhite">
			<div className="flex flex-col items-start gap-12 relative flex-[0_0_auto]">
				<div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
					<p className="font-other-caption font-semibold text-[#00c2c6] text-lg">
						OUR INDUSTRY EXPERIENCE
					</p>

					<p className="relative self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
						We Develop Solutions for Every Need
					</p>
				</div>
			</div>

			<div className="flex w-[90%] md:w-[80%] justify-around flex-col md:flex-row gap-10 md:gap-0">
				<div className="flex flex-col items-center">
					<p className="font-black text-transparent text-[84.2px] tracking-[1.40px] leading-[normal]">
						<span className="text-[#00c2c6] tracking-[1.18px]">150</span>

						<span className="text-[#303030] tracking-[1.18px]">+</span>
					</p>
					<div className=" opacity-70 font-bold text-[#6a6a6a] text-[15.3px] tracking-[2.55px] leading-[26.6px] whitespace-nowrap">
						COMMUNITY PROFESSIONALS
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
						<span className="text-[#00c2c6] tracking-[1.18px]">15</span>

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

			<a
				href="https://calendar.app.google/9RQZmAHjNjV51Jyz9"
				target="_blank"
				rel="noopener noreferrer"
				className="all-[unset] box-border inline-flex h-14 items-center justify-center bg-[#00c2c6] text-white rounded-lg hover:bg-gfc-primary-100 hover:text-black "
			>
				<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 ">
					<div className="inline-flex items-center justify-center gap-2.5 px-4 flex-[0_0_auto] font-bold">
						Start Building
					</div>
				</button>
			</a>

		</section>
	)
}