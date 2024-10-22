import React from "react";
import { useNavigationContext } from "../../contexts/navigation.context";

export default function LandingPage() {
	const {isDesktop} = useNavigationContext();
	return (
		<div className={`${!isDesktop? 'pl-16':''}`}>
			<h1>Landing Page</h1>
			<p>Welcome to the landing page!</p>
		</div>
	);
}