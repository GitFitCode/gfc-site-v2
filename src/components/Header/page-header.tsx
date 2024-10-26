import React, { useState } from "react";
import MainNav from "./main-nav";
import Logo from "./logo";
import { useNavigationContext } from "../../contexts/navigation.context";

export default function PageHeader() {
	const [showNav, setShowNav] = useState(false);
	const {isDesktop} = useNavigationContext();

	return (
		<header className={`flex ${isDesktop? 'flex-row justify-between items-center': 'flex-col'}`}>
			<Logo setShowNav={setShowNav} showNav={showNav}/>
			<MainNav showNav={showNav}/>

		</header>
	);
}