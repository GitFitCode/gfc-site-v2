import React from "react";
import MainNav from "./main-nav";
import Logo from "./logo";
import { useNavigationContext } from "../../contexts/navigation.context";

export default function PageHeader() {
	const {isDesktop} = useNavigationContext();
	return (
		<header className={`flex ${isDesktop? 'flex-row justify-between items-center': 'flex-col'}`}>
			<Logo/>
			<MainNav/>

		</header>
	);
}