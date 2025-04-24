// 🧠 WHY USE CONTEXT HERE?
//
// Using React Context to manage the state of the sidebar enables other components
// in the app to access the real-time state of the sidebar and call its methods, like `isOpen`
// and `toggleSidebar`, without the need to pass them as props (aka "prop drilling")
//
// 🏗️ Before Context (Prop Drilling)
// If any deeply nested component has logic that depends on the state of `isOpen` or
// needs access to the `toggleSidebar` method, then these props would need to be passed
// through layers of components that don't need to have access or visibility of these props.
//
// ANALOGY: The App is a multi-story building. A component in the 5th floor needs access to
// a file that is kept in the basement, so the file needs to be brought up through
// floors 1-4 before it reaches the component, where it could be seen by other components.
//
// 📉 Downsides:
// ----------------------------------
// ❌ Tedious and repetitive
// ❌ Clutters components
// ❌ Hard to maintain as app grows
//
// Benefits of using Context for sidebar state:
// --------------------------------------------------
// ✅ Centralized state: One source of truth (`isOpen`) for the sidebar
// ✅ Cleaner components: No need to pass `isOpen` or `toggleSidebar` through many layers
// ✅ Reusable logic: Any component can call `useSidebar()` and access the current status or toggle it
// ✅ Separation of concerns: Sidebar logic is isolated from unrelated components

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
	const [isToggled, setIsToggled] = useState(false); // manual control
	const [isHovered, setIsHovered] = useState(false); // hover control

	const toggleSidebar = () => setIsToggled((prev) => !prev);
	const isExpanded = isToggled || isHovered;

	return (
		<SidebarContext.Provider
			value={{
				isToggled,
				setIsToggled,
				toggleSidebar,
				isHovered,
				setIsHovered,
				isExpanded,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
}

export const useSidebar = () => useContext(SidebarContext);
