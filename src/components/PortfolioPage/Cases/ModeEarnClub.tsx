import case_hero from '../../../images/portfolio/mode_earn_club/hero.png'
import diagram_one from '../../../images/portfolio/mode_earn_club/diagram-one.png'
import figma_screens from '../../../images/portfolio/mode_earn_club/figma-screens.png'
import figma_screens_small from '../../../images/portfolio/mode_earn_club/figma-screens-small.png'
import screens_one from '../../../images/portfolio/mode_earn_club/screens-one.png'
import screens_two from '../../../images/portfolio/mode_earn_club/screens-two.png'
import screens_three from '../../../images/portfolio/mode_earn_club/screens-three.png'
import screens_four from '../../../images/portfolio/mode_earn_club/screens-four.png'
import screens_five from '../../../images/portfolio/mode_earn_club/screens-five.png'

export default function ModeEarnClub() {
	return (
		<div className="flex flex-col items-center justify-between px-4 lg:px-20 gap-0  md:py-16 ">
			{/* Header Sections */}
			<div className="flex-1 max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
				<h1 className="text-3xl md:text-7xl font-bold dark:text-white">
					Mode Earn Club
				</h1>
				<p className="text-xl md:text-2xl mt-2 text-[#757575] font-[300] leading-relaxed">Check out some of our latest product case studies.</p>
				{/* <p className="text-lg md:text-lg mt-8 dark:text-neutral-800">
							We have worked for startups, agencies, corporations, and government and have created products used by millions of people.
						</p> */}
			</div>
			{/* Body Section */}
			<div className="flex flex-col flex-1 max-w-7xl relative mx-auto px-4 w-full left-0 top-0 gap-8">
				<img src={case_hero} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-24 text-center justify-center items-center">
					<h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">Problem Definition & Exploration</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>

						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Why Invest in This?</h3>
							<p className="md:text-lg flex flex-col font-[300]">
								From a business standpoint, monthly recurring revenue (MRR) is viewed as
								a golden ticket for technology businesses. It offers predictable, stable
								relationships with customers. Paid subscriptions also allow the user a
								choice to invest in a greatly enhanced experience.
								<br />
								<br />
								Our hypothesis is that if we can offer our earning-focused community a
								paid experience which pays for itself and then some, that it would be a
								strong market fit. First, we needed to prove that this service was going to
								be valuable.
							</p>
						</div>

						<div className='flex flex-col gap-6'>
							<h3 className="text-2xl md:text-3xl ">Who This Is For – Market Fit & Competition</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								Earn Club is marketed as a paid enhancement for existing users. The
								subscription perks are meant to directly address existing user feedback,
								interests, and pain points gathered by us over an 18 month period.
								<br />
								<br />
								Our user research revealed 3 app enhancements which our users would be
								willing to pay for:
								<br />
								<br />
								<ul className='ml-10 list-disc list-inside'>
									<li>Over <b className='font-[600]'>n%</b> of users would subscribe to earn 50% more points</li>
									<li><b className='font-[600]'>n%</b><sup><b>2</b></sup> of users would subscribe to make their cash redemptions instant</li>
									<li><b className='font-[600]'>n%</b><sup><b>2</b></sup> users would pay for access to premium deals and access to a community focused on guided micro-entrepreneurship</li>
								</ul>
								<br />
								<br />
								We additionally enhanced the Earn Club offering with 2 requested fixes to user pain points:
								<br />
								<br />
								<ul className='ml-10 list-disc list-inside'>
									<li>A premium, 1:1 customer support relationship</li>
									<li>More opportunities to earn with more intensive actions a larger payout.</li>
								</ul>
							</div>
							<p className='text-[12px] font-normal'><em><sup>1 2 3</sup> Exact data is hidden for privacy reasons and impact can be shared upon request. Numbers from research were considered substantial enough to act on.</em></p>
						</div>

						<div className='flex flex-col gap-6'>
							<h3 className="text-2xl md:text-3xl ">How & Where The Feature Is Used</h3>
							<div className="md:text-lg font-[300]">
								<b className='font-[600]'>New Users:</b> Earn Club is offered at the start of the new user journey as a
								no-strings free trial to all users. Users can choose to subscribe and redeem
								their points instantly with a 50% bonus, or downgrade and redeem at the
								normal rate with a waiting period.
								<br />
								<br />
								<b className='font-[600]'>Existing Users:</b> We created a comprehensive trigger strategy for getting
								the Earn Club trial in front of existing users. We offer a free trial of Earn
								Club at moments of joy (such as earning X number of points) or moments
								of frustration (waiting X days for a cash redemption to process). Each trigger is tailored specifically to the user's situation.<em>Ex: Waiting on a
									redemption to process? Try Earn Club for free and enjoy instant
									redemptions</em>
							</div>
						</div>
					</div>
				</div>

				<img src={diagram_one} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Defining The User Journey</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								A successful user journey is defined as a new or existing user receiving the
								Earn Club trial, accepting it, and redeeming their bonus points +
								subscribing at or before the 7 day mark.
								<br />
								<br />
								The journey is divided into 4 major parts:
								<br />
								<br />
								<ul className='ml-10 list-disc list-inside'>
									<li>Onboarding</li>
									<li>During Trial</li>
									<li>Redeem + Subscribe</li>
									<li>Active Subscriber</li>
								</ul>
							</div>
							<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
								<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
									<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span>
									Snapshots of low-fidelity wireframes organized in the 4
									major steps of the user journey: (1) Onboarding, (2) During Trial, (3) Redeem
									+ Subscribe, and (4) Active Subscriber
								</div>
							</div>
						</div>
					</div>
				</div>

				<img src={figma_screens_small} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">High Fidelity Designs</h3>
							<p className="md:text-lg flex flex-col font-[300]">
								The design for Earn Club is characterized by the dark red/purple gradient
								used for backgrounds and headers to make clear the difference between
								subscribers and free users and is found as a sub-library of our design
								system.
							</p>
							<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
								<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
									<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span> A selection of primary screens which we designed for theEarn Club experience, from onboarding to trial to full subscription.
								</div>
							</div>
						</div>
					</div>
				</div>

				<img src={screens_one} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Design Focus: Onboarding</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								The Earn Club trial is offered as part of the onboarding experience for new
								users and fits between the new user tutorial and onboarding questions
								used to personalize the experience.
								<br />
								<br />
								Depending on if the user accepts the trial prior to the onboarding
								questions, the experience is tailored as such:
								<br />
								<br />
								<ul className='ml-10 list-disc list-inside'>
									<li><span className='font-[600]'>User accepts trial:</span> Onboarding screens are modified to positively reinforce the trial benefits a user will be getting (Such as earning more)</li>
									<li><span className='font-[600]'>User denies trial:</span> Onboarding screens focus on how much more the user could be earning with the risk-free trial (with a chance to opt-in)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<img src={screens_two} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Design Focus: During Trial</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								The in-trial experience is also based around positive reinforcement
								congratulate them and reinforce how much better that interaction was
								with Earn Club.
								<br />
								<br />
								For example: A user earns 185 points and sees a "points
								confirmation" modal, celebrating their earning. The user will also see a
								breakdown of how the points were earned, and that they got a 50% boost
								from Earn Club.
								<br />
								<br />
								<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
									<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
										<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span> Designs for the during-trial experience. Users can view plans, upgrade, and choose to end the trial at the loss of bonus points earned.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<img src={screens_three} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Design Focus: Redeem + Subscribe</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								Users can redeem their points for cash during or at the end of the 7 -day trial experience. When redeeming, the user also needs to subscribe in
								order to claim any bonus points they've earned as well as keep any
								premium perks.
								<br />
								<br />
								Subscribers also receive $30 in stock, making the 1st year subscription
								effectively "free" (or at least a 1:1 exchange).
								<br />
								<br />
								If a user chooses not to subscribe, they can still redeem but will lose out on
								any bonus points they've earned. To account for fraud, we also created a
								required facial verification process for free users.
								<br />
								<br />
								<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
									<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
										<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span>  Designs showing the 1st time redemption and subscriptionprocess for a trial user. A user who does not subscribe can still redeem, but must submit to a face verification flow to ensure they are not a duplicate user or bot.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<img src={screens_four} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-16 text-center justify-center items-center">
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<div className='flex flex-col gap-6 '>
							<h3 className="text-2xl md:text-3xl">Design Focus: Subscriber</h3>
							<div className="md:text-lg flex flex-col font-[300]">
								A subscribed user experience is functionally very similar to the trial
								experience in that they are positively reinforced anytime they take
								advantage of subscription benefits.
								<br />
								<br />
								Some additional subscriber design requirements include the ability to
								compare plans side-by-side to see what benefits the user will gain or lose
								by making a change.
								<br />
								<br />
								<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
									<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
										<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span> Screens for the "subscribed" experience. Users at this stage have successfully paid for and subscribed to Earn Club and can view benefits, change, or downgrade their plan.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<img src={screens_five} alt="full width" className="object-contain rounded-2xl" />

				<div className="my-10 md:my-24 text-center justify-center items-center">
					<h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">Conclusion & Successes</h2>
					<div className='flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24'>
						<ul className='list-disc mx-10 md:mx-30 md:text-lg flex flex-col font-[300] gap-2'>
							<li>Created a totally new stream of recurring revenue</li>
							<li>n.nn% (Major) increase in total topline business revenue</li>
							<li>Desinged and implemented feature from 0 – 1</li>
						</ul>
						<div className='flex flex-col gap-6 '>

							<p className="md:text-lg flex flex-col font-[300]">
								The full story on the success of Earn Club is still developing as it was
								released in Q3/Q4 of 2023.
								<br />
								<br />
								Overall, the process was a huge internal success. We built a totally new
								subscription service on top of an existing free product while also
								managing versioning and feature releases in 4 months.
								<br />
								<br />
								Earn Club is also a win for Mode Mobile - offering a completely new and
								stable form of MRR. This feature created a major positive and lasting
								financial impact for the business.
							</p>
							<div className="flex flex-col w-full px-4 py-2 rounded-md  bg-[#5657971a]">
								<div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
									<span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">Work sample below:  </span> The complete new user flow for Earn Club - A massive
									Figma file!
								</div>
							</div>
						</div>

					</div>
				</div>

				<img src={figma_screens} alt="full width" className="object-contain rounded-2xl" />
			</div>
		</div >
	)
}