import React, { useEffect } from "react";
import longLogo from '../../images/logo-long.png';
import shortLogo from '../../images/logo-short.png';
import { useNavigationContext } from "../../contexts/navigation.context";

interface LogoProps {
	setShowNav: (show: boolean) => void;
	showNav: boolean;
}

export default function Logo({ setShowNav, showNav }: LogoProps) {
	const { isDesktop } = useNavigationContext();

	useEffect(() => {
		setShowNav(true); // Always set showNav to true on mount
	}, [isDesktop, setShowNav]);

	return (
		<div>
			{isDesktop ? (
				<img src={longLogo} alt="logo" className="h-14 w-auto" />
			) : (
				<div onClick={() => setShowNav(!showNav)}>
					<img src={shortLogo} alt="logo" className="mx-3 my-2 h-10 w-auto" />
				</div>
			)}
		</div>
	);
}