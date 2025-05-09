import React from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSidebar } from "./context/SidebarContext";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes/routes";
import SidebarToggleBtn from "./components/SidebarToggleBtn";

function App() {
	const { isToggled, toggleSidebar } = useSidebar();
	return (
		<div className='relative flex min-h-screen bg-gradient-to-r from-gray-950 via-black to-gray-950 overflow-hidden'>
			<PageHeader />
			<SidebarToggleBtn />

			<aside>
				<Sidebar />
			</aside>

			{/* Overlay */}
			{isToggled && (
				<div
					className='fixed inset-0 backdrop-blur-2xl z-30'
					onClick={toggleSidebar}
				/>
			)}

			<main className='flex-1 mx-8 sm:mx-0 sm:pl-20 py-16 overflow-auto'>
				<Routes>
					{ROUTES.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</main>
		</div>
	);
}

export default App;
