import React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import SocialLink from "../SocialLink";
import { useSidebar } from "../../context/SidebarContext";

const SidebarFooter = () => {
	const { isToggled } = useSidebar();
	return (
		<div
			className={`flex space-x-2 w-full font-light ${
				isToggled ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<SocialLink
				url='https://www.github.com/pgalind'
				icon={<GithubLogo size={28} />}
				label='Github'
			/>
			<SocialLink
				url='https://www.linkedin.com/in/pgalind'
				icon={<LinkedinLogo size={28} />}
				label='LinkedIn'
			/>
		</div>
	);
};

export default SidebarFooter;
