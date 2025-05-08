import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSidebar } from "./context/SidebarContext";

import ROUTES from "./constants/routes/routes";

function App() {
	const { isToggled } = useSidebar();

	return (
		<div className='relative flex min-h-screen overflow-hidden bg-gradient-to-r from-gray-950 via-black to-gray-950'>
			<aside className='flex w-20 z-40'>
				<Sidebar />
			</aside>
			<main
				className={`flex flex-col flex-1 z-20 ${
					isToggled && "blur-2xl pointer-events-none"
				}`}
			>
				{/* Top Blur Overlay */}
				<div className='pointer-events-none fixed top-0 left-0 w-full h-16 z-30 bg-gradient-to-b from-gray-950 to-transparent backdrop-blur-2xl' />

				<Routes>
					{ROUTES.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={
								<>
									<span className='fixed z-30 mt-7 pl-10 pr-8 py-1 w-fit text-sm sm:text-base md:text-lg text-white font-light italic self-end bg-pink-600 custom-clip'>
										{route.heading}
									</span>
									<div className='flex flex-col h-full px-8 pt-16 pb-8 sm:w-[90%] md:w-3/4 lg:w-3/5 items-center mx-auto'>
										{route.element}
									</div>
								</>
							}
						/>
					))}
				</Routes>
			</main>
		</div>
	);
}

export default App;
