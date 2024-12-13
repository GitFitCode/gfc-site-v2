import { useNavigate } from "react-router";

export default function SolutionsSection() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/contact');
	};
	
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

			<button onClick={handleButtonClick}  className="inline-flex items-center justify-center h-14 px-6 bg-[#00c2c6] text-white rounded-lg">
				<span className="font-semibold text-lg">Start Building</span>
			</button>
		</section>
	);
}