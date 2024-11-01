import { NotificationWrapper } from "../NotificationWrapper";

export default function GitFitCodeIntroSection() {
	return (
		<div id="gfc-intro-section" className="w-full my-10 flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div className="flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col w-full h-auto items-start justify-center gap-4">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-coolgray-90 leading-tight">
              Custom Enterprise Software Solutions.
            </h1>
            <p className="text-lg text-[#21272ac9] leading-relaxed max-w-md">
              Transforming ideas into digital reality with innovative software
              development.
            </p>
          </div>
        </div>
				{/* What we do */}	
        <div className="relative flex justify-center md:justify-end">
          <div className="w-full sm:w-3/4 lg:w-2/3 h-[353px] relative">
            <img
              className="absolute w-[222px] h-[299px] top-0 left-16"
              alt="Element"
              src="https://c.animaapp.com/2fHzREgW/img/7e1bbb97-69a6-4a54-8a5a-7c3749c09731-jpg--1-.png"
            />

            <img
              className="absolute w-8 h-8 top-10 left-16"
              alt="Thumbs up"
              src="https://c.animaapp.com/2fHzREgW/img/thumbs-up.png"
            />

            <img
              className="absolute w-[214px] h-[218px] top-[135px] left-0"
              alt="Linkedin profile"
              src="https://c.animaapp.com/2fHzREgW/img/linkedin-profile-picture-11-08-2022-1.png"
            />

            <NotificationWrapper className="!absolute !left-1 !top-[164px]" />
          </div>
        </div>
				{/* We will need to bring  */}
				{/* <div className="inline-flex items-center gap-10 flex-wrap">
					<div className=" h-8 flex items-center justify-center gap-2 relative">
						<img
							className="w-[30.4px] relative h-8"
							alt="Vector"
							src="https://c.animaapp.com/2fHzREgW/img/vector.svg"
						/>
						<div className="relative w-fit font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#00000066] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-4-font-style)]">
							SHELLS
						</div>
					</div>

					<div className=" h-8 flex items-center justify-center gap-2 relative">
						<img
							className="w-8 ml-[-5.50px] relative h-8"
							alt="Vector"
							src="https://c.animaapp.com/2fHzREgW/img/vector-1.svg"
						/>
						<div className="relative w-fit mr-[-5.50px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#00000066] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-4-font-style)]">
							Zoomerr
						</div>
					</div>

					<div className=" h-[29.2px] flex items-center justify-center gap-2 relative">
						<img
							className="relative w-[23.75px] h-[29.2px]"
							alt="Group"
							src="https://c.animaapp.com/2fHzREgW/img/group-47@2x.png"
						/>
						<div className="relative w-fit font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#00000066] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-4-font-style)]">
							kontrastr
						</div>
					</div>

					<div className=" h-8 flex items-center justify-center gap-2 relative">
						<img
							className="w-[21.03px] ml-[-3.51px] relative h-8"
							alt="Vector"
							src="https://c.animaapp.com/2fHzREgW/img/vector-2.svg"
						/>
						<p className="relative w-fit mr-[-3.51px] [font-family:'Roboto',Helvetica] font-normal text-[#00000066] text-lg tracking-[0] leading-[18px]">
							<span className="font-[number:var(--heading-6-font-weight)] leading-[var(--heading-6-line-height)] font-heading-6 [font-style:var(--heading-6-font-style)] tracking-[var(--heading-6-letter-spacing)] text-[length:var(--heading-6-font-size)]">
								WAVES
							</span>
							<span className="leading-[var(--body-l-line-height)] font-body-l [font-style:var(--body-l-font-style)] font-[number:var(--body-l-font-weight)] tracking-[var(--body-l-letter-spacing)] text-[length:var(--body-l-font-size)]">
								MARATHON
							</span>
						</p>
					</div>

				</div> */}
			</div>
		</div>
	)
}