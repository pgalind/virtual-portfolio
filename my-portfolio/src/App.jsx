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
		<div className='grid grid-cols-12 min-h-screen bg-slate-950'>
			<div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-600/20 via-20% to-pink-700/20'></div>
			<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 opacity-60 blur-3xl'></div>
			<div className='absolute bottom-1/2 right-1/3 w-96 h-96 bg-pink-600 opacity-60 rounded-full blur-3xl'></div>
			<aside className='grid col-span-1'>
				<Sidebar>
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
				</Sidebar>
			</aside>

			<main className='grid col-span-11'>
				<div className='mx-auto p-12 md:w-2/3 z-40 overflow-y-scroll'>
					<Routes>
						{ROUTES.map((route) => (
							<Route path={route.path} element={route.element} />
						))}
					</Routes>
				</div>
			</main>
		</div>
	);
}

export default App;
