import React, { useState, useCallback } from "react";
import MainNav from "./MainNav";
import Logo from "./logo";
import { useNavigationContext } from "../../contexts/navigation.context";
import classNames from "classnames"; // Install this with `npm install classnames`

export default function PageHeader() {
	const [showNav, setShowNavState] = useState(false);
	const { isDesktop } = useNavigationContext();

	// Memoized callback to set the showNav state
	const setShowNav = useCallback((show: boolean) => {
		setShowNavState(show);
	}, []);

	return (
		<header
			className={classNames("flex", {
				"flex-col justify-between items-center": isDesktop,
				"flex-row": !isDesktop,
			})}
		>
			{/* Pass `setShowNav` and `showNav` to the Logo component */}
			<Logo setShowNav={setShowNav} showNav={showNav} />
			
			{/* Conditionally render MainNav based on `showNav` */}
			{showNav && <MainNav showNav={showNav} isDesktop={isDesktop} />}
		</header>
	);
}