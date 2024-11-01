import React, { useState } from "react";
import MainNav from "./main-nav";
// import Logo from "./logo";
import { useNavigationContext } from "../../contexts/navigation.context";
import Logo from "./logo";

export default function PageHeader() {
	const [showNav, setShowNav] = useState(false);
	const {isDesktop} = useNavigationContext();

	return (
		<header className={`flex ${isDesktop? 'flex-col justify-between items-center': 'flex-row'}`}>
			<Logo setShowNav={setShowNav} showNav={showNav}/>
			<MainNav showNav={showNav}/>
		</header>
	);
}