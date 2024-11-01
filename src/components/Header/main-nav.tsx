import React, { useState, useEffect } from 'react';
import { IconChatQuote, IconCog, IconContact, IconFolderOpen, IconGroup, IconHome } from '../icons';
import { useNavigationContext } from '../../contexts/navigation.context';
import { useNavigate } from 'react-router-dom';

const items = [
	{ name: 'Home', icon: <IconHome />, route: '', sectionId: 'gfc-intro-section', content: 'Home' },
	{ name: 'About', icon: <IconGroup />, route: '#about', sectionId: 'stats-section', content: 'About Us' },
	{ name: 'Services', icon: <IconCog />, route: '#services', sectionId: 'solutions-section', content: 'Services' },
	{ name: 'Portfolio', icon: <IconFolderOpen />, route: '#work', sectionId: 'success-stories-section', content: 'Portfolio' },
	{ name: 'Testimonials', icon: <IconChatQuote />, route: '#testimonials', sectionId: 'success-stories-section', content: 'Testimonials' },
	{ name: 'Contact', icon: <IconContact />, route: '#start', sectionId: 'start-project-section', content: 'Contact Us' },
];

export default function MainNav({ showNav }: { showNav: boolean }) {
	const [selected, setSelected] = useState(items[0].name);
	const [isHovered, setIsHovered] = useState(false);
	const [scrolled, setScrolled] = useState(false); // Track scroll state for opacity change
	const { isDesktop } = useNavigationContext();
	const navigate = useNavigate();

	// Handle scroll event to set opacity
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // Adjust threshold as needed
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleSelect = (itemName: string, sectionId: string, route: string) => {
		setSelected(itemName);
		const section = document.getElementById(sectionId);
		if (itemName === 'Contact' || itemName === 'Home') {
			navigate(route);
		}
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return showNav ? (
		<div
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled ? 'bg-white bg-opacity-90 border-b-4 border-gfc-primary-100' : 'bg-white bg-opacity-100'
			} ${isDesktop ? 'lg:flex lg:flex-row lg:space-x-4 lg:justify-end lg:items-center lg:p-4' : 
				`pt-18 md:flex md:flex-col w-16 ${isHovered ? 'shadow-2xl p-3 w-48 rounded-2xl' : ''}`
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex lg:flex-row flex-col gap-1">
				{items.map((item, index) => (
					<button
						key={index}
						onClick={() => handleSelect(item.name, item.sectionId, item.route)}
						className={`flex py-3 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 ${
							selected === item.name ? 'bg-gfc-accent text-white' : 'bg-white text-gray-700 hover:bg-gfc-primary-100 hover:text-gfc-accent'
						} ${isHovered && !isDesktop ? 'content-start pl-4' : 'justify-center'}`}
					>
						{/* Icon */}
						{!isDesktop && React.cloneElement(item.icon, {
							fill: selected === item.name ? 'white' : 'black',
							className: 'h-6 w-6',
						})}

						{/* Conditionally render the label */}
						{(isHovered || isDesktop) && (
							<span className={`font-medium ${!isDesktop ? 'ml-3' : ''} ${selected === item.name ? 'text-white' : ''}`}>
								{item.content}
							</span>
						)}
					</button>
				))}
			</div>
		</div>
	) : null;
}