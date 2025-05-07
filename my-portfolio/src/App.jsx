import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSidebar } from "./context/SidebarContext";

import ROUTES from "./constants/routes/routes";

function App() {
	const { isToggled } = useSidebar();

	return (
		<div className='relative flex min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950'>
			<aside className='flex w-24 z-40 overflow-y-scroll'>
				<Sidebar />
			</aside>
			<main
				className={`flex flex-col flex-1 z-20 pb-12 overflow-y-scroll ${
					isToggled && "blur-3xl pointer-events-none"
				}`}
			>
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
