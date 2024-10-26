import React, { useState, useEffect, useRef } from 'react';
import { IconChatQuote, IconCog, IconContact, IconFolderOpen, IconGroup, IconGroup2Line, IconHome, IconMicroblog, IconRightArrow } from '../icons';
import { useNavigationContext } from '../../contexts/navigation.context';

const items = [
	{ name: 'Home', icon: <IconHome />, route: '', content: 'Home' },
	{ name: 'About', icon: <IconGroup />, route: '', content: 'About Us' },
	{ name: 'Services', icon: <IconCog />, route: '', content: 'Services' },
	{ name: 'Portfolio', icon: <IconFolderOpen />, route: '', content: 'Portfolio' },
	{ name: 'Testimonials', icon: <IconChatQuote />, route: '', content: 'Testimonials' },
	{ name: 'Blog', icon: <IconMicroblog />, route: '', content: 'Blog' },
	{ name: 'Contact', icon: <IconContact />, route: '', content: 'Contact Us' },
]

const actionItems = [
	{ name: 'Get a Quote', icon: <IconRightArrow />, route: '', content: 'Get a Quote' },
	{ name: 'Community', icon: <IconGroup2Line />, route: '', content: 'Our Community' },
]

interface NavItem {
	name: string;
	icon: JSX.Element;
	route: string;
	content: string;
}

interface MainNavProps {
	items: NavItem[];
	selected: string;
	setSelected: (itemName: string) => void;
}

export default function MainNav({ showNav }: { showNav: boolean }) {
	const [selected, setSelected] = useState(items[0].name);
	const [isHovered, setIsHovered] = useState(false);
	const { isDesktop } = useNavigationContext();

	const handleSelect = (itemName: string) => {
		setSelected(itemName);
		console.log(`Current Component: ${itemName}`);
	};

	return (
		<>
			{showNav ? (
				<div
					className={`transition-all duration-300
        ${isDesktop
							? 'lg:flex lg:flex-row lg:space-x-4 lg:justify-end lg:items-center lg:p-4  lg:relative'
							: `pt-18 fixed top-14 left-0 h-full bg-white md:flex md:flex-col w-16 z-50 ${isHovered && 'shadow-2xl p-3'}`}
        	${isHovered && !isDesktop ? 'w-48 rounded-2xl' : ''}
				`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="flex lg:flex-row flex-col gap-1 ">
						{items.map((item, index) => (
							<button
								key={index}
								onClick={() => handleSelect(item.name)}
								className={`flex py-3 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 
							${selected === item.name  // selected-item styles
										? 'bg-[#00C3C7] text-white '
										: 'bg-white text-black hover:bg-gray-100'}
							${isHovered && !isDesktop ? // sidebar expanded styles
										'content-start pl-4' : 'justify-center'}	
							`}
							>
								{/* Icons */}
								{!isDesktop && React.cloneElement(item.icon, {
									fill: selected === item.name ? 'white' : 'black',
									className: 'h-6 w-6',
								})}

								{/* Conditionally render the label only if the sidebar is expanded and on desktop */}
								{(isHovered || isDesktop) && (
									<span className={` font-medium ${!isDesktop ? 'ml-3' : ''} ${selected === item.name ? 'text-white' : ''}`}>{item.content}</span>
								)}
							</button>
						))}
					</div>
				</div>
			) : (
				<></>
			)
			}
		</>
	);
}
