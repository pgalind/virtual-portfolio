import React from "react";
import "./App.css";
import {
	Code,
	Certificate,
	Kanban,
	Student,
	Suitcase,
} from "@phosphor-icons/react";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarLink from "./components/Sidebar/SidebarLink";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./constants/routes/routes";

function App() {
	return (
		<div className='grid grid-cols-12 min-h-screen bg-slate-600'>
			<div className='grid col-span-1'>
				<Sidebar>
					<SidebarLink
						to='/'
						icon={<Student size={28} weight='duotone' />}
						label='About Me'
					/>
					<SidebarLink
						to='/skills'
						icon={<Code size={28} weight='duotone' />}
						label='Skills'
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
						to='/certifications'
						icon={<Certificate size={28} weight='duotone' />}
						label='Certifications'
					/>
				</Sidebar>
			</div>

			<main className='grid col-span-11 p-8'>
				<Routes>
					{ROUTES.map((route) => (
						<Route path={route.path} element={route.element} />
					))}
				</Routes>
			</main>
		</div>
	);
}

export default App;
