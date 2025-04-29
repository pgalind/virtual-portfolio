import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSidebar } from "./context/SidebarContext";

import ROUTES from "./constants/routes/routes";

function App() {
	const { isToggled } = useSidebar();

	return (
		<div className='flex min-h-screen overflow-hidden justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950'>
			<div className='absolute ml-24 bg-cyan-400/20 size-72 rounded-full blur-3xl self-center justify-center z-10'></div>
			<Sidebar />
			<main
				className={`ml-24 pt-16 pb-0 px-24 z-20 overflow-y-scroll ${
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
