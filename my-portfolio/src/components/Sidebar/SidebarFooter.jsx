import React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import SocialLink from "../SocialLink";
import { useSidebar } from "../../context/SidebarContext";

const SidebarFooter = () => {
	const { isToggled, toggleSidebar } = useSidebar();
	return (
		<div
			className={`flex space-x-2 w-full justify-center font-light hover:font-normal ${
				isToggled ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<SocialLink
				url='https://www.github.com/pgalind'
				icon={<GithubLogo size={28} />}
				label='Github'
				onClick={toggleSidebar}
			/>
			<SocialLink
				url='https://www.linkedin.com/in/pgalind'
				icon={<LinkedinLogo size={28} />}
				label='LinkedIn'
				onClick={toggleSidebar}
			/>
		</div>
	);
};

export default SidebarFooter;
