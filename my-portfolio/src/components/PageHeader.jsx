import { useLocation } from "react-router-dom";
import ROUTES from ".././constants/routes/routes";

const PageHeader = () => {
	const location = useLocation();
	const currentRoute = ROUTES.find((route) => route.path === location.pathname);
	return (
		<div className='fixed top-0 z-20 w-full h-16 flex justify-end items-center bg-gradient-to-b from-black to-transparent'>
			<span className='pl-8 pr-6 py-1 sm:text-base lg:text-lg text-white font-light italic bg-pink-600 custom-clip'>
				{currentRoute.heading}
			</span>
		</div>
	);
};

export default PageHeader;
