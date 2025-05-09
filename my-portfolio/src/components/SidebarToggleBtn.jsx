import { useSidebar } from "../context/SidebarContext";
import { CaretLeft, List } from "@phosphor-icons/react";

const SidebarToggleBtn = () => {
	const { isToggled, toggleSidebar } = useSidebar();
	return (
		<div
			className={`fixed top-0 h-16 z-40 flex items-center ${
				isToggled ? "w-56 sm:w-64 justify-end pr-4 bg-gray-950" : "w-20 justify-center"
			}`}
		>
			<button
				onClick={toggleSidebar}
				className=' text-white p-2 hover:text-cyan-400 hover:scale-105 transition-all ease-in-out'
			>
				{isToggled ? <CaretLeft size={28} /> : <List size={28} />}
			</button>
		</div>
	);
};

export default SidebarToggleBtn;
