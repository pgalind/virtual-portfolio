import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import AnimatedString from "../AnimatedString";

function SidebarNametag() {
	const { isExpanded } = useSidebar();

	return (
		<>
			<h1 className='text-white text-lg sm:text-2xl'>Pablo Galindo</h1>
			<div className='text-cyan-300 text-sm md:text-lg'>
				<AnimatedString input={"Software Developer"} trigger={isExpanded} />
			</div>
		</>
	);
}

export default SidebarNametag;
