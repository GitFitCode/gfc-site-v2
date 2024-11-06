import { NotificationWrapper } from "../NotificationWrapper";

export default function GitFitCodeIntroSection() {
	return (
		<section id="gfc-intro-section" className="w-full my-5 flex flex-col items-center justify-center relative px-4 sm:px-8 md:px-8 lg:px-10 pt-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start lg:w-[75%] md:w-[80%]">
				{/* Left Section */}
				<div className="flex flex-col items-start justify-center gap-4 ">
					<h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-coolgray-90 leading-tight">
						AI-Enhanced Custom Enterprise Software Solutions.
					</h1>
					<p className="text-lg text-[#21272ac9] leading-relaxed max-w-md">
						Transforming ideas into digital reality with innovative software development.
					</p>
					<a 
            href="https://calendar.app.google/9RQZmAHjNjV51Jyz9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="all-[unset] box-border inline-flex h-14 items-center justify-center bg-[#00c2c6] text-white rounded-lg hover:bg-gfc-primary-100 hover:text-black sm:w-[90%] lg:w-[60%]"
          >
					<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 ">
						<div className="inline-flex items-center justify-center gap-2.5 px-4 flex-[0_0_auto] font-bold">
							Start Building
						</div>
					</button>
					</a>

				</div>
				
				{/* Right Section */}
				<div className="relative flex justify-center md:justify-end items-center">
					<div className="w-full sm:w-2/3 lg:w-2/3 h-[353px] relative flex items-center">
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
			</div>
		</section>
	)
}