import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarLink from "./SidebarLink";

import {
	CaretLeft,
	Code,
	Certificate,
	Kanban,
	List,
	Student,
	Suitcase,
} from "@phosphor-icons/react";

const Sidebar = () => {
	const { isToggled, toggleSidebar } = useSidebar();

	return (
		<div
			className={`fixed left-0 top-0 flex flex-col h-full py-4 shadow-2xl shadow-cyan-400/30 transition-all duration-300 ease-in-out overflow-hidden text-nowrap bg-gray-950 ${
				isToggled ? "w-64" : "w-20"
			}`}
		>
			{/* Toggle Button */}
			<button
				onClick={toggleSidebar}
				className={`text-white p-4 hover:text-cyan-400 hover:scale-105 ease-in-out ${
					isToggled ? "self-end" : "self-center"
				}`}
			>
				{isToggled ? <CaretLeft size={28} /> : <List size={28} />}
			</button>

			{/* Sidebar Content */}
			<div className='flex flex-col flex-1 space-y-4 my-4 justify-between'>
				<SidebarHeader />
				<nav className='space-y-2'>
					<SidebarLink
						to='/'
						icon={<Student size={28} weight='duotone' />}
						label='About Me'
					/>
					<SidebarLink
						to='/experience'
						icon={<Suitcase size={28} weight='duotone' />}
						label='Experience'
					/>
					<SidebarLink
						to='/projects'
						icon={<Kanban size={28} weight='duotone' />}
						label='Projects'
					/>
					<SidebarLink
						to='/skills'
						icon={<Code size={28} weight='duotone' />}
						label='Skills'
					/>
					<SidebarLink
						to='/certifications'
						icon={<Certificate size={28} weight='duotone' />}
						label='Certifications'
					/>
				</nav>
				<SidebarFooter />
			</div>
		</div>
	);
};

export default Sidebar;
