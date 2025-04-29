import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SidebarLink = ({ to, icon, label }) => {
	const { isToggled } = useSidebar();

	return (
		<NavLink
			to={to}
			className='flex items-center text-sm sm:text-lg text-white hover:text-slate-900 hover:bg-cyan-400 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer'
		>
			<button className='my-0 sm:my-4 mx-4 py-4 px-4'>{icon}</button>

			{isToggled && <span>{label}</span>}
		</NavLink>
	);
};

export default SidebarLink;
