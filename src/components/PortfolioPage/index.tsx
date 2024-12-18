import { Link } from 'react-router';
import { WobbleCard } from '../ui/WobbleCard';
import samples from '../../images/portfolio/samples.png'
import { useEffect, useState } from 'react';

const portfolio = [
	{
		project: 'Mode Earn Club',
		description: 'Learn how we built a subscription service into and an existing product with 40m users.',
		image: require('../../images/portfolio/mode_earn_club.png'),
		link: 'https://www.modemobile.com/',
		path: '/portfolio/mode-earn-club',
	},
	{
		project: 'ConnectworX',
		description: 'Check out a zero-to-one digital networking tool that helped turn a business crisis into an opportunity.',
		image: require('../../images/portfolio/connectworx.png'),
		link: 'https://www.linkedin.com/company/connectworx/about/',
		path: '/portfolio/connectworx',
	},
	{
		project: 'Natura Labs',
		description: 'Follow our journey through a zero-to-one web project.',
		image: require('../../images/portfolio/natura_labs.png'),
		link: 'https://www.naturalabs.io/',
		path: '/portfolio/natura-labs',
	}
]

export default function PortfolioPage() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		// Cleanup listener on unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className={`flex flex-col items-center justify-between px-4 lg:px-20 gap-8 py-16 pt-16`}>
			<section className="w-full rounded-sm max-w-7xl bg-none md:bg-cover" style={{backgroundImage: width > 900 ? `url(${samples})`: 'none', backgroundPosition: 'top'}}>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex-1 max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
						<h1 className="text-2xl md:text-7xl font-bold dark:text-white">
							Our Portfolio of Excellence
						</h1>
						<p className="text-xl md:text-2xl mt-2 text-[#757575] font-[300] leading-relaxed">Check out some of my latest product design case studies.</p>
						<p className="text-lg md:text-xl mt-8 dark:text-neutral-800">
							We have worked for startups, agencies, corporations, and government and have created products used by millions of people.
						</p>
					</div>
					<div className='flex-1 flex'>
						
					</div>
				</div>
			</section>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
				{portfolio.map((portfolio, index) => (
					<Link to={portfolio.path} key={index}>
						<WobbleCard
							containerClassName="col-span-1 lg:col-span-1 h-full bg-gfc-secondary min-h-[300px] lg:min-h-[300px] max-w-[500px]"
							className=""
						>
							<img
								src={portfolio.image}
								width={'100%'}
								height={500}
								alt="linear"
								style={{ alignSelf: 'center' }}
								className="object-contain rounded-xl"
							/>
							<h2 className="mt-4 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								{portfolio.project}
							</h2>
							<p className="mt-4 text-left  text-base/6 text-neutral-200">
								{portfolio.description}
							</p>
						</WobbleCard>
					</Link>
				))}
			</div>
		</div>
	);
}