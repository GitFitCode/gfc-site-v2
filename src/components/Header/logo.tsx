import React from "react";
import longLogo from '../../images/logo-long.png';
import shortLogo from '../../images/logo-short.png';
import { useNavigationContext } from "../../contexts/navigation.context";

export default function Logo() {
	const { isDesktop } = useNavigationContext();
	return (
		// <div className={`${!isDesktop? 'pl-16': ''}`}>
		<div className="">
			{isDesktop ?
				<img src={longLogo} alt="logo" className="h-14 w-auto" />
				:
				<img src={shortLogo} alt="logo" className="mx-3 my-2 h-10 w-auto" />
			}
		</div>
	);
}