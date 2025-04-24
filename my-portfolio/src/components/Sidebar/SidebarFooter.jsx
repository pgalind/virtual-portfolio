import React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import SocialLink from "../SocialLink";

const SidebarFooter = () => {
	return (
		<div className='flex space-x-4'>
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
