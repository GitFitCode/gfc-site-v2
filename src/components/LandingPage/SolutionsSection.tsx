
export default function SolutionsSection() {

	return (
		<section id="solutions-section" className="flex flex-col w-full items-center gap-[60px] my-[5rem] bg-defaultwhite">
			<div className="flex flex-col items-center gap-2 self-stretch w-full text-center">
				<p className="font-other-caption font-semibold text-[#00c2c6] text-lg">
					THE RIGHT FIT FOR ANY SOFTWARE SOLUTION
				</p>
				<p className="font-bold text-coolgray-90 text-4xl">
					Designing and Building Platforms
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full px-16">
				<div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
					<img
						className="h-[213px] object-cover"
						alt="Application design"
						src="https://c.animaapp.com/rDitUAdQ/img/application-design-and-development-preview-1@2x.png"
					/>
					<div className="font-bold text-[#21272a] text-xl text-center">
						Mobile Apps for Growth
					</div>
					<p className="text-[#21272acc] text-base text-center">
						We build intuitive, scalable mobile apps for iOS and Android that
						focus on user engagement and performance.
					</p>
				</div>

				<div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
					<img
						className=" h-[206px] object-cover"
						alt="Web design and"
						src="https://c.animaapp.com/rDitUAdQ/img/web-design-and-development-preview-1@2x.png"
					/>
					<div className="font-bold text-[#21272a] text-xl text-center">
						High Performance Web Apps
					</div>
					<p className="text-[#21272acc] text-base text-center">
						Our web apps deliver seamless experiences across all devices.
					</p>
				</div>

				<div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
					<img
						className=" h-[207px] object-cover"
						alt="Untitled design"
						src="https://c.animaapp.com/rDitUAdQ/img/untitled-design--1--1@2x.png"
					/>
					<div className="font-bold text-[#21272a] text-xl text-center">
						Interactive Dashboards
					</div>
					<p className="text-[#21272acc] text-base text-center">
						Make smarter decisions with custom dashboards that track your key metrics.
					</p>
				</div>

				<div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
					<img
						className="h-[220px] object-cover"
						alt="Custom software"
						src="https://c.animaapp.com/rDitUAdQ/img/custom-software-development-preview-1@2x.png"
					/>
					<div className="font-bold text-[#21272a] text-xl text-center">
						Custom Tailored Solutions
					</div>
					<p className="text-[#21272acc] text-base text-center">
						We create custom software solutions for unique business needs.
					</p>
				</div>
			</div>

			<a
				href="https://calendar.app.google/9RQZmAHjNjV51Jyz9"
				target="_blank"
				rel="noopener noreferrer"
				className="all-[unset] box-border inline-flex h-14 items-center justify-center bg-[#00c2c6] text-white rounded-lg hover:bg-gfc-primary-100 hover:text-black"
			>
				<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 ">
					<div className="inline-flex items-center justify-center gap-2.5 px-4 flex-[0_0_auto] font-bold">
						Start Building
					</div>
				</button>
			</a>
		</section>
	);
}