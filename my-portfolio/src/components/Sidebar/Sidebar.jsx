import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import { Lock, LockOpen, List } from "@phosphor-icons/react";
import SidebarNametag from "./SidebarNametag";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ children }) => {
	const { isToggled, toggleSidebar, setIsHovered, isExpanded } = useSidebar();

	return (
		<>
			{/* Sidebar */}
			<div
				className={`flex flex-col py-12 px-4 h-full bg-slate-950/10 shadow-2xl shadow-white/60 z-40 transition-all duration-300 ease-in-out overflow-hidden text-nowrap ${
					isExpanded && "absolute top-0 left-0 w-fit sm:w-60"
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
					className={`text-white hover:text-cyan-400 hover:scale-105 ease-in-out ${
						isExpanded ? "self-end" : "self-center"
					}`}
				>
					{isToggled ? (
						<Lock size={28} />
					) : isExpanded ? (
						<LockOpen size={28} />
					) : (
						<List size={28} />
					)}
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
