import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import { Lock, LockOpen } from "@phosphor-icons/react";
import SidebarNametag from "./SidebarNametag";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ children }) => {
	const { isToggled, toggleSidebar, setIsHovered, isExpanded } = useSidebar();

	return (
		<>
			{/* Sidebar */}
			<div
				className={`flex flex-col py-8 px-4 h-full bg-slate-900 z-40 transition-all duration-300 ease-in-out overflow-hidden text-nowrap ${
					isExpanded && "absolute top-0 left-0 w-fit md:w-60 shadow-lg"
				}`}
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
			>
				{/* Toggle Button */}
				<button
					onClick={toggleSidebar}
					className={`text-slate-700 hover:text-cyan-300 hover:scale-105 ease-in-out ${
						isExpanded ? "self-end" : "self-center"
					}`}
				>
					{isToggled ? <Lock size={28} /> : <LockOpen size={28} />}
				</button>

				{/* Sidebar Content */}
				<div
					className={`flex flex-col flex-1 mt-4 ${
						isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					<SidebarNametag />
					<nav className='flex flex-col flex-1 justify-center'>{children}</nav> 
					<SidebarFooter />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
