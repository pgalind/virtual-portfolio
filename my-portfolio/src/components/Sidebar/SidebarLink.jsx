import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SidebarLink = ({ to, icon, label }) => {
	const { toggleSidebar, isToggled } = useSidebar();

	return (
		<NavLink
			to={to}
			className={`flex sm:text-lg py-4 ${
				isToggled ? "justify-start px-8" : "justify-center"
			} text-white font-light hover:font-normal hover:text-slate-900 hover:bg-cyan-400 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer`}
			onClick={isToggled && toggleSidebar}
		>
			{icon}
			{isToggled && <span className='pl-4'>{label}</span>}
		</NavLink>
	);
};

export default SidebarLink;
