import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import AnimatedString from "../AnimatedString";

function SidebarHeader() {
	const { isToggled } = useSidebar();

	return (
		<div
			className={`mx-8 flex flex-col ${
				!isToggled && "text-center"
			}`}
		>
			<h1
				className={`font-light text-md sm:text-xl ${
					isToggled ? "text-white" : "text-cyan-400"
				}`}
			>
				{isToggled ? "Pablo Galindo" : "PG"}
			</h1>
			<span
				className={`text-cyan-400 text-md sm:text-xl ${
					isToggled ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<AnimatedString input={"Software Developer"} trigger={isToggled} />
			</span>
		</div>
	);
}

export default SidebarHeader;
