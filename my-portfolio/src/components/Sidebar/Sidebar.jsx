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
		<aside
			className={`fixed top-0 left-0 flex flex-col h-full shadow-2xl shadow-cyan-400/40 z-40 transition-all duration-300 ease-in-out overflow-hidden text-nowrap ${
				isToggled ? "w-56 sm:w-64 px-4 pb-4" : "w-24"
			}`}
		>
			{/* Toggle Button */}
			<button
				onClick={toggleSidebar}
				className={`text-white hover:text-cyan-400 hover:scale-105 ease-in-out p-4 m-4 ${
					isToggled ? "self-end px-0" : "self-center"
				}`}
			>
				{isToggled ? <CaretLeft size={28} /> : <List size={28} />}
			</button>

			{/* Sidebar Content */}
			<div
				className='flex flex-col flex-1 mb-8 justify-between'
			>
				<SidebarHeader />
				<nav className='space-y-2'>
					<SidebarLink
						to='/'
						icon={<Student size={28} weight='duotone' />}
						label='About Me'
						active={true}
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
		</aside>
	);
};

export default Sidebar;
