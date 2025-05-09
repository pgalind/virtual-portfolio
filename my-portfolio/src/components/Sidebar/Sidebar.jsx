import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarLink from "./SidebarLink";
import { useSidebar } from "../../context/SidebarContext";
import {
	Code,
	Certificate,
	Kanban,
	Student,
	Suitcase,
} from "@phosphor-icons/react";

const Sidebar = () => {
	const { isToggled } = useSidebar();
	return (
		<div
			className={`fixed top-16 flex flex-col z-40 pt-4 pb-8 h-[calc(100vh-4rem)] overflow-y-auto overflow-hidden text-nowrap shadow-2xl sm:shadow-cyan-400/30 bg-gray-950 transition ease-in-out ${
				isToggled
					? "translate-x-0 w-56 sm:w-64"
					: "-translate-x-full sm:translate-x-0 w-20"
			}`}
		>
			{/* Sidebar Content */}
			<SidebarHeader />
			<nav className='flex flex-col flex-1 justify-center gap-2 my-4'>
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
	);
};

export default Sidebar;
