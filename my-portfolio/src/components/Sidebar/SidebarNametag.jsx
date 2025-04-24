import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import AnimatedString from "../AnimatedString";

function SidebarNametag() {
	const { isExpanded } = useSidebar();

	return (
		<div>
			<h1 className='text-white md:text-2xl'>Pablo Galindo</h1>
			<div className='text-cyan-400 text-sm md:text-lg'>
				<AnimatedString input={"Software Developer"} trigger={isExpanded} />
			</div>
		</div>
	);
}

export default SidebarNametag;
