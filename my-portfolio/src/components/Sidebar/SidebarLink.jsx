import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SidebarLink = ({ to, icon, label }) => {
	const { toggleSidebar,isToggled } = useSidebar();

	return (
		<NavLink
			to={to}
			className='flex items-center sm:text-lg md:text-lg text-white font-light hover:font-normal hover:text-slate-900 hover:bg-cyan-400 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer'
			onClick={isToggled && toggleSidebar}
		>
			<button className='mx-8 py-5'>{icon}</button>

			{isToggled && <span>{label}</span>}
		</NavLink>
	);
};

export default SidebarLink;
