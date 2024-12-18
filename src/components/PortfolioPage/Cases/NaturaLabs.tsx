import case_hero from '../../../images/portfolio/natura_labs/hero.png'
import phones from '../../../images/portfolio/natura_labs/phones.png'
import inspiration from '../../../images/portfolio/natura_labs/inspiration.png'
import components from '../../../images/portfolio/natura_labs/components.png'
import icons from '../../../images/portfolio/natura_labs/icons.png'
import sections from '../../../images/portfolio/natura_labs/sections.png'
import screens from '../../../images/portfolio/natura_labs/screens.png'
import desktop_screens from '../../../images/portfolio/natura_labs/desktop-screens.png'

export default function NaturaLabs() {
	return (
		<div className="flex flex-col items-center justify-between px-4 lg:px-20 gap-0 md:py-16 ">
			{/* Header Sections */}
			<div className="flex-1 max-w-7xl relative mx-auto py-28 px-4 w-full left-0 top-0">
				<h1 className="text-3xl md:text-7xl font-bold dark:text-white">
					Natura Labs
				</h1>
				<p className="text-xl md:text-2xl mt-2 text-[#757575] font-[300] leading-relaxed">Check out some of our latest product case studies.</p>
			</div>
			{/* Body Section */}
			<div className="flex flex-col flex-1 max-w-7xl relative mx-auto px-4 w-full left-0 top-0 gap-8">
				<img src={case_hero} alt="full width" className="object-contain rounded-t-2xl" />
				<img src={phones} alt="full width" className="mt-[-40px] object-contain  rounded-b-2xl" />

				<div className="my-10 md:my-24 text-center justify-center items-center">

					<h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">Problem Definition & Exploration</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>

						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Who Is It For?</h3>
							<p className="md:text-xl flex flex-col font-[300]">
								The users of this site are likely to be affluent, organized, and have looked at
								many websites in any given day. The purpose of this site is to give them a
								moment of respite in a positive way. We want this website to be so cool
								that they would want to show it off to their friends.
								<br />
								<br />
								This site is intended for Natura's clients as well as its creators. It should
								reflect the approach to research taken by the founders: methodical,
								precise, and data-driven. The site should be built on a foundation of
								efficiency and solid UX practices, while its outer shell should feature
								minimal animation, design, and bold typography.
								<br />
								<br />
								The result will be a website that looks great and functions even better.
							</p>
						</div>

						<div className='flex flex-col gap-6'>
							<h3 className="text-2xl md:text-3xl ">When & Where Is It Used?</h3>
							<div className="md:text-xl flex flex-col font-[300]">
								Users of this site are likely using high-end devices, particularly on desktop.
								Therefore, this site will be primarily focused on desktop users and built
								using a responsive-desktop-first approach.
								<br />
								<br />
								Mobile users will have a simpler experience that prioritizes speed, with
								fewer animations, graphics, and text blocks. This is because anyone
								viewing the site on a mobile device is likely on the go and needs
								information quickly. If they are near a desktop, they can use it for a better
								experience.
							</div>
						</div>
					</div>

					<h2 className="text-3xl md:text-4xl mt-30 md:mt-36 mb-18 md:mb-24 font-semibold ">Building a Brand</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>

						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Influence and Inspiration</h3>
							<p className="md:text-xl flex flex-col font-[300]">
								Bauhaus typography lockups, my recent trip to Japan, and Helvetica (the
								coffee table-style publication) were all influences for Natura Labs'
								branding.
								<br />
								<br />
								Although these three areas of inspiration span over 100 years of design,
								they all demonstrate a fierce dedication to order, minimalism, and
								functionality. Below is a collection of influences assembled to inspire this
								project.
							</p>
						</div>

					</div>
				</div>

				<img src={inspiration} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Color and Type</h3>
							<div className="md:text-xl flex flex-col font-[300]">
								Color/shade styles were selected for their utility. As demonstrated in the
								"Color Usage Breakdown" chart below, the site would be primarily black
								and white, using green/blue/pink for graphics or points of positive or
								negative emphasis
								<br />
								<br />
								Similarly, the typeface and various applications needed to be practical.
								Helvetica Neue was Natura's original font choice, although we ended up
								switching to Inter, a similar Google Font, for ease of web implementation.
							</div>
						</div>
					</div>
				</div>

				<img src={components} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Graphics & Icons</h3>
							<p className="md:text-xl flex flex-col font-[300]">
								Natura means "nature of things" in Latin. I wanted to include naturally-
								occurring shapes within the brand to elude to this idea. Inversely, "Labs"
								offered a very sterile, scientific meaning to me.
								<br />
								<br />
								The marriage of these two opposing ideas can be seen below, where I've
								taken simple shapes found in nature and stripped them down to a
								molecular level.
							</p>
						</div>
					</div>
				</div>

				<img src={icons} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Sections & Components</h3>
							<div className="md:text-xl flex flex-col font-[300]">
								Our role for this website was to take the brand and site from ideation to first
								release, but also to set rules and educate the Natura team to take on future
								iterations of their own website. Below is an example of various type
								lockups, card alternates, and sections which could be used as a template
								to expand the site.
							</div>
						</div>
					</div>
				</div>

				<img src={sections} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-24 text-center justify-center items-center">
					<h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">A Finished Product: Final Designs</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Designing for Mobile</h3>
							<p className="md:text-xl flex flex-col font-[300]">
								The Natura founders were able to provide me with user data which
								supported designing for a mobile-first experience. Many clients may
								browse on their mobile devices, and it was important to have an equally
								engaging mobile presence.
								<br />
								<br />
								We did chose to omit some of the decorative animations on mobile to
								reduce load times.
							</p>
						</div>
					</div>
				</div>

				<img src={screens} alt="full width" className="object-contain rounded-2xl" />


				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Designing For Responsive Desktop</h3>
							<div className="md:text-xl flex flex-col font-[300]">
								The desktop experience allowed for more creative flexibility. Given the
								brand's liberal use of text, We opted for small animations within copy to
								highlight important.
								<br />
								<br />
								We also knew from previous user testing that the user base responded
								well to long-form scrolling landing pages, especially for new customers.
								This gave a lot of room to play with on-scroll animations.

							</div>
						</div>
					</div>
				</div>

				<img src={desktop_screens} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-24 text-center justify-center items-center">
					<h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">Conclusion & Successes</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<ul className='list-disc mx-10 md:mx-30 md:text-xl flex flex-col font-[300] gap-2'>
							<li>Brand developed, animations crafted, website built</li>
							<li>0 - 1 project in just 2 months</li>
						</ul>
						<div className='flex flex-col gap-6 '>

							<p className="md:text-xl flex flex-col font-[300]">
								The website and branding for Natura Labs was probably my favorite
								project of 2023. It offered every designer's dream: A strong budget paired
								with near-unlimited creative freedom.
								<br />
								<br />
								We worked closely with the founder on the research and branding
								process and it created a stronger sense of identity and understanding for
								them.
								<br />
								<br />
								The end result, the website, in turn offered a closer connection to their
								users and has helped them create a more focused and effective sales
								pipeline.
							</p>

						</div>
					</div>
				</div>

			</div>
		</div >
	)
}