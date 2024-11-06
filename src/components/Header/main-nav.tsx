import React, { useState, useEffect } from 'react';
import Logo from './logo';
import { HomeIcon, UserGroupIcon, CogIcon, FolderIcon, PhoneIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { IconChatQuote, IconCog, IconContact, IconFolderOpen, IconGroup, IconHome } from '../icons';
import { useNavigationContext } from '../../contexts/navigation.context';
import { useNavigate } from 'react-router-dom';

const items = [
	{ name: 'Home', icon: <HomeIcon className="h-6 w-6" />, route: '', sectionId: 'gfc-intro-section', content: 'Home' },
	{ name: 'About', icon: <UserGroupIcon className="h-6 w-6" />, route: '#about', sectionId: 'stats-section', content: 'About Us' },
	{ name: 'Services', icon: <CogIcon className="h-6 w-6" />, route: '#services', sectionId: 'solutions-section', content: 'Services' },
	// { name: 'Portfolio', icon: <FolderIcon className="h-6 w-6" />, route: '#work', sectionId: 'success-stories-section', content: 'Portfolio' },
	{ name: 'Testimonials', icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />, route: '#testimonials', sectionId: 'success-stories-section', content: 'Testimonials' },
	{ name: 'Contact', icon: <PhoneIcon className="h-6 w-6" />, route: '#start', sectionId: 'start-project-section', content: 'Contact Us' },
];
export default function MainNav({ showNav }: { showNav: boolean }) {
	const [selected, setSelected] = useState(items[0].name);
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
			const offset = 90;
			const sectionTop = section.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: sectionTop - offset,
				behavior: 'smooth',
			});
		}
	};

	return showNav ? (
		<div
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled ? 'bg-white bg-opacity-90 border-b-4 border-gfc-primary-100' : 'bg-white bg-opacity-100'
			} ${isDesktop ? 'lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:items-center lg:p-4' : 'flex flex-row items-center justify-between w-full p-2'}`}
		>
			{/* Logo on the left */}
			<div className="flex items-center">
				<Logo setShowNav={() => {}} showNav={showNav} />
			</div>

			{/* Navigation items (icons-only on mobile) */}
			<div className={`flex ${isDesktop ? 'flex-row space-x-4' : 'flex-row space-x-3 mt-2'}`}>
				{items.map((item, index) => (
					<button
						key={index}
						onClick={() => handleSelect(item.name, item.sectionId, item.route)}
						className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
							selected === item.name ? 'bg-gfc-accent text-white' : 'bg-white text-gray-700'
						} ${isDesktop ? 'hover:bg-gfc-primary-100 hover:text-gfc-accent' : 'hover:bg-gfc-primary-100'}`}
					>
						{/* Only show icons on mobile; icons with text on desktop */}
						{React.cloneElement(item.icon, {
							fill: selected === item.name ? 'white' : 'black',
							className: 'h-6 w-6',
						})}

						{isDesktop && (
							<span className={`ml-3 font-medium ${selected === item.name ? 'text-white' : 'text-gray-700'}`}>
								{item.content}
							</span>
						)}
					</button>
				))}
			</div>
		</div>
	) : null;
}