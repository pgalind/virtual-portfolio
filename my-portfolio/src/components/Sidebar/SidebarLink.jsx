import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon, label }) => {
	return (
		<NavLink
			to={to}
			className='flex space-x-2 h-16 items-center text-sm sm:text-lg text-white p-2 hover:text-slate-900 hover:bg-cyan-300 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer'
		>
			{icon}
			<span>{label}</span>
		</NavLink>
	);
};

export default SidebarLink;
