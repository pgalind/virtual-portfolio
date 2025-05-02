import React from "react";
import { useSidebar } from "../context/SidebarContext";

const SocialLink = ({ url, icon, label }) => {
	const { toggleSidebar } = useSidebar();
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='flex flex-col flex-1 space-y-2 items-center sm:text-lg text-cyan-400 p-2 hover:text-slate-900 hover:bg-cyan-400 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer'
			onClick={toggleSidebar}
		>
			{icon}
			<span>{label}</span>
		</a>
	);
};

export default SocialLink;
